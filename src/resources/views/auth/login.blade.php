
@extends('Admin::layouts.backend.login-tpl')

@section('content')
   <div class="container-fluid">
        <div class="row">
            <div class="right-column sisu">
                <div class="row mx-0">
                   <div class="col-md-5 order-md-1 signin-left-column bg-white px-5">
                        <div class="login-logo">
                            <a href="{{ route('login') }}"><span class="logo-lg">{{ \Config::get('admin.logo_label') }}</span></a>

                        </div>
                        <form method="POST" action="{{ route('login') }}">
                            {{ csrf_field() }}
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" class="form-control" name="email" value="{{ old('email') }}"  placeholder="Email" required autofocus>
                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-group">
                                <label for="password">Senha</label>
                                <input id="password" type="password"  class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required placeholder="Senha">
                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <br/>

                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                <label class="custom-control-label" for="remember">{{ __('Remember Me') }}</label>
                            </div>
                            <br/>
                            <button type="submit" class="btn btn-primary btn-block btn-flat"> {{ __('Login') }}</button>
                            <hr>

                        </form>
                        <br>
                        <a class="btn btn-link" href="{{ route('password.request') }}">
                            {{ __('Forgot Your Password?') }}
                        </a><br>
                    </div>
                    <div class="col-md-7 order-md-2 signin-right-column px-5 bg-dark">
                        <a class="signin-logo d-sm-block d-md-none" href="#">
                        </a>
                        <h1 class="display-4">Sign In To get Started</h1>
                        <p class="lead mb-5">
                            Big data latte SpaceTeam unicorn cortado hacker physical computing paradigm.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
