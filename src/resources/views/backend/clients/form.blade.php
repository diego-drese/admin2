<div class="card">
    <div class="card-header bg-amber">
        <h6 class="m-b-0 text-black font-weight-bolder">Dados do cliente</h6>
    </div>
    <div class="card-body ">
        <div class="row">
            <div class="col-md-4 form-group {{$errors->has('name') ? 'has-error' : ''}} ">
                <label for="title">Nome</label>
                <input type="text" class="form-control {{$errors->has('name') ? 'is-invalid' : ''}}" value="{{old('name',$oka6Client->exists() ? $oka6Client->name : '')}}" name="name"
                       id="name" placeholder="">
                @if($errors->has('name'))
                    <span class="help-block">{{$errors->first('name')}}</span>
                @endif
            </div>
            <div class="col-md-4 form-group {{$errors->has('email') ? 'has-error' : ''}}">
                <label for="slug">E-mail</label>
                <input type="email" value="{{old('email',$oka6Client->email)}}" name="email" class="form-control {{$errors->has('email') ? 'is-invalid' : ''}}"
                       id="email" placeholder="">
                @if($errors->has('email'))
                    <span class="help-block">{{$errors->first('email')}}</span>
                @endif
            </div>

            <div class="col-md-4 form-group {{$errors->has('phone') ? 'has-error' : ''}}">
                <label for="phone">Telefone</label>
                <input type="text" value="{{old('phone',$oka6Client->exists() ? $oka6Client->phone : '')}}" name="phone"
                       class="form-control {{$errors->has('phone') ? 'is-invalid' : ''}}"
                       id="phone" placeholder="(xx) xxx-xxxx">
                @if($errors->has('phone'))
                    <span class="help-block">{{$errors->first('phone')}}</span>
                @endif
            </div>
            <div class="col-md-4 form-group {{$errors->has('cellphone') ? 'has-error' : ''}}">
                <label for="cellphone">Celular</label>
                <input type="text" value="{{old('cellphone',$oka6Client->exists() ? $oka6Client->cellphone : '')}}" name="cellphone"
                       class="form-control {{$errors->has('cellphone') ? 'is-invalid' : ''}}"
                       id="cellphone" placeholder="(xx) xxxx-xxxx">
                @if($errors->has('cellphone'))
                    <span class="help-block">{{$errors->first('cellphone')}}</span>
                @endif
            </div>
            <div class="col-md-4 form-group {{$errors->has('active') ? 'has-error' : ''}}">
                <label for="active">Status</label>
                <select type="text" name="active" class="form-control {{$errors->has('active') ? 'is-invalid' : ''}}" id="active" >
                    <option value="1">Ativo</option>
                    <option value="0" {{$oka6Client->exists() && $oka6Client->active == 0 ? 'selected' : ''}}>Desativado</option>
                </select>
                @if($errors->has('active'))
                    <span class="help-block">{{$errors->first('active')}}</span>
                @endif
            </div>

            <div class="col-md-4 form-group {{$errors->has('user_id') ? 'has-error' : ''}}">
                <label for="type">Usuário Administrador</label>
                @if($user->profile_id==\Oka6\Admin\User::PROFILE_ID_ROOT)
                    <select type="text" name="user_id" class="form-control {{$errors->has('type') ? 'is-invalid' : ''}}" id="user_id" >
                        @if($oka6Client->exists() && $oka6Client->user_id)
                            <option value="{{$oka6Client->user_id}}">{{$oka6Client->user_name}}</option>
                        @endif
                    </select>
                    <input type="hidden" value="{{$oka6Client->exists() && $oka6Client->user_id ? $oka6Client->user_name : ''}}" name="user_name" class="form-control" id ="user_name">
                @else
                    <input type="text" value="{{$user->name}}" name="user_name" class="form-control" id="user_name" readonly>
                    <input type="hidden" value="{{$user->id}}" name="user_id" class="form-control" id="user_id" >
                @endif

                @if($errors->has('user_id'))
                    <span class="help-block">{{$errors->first('user_id')}}</span>
                @endif
            </div>
            <div class="col-md-4 form-group {{$errors->has('logo') ? 'has-error' : ''}}">
                <label for="street">Logo</label>
                <div class="input-group">
                    <span class="input-group-btn">
                    <span class="btn btn-primary" onclick="$(this).parent().find('input[type=file]').click();">Selecionar</span>
                        <input id="logo" name="logo" onchange="$(this).parent().parent().find('.form-control').html($(this).val().split(/[\\|/]/).pop());" style="display: none;" type="file">
                    </span>
                    <span class="form-control"></span>
                    @if($oka6Client->exists() && $oka6Client->logo)
                        <img src="{{$oka6Client->logo}}" alt="user" class="rounded-circle" width="40" height="40" style="  margin-left: 8px;  margin-top: -6px;">
                    @endif
                </div>
                @if($errors->has('logo'))
                    <span class="help-block">{{$errors->first('logo')}}</span>
                @endif
            </div>
            <div class="col-md-4 form-group {{$errors->has('domain') ? 'has-error' : ''}}">
                <label for="street">Dominio</label>
                <input type="text" value="{{old('cellphone',$oka6Client->exists() ? $oka6Client->domain : '')}}" name="domain"
                       class="form-control {{$errors->has('domain') ? 'is-invalid' : ''}}"
                       id="domain" placeholder="Dominio utilizado em páginas personalizadas">
                @if($errors->has('domain'))
                    <span class="help-block">{{$errors->first('domain')}}</span>
                @endif
            </div>

            <div class="col-md-4 form-group {{$errors->has('address_street') ? 'has-error' : ''}}">
                <label for="street">Rua</label>
                <input type="text" value="{{old('address_street',$oka6Client->exists() ? $oka6Client->address_street : '')}}" name="address_street"
                       class="form-control {{$errors->has('address_street') ? 'is-invalid' : ''}}"
                       id="address_street" placeholder="">
                @if($errors->has('address_street'))
                    <span class="help-block">{{$errors->first('address_street')}}</span>
                @endif
            </div>
            <div class="col-md-4 form-group {{$errors->has('address_number') ? 'has-error' : ''}}">
                <label for="street">Número</label>
                <input type="text" value="{{old('address_number',$oka6Client->exists() ? $oka6Client->address_number : '')}}" name="address_number"
                       class="form-control {{$errors->has('address_number') ? 'is-invalid' : ''}}"
                       id="address_number" placeholder="">
                @if($errors->has('address_number'))
                    <span class="help-block">{{$errors->first('address_number')}}</span>
                @endif
            </div>

                <div class="col-md-4 form-group {{$errors->has('address_complement') ? 'has-error' : ''}}">
                <label for="street">Complemento</label>
                <input type="text" value="{{old('address_complement',$oka6Client->exists() ? $oka6Client->address_complement : '')}}" name="address_complement"
                       class="form-control {{$errors->has('address_complement') ? 'is-invalid' : ''}}"
                       id="address_complement" placeholder="">
                @if($errors->has('address_complement'))
                    <span class="help-block">{{$errors->first('address_complement')}}</span>
                @endif
            </div>
            <div class="col-md-4 form-group {{$errors->has('address_neighborhood') ? 'has-error' : ''}}">
                <label for="street">Bairro</label>
                <input type="text" value="{{old('address_neighborhood',$oka6Client->exists() ? $oka6Client->address_neighborhood : '')}}" name="address_neighborhood"
                       class="form-control {{$errors->has('address_neighborhood') ? 'is-invalid' : ''}}"
                       id="address_neighborhood" placeholder="">
                @if($errors->has('address_neighborhood'))
                    <span class="help-block">{{$errors->first('address_neighborhood')}}</span>
                @endif
            </div>

            <div class="col-md-4 form-group {{$errors->has('address_city') ? 'has-error' : ''}}">
                <label for="street">Cidade</label>
                <input type="text" value="{{old('address_city',$oka6Client->exists() ? $oka6Client->address_city : '')}}" name="address_city"
                       class="form-control {{$errors->has('address_city') ? 'is-invalid' : ''}}"
                       id="address_city" placeholder="">
                @if($errors->has('address_city'))
                    <span class="help-block">{{$errors->first('address_city')}}</span>
                @endif
            </div>
            <div class="col-md-4 form-group {{$errors->has('address_state') ? 'has-error' : ''}}">
                <label for="street">Estado</label>
                <?php
                $estadosBrasileiros = array(
                    'AC'=>'Acre',
                    'AL'=>'Alagoas',
                    'AP'=>'Amapá',
                    'AM'=>'Amazonas',
                    'BA'=>'Bahia',
                    'CE'=>'Ceará',
                    'DF'=>'Distrito Federal',
                    'ES'=>'Espírito Santo',
                    'GO'=>'Goiás',
                    'MA'=>'Maranhão',
                    'MT'=>'Mato Grosso',
                    'MS'=>'Mato Grosso do Sul',
                    'MG'=>'Minas Gerais',
                    'PA'=>'Pará',
                    'PB'=>'Paraíba',
                    'PR'=>'Paraná',
                    'PE'=>'Pernambuco',
                    'PI'=>'Piauí',
                    'RJ'=>'Rio de Janeiro',
                    'RN'=>'Rio Grande do Norte',
                    'RS'=>'Rio Grande do Sul',
                    'RO'=>'Rondônia',
                    'RR'=>'Roraima',
                    'SC'=>'Santa Catarina',
                    'SP'=>'São Paulo',
                    'SE'=>'Sergipe',
                    'TO'=>'Tocantins'
                );
                ?>
                <select type="text" name="address_state" class="form-control {{$errors->has('address_state') ? 'is-invalid' : ''}}" id="address_state" placeholder="Estado">
                    @foreach($estadosBrasileiros as $uf=>$nome)
                        <option value="{{$uf}}" {{isset($oka6Client->exists) && $uf==$oka6Client->address_state ? 'selected="selected"' : '' }}>{{$nome}}</option>
                    @endforeach
                </select>
                @if($errors->has('address_state'))
                    <span class="help-block">{{$errors->first('address_state')}}</span>
                @endif
            </div>
            <div class="col-md-4 form-group {{$errors->has('type') ? 'has-error' : ''}}">
                <label for="type">Tipo</label>
                <select type="text" name="type" class="form-control {{$errors->has('type') ? 'is-invalid' : ''}}" id="type" placeholder="Cliente">
                    <option value="CPF" {{$oka6Client->exists() && $oka6Client->type == 'CPF' ? 'selected' : ''}}>Pessoa Física</option>
                    <option value="CNPJ" {{$oka6Client->exists() && $oka6Client->type == 'CNPJ' ? 'selected' : ''}}>Pesoa Júridica</option>
                </select>
                @if($errors->has('type'))
                    <span class="help-block">{{$errors->first('type')}}</span>
                @endif
            </div>


            <div class="col-md-4 form-group {{$errors->has('cpf') ? 'has-error' : ''}}">
                <label for="cpf">CPF</label>
                <input type="text" value="{{old('cpf',$oka6Client->exists() ? $oka6Client->cpf : '')}}" name="cpf"
                       class="form-control {{$errors->has('cpf') ? 'is-invalid' : ''}}"
                       id="cpf" placeholder="xxx.xxx.xxx-xx">
                @if($errors->has('cpf'))
                    <span class="help-block">{{$errors->first('cpf')}}</span>
                @endif
            </div>
            <div class="col-md-4 form-group {{$errors->has('cnpj') ? 'has-error' : ''}}">
                <label for="cnpj">CNPJ</label>
                <input type="text" value="{{old('cnpj',$oka6Client->exists() ? $oka6Client->cnpj : '')}}" name="cnpj"
                       class="form-control {{$errors->has('cnpj') ? 'is-invalid' : ''}}"
                       id="cnpj" placeholder="xx.xxx.xxx/xxxx-xx">
                @if($errors->has('cnpj'))
                    <span class="help-block">{{$errors->first('cnpj')}}</span>
                @endif
            </div>

            <div class="col-md-4 form-group {{$errors->has('social_reason') ? 'has-error' : ''}}">
                <label for="social_reason">Razão Social</label>
                <input type="text" value="{{old('social_reason',$oka6Client->exists() ? $oka6Client->social_reason : '')}}" name="social_reason"
                       class="form-control {{$errors->has('social_reason') ? 'is-invalid' : ''}}"
                       id="social_reason" placeholder="">
                @if($errors->has('social_reason'))
                    <span class="help-block">{{$errors->first('social_reason')}}</span>
                @endif
            </div>

            <div class="col-md-4 form-group {{$errors->has('fantasy_name') ? 'has-error' : ''}}">
                <label for="fantasy_name">Nome Fantasia</label>
                <input type="text" value="{{old('fantasy_name',$oka6Client->exists() ? $oka6Client->fantasy_name : '')}}" name="fantasy_name"
                       class="form-control {{$errors->has('fantasy_name') ? 'is-invalid' : ''}}"
                       id="fantasy_name" placeholder="">
                @if($errors->has('fantasy_name'))
                    <span class="help-block">{{$errors->first('fantasy_name')}}</span>
                @endif
            </div>

            <div class="col-md-4 form-group {{$errors->has('state_register') ? 'has-error' : ''}}">
                <label for="state_register">Inscrição Estadual</label>
                <input type="text" value="{{old('state_register', $oka6Client->exists() ? $oka6Client->state_register : '')}}" name="state_register"
                       class="form-control {{$errors->has('state_register') ? 'is-invalid' : ''}}"
                       id="state_register" placeholder="">
                @if($errors->has('state_register'))
                    <span class="help-block">{{$errors->first('state_register')}}</span>
                @endif
            </div>
            <div class="col-md-4 form-group {{$errors->has('plan_id') ? 'has-error' : ''}}">
                <label for="type">Plano</label>
                <select type="text" name="plan" class="form-control {{$errors->has('plan_id') ? 'is-invalid' : ''}}" id="plan" >
                    @foreach($plans as $plan)
                        <option value="{{$plan->id}}" {{$oka6Client->exists() && $oka6Client->plan_id == $plan->id ? 'selected' : ''}}>{{$plan->name}}</option>
                    @endforeach
                </select>
                @if($errors->has('plan_id'))
                    <span class="help-block">{{$errors->first('plan_id')}}</span>
                @endif
            </div>

            <div class="col-md-12 form-group">

            </div>


            <?php \Carbon\Carbon::setLocale('pt_BR');?>
            @if($oka6Client->exists() && $oka6Client->id)
                <div class="col-md-3 form-group">
                    <div class="card bg-cyan">
                        <div class="d-flex flex-row">
                            <div class="text-white align-self-center p-10">
                                <h3 class="m-b-0">R$ {{$oka6Client->last_payment_value ? $oka6Client->last_payment_value : '0,00'}}</h3>
                                <span>Ultimo valor pago</span>
                            </div>
                            <div class="p-10  ml-auto">
                                <h3 class="text-white box m-b-0"><i class="fas fa-credit-card"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 form-group">
                    <div class="card bg-cyan">
                        <div class="d-flex flex-row">
                            <div class="text-white align-self-center p-10">
                                <h3 class="m-b-0">{{$oka6Client->next_charging_attempt ?  \Carbon\Carbon::createFromTimeStamp(strtotime($oka6Client->next_charging_attempt))->format('d/m/Y') : 'Nenhuma'}}</h3>
                                <span>Próxima tarifação</span>
                            </div>
                            <div class="p-10  ml-auto">
                                <h3 class="text-white box m-b-0"><i class="fas fa-calendar-check"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 form-group">
                    <div class="card bg-cyan">
                        <div class="d-flex flex-row">
                            <div class="text-white align-self-center p-10">
                                <h3 class="m-b-0">R$ {{$oka6Client->total_charging ? $oka6Client->total_charging : '0,00'}}</h3>
                                <span>Total Tarifado</span>
                            </div>
                            <div class="p-10  ml-auto">
                                <h3 class="text-white box m-b-0"><i class="fas fa-money-bill-alt"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-3 form-group">
                    <div class="card bg-cyan">
                        <div class="d-flex flex-row">
                            <div class="text-white align-self-center p-10">
                                <h3 class="m-b-0">{{$oka6Client->current_plan ? $oka6Client->current_plan : 'Nenhum'}} </h3>
                                <span>Plano Atual</span>
                            </div>
                            <div class="p-10  ml-auto">
                                <h3 class="text-white box m-b-0"><i class="fas fa-shopping-cart"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 form-group">
                    <div class="card bg-cyan">
                        <div class="d-flex flex-row">
                            <div class="text-white align-self-center p-10">
                                <h3 class="m-b-0">{{ \Carbon\Carbon::createFromTimeStamp(strtotime($oka6Client->created_at))->diffForHumans() }}</h3>
                                <span>Cliente desde</span>
                            </div>
                            <div class="p-10  ml-auto">
                                <h3 class="text-white box m-b-0"><i class="fas fa-clock"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>
                @foreach($fieldsUpdate as $field)
                    <div class="col-md-3 form-group">
                        <div class="card bg-cyan">
                            <div class="d-flex flex-row">
                                <div class="text-white align-self-center p-10">
                                    <h3 class="m-b-0">{{$oka6Client->{$field['name']} ? $oka6Client->{$field['name']} : 0}}</h3>
                                    <span>{{$field['label']}}</span>
                                </div>
                                <div class="p-10  ml-auto">
                                    <h3 class="text-white box m-b-0"><i class="{{$field['icon']}}"></i></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach

            @endif
            @if($hasSave)
                <div class="col-md-12 form-group">
                    <div class="form-group m-b-0 text-right">
                        <button type="submit" class="btn btn-success">Salvar</button>
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>
<div class="card">
    <div class="card-header bg-amber">
        <h6 class="m-b-0 text-black font-weight-bolder" >Api            <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" class="btn btn-primary m-l-20" ><i class="fa fa-key"></i></a></h6>
    </div>
    <div class="card-body collapse" id="collapseExample">
        <label for="state_register">Access Key</label>
        <input type="text" readonly="readonly" value="{{old('api_key', $oka6Client->exists() ? $oka6Client->api_key : '')}}" name="api_key"
               class="form-control {{$errors->has('api_key') ? 'is-invalid' : ''}}"
               id="api_key" placeholder="">
        @if($errors->has('api_key'))
            <span class="help-block">{{$errors->first('api_key')}}</span>
        @endif
    </div>
