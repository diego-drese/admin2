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

    <div class="col-md-6 form-group {{$errors->has('address_street') ? 'has-error' : ''}}">
        <label for="street">Rua</label>
        <input type="text" value="{{old('address_street',$negotiateClient->exists() ? $negotiateClient->address_street : '')}}" name="address_street"
               class="form-control {{$errors->has('address_street') ? 'is-invalid' : ''}}"
               id="address_street" placeholder="">
        @if($errors->has('address_street'))
            <span class="help-block">{{$errors->first('address_street')}}</span>
        @endif
    </div>
    <div class="col-md-6 form-group {{$errors->has('address_number') ? 'has-error' : ''}}">
            <label for="street">Número</label>
            <input type="text" value="{{old('address_number',$negotiateClient->exists() ? $negotiateClient->address_number : '')}}" name="address_number"
                   class="form-control {{$errors->has('address_number') ? 'is-invalid' : ''}}"
                   id="address_number" placeholder="">
            @if($errors->has('address_number'))
                <span class="help-block">{{$errors->first('address_number')}}</span>
            @endif
        </div>
    <div class="col-md-6 form-group {{$errors->has('address_neighborhood') ? 'has-error' : ''}}">
        <label for="street">Bairro</label>
        <input type="text" value="{{old('address_neighborhood',$negotiateClient->exists() ? $negotiateClient->address_neighborhood : '')}}" name="address_neighborhood"
               class="form-control {{$errors->has('address_neighborhood') ? 'is-invalid' : ''}}"
               id="address_neighborhood" placeholder="">
        @if($errors->has('address_neighborhood'))
            <span class="help-block">{{$errors->first('address_neighborhood')}}</span>
        @endif
    </div>

    <div class="col-md-6 form-group {{$errors->has('address_city') ? 'has-error' : ''}}">
        <label for="street">Cidade</label>
        <input type="text" value="{{old('address_city',$negotiateClient->exists() ? $negotiateClient->address_city : '')}}" name="address_city"
               class="form-control {{$errors->has('address_city') ? 'is-invalid' : ''}}"
               id="address_city" placeholder="">
        @if($errors->has('address_city'))
            <span class="help-block">{{$errors->first('address_city')}}</span>
        @endif
    </div>
        <div class="col-md-6 form-group {{$errors->has('address_state') ? 'has-error' : ''}}">
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
            <select type="text" name="address_state" class="form-control {{$errors->has('address_state') ? 'is-invalid' : ''}}" id="type" placeholder="Estado">
                @foreach($estadosBrasileiros as $uf=>$nome)
                    <option value="{{$uf}}" {{isset($negotiateClient->exists) && $uf==$negotiateClient->address_state ? 'selected="selected"' : '' }}>{{$nome}}</option>
                @endforeach
            </select>
            @if($errors->has('address_state'))
                <span class="help-block">{{$errors->first('address_state')}}</span>
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
        });
    </script>

@endsection