<div class="form-group {{$errors->has('name') ? 'has-error' : ''}} ">
    <label for="title">Nome</label>
    <input type="text" class="form-control" value="{{old('name', $user->name)}}" name="name" placeholder="Nome">
    @if($errors->has('name'))
        <span class="help-block">{{$errors->first('name')}}</span>
    @endif
</div>

<div class="form-group {{$errors->has('lastname') ? 'has-error' : ''}} ">
    <label for="lastname">Sobrenome</label>
    <input type="text" class="form-control" value="{{old('name',$user->lastname)}}" name="lastname" placeholder="Sobrenome">
    @if($errors->has('name'))
        <span class="help-block">{{$errors->first('lastname')}}</span>
    @endif
</div>

<div class="form-group {{$errors->has('cell_phone') ? 'has-error' : ''}} ">
    <label for="lastname">Fone</label>
    <input type="text" class="form-control" value="{{old('cell_phone',$user->cell_phone)}}" name="cell_phone" placeholder="Sobrenome">
    @if($errors->has('cell_phone'))
        <span class="help-block">{{$errors->first('cell_phone')}}</span>
    @endif
</div>

<p><b>Perfil: </b>{{Auth::user()->profile->name}}</p>

<div class="form-group {{$errors->has('email') ? 'has-error' : ''}} ">
    <label for="email">Email</label>
    <input type="text" class="form-control" value="{{old('email',$user->email)}}" name="email" placeholder="Sobrenome">
    @if($errors->has('email'))
        <span class="help-block">{{$errors->first('email')}}</span>
    @endif
</div>

<div class="form-group {{$errors->has('password') ? 'has-error' : ''}} ">
    <label for="password">Senha</label>
    <input type="password" class="form-control" name="password" placeholder="Senha">
    @if($errors->has('password'))
        <span class="help-block">{{$errors->first('password')}}</span>
    @endif
</div>

<div class="form-group {{$errors->has('password_confirmation') ? 'has-error' : ''}} ">
    <label for="password_confirmation">Confirme a Senha</label>
    <input type="password" class="form-control"  name="password_confirmation" placeholder="Confirme Senha">
    @if($errors->has('password'))
        <span class="help-block">{{$errors->first('password_confirmation')}}</span>
    @endif
</div>



<button type="submit" class="btn btn-success">Salvar</button>