</div>

@if($oka6Client->exists() && (int)$oka6Client->id>0)
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
                                <td>Perfil</td>
                                <td>Pagina inicial</td>
                                <td>Ativo</td>
                                <td>Criação</td>
                                <td>Ações</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endif



@if($oka6Client->exists() && (int)$oka6Client->id>0)

    <div class="card">
        <div class="card-header bg-amber">
            <h6 class="m-b-0 text-black font-weight-bolder">Transações de Pagamento</h6>
        </div>
        <div class="card-body ">
            <div class="row">
                <div class="col-md-12 text-right mb-2">
                    <button type="button" class="btn btn-primary" id="addPayment"><i class="fas fa-plus"></i>
                        Adicionar pagamento
                    </button>
                </div>
                <div class="col-md-12">
                    <table id="table_transactions" class="table table-striped table-bordered" >
                        <thead>
                        <tr class="center">
                            <td role="row">#</td>
                            <td>Data</td>
                            <td>Tipo</td>
                            <td>Status</td>
                            <td>Valor</td>
                            <td>Plano</td>
                            <td>Validade(Dias)</td>
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
                    <h5 class="modal-title">Usuário</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4 form-group">
                            <label for="title">Nome</label>
                            <input type="text" class="form-control" value="" name="nameUser" id="nameUser">
                            <input type="hidden"  value="" name="idUser" id="idUser">
                        </div>

                        <div class="col-md-4 form-group">
                            <label for="slug">Sobrenome</label>
                            <input type="text" value="" name="lastname" class="form-control" id="lastname">
                        </div>

                        <div class="col-md-4 form-group">
                            <label for="slug">Celular</label>
                            <input type="text" value="" name="cellPhoneUser" class="form-control" id="cellPhoneUser" placeholder="(xx) xxxxx-xxxx" >
                        </div>

                        <div class="col-md-5 form-group">
                            <label for="slug">E-mail</label>
                            <input type="email" value="" name="emailUser" class="form-control" id="emailUser">
                        </div>
                        <div class="col-md-3 form-group">
                            <label for="active">Status</label>
                            <select type="text" name="activeUser" class="form-control" id="activeUser" >
                                <option value="1">Ativo</option>
                                <option value="0">Desativado</option>
                            </select>

                        </div>
                        <div class="col-md-4 form-group">
                            <label for="active">Perfil</label>
                            <select class="form-control" id="selectProfile" name="profileId" placeholder="Profile">
                                @foreach ($profiles as $key => $profile)
                                    <option name="profile_id"  value="{{$profile->id}}">{{$profile->name}} </option>
                                @endforeach
                            </select>
                        </div>

                        <div class="col-md-4 form-group">
                            <label for="active">Página incial</label>
                            <select class="form-control" id="selectResourceDefault" name="resourceDefaultId">
                            </select>
                        </div>

                        <div class="col-md-4 form-group">
                            <label for="slug">Senha</label>
                            <input type="password" name="password" class="form-control" id="password" value="">
                        </div>

                        <div class="col-md-4 form-group">
                            <label for="slug">Confirmar Senha</label>
                            <input type="password" name="passwordConfirmation" class="form-control" id="passwordConfirmation" value="">
                        </div>


                    </div>
                </div>
                <div class="modal-footer">
                    <div class="row" style="width: 100%">
                        <div class="col-md-12 text-right">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" id="saveUser" class="btn btn-success">Salvar</button>
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

                    <h5 class="modal-title">Solicitar Pagamento</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card">
                        <div class="card-body">
                            <small>Plano Atual</small>
                            <h5 class="card-title" id="planName"></h5>
                            <small>Descrição</small>
                            <p id="planDescription"></p>
                            <small>Tipo</small>
                            <p id="planType"></p>
                            @foreach($fieldsUpdate as $field)
                                <p>
                                    <i class="{{$field['icon']}}"></i>
                                    {{$field['label']}} : <span class="specificFields" id="{{$field['name']}}"></span>
                                </p>

                            @endforeach
                            <hr>
                            <small>Valor</small>
                            <h4 id="planValue"></h4>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="padding-left: 0;">
                    <div class="row" style="width: 100%">
                        <div class="col-md-12 text-right">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" id="savePay" class="btn btn-success" data-id="{{$oka6Client->id}}">Solicitar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endif
