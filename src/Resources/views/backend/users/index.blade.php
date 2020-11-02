@extends('Admin::layouts.backend.main')
@section('title', 'Usuários')
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex no-block align-items-center m-b-10">
                        <h4 class="card-title">&nbsp;</h4>
                        <div class="ml-auto">
                            <div class="btn-group">
                                <a href="{{route('admin.users.create')}}" class="btn btn-primary">
                                    <span class="fa fa-plus"></span> <b>Adicionar</b>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table id="table_users" class="table table-striped table-bordered" role="grid"
                               aria-describedby="file_export_info">
                            <thead class="">
                            <tr>
                                <th role="row">#</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Perfil</th>
                                <th>Status</th>
                                <th>Contato</th>
                                <th>Pagina Inicial</th>
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
            $('#table_users').DataTable({
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
                ajax: '{{ route('admin.users.index') }}',
                columns: [

                    {data: "id", 'name': 'id', searchable: false},
                    {data: "name", 'name': 'name'},
                    {data: "email", 'name': 'email'},
                    {data: "profileName", 'name': 'profileName'},
                    {
                        data: 'active', 'name': 'active', render: function (data) {
                            return data == 1 ? '<span class="label label-success">Habilitado </span>' : '<span class="label label-danger">Desabilitado </span>';
                        }
                    },
                    {data: 'cell_phone', 'name': 'cell_phone'},
                    {data: "resourceName", 'name': 'resourceName'},
                    {data: "created_at", 'name': 'created_at', render: function (data){
                            return moment(data).format('YYYY-MM-DD HH:mm')
                    }},
                    {
                        data: null, searchable: false, orderable: false, render: function (data) {
                            console.log('okkkk');
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