<div class="col-md-6 form-group {{$errors->has('active') ? 'has-error' : ''}}">
    <label for="active">Status</label>
    <select type="text" name="active" class="form-control" id="active" placeholder="do usuário">
        <option value="1">Ativo</option>
        <option value="0" {{$negotiateClient->exists() && $negotiateClient->active == 0 ? 'selected' : ''}}>Desativado</option>
    </select>
    @if($errors->has('active'))
        <span class="help-block">{{$errors->first('active')}}</span>
    @endif
</div>

{{--@if($negotiateClient->exists && Auth::User()->id == $negotiateClient->id)--}}
    {{--<div class="col-md-4 form-group">--}}
        {{--<label for="active">My Profile</label>--}}
        {{--<input type="text" value="{{Auth::User()->profile->name}}" name="onlyInfo" class="form-control" id="onlyInfo" disabled>--}}
    {{--</div>--}}
{{--@else--}}
    {{--<div class="col-md-4 form-group {{$errors->has('profile') ? 'has-error' : ''}}">--}}
        {{--<label for="active">Profile</label>--}}
        {{--<select class="form-control" id="selectProfile" name="profile_id" placeholder="">--}}
            {{--@foreach ($profiles as $key => $profile)--}}
                {{--<option name="profile_id"  @if($negotiateClient->exists){{$negotiateClient->profile_id==$profile->id ? 'selected="selected"' : ''}} @endif value="{{$profile->id}}">{{$profile->name}} </option>--}}
            {{--@endforeach--}}
        {{--</select>--}}
    {{--</div>--}}
{{--@endif--}}


<div class="col-md-6 form-group {{$errors->has('name') ? 'has-error' : ''}} ">
    <label for="title">Nome</label>
    <input type="text" class="form-control" value="{{old('name',$negotiateClient->exists() ? $negotiateClient->name : '')}}" name="name"
           id="name" placeholder="">
    @if($errors->has('name'))
        <span class="help-block">{{$errors->first('name')}}</span>
    @endif
</div>
<div class="col-md-8 form-group {{$errors->has('email') ? 'has-error' : ''}}">
    <label for="slug">E-mail</label>
    <input type="email" value="{{old('email',$negotiateClient->email)}}" name="email" class="form-control"
           id="email" placeholder="">
    @if($errors->has('email'))
        <span class="help-block">{{$errors->first('email')}}</span>
    @endif
</div>
<div class="col-md-6 form-group {{$errors->has('phone') ? 'has-error' : ''}}">
    <label for="phone">Telefone</label>
    <input type="text" value="{{old('phone',$negotiateClient->exists() ? $negotiateClient->phone : '')}}" name="phone"
           class="form-control"
           id="phone" placeholder="">
    @if($errors->has('phone'))
        <span class="help-block">{{$errors->first('phone')}}</span>
    @endif
</div>
<div class="col-md-6 form-group {{$errors->has('cellphone') ? 'has-error' : ''}}">
    <label for="cellphone">Celular</label>
    <input type="text" value="{{old('cellphone',$negotiateClient->exists() ? $negotiateClient->cellphone : '')}}" name="cellphone"
           class="form-control"
           id="cellphone" placeholder="">
    @if($errors->has('cellphone'))
        <span class="help-block">{{$errors->first('cellphone')}}</span>
    @endif
</div>
<div class="col-md-6 form-group {{$errors->has('type') ? 'has-error' : ''}}">
    <label for="type">Tipo</label>
    <select type="text" name="type" class="form-control" id="type" placeholder="Cliente">
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
           class="form-control"
           id="cpf" placeholder="">
    @if($errors->has('cpf'))
        <span class="help-block">{{$errors->first('cpf')}}</span>
    @endif
</div>
<div class="col-md-6 form-group {{$errors->has('cnpj') ? 'has-error' : ''}}">
    <label for="cnpj">CNPJ</label>
    <input type="text" value="{{old('cnpj',$negotiateClient->exists() ? $negotiateClient->cnpj : '')}}" name="cnpj"
           class="form-control"
           id="cnpj" placeholder="">
    @if($errors->has('cnpj'))
        <span class="help-block">{{$errors->first('cnpj')}}</span>
    @endif
</div>

<div class="col-md-6 form-group {{$errors->has('social_reason') ? 'has-error' : ''}}">
    <label for="social_reason">Razão Social</label>
    <input type="text" value="{{old('social_reason',$negotiateClient->exists() ? $negotiateClient->social_reason : '')}}" name="social_reason"
           class="form-control"
           id="social_reason" placeholder="">
    @if($errors->has('social_reason'))
        <span class="help-block">{{$errors->first('social_reason')}}</span>
    @endif
</div>

<div class="col-md-6 form-group {{$errors->has('fantasy_name') ? 'has-error' : ''}}">
    <label for="fantasy_name">Nome Fantasia</label>
    <input type="text" value="{{old('fantasy_name',$negotiateClient->exists() ? $negotiateClient->fantasy_name : '')}}" name="fantasy_name"
           class="form-control"
           id="fantasy_name" placeholder="">
    @if($errors->has('fantasy_name'))
        <span class="help-block">{{$errors->first('fantasy_name')}}</span>
    @endif
</div>

<div class="col-md-6 form-group {{$errors->has('state_register') ? 'has-error' : ''}}">
    <label for="state_register">Inscrição Estadual</label>
    <input type="text" value="{{old('state_register',$negotiateClient->exists() ? $negotiateClient->state_register : '')}}" name="state_register"
           class="form-control"
           id="state_register" placeholder="">
    @if($errors->has('state_register'))
        <span class="help-block">{{$errors->first('state_register')}}</span>
    @endif
</div>

@if($hasSave)
    <div class="clearfix"></div>
    <div class="col-md-4">
        <button type="submit" class="btn btn-success">Save</button>
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
        });
    </script>

@endsection