@extends('Admin::layouts.backend.main')
@section('title', 'Transação')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body ">
                    <form id="form-profile" method="post" action="{{route('admin.transactions.update',[$transaction->id])}}">
                        {{ csrf_field() }}
                        <div class="card">
                            <div class="card-body">
                                <small>Plano Atual</small>
                                <h5 class="card-title" id="planName">{{$transaction->plan_name}}</h5>
                                <small>Descrição</small>
                                <p id="planDescription">{{$plan->description}}</p>
                                <small>Tipo</small>
                                <p id="planType">{{$transaction->plan_type}}</p>
                                @foreach($fieldsUpdate as $field)
                                    <p>
                                        <i class="{{$field['icon']}}"></i>
                                        {{$field['label']}} : <span class="specificFields" id="{{$field['name']}}">{{ $transaction->{$field['name']} }} </span>
                                    </p>

                                @endforeach
                                <div class="form-group ">
                                    <label for="slug">Status</label>
                                    <div class="input-group">
                                        <div class="btn-group">
                                            <button style="min-width:200px" id="colorName" type="button" class="btn btn-secondary waves-effect waves-light bg-success">Processado, aceito e finalizado</button>
                                            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span class="sr-only"></span>
                                            </button>
                                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(149px, 32px, 0px);">
                                                <button type="button" class="btn dropdown-item colorSelect bg-success" data-value="complete" data-class="bg-success" >Processado, aceito e finalizado</button>
                                                <button type="button" class="btn dropdown-item colorSelect bg-danger" data-value="rejected" data-class="bg-danger" >Rejeitado</button>
                                            </div>
                                            <input type="hidden" name="status" id="status" value="complete" >
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Observações</span>
                                    </div>
                                    <textarea name="description" class="form-control" id="description" maxlength="500"></textarea>
                                </div>
                                <hr>
                                <small>Valor</small>
                                <h4 id="planValue">{{$transaction->value}}</h4>
                                <hr>

                            </div>
                            <div class="card-body">
                                <div class="col-md-12 text-right">
                                    <button type="submit" id="savePay" class="btn btn-success" data-id="">Salvar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script_footer_end')
    <script type="text/javascript" src="/vendor/negotiate/admin/nice-admin/js/forms.js"></script>
    <script>

        $(document).ready(function () {
            $('.money').mask('#.##0,00', {reverse: true});
            $('.colorSelect').off('click').click(function () {
                var name = $(this).text();
                var value = $(this).attr('data-value');
                var className = $(this).attr('data-class');

                $('#colorName').text(name).removeClass('bg-success bg-danger').addClass(className);
                $('#status').val(value);
            });


            $(".btn-group .active").click()
        });

    </script>
@endsection



