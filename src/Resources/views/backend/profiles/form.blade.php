<div class="row">
    <div class="col-md-6 form-group {{$errors->has('name') ? 'has-error' : ''}} ">
        <label for="name">Nome</label>
        <input type="text" class="form-control" value="{{old('name',$profile->exists() ? $profile->name : '')}}"
               name="name"
               id="name" placeholder="Name">
        @if($errors->has('name'))
            <span class="help-block">{{$errors->first('name')}}</span>
        @endif
    </div>


    <div class="col-md-6 form-group {{$errors->has('type_user') ? 'has-error' : ''}} ">
        <label for="title">Tipo de pefil</label>
        <select class="form-control " id="selectTypeUser" name="type">
            <option>Selecione</option>
            @foreach($oka6ProfileTypes as $key=>$type_user)
                <option {{isset($profile->exists) && $type_user==$profile->type ? 'selected="selected"' : '' }} value="{{$type_user}}">{{$type_user}}</option>
            @endforeach
        </select>
    </div>
    <div class="col-md-12 form-group">
        <div class="row justify-content-between">
            <div class="col-6">

                <span id="moveAll" class="btn btn-primary mb-2">
                    <i class="fas fa-angle-double-right"></i>
                    Mover todos
                </span>
                <span id="moveSelected" class="btn btn-primary mb-2">
                    <i class="fas fa-angle-right"></i>
                    Mover Selecionados
                </span>

                <div class="table-responsive">
                    <table id="resource_available" class="table table-striped table-bordered" role="grid">
                        <thead class="">
                        <tr>
                            <th>Nome</th>
                            <th>Menu</th>
                            <th>Icon</th>
                            <th>Route</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>

            <div class="col-6">
                <div class="text-right">
                    <span id="removeSelected" class="btn btn-primary mb-2">
                        <i class="fas fa-angle-left"></i>
                        Retirar Selecionados
                    </span>
                    <span id="removeAll" class="btn btn-primary mb-2">
                        <i class="fas fa-angle-double-left"></i>
                        Retirar todos
                    </span>
                </div>
                <div class="table-responsive">
                    <table id="resource_selected" class="table table-bordered table-striped dataTable table-hover" role="grid">
                        <thead class="">
                        <tr>
                            <th>Nome</th>
                            <th>Menu</th>
                            <th>Icon</th>
                            <th>Route</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>

</div>

<div class="col-md-12 form-group">
    @if($hasSave)
        <button style="float: right;" type="submit" class="btn btn-success">Salvar</button>
    @endif
</div>
@section('style_head')
    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/datatables.css')}}">
    <style>

        .selected{background: #ffeabd!important;}
        #resource_available tbody tr{cursor: pointer}
    </style>
@endsection
@section('script_footer_end')
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/datatables.js')}}></script>
    <script>
        var resourcesAvailable = {!! json_encode($resources) !!}
        var resourcesSelected  = [];
        var profilesResources  = {!! isset($profilesResources) ? json_encode($profilesResources) : '[]' !!}
        var tableResourceAvailable = null;
        if(profilesResources){
            for (var i=0; i<profilesResources.length;i++){
                console.log(profilesResources[i]);
                for (var j=0; j<resourcesAvailable.length;j++){
                    if(resourcesAvailable[j] && resourcesAvailable[j]['id'] == profilesResources[i]){
                        resourcesSelected.push(resourcesAvailable[j]);
                        resourcesAvailable.splice(j, 1);
                    }
                }
            }
        }
        var language = {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Recursos disponiveis",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        }
        $(document).ready(function () {
            tableResourceAvailable = $('#resource_available').DataTable({
                language: language,
                processing: true,
                serverSide: false,
                autoWidth: true,
                paging: false,
                scrollY:        "300px",
                scrollCollapse: true,
                data: resourcesAvailable,
                columns: [
                    {data: "name", 'name': 'name'},
                    {data: "menu", 'name': 'menu', render:function (data){
                            return data ? data : '---';
                        }},
                    {data: "icon", 'name': 'icon', render:function (data){
                            return data ? '<i class="'+data+'"></i>': '---'
                    }},
                    {data: "route_name", 'name': 'route_name', render: function (data, type, row){
                            return data;
                    }},
                ]
            });

            $('#resource_available tbody').on( 'click', 'tr', function () {
                $(this).toggleClass('selected');
            });


            var moveItens = function (tableFrom, tableTo, dataFrom, dataTo, remove){
                var data = tableFrom.rows('.selected').data();
                for (var i=0; i< data.length; i++){
                    dataTo.push(data[i]);
                    for (var j=0; j<dataFrom.length; j++){
                        if(dataFrom[j]['_id'] == data[i]['_id']){
                            dataFrom.splice(j, 1);
                        }
                    }
                }
                tableFrom.rows().remove().draw();
                tableFrom.rows.add(dataFrom).draw();

                tableTo.rows().remove().draw();
                tableTo.rows.add(dataTo).draw();

                if(!remove){
                    resourcesAvailable = dataFrom;
                    resourcesSelected = dataTo;
                }else{
                    resourcesAvailable = dataTo ;
                    resourcesSelected = dataFrom;
                }
            }

            $('#moveSelected').click( function () {
                moveItens(tableResourceAvailable, tableResourceSelected, resourcesAvailable, resourcesSelected , false);
            });
            $('#moveAll').click( function () {
                $('#resource_available tbody tr.selected').removeClass('selected');
                $('#resource_available tbody tr').toggleClass('selected');
                moveItens(tableResourceAvailable, tableResourceSelected, resourcesAvailable, resourcesSelected , false);
            });

            $('#removeSelected').click( function () {
                moveItens(tableResourceSelected, tableResourceAvailable, resourcesSelected , resourcesAvailable,  true);
            });
            $('#removeAll').click( function () {
                $('#resource_selected tbody tr.selected').removeClass('selected');
                $('#resource_selected tbody tr').toggleClass('selected');
                moveItens(tableResourceSelected, tableResourceAvailable, resourcesSelected , resourcesAvailable,  true);
            });
            language.sSearch = "Recursos selecionados"
            var tableResourceSelected = $('#resource_selected').DataTable({
                language: language,
                processing: true,
                autoWidth: true,
                paging: false,
                scrollY:        "300px",
                scrollCollapse: true,
                data: resourcesSelected,
                columns: [
                    {data: "name", 'name': 'name'},
                    {data: "menu", 'name': 'menu', render:function (data){
                            return data ? data : '---';
                    }},
                    {data: "icon", 'name': 'icon', render:function (data){
                            return data ? '<i class="'+data+'"></i>': '---'
                    }},
                    {data: "route_name", 'name': 'route_name', render: function (data, type, row){
                            return data+'<input type="hidden" value="'+row.id+'" name="resources[]"> '
                    }},
                ],
            });

            $('#resource_selected tbody').on( 'click', 'tr', function () {
                $(this).toggleClass('selected');
            });
        });
    </script>
@endsection