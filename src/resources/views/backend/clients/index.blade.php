@extends('Admin::layouts.backend.main')
@section('title', 'Clientes')
@section('content')
    <div class="content-wrapper">
        <section class="content">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                        <div class="pull-left">
                            @if($hasAdd)
                                <a href="{{route('admin.client.create')}}">
                                    <a href="{{route('admin.client.create')}}" class="btn btn-success">
                                        Adicionar <span class="fa fa-plus"></span>
                                    </a>
                                </a>
                            @endif
                        </div>
                    </div>
                    <div class="box-body ">
                        <div class="table-responsive">
                            <table id="table_client" class="table table-bordered table-striped dataTable table-hover"
                                   role="grid">
                                <thead>
                                <tr class="center">
                                    <td role="row">#</td>
                                    <td>Nome</td>
                                    <td>E-mail</td>
                                    <td>Celular</td>
                                    <td>Tipo</td>
                                    <td>CPF/CNPJ</td>
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
@section('script_footer_end')
    <script>
        var hasEdit = '{{$hasEdit}}';
        $(document).ready(function () {
            $('#table_client').DataTable({
                serverSide: true,
                processing: true,
                autoWidth: false,
                ajax: '{{ route('admin.client.index') }}',
                columns: [
                    {data: "id", 'name': 'id', searchable: false},
                    {data: "name", 'name': 'name'},
                    {data: "email", 'name': 'email'},
                    {data: 'cellphone', 'name': 'cellphone'},
                    {data: 'type', 'name': 'type'},
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