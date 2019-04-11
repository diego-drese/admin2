<div class="card">
    <div class="card-header bg-amber">
        <h6 class="m-b-0 text-black font-weight-bolder">Dados do cliente</h6>
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
                       id="phone" placeholder="(xx) xxx-xxxx">
                @if($errors->has('phone'))
                    <span class="help-block">{{$errors->first('phone')}}</span>
                @endif
            </div>
            <div class="col-md-6 form-group {{$errors->has('cellphone') ? 'has-error' : ''}}">
                <label for="cellphone">Celular</label>
                <input type="text" value="{{old('cellphone',$negotiateClient->exists() ? $negotiateClient->cellphone : '')}}" name="cellphone"
                       class="form-control {{$errors->has('cellphone') ? 'is-invalid' : ''}}"
                       id="cellphone" placeholder="(xx) xxxx-xxxx">
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
                <label for="type">Usuário Administrador</label>
                @if($user->profile_id==\Negotiate\Admin\User::PROFILE_ID_ROOT)
                    <select type="text" name="user_id" class="form-control {{$errors->has('type') ? 'is-invalid' : ''}}" id="user_id" >
                        @if($negotiateClient->exists() && $negotiateClient->user_id)
                            <option value="{{$negotiateClient->user_id}}">{{$negotiateClient->user_name}}</option>
                        @endif
                    </select>
                    <input type="hidden" value="{{$negotiateClient->exists() && $negotiateClient->user_id ? $negotiateClient->user_name : ''}}" name="user_name" class="form-control" id ="user_name">
                @else
                    <input type="text" value="{{$user->name}}" name="user_name" class="form-control" id="user_name" disabled>
                    <input type="hidden" value="{{$user->id}}" name="user_id" class="form-control" id="user_id" >
                @endif

                @if($errors->has('type'))
                    <span class="help-block">{{$errors->first('type')}}</span>
                @endif
            </div>

            <div class="col-md-6 form-group {{$errors->has('type') ? 'has-error' : ''}}">
                <label for="type">Tipo</label>
                <select type="text" name="type" class="form-control {{$errors->has('type') ? 'is-invalid' : ''}}" id="type" placeholder="Cliente">
                    <option value="CPF" {{$negotiateClient->exists() && $negotiateClient->type == 'CPF' ? 'selected' : ''}}>Pessoa Física</option>
                    <option value="CNPJ" {{$negotiateClient->exists() && $negotiateClient->type == 'CNPJ' ? 'selected' : ''}}>Pesoa Júridica</option>
                </select>
                @if($errors->has('type'))
                    <span class="help-block">{{$errors->first('type')}}</span>
                @endif
            </div>


            <div class="col-md-6 form-group {{$errors->has('cpf') ? 'has-error' : ''}}">
                <label for="cpf">CPF</label>
                <input type="text" value="{{old('cpf',$negotiateClient->exists() ? $negotiateClient->cpf : '')}}" name="cpf"
                       class="form-control {{$errors->has('cpf') ? 'is-invalid' : ''}}"
                       id="cpf" placeholder="xxx.xxx.xxx-xx">
                @if($errors->has('cpf'))
                    <span class="help-block">{{$errors->first('cpf')}}</span>
                @endif
            </div>
            <div class="col-md-6 form-group {{$errors->has('cnpj') ? 'has-error' : ''}}">
                <label for="cnpj">CNPJ</label>
                <input type="text" value="{{old('cnpj',$negotiateClient->exists() ? $negotiateClient->cnpj : '')}}" name="cnpj"
                       class="form-control {{$errors->has('cnpj') ? 'is-invalid' : ''}}"
                       id="cnpj" placeholder="xx.xxx.xxx/xxxx-xx">
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
                <input type="text" value="{{old('state_register', $negotiateClient->exists() ? $negotiateClient->state_register : '')}}" name="state_register"
                       class="form-control {{$errors->has('state_register') ? 'is-invalid' : ''}}"
                       id="state_register" placeholder="">
                @if($errors->has('state_register'))
                    <span class="help-block">{{$errors->first('state_register')}}</span>
                @endif
            </div>
            @if($negotiateClient->exists() && $negotiateClient->id)
                @php(\Carbon\Carbon::setLocale('pt_BR'))
                @endphp
                <div class="col-md-4 form-group">
                    <div class="card bg-cyan">
                        <div class="d-flex flex-row">
                            <div class="text-white align-self-center p-10">
                                <h3 class="m-b-0">R$ {{$negotiateClient->last_payment_value ? $negotiateClient->last_payment_value : '0,00'}}</h3>
                                <span>Ultimo valor pago</span>
                            </div>
                            <div class="p-10  ml-auto">
                                <h3 class="text-white box m-b-0"><i class="fas fa-credit-card"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 form-group">
                    <div class="card bg-cyan">
                        <div class="d-flex flex-row">
                            <div class="text-white align-self-center p-10">
                                <h3 class="m-b-0">{{$negotiateClient->current_plan ? $negotiateClient->current_plan : 'Nenhum'}} </h3>
                                <span>Plano Atual</span>
                            </div>
                            <div class="p-10  ml-auto">
                                <h3 class="text-white box m-b-0"><i class="fas fa-shopping-cart"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 form-group">
                    <div class="card bg-cyan">
                        <div class="d-flex flex-row">
                            <div class="text-white align-self-center p-10">
                                <h3 class="m-b-0">{{$negotiateClient->total_scheduling_remaining ? $negotiateClient->total_scheduling_remaining : 0}}</h3>
                                <span>Agendamentos restantes</span>
                            </div>
                            <div class="p-10  ml-auto">
                                <h3 class="text-white box m-b-0"><i class="fas fa-calendar-alt"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 form-group">
                    <div class="card bg-cyan">
                        <div class="d-flex flex-row">
                            <div class="text-white align-self-center p-10">
                                <h3 class="m-b-0">{{$negotiateClient->next_charging_attempt ? \Carbon\Carbon::createFromTimeStamp(strtotime($negotiateClient->next_charging_attempt))->format('d/m/Y') : 'Nenhuma'}}</h3>
                                <span>Próxima tarifação</span>
                            </div>
                            <div class="p-10  ml-auto">
                                <h3 class="text-white box m-b-0"><i class="fas fa-calendar-check"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 form-group">
                    <div class="card bg-cyan">
                        <div class="d-flex flex-row">
                            <div class="text-white align-self-center p-10">
                                <h3 class="m-b-0">R$ {{$negotiateClient->total_charging ? $negotiateClient->total_charging : '0,00'}}</h3>
                                <span>Total Tarifado</span>
                            </div>
                            <div class="p-10  ml-auto">
                                <h3 class="text-white box m-b-0"><i class="fas fa-money-bill-alt"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 form-group">
                    <div class="card bg-cyan">
                        <div class="d-flex flex-row">
                            <div class="text-white align-self-center p-10">
                                <h3 class="m-b-0">{{ \Carbon\Carbon::createFromTimeStamp(strtotime($negotiateClient->created_at))->diffForHumans()}}</h3>
                                <span>Cliente desde</span>
                            </div>
                            <div class="p-10  ml-auto">
                                <h3 class="text-white box m-b-0"><i class="fas fa-clock"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>
            @endif
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

                        <div class="col-md-6 form-group">
                            <label for="slug">E-mail</label>
                            <input type="email" value="" name="emailUser" class="form-control" id="emailUser">
                        </div>
                        <div class="col-md-6 form-group">
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

                        <div class="col-md-6 form-group">
                            <label for="title">&nbsp;</label>
                            <div class="input-group">
                                  <span class="input-group-btn">
                                   <span class="btn btn-primary" onclick="$(this).parent().find('input[type=file]').click();">Selecionar</span>
                                   <input id="uploaded_file" name="uploaded_file" onchange="$(this).parent().parent().find('.form-control').html($(this).val().split(/[\\|/]/).pop());" style="display: none;" type="file">
                                  </span>
                                <span class="form-control"></span>
                            </div>
                        </div>
                        <div class="col-md-6 form-group text-center">
                            <label for="title">Preview</label><br/>
                            <img id="profile-img" src="/vendor/negotiate/admin/nice-admin/assets/images/users/user_avatar.svg" width="88" height="88">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="row" style="width: 100%">
                        <div class="col-md-12 text-right">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" id="saveUser" class="btn btn-primary">Salvar</button>
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
@section('style_head')
    <link rel="stylesheet" href="/vendor/negotiate/admin/nice-admin/css/sweetalert2.css">
    <link rel="stylesheet" href="/vendor/negotiate/admin/nice-admin/css/select2.css">
    <style>
        #modalEvent .modal-dialog{width: 90%; max-width: 1000px;}
        .select2-selection.select2-selection--single{height: 32px;}
        .select2-container--default .select2-results__option--highlighted[aria-selected] {
            background-color: #fff;
            color: black;
        }
    </style>
