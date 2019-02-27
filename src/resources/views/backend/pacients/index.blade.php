@extends('Admin::layouts.quillpro.main')
@section('title', 'Pacientes')
@section('content')
    <div class="content-wrapper">
        <section class="content">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                        <div class="pull-left">
                            @if($hasAdd)
                                <a href="{{route('admin.pacient.create')}}">
                                    <a href="{{route('admin.pacient.create')}}" class="btn btn-success">
                                        Adicionar <span class="fa fa-plus"></span>
                                    </a>
                                </a>
                            @endif
                        </div>
                    </div>
                    <div class="box-body ">
                        <div class="table-responsive">
                            <table id="table_pacient" class="table table-bordered table-striped dataTable table-hover"
                                   role="grid">
                                <thead>
                                <tr class="center">
                                    <td role="row">#</td>
                                    <td>Nome</td>
                                    <td>E-mail</td>
                                    <td>Celular</td>
                                    <td>Convênio</td>
                                    <td>Ações</td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
@section('style_head_end')
    <link rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css"/>
@endsection
@section('script_footer_end')
    <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.18/js/jquery.dataTables.min.js"></script>
    <script>
        var hasEdit = '{{$hasEdit}}';
        $(document).ready(function () {
            $('#table_pacient').DataTable({
                serverSide: true,
                processing: true,
                autoWidth: false,
                ajax: '{{ route('admin.pacient.index') }}',
                columns: [
                    {data: "id", 'name': 'id', searchable: false},
                    {data: "name", 'name': 'name'},
                    {data: "email", 'name': 'email'},
                    {data: 'cellphone', 'name': 'cellphone'},
                    {data: 'health_plan', 'name': 'health_plan'},
                    {
                        data: null, searchable: false, orderable: false, render: function (data) {
                            var edit_button = "";
                            if(data.type==1){
                                return data.cpf;
                            }else{
                                return data.cnpj;
                            }
                        }
                    },
                    {data: "created_at", 'name': 'created_at'},
                    {
                        data: null, searchable: false, orderable: false, render: function (data) {
                        //var edit_button = "";
                        //if (hasEdit == '1') {
                          var  edit_button = '<a href="' + data.edit_url + '" class="btn btn-xs btn-default" role="button" aria-pressed="true">Edit</a>';
                        //}
                        return edit_button
                    }
                    }
                ]
            });
        });
    </script>

@endsection