@extends('Admin::layouts.backend.main')
@section('title', 'Transações')
@section('content')

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="tbale_transactions" class="table table-striped table-bordered" role="grid" aria-describedby="file_export_info">
                            <thead class="">
                                <tr>
                                    <th role="row">#</th>
                                    <th>Cliente</th>
                                    <th>Plano</th>
                                    <th>Tipo</th>
                                    <th>Valor</th>
                                    <th>Status</th>
                                    <th>Criado em</th>
                                    <th>Historico</th>
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
        $(document).ready(function () {
            var hasUpdate = {{$hasUpdate}}
            $('#tbale_transactions').DataTable({
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
                autoWidth:false,
                order: [[ 0, "desc" ]],
                ajax: '{{ route('admin.transactions.index') }}',
                columns: [
                    {data: "id", 'name': 'id', searchable: false},
                    {data: "client_name", 'name': 'client_name'},
                    {data: "plan_name", 'name': 'plan_name'},
                    {data: "plan_type", 'name': 'plan_type'},
                    {data: "value", 'name': 'value'},
                    {data: 'status', 'name': 'status', render:function(data, info, row){
                        if(data=="pending"){
                            return '<span class="label label-info">'+row['status_description']+' </span>';
                        }else if(data=="success" || data=="complete" ){
                            return '<span class="label label-success">'+row['status_description']+' </span>';
                        }else{
                            return '<span class="label label-danger">'+row['status_description']+' </span>';
                        }
                    }},
                    {data: "created_at", 'name': 'created_at'},
                    {data: 'historic', searchable: false, orderable: false, render: function (data) {
                            var historic = '';

                            for(var i=0;i<data.length; i++){
                                var dataHistoric = data[i];
                                historic+='<span class="label label-primary ml-2">'+dataHistoric['user_name']+' '+dataHistoric['action']+' '+dataHistoric['status']+' - '+moment(Number(dataHistoric['date_at'].milliseconds)).format('DD/MM/YYYY HH:mm')+' </span>';
                            }
                            return historic;
                        }
                    },
                    {data: null, searchable: false, orderable: false, render: function (data) {
                            if(hasUpdate && data['plan_type']=="manual" && data['status']=="pending"){
                                return '<a href="' + data.get_url + '" class="btn btn-xs btn-secondary" role="button" aria-pressed="true"><b>Editar</b></a>'
                            }
                            return '';
                        }
                    }

                ]
            });
        });
    </script>

@endsection