@endsection
@section('script_footer_end')
    <script type="text/javascript" src="/vendor/negotiate/admin/nice-admin/js/sweetalert2.js"></script>
    <script type="text/javascript" src="/vendor/negotiate/admin/nice-admin/js/select2.js"></script>
    <script type="text/javascript" src="/vendor/negotiate/admin/nice-admin/js/forms.js"></script>
    <script>
        var selectedOption      = 0;
        var resourceDefaultId   = 0;
        var imageAvatar         = '/vendor/negotiate/admin/nice-admin/assets/images/users/user_avatar.svg';
        var clientID            = '{{$negotiateClient->exists() && $negotiateClient->id ? $negotiateClient->id : 0}}';
        var urlSaveUser         = '{{route('admin.client.user.save', [':idClient'])}}';
        var showEdit            = false;
        $(document).ready(function () {
            $('#phone').mask('(00) 0000-0000');
            $('#cellphone').mask('(00) 00000-0000');
            $('#cellPhoneUser').mask('(00) 00000-0000');
            $('#cpf').mask('000.000.000-00');
            $('#cnpj').mask('00.000.000/0000-00',{reverse: true});
            $('#birthday').mask('00/00/0000',{reverse: true});

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
            var urlSearchUser = '{{route('admin.client.search.user')}}';
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
                if(showEdit){
                    $('#nameUser').val('');
                    $('#lastname').val('');
                    $('#cellPhoneUser').val('');
                    $('#emailUser').val('');
                    $('#password').val('');
                    $('#passwordConfirmation').val('');
                    $('#profile-img').attr('src', imageAvatar);
                }
                getResourcesByProfileId($('#selectProfile').val());
                $('#modalUser').modal('show');
            });
            $('#saveUser').click(function(){
                var dataPost = {
                  'id'                  : $('#idUser').val(),
                  'name'                : $('#nameUser').val(),
                  'lastname'            : $('#lastname').val(),
                  'cell_phone'          : $('#cellPhone').val(),
                  'email'               : $('#emailUser').val(),
                  'profile_id'          : $('#selectProfile').val(),
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

                if(dataPost['password'].length<4){
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
                    beforeSend: function () {

                    },
                    success: function (data) {
                        toastr["success"]('Usuário cadastrado com sucesso', "Sucesso");

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

            function getResourcesByProfileId($id) {
                var url = '{{route('admin.users.resourcesDefault', [':id'])}}';
                url     = url.replace(':id', $id)
                if($id==""){
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
                        populateResourcesDefault(data);


                    },
                    error: function (erro) {
                        console.log(erro.responseJSON.message);
                        toastr["error"](erro.responseJSON.message, "Error");

                    }
                })
            }

            function populateResourcesDefault(arrayResources) {
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
                $('#modalPayment').modal('show');
            });
        });
    </script>

@endsection