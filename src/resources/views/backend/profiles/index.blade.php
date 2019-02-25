@extends('Admin::layouts.quillpro.main')
@section('title', 'Profiles')
@section('content')
    <div class="card-header">
        @include('Admin::layouts.quillpro.breadcrumb')
        <div class="pull-right">
            @if($hasAdd)
                <a href="{{route('admin.profiles.create')}}">
                    <a href="{{route('admin.profiles.create')}}" class="btn btn-xs btn-default">
                        Adicionar <span class="fa fa-plus"></span>
                    </a>
                </a>
            @endif
        </div>
    </div>

    <div class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
        <table id="table_profiles" class="table table-bordered table-light" role="grid" >
            <thead class="">
            <tr>
            <th role="row">#</th>
            <th>Nome</th>
            <th style="width: 100px">&nbsp;Criado&nbsp;em&nbsp;</th>
            <th>Recursos</th>
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
            $('#table_profiles').DataTable({
                serverSide: true,
                processing: true,
                autoWidth:false,
                ajax: '{{ route('admin.profiles.index') }}',
                columns: [
                    {data: "id", 'name': 'id', searchable: false},
                    {data: "name", 'name': 'name'},
                    {data: "created_at", 'name': 'created_at'},
                    {
                        data: null, searchable: false, orderable: false, render: function (data) {

                            if(data !== null){
                                var span = "";
                                $.each(data.resources, function(k, v){
                                    span += "<span class=\"badge badge-secondary mr-1 \">" + v.name + "</span>";
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