@section('style_head')
    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/sweetalert2.css')}}">
    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/select2.css')}}">
    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/datatables.css')}}">

    <style>
        form .card-body{padding: 10px 0px;}
        .modal-dialog{width: 90%; max-width: 1000px;}
        .select2-selection.select2-selection--single{height: 32px;}
        .select2-container--default .select2-results__option--highlighted[aria-selected] {
            background-color: #fff;
            color: black;
        }

        [data-toggle=collapse].collapsed .fa:before {
            content: "\f0c5";
        }

        [data-toggle=collapse] .fa:before {
            content: "\f0c5";
        }

    </style>
@endsection
@section('script_footer_end')
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/sweetalert2.js')}}></script>
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/select2.js')}}></script>
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/forms.js')}}></script>
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/datatables.js')}}></script>

    <script>
        var selectedOption      = 0;
        var resourceDefaultId   = 0;
        var imageAvatar         = '/vendor/oka6/admin/nice-admin/assets/images/users/user_avatar.svg';
        var clientID            = '{{$oka6Client->exists() && $oka6Client->id ? $oka6Client->id : 0}}';
        var urlSaveUser         = '{{route('admin.client.user.save', [':idClient'])}}';
        var urlGetUser          = '{{route('admin.client.user.get', [':idClient'])}}';
        var urlPaymentReq       = '{{route('admin.client.payment.request.get', [':idClient'])}}';
        var urlPaymentCur       = '{{route('admin.client.payment.current.get', [':idClient'])}}';
        var urlWalletTrans      = '{{route('admin.client.wallet.transaction.get', [':idClient'])}}';
        var urlSearchUser       = '{{route('admin.client.search.user')}}';

        urlGetUser              = urlGetUser.replace(':idClient', clientID);
        urlWalletTrans          = urlWalletTrans.replace(':idClient', clientID);
        var resetFormUser       = false;
        $(document).ready(function () {
            $('#phone').mask('(00) 0000-0000');
            $('#cellphone').mask('(00) 00000-0000');
            $('#cellPhoneUser').mask('(00) 00000-0000');
            $('#cpf').mask('000.000.000-00');
            $('#cnpj').mask('00.000.000/0000-00',{reverse: true});
            $('#birthday').mask('00/00/0000',{reverse: true});
            var tableUser =
                $('#table_users').DataTable({
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
                ajax: urlGetUser,
                columns: [
                    {data: "id", 'name': 'id', searchable: false},
                    {data: "name", 'name': 'name'},
                    {data: "email", 'name': 'email'},
                    {data: 'cell_phone', 'name': 'cell_phone'},
                    {data: "profileName", 'name': 'profileName'},
                    {data: "resourceName", 'name': 'resourceName'},
                    {data: 'active', 'name': 'active', render:function(data){
                            return data==1 ? '<span class="label label-success">Habilitado </span>' : '<span class="label label-danger">Desabilitado </span>';
                    }},

                    {data: "created_at", 'name': 'created_at'},

                    {
                        data: null, searchable: false, orderable: false, render: function (data, row) {
                            var   edit_button = '<span class="btn btn-xs btn-secondary editUser" data-id="'+data.id+'" role="button" aria-pressed="true"><b>Editar</b></span>';
                            return edit_button
                        }
                    }
                ],
                drawCallback: function( settings ) {
                    $('.editUser').off('click').click(function(){
                        var idUser      = $(this).attr('data-id');
                        openModalUser(idUser);
                    });
                }
            });

            var tableTransacrtions =
                $('#table_transactions').DataTable({
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
                    ajax: urlWalletTrans,

                    columns: [
                        {data: "id", 'name': 'id', searchable: false},
                        {data: "created_at", 'name': 'created_at'},
                        {data: "plan_type", 'name': 'plan_type'},
                        {data: 'status', 'name': 'status', render:function(data, info, row){
                                if(data=="pending"){
                                    return '<span class="label label-info">'+row['status_description']+' </span>';
                                }else if(data=="success" || data=="complete" ){
                                    return '<span class="label label-success">'+row['status_description']+' </span>';
                                }else{
                                    return '<span class="label label-danger">'+row['status_description']+' </span>';
                                }
                        }},
                        {data: "value", 'name': 'value'},
                        {data: 'plan_name', 'name': 'plan_name'},
                        {data: "recurrence_days", 'name': 'recurrence_days'},

                    ],
                    drawCallback: function( settings ) {
                        $('.editUser').off('click').click(function(){
                            var idUser      = $(this).attr('data-id');
                            openModalUser(idUser);
                        });
                    }
                });

            function showTypeUser(){
               if($('#type').val()=='CPF'){
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
            });
            showTypeUser();

            $("select#user_id").select2({
                allowClear: true,
                width: 'calc(100% - 40px)',
                ajax: {
                    url: urlSearchUser,
                    type:'post',
                    dataType: 'json',
                    delay: 250,
                    data: function (params) {
                        return {
                            query: params.term
                        };
                    },
                    processResults: function (data) {
                        return {
                            results: data.options
                        };
                    },
                    error:function(){
                        toastr.error(erro.responseJSON.message, 'Erro', { timeOut: 3000 });
                    },
                    cache: true
                },
                placeholder: 'Busca de usuários',
                escapeMarkup: function (markup) { return markup; },
                minimumInputLength: 3,
                templateResult: formatUser,
                templateSelection: formatUserSelection
            });
            function formatUser (user) {
                if (user.loading) {
                    return user.name;
                }
                var markup = '<div class="select2-result-repository clearfix ">' +
                    '<div class="select2-result-repository__avatar float-left mr-2"><span class="round">UserImage</span></div>';
                markup += '<div class="select2-result-repository__statistics float-left  mr-2">' +
                    '<div class="select2-result-repository__forks"><i class="fa fa-info-circle"></i> ' + user.name + '</div>' +
                    '<div class="select2-result-repository__forks"><i class="fa fa-hourglass-start"></i> ' + user.email + '</div>' +
                    '</div>';
                markup +='</div>'
                return markup;
            }

            function formatUserSelection (user) {
                $('#user_name').val(user.text ? user.text : user.name);
                return user.text ? user.text : user.name;
            }
            $('#addUser').click(function(){
                openModalUser();
            });
            var openModalUser = function(idUser){
                if(idUser){
                    resetFormUser = true;
                    $('#idUser').val(idUser);
                    var url = urlGetUser.replace(':idClient', clientID);
                    url+='?id='+idUser;

                    $.ajax({
                        url: url,
                        type: "get",
                        dataType: 'json',
                        beforeSend: function () {

                        },
                        success: function (data) {
                            var resultData = data.data;
                            if(resultData[0]){
                                var dataUser = resultData[0];
                                $('#nameUser').val(dataUser.name);
                                $('#lastname').val(dataUser.lastname);
                                $('#cellPhoneUser').val(dataUser.cell_phone);
                                $('#emailUser').val(dataUser.email);
                                $('#activeUser').val(dataUser.active);
                                $('#password').val('');
                                $('#passwordConfirmation').val('');
                                $('#modalUser').modal('show');
                                getResourcesByProfileId(dataUser.profile_id, dataUser.resource_default_id);


                            }

                        },
                        error: function (erro) {
                            toastr["error"](erro.responseJSON.message, "Error");

                        }
                    })
                }else{
                    if(resetFormUser){
                        resetFormUser = false;
                        $('#idUser').val('')
                        $('#nameUser').val('');
                        $('#lastname').val('');
                        $('#cellPhoneUser').val('');
                        $('#emailUser').val('');
                        $('#activeUser').val(1);
                        $('#password').val('');
                        $('#passwordConfirmation').val('');
                    }
                    getResourcesByProfileId($('#selectProfile').val());
                    $('#modalUser').modal('show');
                }

            };

            $('#saveUser').click(function(){
                var dataPost = {
                  'id'                  : $('#idUser').val(),
                  'name'                : $('#nameUser').val(),
                  'lastname'            : $('#lastname').val(),
                  'cell_phone'          : $('#cellPhoneUser').val(),
                  'email'               : $('#emailUser').val(),
                  'profile_id'          : $('#selectProfile').val(),
                  'active'              : $('#activeUser').val(),
                  'resource_default_id' : $('#selectResourceDefault').val(),
                  'password'            : $('#password').val(),
                  'password_confirm'    : $('#passwordConfirmation').val(),
                };
                var error='';
                if(dataPost['name'].length<2){
                    error+='Prencha o nome do usuário<br/>';
                    $('#nameUser').closest('.form-group').addClass('error');
                }else{
                    $('#nameUser').closest('.form-group').removeClass('error');
                }

                if(dataPost['lastname'].length<2){
                    error+='Prencha o sobrenome do usuário<br/>';
                    $('#lastname').closest('.form-group').addClass('error');
                }else{
                    $('#lastname').closest('.form-group').removeClass('error');
                }

                if(dataPost['email'].length<2){
                    error+='Prencha o email do usuário<br/>';
                    $('#emailUser').closest('.form-group').addClass('error');
                }else{
                    $('#emailUser').closest('.form-group').removeClass('error');
                }

                if(!dataPost['profile_id']){
                    error+='Selecione um perfil<br/>';
                    $('#selectProfile').closest('.form-group').addClass('error');
                }else{
                    $('#selectProfile').closest('.form-group').removeClass('error');
                }

                if(!dataPost['resource_default_id']){
                    error+='Selecione a página padrãol<br/>';
                    $('#selectResourceDefault').closest('.form-group').addClass('error');
                }else{
                    $('#selectResourceDefault').closest('.form-group').removeClass('error');
                }

                if(dataPost['id']=="" && dataPost['password'].length<4){
                    error+='Preencha a senha com no minimo 4 caracteres<br/>';
                    $('#password').closest('.form-group').addClass('error');
                }else{
                    if(dataPost['password']!=dataPost['password_confirm']){
                        error+='As senhas são diferentes<br/>';
                        $('#password').closest('.form-group').addClass('error');
                        $('#passwordConfirmation').closest('.form-group').addClass('error');
                    }else{
                        $('#password').closest('.form-group').removeClass('error');
                        $('#passwordConfirmation').closest('.form-group').removeClass('error');
                    }
                }

                if(error){
                    toastr["error"](error, "Error");
                    return false
                }

                var url = urlSaveUser.replace(':idClient', clientID);
                if(Number(dataPost['id'])>0){
                    url+='/'+dataPost['id'];
                }

                $.ajax({
                    url: url,
                    type: "post",
                    dataType: 'json',
                    data: dataPost,
                    beforeSend: function () {

                    },
                    success: function (data) {
                        resetFormUser = true;
                        $('#modalUser').modal('hide');
                        toastr["success"]('Usuário cadastrado com sucesso', "Sucesso");
                        tableUser.draw();

                    },
                    error: function (erro) {

                        toastr["error"](erro.responseJSON.message, "Error");

                    }
                })

            });

            $(document).on('change', '#selectProfile', function () {
                var valueProfile = this.value;
                getResourcesByProfileId(valueProfile);
            }).trigger('change');

            function getResourcesByProfileId(id, resourceDefaultId) {
                var url = '{{route('admin.users.resourcesDefault', [':id'])}}';
                url     = url.replace(':id', id)
                if(id==""){
                    $('#selectResourceDefault').empty();
                    return false;
                }
                $.ajax({
                    url: url,
                    type: "get",
                    dataType: 'json',
                    beforeSend: function () {

                    },
                    success: function (data) {
                        populateResourcesDefault(data, resourceDefaultId);


                    },
                    error: function (erro) {
                        console.log(erro.responseJSON.message);
                        toastr["error"](erro.responseJSON.message, "Error");

                    }
                })
            }

            function populateResourcesDefault(arrayResources, resourceDefaultId) {
                var jsonData = arrayResources;
                var selectResources = $('#selectResourceDefault');
                $('#selectResourceDefault').empty();

                jsonData.forEach((function (element) {
                    $('#selectResourceDefault').append(`<option ${element.id == resourceDefaultId ? 'selected="selected"' : ''} value="${element.id}">${element.menu}</option>`);
                }))
            }
            function readURL(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('#profile-img').attr('src', e.target.result);
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }
            $("#uploaded_file").change(function(){
                readURL(this);
            });

            $('#addPayment').click(function(){
                var url = urlPaymentCur.replace(':idClient', clientID);
                $.ajax({
                    url: url,
                    type: "get",
                    dataType: 'json',
                    beforeSend: function () {

                    },
                    success: function (result) {
                        var resultData = result.data;
                        if(resultData.type!="manual" ){
                            toastr["info"]('Não é possivel adicionar pagamentos maniais para '+resultData.type+'', "Info");
                            return;
                        }
                        $('#planName').html(resultData.name);
                        $('#planDescription').html(resultData.description);
                        $('#planType').html(resultData.type);
                        $('#planValue').html('R$ '+resultData.value);
                        $('#modalPayment').modal('show');
                        $('.specificFields').each(function(){
                            var id = this.id;
                            if(resultData[id]){
                                $('#'+id).html(resultData[id]);
                            }
                        });

                        $('#savePay').off('click').click(function () {
                            var url = urlPaymentReq.replace(':idClient', clientID);
                            $.ajax({
                                url: url,
                                type: "get",
                                dataType: 'json',
                                beforeSend: function () {

                                },
                                success: function (result) {
                                    $('#modalPayment').modal('hide');
                                    toastr["success"]('Solicitação cadastrada com sucesso', "Sucesso");
                                    tableTransacrtions.draw();
                                },
                                error: function (erro) {
                                    toastr["error"](erro.responseJSON.message, "Error");
                                }
                            });
                        });

                    },
                    error: function (erro) {
                        toastr["error"](erro.responseJSON.message, "Error");

                    }
                });

            });
        });
    </script>

@endsection
