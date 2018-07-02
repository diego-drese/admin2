
@extends('Ironforge::layouts.backend.login-tpl')

@section('content')
    <div class="login-box">
        <div class="login-logo">
            <a href="../../index2.html"><b>Iron Forge</b></a>
        </div>
        <!-- /.login-logo -->
        <div class="login-box-body">

            <form method="POST" action="{{ route('login') }}">

                {{ csrf_field() }}
                <div class="form-group has-feedback">
                    <input type="email" id="email" class="form-control" name="email" value="{{ old('email') }}"
                           placeholder="Email" required autofocus>
                    @if ($errors->has('email'))
                        <span class="invalid-feedback">
              <strong>{{ $errors->first('email') }}</strong>
          </span>
                    @endif
                    <span class="fa fa-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input id="password" type="password"
                           class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password"
                           required placeholder="Senha">
                    @if ($errors->has('password'))
                        <span class="invalid-feedback">
                <strong>{{ $errors->first('password') }}</strong>
            </span>
                    @endif
                    <span class="fa fa-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox icheck">
                            <label>
                                <input type="checkbox"
                                       name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }}
                            </label>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-xs-12">
                        <button type="submit" class="btn btn-primary btn-block btn-flat"> {{ __('Login') }}</button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>

            <br>
            <a class="btn btn-link" href="{{ route('password.request') }}">
                {{ __('Forgot Your Password?') }}
            </a><br>

        </div>
        <!-- /.login-box-body -->
    </div>
@endsection
