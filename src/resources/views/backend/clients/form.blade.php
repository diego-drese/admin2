<div class="card">
    <div class="card-header bg-amber">
        <h6 class="m-b-0 text-black font-weight-bolder">Dados do sliente</h6>
    </div>
    <div class="card-body ">
        <div class="row">
            <div class="col-md-6 form-group {{$errors->has('name') ? 'has-error' : ''}} ">
                <label for="title">Nome</label>
                <input type="text" class="form-control {{$errors->has('name') ? 'is-invalid' : ''}}" value="{{old('name',$negotiateClient->exists() ? $negotiateClient->name : '')}}" name="name"
                       id="name" placeholder="">
                @if($errors->has('name'))
                    <span class="help-block">{{$errors->first('name')}}</span>
                @endif
            </div>
            <div class="col-md-6 form-group {{$errors->has('email') ? 'has-error' : ''}}">
                <label for="slug">E-mail</label>
                <input type="email" value="{{old('email',$negotiateClient->email)}}" name="email" class="form-control {{$errors->has('email') ? 'is-invalid' : ''}}"
                       id="email" placeholder="">
                @if($errors->has('email'))
                    <span class="help-block">{{$errors->first('email')}}</span>
                @endif
            </div>

            <div class="col-md-6 form-group {{$errors->has('phone') ? 'has-error' : ''}}">
                <label for="phone">Telefone</label>
                <input type="text" value="{{old('phone',$negotiateClient->exists() ? $negotiateClient->phone : '')}}" name="phone"
                       class="form-control {{$errors->has('phone') ? 'is-invalid' : ''}}"
                       id="phone" placeholder="">
                @if($errors->has('phone'))
                    <span class="help-block">{{$errors->first('phone')}}</span>
                @endif
            </div>
            <div class="col-md-6 form-group {{$errors->has('cellphone') ? 'has-error' : ''}}">
                <label for="cellphone">Celular</label>
                <input type="text" value="{{old('cellphone',$negotiateClient->exists() ? $negotiateClient->cellphone : '')}}" name="cellphone"
                       class="form-control {{$errors->has('cellphone') ? 'is-invalid' : ''}}"
                       id="cellphone" placeholder="">
                @if($errors->has('cellphone'))
                    <span class="help-block">{{$errors->first('cellphone')}}</span>
                @endif
            </div>
            <div class="col-md-6 form-group {{$errors->has('active') ? 'has-error' : ''}}">
                <label for="active">Status</label>
                <select type="text" name="active" class="form-control {{$errors->has('active') ? 'is-invalid' : ''}}" id="active" placeholder="do usuário">
                    <option value="1">Ativo</option>
                    <option value="0" {{$negotiateClient->exists() && $negotiateClient->active == 0 ? 'selected' : ''}}>Desativado</option>
                </select>
                @if($errors->has('active'))
                    <span class="help-block">{{$errors->first('active')}}</span>
                @endif
            </div>
            <div class="col-md-6 form-group {{$errors->has('type') ? 'has-error' : ''}}">
                <label for="type">Tipo</label>
                <select type="text" name="type" class="form-control {{$errors->has('type') ? 'is-invalid' : ''}}" id="type" placeholder="Cliente">
                    <option value="1" {{$negotiateClient->exists() && $negotiateClient->type == 1 ? 'selected' : ''}}>PF</option>
                    <option value="2" {{$negotiateClient->exists() && $negotiateClient->type == 2 ? 'selected' : ''}}>PJ</option>
                </select>
                @if($errors->has('type'))
                    <span class="help-block">{{$errors->first('type')}}</span>
                @endif
            </div>


            <div class="col-md-6 form-group {{$errors->has('cpf') ? 'has-error' : ''}}">
                <label for="cpf">CPF</label>
                <input type="text" value="{{old('cpf',$negotiateClient->exists() ? $negotiateClient->cpf : '')}}" name="cpf"
                       class="form-control {{$errors->has('cpf') ? 'is-invalid' : ''}}"
                       id="cpf" placeholder="">
                @if($errors->has('cpf'))
                    <span class="help-block">{{$errors->first('cpf')}}</span>
                @endif
            </div>
            <div class="col-md-6 form-group {{$errors->has('cnpj') ? 'has-error' : ''}}">
                <label for="cnpj">CNPJ</label>
                <input type="text" value="{{old('cnpj',$negotiateClient->exists() ? $negotiateClient->cnpj : '')}}" name="cnpj"
                       class="form-control {{$errors->has('cnpj') ? 'is-invalid' : ''}}"
                       id="cnpj" placeholder="">
                @if($errors->has('cnpj'))
                    <span class="help-block">{{$errors->first('cnpj')}}</span>
                @endif
            </div>

            <div class="col-md-6 form-group {{$errors->has('social_reason') ? 'has-error' : ''}}">
                <label for="social_reason">Razão Social</label>
                <input type="text" value="{{old('social_reason',$negotiateClient->exists() ? $negotiateClient->social_reason : '')}}" name="social_reason"
                       class="form-control {{$errors->has('social_reason') ? 'is-invalid' : ''}}"
                       id="social_reason" placeholder="">
                @if($errors->has('social_reason'))
                    <span class="help-block">{{$errors->first('social_reason')}}</span>
                @endif
            </div>

            <div class="col-md-6 form-group {{$errors->has('fantasy_name') ? 'has-error' : ''}}">
                <label for="fantasy_name">Nome Fantasia</label>
                <input type="text" value="{{old('fantasy_name',$negotiateClient->exists() ? $negotiateClient->fantasy_name : '')}}" name="fantasy_name"
                       class="form-control {{$errors->has('fantasy_name') ? 'is-invalid' : ''}}"
                       id="fantasy_name" placeholder="">
                @if($errors->has('fantasy_name'))
                    <span class="help-block">{{$errors->first('fantasy_name')}}</span>
                @endif
            </div>

            <div class="col-md-6 form-group {{$errors->has('state_register') ? 'has-error' : ''}}">
                <label for="state_register">Inscrição Estadual</label>
                <input type="text" value="{{old('state_register',$negotiateClient->exists() ? $negotiateClient->state_register : '')}}" name="state_register"
                       class="form-control {{$errors->has('state_register') ? 'is-invalid' : ''}}"
                       id="state_register" placeholder="">
                @if($errors->has('state_register'))
                    <span class="help-block">{{$errors->first('state_register')}}</span>
                @endif
            </div>
            @if($hasSave)
                <div class="col-md-12 form-group">
                    <div class="form-group m-b-0 text-right">
                        <button type="submit" class="btn btn-primary">Salvar</button>
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>
@if($negotiateClient->exists() && (int)$negotiateClient->id>0)
    <div class="card">
        <div class="card-header bg-amber">
            <h6 class="m-b-0 text-black font-weight-bolder">Usuários</h6>
        </div>
        <div class="card-body ">
            <div class="row">
                <div class="col-md-12 text-right mb-2">
                    <button type="button" class="btn btn-primary" id="addUser"><i class="fas fa-plus"></i>
                        Adicionar usuário
                    </button>
                </div>
                <div class="col-md-12">
                    <table id="table_users" class="table table-striped table-bordered" >
                        <thead>
                            <tr class="center">
                                <td role="row">#</td>
                                <td>Nome</td>
                                <td>E-mail</td>
                                <td>Celular</td>
                                <td>Ativo</td>
                                <td>Perfil</td>
                                <td>Ações</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endif

