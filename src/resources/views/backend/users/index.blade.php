@extends('Admin::layouts.backend.main')
@section('title', 'Users')
@section('content')
    <div class="card-header">
        @include('Admin::layouts.backend.breadcrumb')
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


@section('script_footer_end')
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