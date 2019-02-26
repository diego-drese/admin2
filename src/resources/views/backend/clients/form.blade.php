<?php

/**
$collection->background(["name"]);
$collection->background(["type"]);
$collection->background(["id_user_system"]);
$collection->background(["cpf"]);
$collection->background(["cnpj"]);
 *
$collection->background(["mother_name"]);
$collection->background(["father_name"]);
$collection->background(["phone"]);
$collection->background(["cellphone"]);
 *
$collection->background(["health_plan"]);//convenio
$collection->background(["number_health_plan"]);//number_convenio
$collection->background(["state_register"]);
$collection->background(["birth_date"]);
 */

?>

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


<div class="col-md-4 form-group {{$errors->has('password') ? 'has-error' : ''}}">
    <label for="slug">Password</label>
    <input type="password" name="password" class="form-control"
           id="password" placeholder="Password" value="">
    @if($errors->has('password'))
        <span class="help-block">{{$errors->first('password')}}</span>
    @endif
</div>

<div class="col-md-4 form-group {{$errors->has('password_confirmation') ? 'has-error' : ''}}">
    <label for="slug">Confirm Password</label>
    <input type="password" name="password_confirmation" class="form-control"
           id="password_confirmation" placeholder="Confirm Password" value="">
    @if($errors->has('password_confirmation'))
        <span class="help-block">{{$errors->first('password_confirmation')}}</span>
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

<div class="col-md-6 form-group {{$errors->has('phone') ? 'has-error' : ''}}">
    <label for="phone">Telefone</label>
    <input type="text" value="{{old('phone',$negotiateClient->exists() ? $negotiateClient->phone : '')}}" name="phone"
           class="form-control"
           id="phone" placeholder="">
    @if($errors->has('phone'))
        <span class="help-block">{{$errors->first('phone')}}</span>
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

<div class="col-md-6 form-group {{$errors->has('mother_name') ? 'has-error' : ''}}">
    <label for="mother_name">Nome da Mãe</label>
    <input type="text" value="{{old('mother_name',$negotiateClient->exists() ? $negotiateClient->mother_name : '')}}" name="mother_name"
           class="form-control"
           id="mother_name" placeholder="da Mãe">
    @if($errors->has('mother_name'))
        <span class="help-block">{{$errors->first('mother_name')}}</span>
    @endif
</div>
<div class="col-md-6 form-group {{$errors->has('father_name') ? 'has-error' : ''}}">
    <label for="father_name">Nome do Pai</label>
    <input type="text" value="{{old('father_name',$negotiateClient->exists() ? $negotiateClient->father_name : '')}}" name="father_name"
           class="form-control"
           id="father_name" placeholder="do Pai">
    @if($errors->has('father_name'))
        <span class="help-block">{{$errors->first('father_name')}}</span>
    @endif
</div>

<div class="col-md-6 form-group {{$errors->has('health_plan') ? 'has-error' : ''}}">
    <label for="health_plan">Convênio</label>
    <input type="text" value="{{old('health_plan',$negotiateClient->exists() ? $negotiateClient->health_plan : '')}}" name="health_plan"
           class="form-control"
           id="health_plan" placeholder="">
    @if($errors->has('health_plan'))
        <span class="help-block">{{$errors->first('health_plan')}}</span>
    @endif
</div>
<div class="col-md-6 form-group {{$errors->has('number_health_plan') ? 'has-error' : ''}}">
    <label for="number_health_plan">Número da carteirinha</label>
    <input type="text" value="{{old('number_health_plan',$negotiateClient->exists() ? $negotiateClient->number_health_plan : '')}}" name="number_health_plan"
           class="form-control"
           id="number_health_plan" placeholder="">
    @if($errors->has('number_health_plan'))
        <span class="help-block">{{$errors->first('number_health_plan')}}</span>
    @endif
</div>

@if($negotiateClient->exists && Auth::User()->id == $negotiateClient->id)
    <div class="col-md-4 form-group">
        <label for="active">My Profile</label>
        <input type="text" value="{{Auth::User()->profile->name}}" name="onlyInfo" class="form-control" id="onlyInfo" disabled>
    </div>
@else
    <div class="col-md-4 form-group {{$errors->has('profile') ? 'has-error' : ''}}">
        <label for="active">Profile</label>
        <select class="form-control" id="selectProfile" name="profile_id" placeholder="">
            @foreach ($profiles as $key => $profile)
                <option name="profile_id"  @if($negotiateClient->exists){{$negotiateClient->profile_id==$profile->id ? 'selected="selected"' : ''}} @endif value="{{$profile->id}}">{{$profile->name}} </option>
            @endforeach
        </select>
    </div>
@endif

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
    <script>
        //var selectedOption = "{{$negotiateClient->exists ? $negotiateClient->profile_id : 1}}";
        //var resource_default_id = "{{$negotiateClient->exists ? $negotiateClient->resource_default_id : null}}";

        $(document).ready(function () {





            {{--$('#selectProfile').select2({ width: '100%' });--}}
            {{--$('#selectResourceDefault').select2({ width: '100%' });--}}

            {{--getResourcesByProfileId(selectedOption);--}}


            {{--$(document).on('change', '#selectProfile', function () {--}}
                {{--var valueProfile = this.value;--}}
                {{--getResourcesByProfileId(valueProfile);--}}
            {{--}).trigger('change');--}}


            {{--function getResourcesByProfileId($id) {--}}
                {{--var url = '{{route('admin.users.resourcesDefault', [':id'])}}';--}}
                {{--url     = url.replace(':id', $id)--}}
                {{--$.ajax({--}}
                    {{--url: url,--}}
                    {{--type: "get",--}}
                    {{--dataType: 'json',--}}
                    {{--beforeSend: function () {--}}
                        {{--window.pb.aggLoaderPB(true)--}}
                    {{--},--}}
                    {{--success: function (data) {--}}
                        {{--populateResourcesDefault(data);--}}
                        {{--window.pb.aggLoaderPB(false)--}}

                    {{--},--}}
                    {{--error: function (erro) {--}}
                        {{--console.log(erro.responseJSON.message);--}}
                        {{--toastr["error"](erro.responseJSON.message, "Error");--}}
                        {{--window.pb.aggLoaderPB(false)--}}
                    {{--}--}}
                {{--})--}}
            {{--}--}}

            {{--function populateResourcesDefault(arrayResources) {--}}
                {{--var jsonData = arrayResources;--}}
                {{--var selectResources = $('#selectResourceDefault');--}}
                {{--selectResources.empty();--}}

                {{--jsonData.forEach((function (element) {--}}
                    {{--selectResources.append(`<option ${element.id == resource_default_id ? 'selected="selected"' : ''} value="${element.id}">${element.menu}</option>`);--}}
                {{--}))--}}
            {{--}--}}

        });
    </script>

@endsection