@if($negotiateClient->exists() && (int)$negotiateClient->id>0)
    <div class="card">
        <div class="card-header bg-amber">
            <h6 class="m-b-0 text-black font-weight-bolder">Pagamentos</h6>
        </div>
        <div class="card-body ">
            <div class="row">
                <div class="col-md-12 text-right mb-2">
                    <button type="button" class="btn btn-primary" id="addPayment"><i class="fas fa-plus"></i>
                        Adicionar pagamento
                    </button>
                </div>
                <div class="col-md-12">
                    <table id="table_users" class="table table-striped table-bordered" >
                        <thead>
                        <tr class="center">
                            <td role="row">#</td>
                            <td>Data do pagamento</td>
                            <td>Valor</td>
                            <td>Plano</td>
                            <td>Validade</td>
                            <td>Ações</td>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade modal-open" id="modalUser" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Usuário</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label for="title">Foto Perfil</label>
                            <input type="file" class="form-control" value="" name="picture" id="picture" placeholder="Picture">
                        </div>

                        <div class="col-md-6 form-group">
                            <label for="title">Nome</label>
                            <input type="text" class="form-control" value="" name="name" id="name">
                        </div>

                        <div class="col-md-6 form-group">
                            <label for="slug">Sobrenome</label>
                            <input type="text" value="" name="lastname" class="form-control" id="lastname">
                        </div>

                        <div class="col-md-6 form-group">
                            <label for="slug">Celular</label>
                            <input type="text" value="" name="cell_phone" class="form-control" id="cell_phone" >
                        </div>

                        <div class="col-md-6 form-group">
                            <label for="slug">E-mail</label>
                            <input type="email" value="" name="email" class="form-control" id="email">
                        </div>
                        <div class="col-md-4 form-group">
                            <label for="active">Perfil</label>
                            <select class="form-control" id="selectProfile" name="profile_id" placeholder="Profile">
                                @foreach ($profiles as $key => $profile)
                                    <option name="profile_id"  value="{{$profile->id}}">{{$profile->name}} </option>
                                @endforeach
                            </select>
                        </div>

                        <div class="col-md-4 form-group">
                            <label for="active">Página incial</label>
                            <select class="form-control" id="selectResourceDefault" name="resource_default_id">
                            </select>
                        </div>

                        <div class="col-md-4 form-group">
                            <label for="slug">Senha</label>
                            <input type="password" name="password" class="form-control" id="password" value="">
                        </div>

                        <div class="col-md-4 form-group">
                            <label for="slug">Confirmar Senha</label>
                            <input type="password" name="password_confirmation" class="form-control" id="password_confirmation" value="">
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <div class="row" style="width: 100%">
                        <div class="col-md-12 text-right">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" id="saveSchedule" class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade modal-open" id="modalPayment" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Pagamento</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                </div>
                <div class="modal-footer" style="padding-left: 0;">
                    <div class="row" style="width: 100%">
                        <div class="col-md-12 text-right">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" id="saveSchedule" class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endif
@section('style_head_end')
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css"/>
@endsection
@section('script_footer_end')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#phone').mask('(00) 0000-0000');
            $('#cellphone').mask('(00) 0000-0000');
            $('#cpf').mask('000.000.000-00');
            $('#cnpj').mask('00.000.000/0000-00',{reverse: true});
            $('#birthday').mask('00/00/0000',{reverse: true});

           function showTypeUser(){
               if($('#type').val()=='1'){
                   $('#cpf').parent().show()
                   $('#cnpj').parent().hide()
                   $('#social_reason').parent().hide()
                   $('#fantasy_name').parent().hide()
                   $('#state_register').parent().hide()
                   $('#birthday').parent().show()
               }else{
                   $('#cnpj').parent().show()
                   $('#cpf').parent().hide()
                   $('#social_reason').parent().show()
                   $('#fantasy_name').parent().show()
                   $('#state_register').parent().show()
                   $('#birthday').parent().hide()
               }
           }

            $('#type').change(function(){
                showTypeUser()
            })

            showTypeUser()
            $('#addUser').click(function(){
                $('#modalUser').modal('show');
            });
            $('#addPayment').click(function(){
                $('#modalPayment').modal('show');

            });



        });
    </script>

@endsection