@extends('Admin::layouts.backend.main')
@section('title', 'Recursos')
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex no-block align-items-center m-b-10">
                        <h4 class="card-title">&nbsp;</h4>
                        <div class="ml-auto">
                            <div class="btn-group">
                                @if($hasAdd)
                                    <a href="{{route('admin.resources.create')}}" class="btn btn-primary">
                                        <span class="fa fa-plus"></span> <b>Adicionar</b>
                                    </a>
                                @endif
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table id="table_resources" class="table table-bordered table-striped dataTable table-hover"
                               role="grid">
                            <thead>
                            <tr class="center">
                                <th role="row">#</th>
                                <th role="row">Nome</th>
                                <th role="row">Menu</th>
                                <th>Icone</th>
                                <th>Rota</th>
                                <th role="row">Controller Method</th>
                                <th>Perfil</th>
                                <th style="width: 100px">&nbsp;Criado&nbsp;em&nbsp;</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('style_head')
    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/datatables.css')}}">

@endsection
@section('script_footer_end')
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/datatables.js')}}></script>
    <script>
        var hasEdit = '{{$hasEdit}}';
        $(document).ready(function () {
            $('#table_resources').DataTable({
                language: {
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
                    "sSearch": "Pesquisar",
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
                },
                serverSide: true,
                processing: true,
                autoWidth: false,
                ajax: '{{ route('admin.resources.index') }}',
                columns: [
                    {data: "id", 'name': 'name', searchable: false},
                    {data: "name", 'name': 'name'},
                    {data: "menu", 'name': 'menu', render:function (data){
                            return data ? data : '---';
                        }},
                    {data: "icon", 'name': 'icon', render:function (data){
                            return data ? '<i class="'+data+'"></i>': '---'
                    }},
                    {data: "route_name", 'name': 'route_name'},
                    {data: 'controller_method', 'name': 'controller_method'},
                    {
                        data: null, searchable: false, orderable: false, render: function (data) {

                            if (data !== null) {
                                var span = "";
                                $.each(data.profiles, function (k, v) {
                                    span += "<span class=\"badge badge-secondary mr-1 \">" + v.name + "</span>";
                                });
                                return span;
                            } else {
                                return "";
                            }
                        }
                    },
                    {data: "created_at", 'name': 'created_at', render:function (data){
                            return moment(data).format('YYYY-MM-DD HH:mm')
                    }},
                    {
                        data: null, searchable: false, orderable: false, render: function (data) {

                            var edit_button = "";
                            if (hasEdit) {
                                edit_button = '<a href="' + data.edit_url + '" class="btn btn-xs btn-secondary" role="button" aria-pressed="true"><b>Editar</b></a>';
                            }
                            return edit_button
                        }
                    }
                ]
            });
        });
    </script>

@endsection
