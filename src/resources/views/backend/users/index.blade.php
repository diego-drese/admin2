@extends('Admin::layouts.quillpro.main')
@section('title', 'Users')
@section('content')
    <div class="card-header">
        @include('Admin::layouts.quillpro.breadcrumb')
        <div class="pull-right">
            @if($hasAdd)
                <a href="{{route('admin.users.create')}}">
                    <a href="{{route('admin.users.create')}}" class="btn btn-xs btn-default">
                        Adicionar <span class="fa fa-plus"></span>
                    </a>
                </a>
            @endif
        </div>
    </div>

    <div class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
        <table id="table_users" class="table table-bordered table-light" role="grid" >
            <thead class="">
            <tr>
                <th role="row">#</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Perfil</th>
                <th>Status</th>
                <th>Contato</th>
                <th>Pagina Inicialt</th>
                <th>Criado em:</th>
                <th>Ações</th>
            </tr>
            </thead>
        </table>
    </div>
@endsection


@section('style_head_end')
    <link rel="stylesheet" type="text/css" href="https://base5builder.com/livedemo/quillpro/v1.7/html/assets/plugins/datatables/css/responsive.dataTables.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://base5builder.com/livedemo/quillpro/v1.7/html/assets/plugins/datatables/css/responsive.bootstrap4.min.css"/>
    {{--https://base5builder.com/livedemo/quillpro/v1.7/html/assets/plugins/datatables/css/responsive.bootstrap4.min.css--}}
@endsection

@section('script_footer_end')
    <script type="text/javascript" src="https://base5builder.com/livedemo/quillpro/v1.7/html/assets/plugins/datatables/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://base5builder.com/livedemo/quillpro/v1.7/html/assets/plugins/datatables/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="https://base5builder.com/livedemo/quillpro/v1.7/html/assets/plugins/datatables/js/dataTables.responsive.min.js"></script>
    <script>
        var hasEdit = '{{$hasEdit}}';
        $(document).ready(function () {
            $('#table_users').DataTable({
                serverSide: true,
                processing: true,
                autoWidth:false,
                ajax: '{{ route('admin.users.index') }}',
                columns: [

                    {data: "id", 'name': 'id', searchable: false},
                    {data: "name", 'name': 'name'},
                    {data: "email", 'name': 'email'},
                    {data: "profileName", 'name': 'profileName'},
                    {data: 'active', 'name': 'active', render:function(data){
                        return data==1 ? '<span class="badge badge-green fa fa-check" title="Ativo"> </span>' : '<span class="badge badge-danger fa fa-exclamation-triangle" title="Desativado"> </span>';
                    }},
                    {data: 'cell_phone', 'name': 'cell_phone'},
                    {data: "resourceName", 'name': 'resourceName'},
                    {data: "created_at", 'name': 'created_at'},

                    {
                        data: null, searchable: false, orderable: false, render: function (data) {
                            var edit_button = "";
                            if(hasEdit=='1'){
                                edit_button = '<a href="' + data.edit_url + '" class="btn btn-xs btn-default" role="button" aria-pressed="true">Editar</a>';
                            }
                            return edit_button
                        }
                    }
                ]
            });
        });
    </script>

@endsection