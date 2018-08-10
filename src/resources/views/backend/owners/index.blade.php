@extends('Ironforge::layouts.backend.main')
@section('title', 'Owners')
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
                                    <a href="{{route('ironforge.owner.create')}}">
                                        <a href="{{route('ironforge.owner.create')}}" class="btn btn-success">
                                            Add New <span class="fa fa-plus"></span>
                                        </a>
                                    </a>
                                @endif
                            </div>
                        </div>
                        <div class="box-body ">
                            <div class="table-responsive">
                                <table id="table_owners" class="table table-bordered table-striped dataTable table-hover"
                                       role="grid">
                                    <thead>
                                    <tr class="center">
                                        <td role="row">#</td>
                                        <td>Name</td>
                                        <td>Type</td>
                                        <td>Origin Id</td>
                                        <td>Description</td>
                                        <td>Users</td>
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
            $('#table_owners').DataTable({
                serverSide: true,
                processing: true,
                autoWidth:false,
                ajax: '{{ route('ironforge.owner.index') }}',
                columns: [
                    {data: "id", 'name': 'id', searchable: false},
                    {data: "name", 'name': 'name'},
                    {data: "type", 'name': 'type'},

                    {
                        data: null, searchable: false, orderable: false, render: function (data) {
                            console.log(data);
                            console.log(data.origin_id);

                          return !isNaN(data.origin_id)?data.origin_name:data.origin_id;
                        }
                    },




                    {data: "desc", 'name': 'desc'},
                    {
                        data: null, searchable: false, orderable: false, render: function (data) {

                            if(data !== null){
                                var span = "";
                                var count = 1;
                                $.each(data.user, function(k, v){
                                    span += "<span class=\"label label-info\">" + v.name + "</span>";

                                    if(count%4==0){
                                        span += '<br/>';
                                    }
                                    count++;
                                });
                                return span;
                            }else{
                                return "";
                            }
                        }
                    },
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