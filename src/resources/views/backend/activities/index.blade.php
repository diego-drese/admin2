@extends('Ironforge::layouts.backend.main')
@section('title', 'Activities')
@section('content')
    <div class="content-wrapper">
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-body ">
                            <div class="table-responsive">
                                <table id="table_owners" class="table table-bordered table-striped dataTable table-hover"
                                       role="grid">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Log Name</th>
                                        <th>Action</th>
                                        <th>Subject ID</th>
                                        <th>Subject Type</th>
                                        <th>Causer ID</th>
                                        <th>Causer Type</th>
                                        <th>Created</th>
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
        $(document).ready(function () {
            $('#table_owners').DataTable({
                serverSide: false,
                processing: false,
                autoWidth:false,
                ajax: '{{ route('ironforge.activity.index') }}',
                columns: [
                    {data: "id", 'name': 'id', searchable: false},
                    {data: "log_name", 'name': 'log_name'},
                    {data: "description", 'name': 'description'},
                    {data: "subject_id", 'name': 'subject_id'},
                    {data: "subject_type", 'name': 'subject_type'},
                    {data: "causer_id", 'name': 'causer_id'},
                    {data: "causer_type", 'name': 'causer_type'},
                    {
                        data: null,  render: function (data) {
                            return JSON.stringify(data.properties);
                        }
                    },
                    {data: "created_at", 'name': 'created_at'}
                ]
            });
        });
    </script>

@endsection