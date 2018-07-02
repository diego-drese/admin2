@extends('Ironforge::layouts.backend.main')
@section('content')
@section('title', 'Recursos')

<div class="content-wrapper">
    @include('Ironforge::layouts.backend.breadcrumb')

    <section class="content">
        <div class="row">
            <div class="col-md-12 col-xs-12">
                <div class="box">
                    <div class="box-body ">
                        <a href="{{route('resources.create')}}">
                            <button class="btn btn-success btn-sm margin-horizontal-small margin-bottom-small">Novo
                                Recurso De Menu
                            </button>
                        </a>
                        <div class="row">
                            <div class="col col-md-12 table-responsive">
                                <table id="table_resources" class="table table-bordered table-striped dataTable table-hover"
                                       role="grid">
                                    <thead>
                                    <tr class="center">
                                        <td role="row">#</td>
                                        <td role="row">Nome</td>
                                        <td role="row">Menu</td>
                                        <td>Rota</td>
                                        <td>Icon</td>
                                        <td role="row">Controller Method</td>
                                        <td>Perfil</td>
                                        <td>Criação</td>
                                        <td>Ações</td>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection


@section('style')
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.16/datatables.min.css"/>
@endsection

@section('script')
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.18/js/jquery.dataTables.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#table_resources').DataTable({
                serverSide: true,
                processing: true,
                ajax: '{{ route('resources.index') }}',
                columns: [
                    {data: "id", 'name': 'resources.id', searchable: false},
                    {data: "name", 'name': 'resources.name'},
                    {data: "menu", 'name': 'resources.menu'},
                    {data: "route_name", 'name': 'resources.route_name'},
                    {
                        data: null, searchable: false, orderable: false, render: function (data) {
                            var icon = `<i class="font-gradient icon-font fa ${data.icon}"></i>`;
                            return icon
                        }
                    },
                    {data: 'controller_method', 'name': 'resources.controller_method'},
                    {
                        data: null, searchable: false, orderable: false, render: function (data) {
                            return data.profiles.map((name) => name.name);
                        }
                    },
                    {data: "created_at", 'name': 'resources.created_at'},

                    {
                        data: null, searchable: false, orderable: false, render: function (data) {
                            var edit_button = '<a href="' + data.edit_url + '" class="btn btn-xs btn-default" role="button" aria-pressed="true">Editar</a>';
                            return edit_button
                        }
                    }
                ],
                "language": {
                    "url": '/vendor/aggrega/ironforge/laravel-package-ironforge/js/pt-br.json'
                }
            });
        });
    </script>

@endsection
