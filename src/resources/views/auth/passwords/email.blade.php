@extends('Ironforge::layouts.backend.login-tpl')

@section('content')
    <div class="login-box">
        <div class="login-logo">
            <a href="{{ route('login') }}"><span class="logo-lg">{{ \Config::get('ironforge.logo_label') }}</span></a>

        </div>
        <!-- /.login-logo -->
        <div class="login-box-body">


            @if (session('status'))
                <div class="alert alert-success">
                    {{ session('status') }}
                </div>
            @endif

            <form method="POST" action="{{ route('password.email') }}">
                {{ csrf_field() }}

                <div class="form-group row">
                    <label for="email" class="btn btn-link col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                    <div class="col-md-12">
                        <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                        @if ($errors->has('email'))
                            <span class="invalid-feedback">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>

                <div class="form-group row ">
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary" style="margin:0 auto;display:block">
                            {{ __('Send Password Reset Link') }}
                        </button>
                    </div>
                </div>
            </form>


        </div>
        <!-- /.login-box-body -->
    </div>
@endsection

