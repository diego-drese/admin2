@extends('Admin::layouts.quillpro.main')
@section('title', 'Resources')
@section('content')

<div class="content-wrapper">
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                        <div class="pull-left">
                        @if($hasAdd)
                            <a href="{{route('admin.resources.create')}}">
                                <a href="{{route('admin.resources.create')}}" class="btn btn-success">
                                    Resource of menu <span class="fa fa-plus"></span>
                                </a>
                            </a>

                        @endif
                        </div>
                    </div>
                    <div class="box-body ">
                        <div class="table-responsive">
                            <table id="table_resources" class="table table-bordered table-striped dataTable table-hover"
                                   role="grid">
                                <thead>
                                <tr class="center">
                                    <td role="row">#</td>
                                    <td role="row">Name</td>
                                    <td role="row">Menu</td>
                                    <td>Rote</td>
                                    <td>Icon</td>
                                    <td role="row">Controller Method</td>
                                    <td>Profile</td>
                                    <td>Created At</td>
                                    <td>Actions</td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection
@section('style_head_end')
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.16/datatables.min.css"/>
@endsection
@section('script_footer_end')
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.18/js/jquery.dataTables.min.js"></script>
    <script>
        var hasEdit = '{{$hasEdit}}';
        $(document).ready(function () {
            $('#table_resources').DataTable({
                serverSide: true,
                processing: true,
                autoWidth:false,
                ajax: '{{ route('admin.resources.index') }}',
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
                            var edit_button = "";
                            if(hasEdit=='1'){
                                edit_button = '<a href="' + data.edit_url + '" class="btn btn-xs btn-default" role="button" aria-pressed="true">Edit</a>';
                            }
                            return edit_button
                        }
                    }
                ]
            });
        });
    </script>

@endsection
