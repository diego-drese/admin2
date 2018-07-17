
@extends('Ironforge::layouts.backend.main')
@section('title', 'Users')
@section('content')

    <div class="content-wrapper">
    @include('Ironforge::layouts.backend.breadcrumb')

    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                        <div class="pull-left">
                            @if($hasAdd)
                                <a href="{{route('ironforge.users.create')}}">
                                    <a href="{{route('ironforge.users.create')}}" class="btn btn-success">
                                        Add New <span class="fa fa-plus"></span>
                                    </a>
                                </a>

                            @endif
                        </div>
                    </div>
                    <div class="box-body ">
                        <div class="table-responsive">
                            <table id="table_users" class="table table-bordered table-striped dataTable table-hover"
                                   role="grid">
                                <thead>
                                    <tr class="center">
                                        <td role="row">#</td>
                                        <td>Name</td>
                                        <td>E-mail</td>
                                        <td>Profile</td>
                                        <td>Status</td>
                                        <td>Contact</td>
                                        <td>Page Default</td>
                                        <td>Created At:</td>
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


@section('style')
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.16/datatables.min.css"/>
@endsection

@section('script')
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.18/js/jquery.dataTables.min.js"></script>
    <script>
        var hasEdit = '{{$hasEdit}}';
        $(document).ready(function () {
            $('#table_users').DataTable({
                serverSide: true,
                processing: true,
                autoWidth:false,
                ajax: '{{ route('ironforge.users.index') }}',
                columns: [

                    {data: "id", 'name': 'id', searchable: false},
                    {data: "name", 'name': 'name'},
                    {data: "email", 'name': 'email'},
                    {data: "profileName", 'name': 'profileName'},
                    {data: 'active', 'name': 'active'},
                    {data: 'cell_phone', 'name': 'cell_phone'},
                    {data: "resourceName", 'name': 'resourceName'},
                    {data: "created_at", 'name': 'created_at'},

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