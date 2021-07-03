<div class="card">
    <div class="card-header bg-amber">
        <h6 class="m-b-0 text-black font-weight-bolder">Seus dados</h6>
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col-md-4 form-group {{$errors->has('name') ? 'has-error' : ''}} ">
                <label for="title">Nome</label>
                <input type="text" class="form-control" value="{{old('name',$user->exists() ? $user->name : '')}}"
                       name="name"
                       id="name">
                @if($errors->has('name'))
                    <span class="text-danger">{{$errors->first('name')}}</span>
                @endif
            </div>

            <div class="col-md-4 form-group {{$errors->has('lastname') ? 'has-error' : ''}}">
                <label for="slug">Sobrenome</label>
                <input type="text" value="{{old('lastname',$user->exists() ? $user->lastname : '')}}" name="lastname"
                       class="form-control"
                       id="lastname">
                @if($errors->has('lastname'))
                    <span class="text-danger">{{$errors->first('lastname')}}</span>
                @endif
            </div>

            <div class="col-md-4 form-group {{$errors->has('cell_phone') ? 'has-error' : ''}}">
                <label for="slug">Celular</label>
                <input type="text" value="{{old('slug',$user->exists() ? $user->cell_phone : '')}}" name="cell_phone"
                       class="form-control"
                       id="cell_phone">
                @if($errors->has('cell_phone'))
                    <span class="text-danger">{{$errors->first('cell_phone')}}</span>
                @endif
            </div>
            <div class="col-md-4 form-group {{$errors->has('email') ? 'has-error' : ''}}">
                <label for="slug">E-mail</label>
                <input type="email" value="{{old('email',$user->email)}}" name="email" class="form-control"
                       id="email">
                @if($errors->has('email'))
                    <span class="text-danger">{{$errors->first('email')}}</span>
                @endif
            </div>

            <div class="col-md-4 form-group">
                <label for="active">Meu Perfil</label>
                <input type="text" value="{{$profiles[Auth::User()->profile_id]}}" name="onlyInfo" class="form-control"
                       id="onlyInfo" disabled>
            </div>

            <div class="col-md-4 form-group {{$errors->has('resource_defautl_id') ? 'has-error' : ''}}">
                <label for="active">Página incial</label>
                <select class="form-control" id="selectResourceDefault" name="resource_default_id"> </select>
            </div>
            <div class="col-md-4 form-group {{$errors->has('old_password') ? 'has-error' : ''}}">
                <label for="old_password">Senha atual</label>
                <input type="password" name="old_password" class="form-control"
                       id="old_password" value="">
                @if($errors->has('old_password'))
                    <span class="text-danger">{{$errors->first('old_password')}}</span>
                @endif
            </div>

            <div class="col-md-4 form-group {{$errors->has('password') ? 'has-error' : ''}}">
                <label for="slug">Nova Senha</label>
                <input type="password" name="password" class="form-control"
                       id="password" value="">
                @if($errors->has('password'))
                    <span class="text-danger">{{$errors->first('password')}}</span>
                @endif
            </div>

            <div class="col-md-4 form-group {{$errors->has('password_confirmation') ? 'has-error' : ''}}">
                <label for="slug">Confirmar Nova Senha</label>
                <input type="password" name="password_confirmation" class="form-control"
                       id="password_confirmation" value="">
                @if($errors->has('password_confirmation'))
                    <span class="text-danger">{{$errors->first('password_confirmation')}}</span>
                @endif
            </div>


            <div class="col-md-12 form-group">
                <label for="title">Foto Perfil</label>
                <div class="input-group">
                    <span class="input-group-btn">
                    <span class="btn btn-primary" onclick="$(this).parent().find('input[type=file]').click();">Selecionar</span>
                        <input id="picture" name="picture"
                               onchange="$(this).parent().parent().find('.form-control').html($(this).val().split(/[\\|/]/).pop());"
                               style="display: none;" type="file">
                    </span>
                    <span class="form-control"></span>
                </div>
            </div>
            <div class="col-md-12 text-right">
                <button type="submit" class="btn btn-success">Salvar</button>
            </div>
        </div>
    </div>
</div>
@section('style_head')
    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/select2.css')}}">
@endsection
@section('script_footer_end')
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/select2.js')}}></script>
    <script>
        var selectedOption = "{{$user->exists ? $user->profile_id : 1}}";
        var resource_default_id = "{{$user->exists ? $user->resource_default_id : null}}";

        $(document).ready(function () {
            $('#selectResourceDefault').select2({width: '100%'});
            getResourcesByProfileId(selectedOption);
            $(document).on('change', '#selectProfile', function () {
                var valueProfile = this.value;
                getResourcesByProfileId(valueProfile);
            }).trigger('change');

            function getResourcesByProfileId($id) {
                var url = '{{route('admin.users.resourcesDefault', [':id'])}}';
                url = url.replace(':id', $id)
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
                selectResources.empty();
                jsonData.forEach((function (element) {
                    selectResources.append(`<option ${element.id == resource_default_id ? 'selected="selected"' : ''} value="${element.id}">${element.menu}</option>`);
                }))
            }

        });
    </script>

@endsection