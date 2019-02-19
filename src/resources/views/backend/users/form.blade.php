
<div class="col-md-6 form-group {{$errors->has('name') ? 'has-error' : ''}} ">
    <label for="title">Name</label>
    <input type="text" class="form-control" value="{{old('name',$user->exists() ? $user->name : '')}}" name="name"
           id="name" placeholder="Name">
    @if($errors->has('name'))
        <span class="help-block">{{$errors->first('name')}}</span>
    @endif
</div>

<div class="col-md-6 form-group {{$errors->has('lastname') ? 'has-error' : ''}}">
    <label for="slug">Last Name</label>
    <input type="text" value="{{old('lastname',$user->exists() ? $user->lastname : '')}}" name="lastname"
           class="form-control"
           id="lastname" placeholder="Last Name">
    @if($errors->has('lastname'))
        <span class="help-block">{{$errors->first('lastname')}}</span>
    @endif
</div>

<div class="col-md-6 form-group {{$errors->has('cell_phone') ? 'has-error' : ''}}">
    <label for="slug">Cellphone</label>
    <input type="text" value="{{old('slug',$user->exists() ? $user->cell_phone : '')}}" name="cell_phone"
           class="form-control"
           id="cell_phone" placeholder="Cellphone">
    @if($errors->has('cell_phone'))
        <span class="help-block">{{$errors->first('cell_phone')}}</span>
    @endif
</div>

<div class="col-md-6 form-group {{$errors->has('active') ? 'has-error' : ''}}">
    <label for="active">Status</label>
    <select type="text" name="active" class="form-control" id="active" placeholder="Status do usuário">
        <option value="1">Ativo</option>
        <option value="0" {{$user->exists() && $user->active == 0 ? 'selected' : ''}}>Desativado</option>
    </select>
    @if($errors->has('active'))
        <span class="help-block">{{$errors->first('active')}}</span>
    @endif
</div>

<div class="col-md-8 form-group {{$errors->has('email') ? 'has-error' : ''}}">
    <label for="slug">E-mail</label>
    <input type="email" value="{{old('email',$user->email)}}" name="email" class="form-control"
           id="email" placeholder="E-mail">
    @if($errors->has('email'))
        <span class="help-block">{{$errors->first('email')}}</span>
    @endif
</div>
@if($user->exists && Auth::User()->id == $user->id)
    <div class="col-md-4 form-group">
        <label for="active">My Profile</label>
        <input type="text" value="{{$profileCurrent}}" name="onlyInfo" class="form-control" id="onlyInfo" disabled>
    </div>
@else

    <div class="col-md-4 form-group {{$errors->has('profile') ? 'has-error' : ''}}">
        <label for="active">Profile</label>
        <select class="form-control" id="selectProfile" name="profile_id" placeholder="Profile">
            @foreach ($profiles as $key => $profile)
                <option name="profile_id"  @if($user->exists){{$user->profile_id==$profile->id ? 'selected="selected"' : ''}} @endif value="{{$profile->id}}">{{$profile->name}} </option>
            @endforeach
        </select>
    </div>
@endif

<div class="col-md-4 form-group {{$errors->has('resource_defautl_id') ? 'has-error' : ''}}">
    <label for="active">Page Default</label>
    <select class="form-control" id="selectResourceDefault" name="resource_default_id" placeholder="Profile">
    </select>
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
@if($hasSave)
    <div class="clearfix"></div>
    <div class="col-md-4">
        <button type="submit" class="btn btn-default">Salvar</button>
    </div>
@endif
@section('style_head_end')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css">
@endsection
@section('script_footer_end')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js"></script>
    <script>
        var selectedOption = "{{$user->exists ? $user->profile_id : 1}}";
        var resource_default_id = "{{$user->exists ? $user->resource_default_id : null}}";

        $(document).ready(function () {
            $('#selectProfile').select2({ width: '100%' });
            $('#selectResourceDefault').select2({ width: '100%' });

            getResourcesByProfileId(selectedOption);


            $(document).on('change', '#selectProfile', function () {
                var valueProfile = this.value;
                getResourcesByProfileId(valueProfile);
            }).trigger('change');


            function getResourcesByProfileId($id) {
                var url = '{{route('admin.users.resourcesDefault', [':id'])}}';
                url     = url.replace(':id', $id)
                $.ajax({
                    url: url,
                    type: "get",
                    dataType: 'json',
                    beforeSend: function () {
                        window.negotiate.loader(true)
                    },
                    success: function (data) {
                        populateResourcesDefault(data);
                        window.negotiate.loader(false)

                    },
                    error: function (erro) {
                        console.log(erro.responseJSON.message);
                        toastr["error"](erro.responseJSON.message, "Error");
                        window.negotiate.loader(false)
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