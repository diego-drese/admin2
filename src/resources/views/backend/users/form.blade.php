<div class="form-group {{$errors->has('name') ? 'has-error' : ''}} ">
    <label for="title">Nome</label>
    <input type="text" class="form-control" value="{{old('name',$user->exists() ? $user->name : '')}}" name="name"
           id="name" placeholder="Nome">
    @if($errors->has('name'))
        <span class="help-block">{{$errors->first('name')}}</span>
    @endif
</div>

<div class="form-group {{$errors->has('lastname') ? 'has-error' : ''}}">
    <label for="slug">Sobrenome</label>
    <input type="text" value="{{old('lastname',$user->exists() ? $user->lastname : '')}}" name="lastname"
           class="form-control"
           id="lastname" placeholder="Sobrenome">
    @if($errors->has('lastname'))
        <span class="help-block">{{$errors->first('lastname')}}</span>
    @endif
</div>

<div class="form-group {{$errors->has('cell_phone') ? 'has-error' : ''}}">
    <label for="slug">Celular</label>
    <input type="number" value="{{old('slug',$user->exists() ? $user->cell_phone : '')}}" name="cell_phone"
           class="form-control"
           id="cell_phone" placeholder="Numero para Contato">
    @if($errors->has('cell_phone'))
        <span class="help-block">{{$errors->first('cell_phone')}}</span>
    @endif
</div>

<div class="form-group {{$errors->has('active') ? 'has-error' : ''}}">
    <label for="active">Status</label>
    <select type="text" name="active" class="form-control" id="active"
            placeholder="Status do usuário">
        <option value="1">Ativo</option>
        <option value="0" {{$user->exists() && $user->active == 0 ? 'selected' : ''}}>Desativado</option>
    </select>
    @if($errors->has('active'))
        <span class="help-block">{{$errors->first('active')}}</span>
    @endif
</div>

<div class="form-group {{$errors->has('email') ? 'has-error' : ''}}">
    <label for="slug">Email</label>
    <input type="email" value="{{old('email',$user->email)}}" name="email" class="form-control"
           id="email" placeholder="Email">
    @if($errors->has('email'))
        <span class="help-block">{{$errors->first('email')}}</span>
    @endif
</div>


@if($user->exists && Auth::User()->id == $user->id)
<p>Você é: <b>{{Auth::User()->profile->name}}</b></p>
@else
<div class="form-group {{$errors->has('profile') ? 'has-error' : ''}}">
    <label for="active">Perfil</label>
    <select class="form-control" id="selectProfile" name="profile_id" placeholder="Perfil">
        @foreach ($profiles as $key => $profile)
            <option name="profile_id"
                    @if($user->exists){{$user->profile_id==$profile->id ? 'selected="selected"' : ''}} @endif
                    value="{{$profile->id}}">{{$profile->name}} </option>
        @endforeach
    </select>
</div>
@endif

<div class="form-group {{$errors->has('resource_defautl_id') ? 'has-error' : ''}}">
    <label for="active">Pagina padrão</label>
    <select class="form-control" id="selectResourceDefault" name="resource_default_id" placeholder="Perfil">
    </select>
</div>


<div class="form-group {{$errors->has('password') ? 'has-error' : ''}}">
    <label for="slug">Senha</label>
    <input type="password" name="password" class="form-control"
           id="password" placeholder="Senha" value="">
    @if($errors->has('password'))
        <span class="help-block">{{$errors->first('password')}}</span>
    @endif
</div>

<div class="form-group {{$errors->has('password_confirmation') ? 'has-error' : ''}}">
    <label for="slug">Confirme a Senha</label>
    <input type="password" name="password_confirmation" class="form-control"
           id="password_confirmation" placeholder="Confirme Senha" value="">
    @if($errors->has('password_confirmation'))
        <span class="help-block">{{$errors->first('password_confirmation')}}</span>
    @endif
</div>

<button type="submit" class="btn btn-success">Salvar</button>

@section('script')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js"></script>

    <script>
        var selectedOption = "{{$user->exists ? $user->profile_id : 1}}";
        var resource_default_id = "{{$user->exists ? $user->resource_default_id : null}}";

        $(document).ready(function () {
            $('#selectProfile').select2();
            $('#selectResourceDefault').select2();

            getResourcesByProfileId(selectedOption);


            $(document).on('change', '#selectProfile', function () {
                var valueProfile = this.value;
                getResourcesByProfileId(valueProfile);
            }).trigger('change');


            function getResourcesByProfileId($id) {
                $.ajax({
                    url: '/console/users/resources/' + $id,
                    type: "get",
                    dataType: 'json',
                    beforeSend: function () {
                        window.pb.aggLoaderPB(true)
                    },
                    success: function (data) {
                        populateResourcesDefault(data);
                        window.pb.aggLoaderPB(false)

                    },
                    error: function (erro) {
                        console.log(erro.responseJSON.message);
                        toastr["error"](erro.responseJSON.message, "Error");
                        window.pb.aggLoaderPB(false)
                    }
                })
            }

            function populateResourcesDefault(arrayResources) {
                var jsonData = arrayResources;
                var selectResources = $('#selectResourceDefault');
                selectResources.empty();

                jsonData.forEach((function (element) {
                    selectResources.append(`<option ${element.id == resource_default_id ? 'selected="selected"' : ''} value="${element.id}">${element.menu}</option>`);
                }))
            }

        });
    </script>

@endsection