
<div class="row">
    <div class="col-md-6">
        <div class="form-group {{$errors->has('name') ? 'has-danger' : ''}} ">
            <label for="title">Nome</label>
            <input type="text" class="form-control {{$errors->has('name') ? 'is-invalid' : ''}}" value="{{old('name',$user->exists() ? $user->name : '')}}" name="name"
                   id="name" >
            @if($errors->has('name'))
                <span class="text-danger">{{$errors->first('name')}}</span>
            @endif
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group {{$errors->has('lastname') ? 'has-danger' : ''}}">
            <label for="slug">Sobrenome</label>
            <input type="text" value="{{old('lastname',$user->exists() ? $user->lastname : '')}}" name="lastname" class="form-control {{$errors->has('lastname') ? 'is-invalid' : ''}}" id="lastname" >
            @if($errors->has('lastname'))
                <span class="text-danger">{{$errors->first('lastname')}}</span>
            @endif
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group {{$errors->has('email') ? 'has-danger' : ''}}">
            <label for="slug">E-mail</label>
            <input type="email" value="{{old('email',$user->email)}}" name="email" class="form-control {{$errors->has('email') ? 'is-invalid' : ''}}"
                   id="email" placeholder="E-mail">
            @if($errors->has('email'))
                <span class="text-danger">{{$errors->first('email')}}</span>
            @endif
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group {{$errors->has('cell_phone') ? 'has-danger' : ''}}">
            <label for="slug">Celular</label>
            <input type="text" value="{{old('cell_phone',$user->exists() ? $user->cell_phone : '')}}" name="cell_phone" class="form-control mask-phone {{$errors->has('cell_phone') ? 'is-invalid' : ''}}" id="cell_phone">
            @if($errors->has('cell_phone'))
                <span class="text-danger">{{$errors->first('cell_phone')}}</span>
            @endif
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group {{$errors->has('profile') ? 'has-danger' : ''}}">
            <label for="active">Perfil</label>
            <select class="form-control {{$errors->has('profile') ? 'is-invalid' : ''}}" id="selectProfile" name="profile_id">
                <option value="">Selecione</option>
                @foreach ($profiles as $key => $profile)
                    <option name="profile_id"  @if($user->exists){{$user->profile_id==$profile->id ? 'selected="selected"' : ''}} @endif value="{{$profile->id}}">{{$profile->name}} </option>
                @endforeach
            </select>
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group {{$errors->has('resource_defautl_id') ? 'has-danger' : ''}}">
            <label for="active">Página inicial</label>
            <select class="form-control {{$errors->has('resource_defautl_id') ? 'is-invalid' : ''}}" id="selectResourceDefault" name="resource_default_id" >
                <option value="">Selecione</option>
            </select>
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group {{$errors->has('client_id') ? 'has-danger' : ''}}">
            <label for="active">Cliente</label>
            <select class="form-control {{$errors->has('client_id') ? 'is-invalid' : ''}}" id="clientID" name="client_id">
            <option value="">Selecione</option>
            @foreach ($clients as $key => $client)
                <option name="client_id"  @if($client->exists){{$user->client_id==$client->id ? 'selected="selected"' : ''}} @endif value="{{$client->id}}">{{$client->name}} </option>
                @endforeach
                </select>
                @if($errors->has('client_id'))
                    <span class="text-danger">{{$errors->first('client_id')}}</span>
                @endif
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group {{$errors->has('active') ? 'has-danger' : ''}}">
            <label for="active">Status</label>
            <select type="text" name="active" class="form-control {{$errors->has('active') ? 'is-invalid' : ''}}" id="active" placeholder="Status do usuário">

                <option value="">Selecione</option>
                <option value="1" {{$user->exists() && $user->active == 1 ? 'selected' : ''}}>Ativo</option>
                <option value="0" {{$user->exists() && $user->active == 0 ? 'selected' : ''}}>Desativado</option>
            </select>
            @if($errors->has('active'))
                <span class="text-danger">{{$errors->first('active')}}</span>
            @endif
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group {{$errors->has('password') ? 'has-danger' : ''}}">
            <label for="slug">Senha</label>
            <input type="password" name="password" class="form-control {{$errors->has('password') ? 'is-invalid' : ''}}"
                   id="password" value="">
            @if($errors->has('password'))
                <span class="text-danger">{{$errors->first('password')}}</span>
            @endif
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group {{$errors->has('password_confirmation') ? 'has-danger' : ''}}">
            <label for="slug">Confirmar Senha</label>
            <input type="password" name="password_confirmation" class="form-control {{$errors->has('password_confirmation') ? 'is-invalid' : ''}}"
                   id="password_confirmation" value="">
            @if($errors->has('password_confirmation'))
                <span class="text-danger">{{$errors->first('password_confirmation')}}</span>
            @endif
        </div>
    </div>

</div>

@if($hasSave)
    <div class="card-body">
        <div class="form-group m-b-0 text-right">
            <button type="submit" class="btn btn-success btn-rounded" ripple-radius>Salvar</button>
        </div>
    </div>
@endif
@section('style_head')
    <link rel="stylesheet" href="/vendor/negotiate/admin/nice-admin/css/form.css">
    <link rel="stylesheet" href="/vendor/negotiate/admin/nice-admin/css/select2.css">
@endsection
@section('script_footer_end')
    <script type="text/javascript" src="/vendor/negotiate/admin/nice-admin/js/forms.js"></script>
    <script type="text/javascript" src="/vendor/negotiate/admin/nice-admin/js/select2.js"></script>
    <script>
        var selectedOption = "{{$user->exists ? $user->profile_id : 0}}";
        var resource_default_id = "{{$user->exists ? $user->resource_default_id : null}}";

        $(document).ready(function () {
            $('.mask-phone').mask("(99) 99999-9999");
            $('#selectProfile').select2({ width: '100%' });
            $('#selectResourceDefault').select2({ width: '100%' });
            $('#clientID').select2({ width: '100%' });
            getResourcesByProfileId(selectedOption);


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
                    $('#selectResourceDefault').append(`<option ${element.id == resource_default_id ? 'selected="selected"' : ''} value="${element.id}">${element.menu}</option>`);
                }))
            }

        });
    </script>
@endsection