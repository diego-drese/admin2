@extends('Admin::layouts.backend.login-tpl')

@section('content')

    <div class="main-wrapper">
        <!-- ============================================================== -->
        <!-- Preloader - style you can find in spinners.css -->
        <!-- ============================================================== -->
        <div class="preloader">
            <div class="lds-ripple">
                <div class="lds-pos"></div>
                <div class="lds-pos"></div>
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- Preloader - style you can find in spinners.css -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Login box.scss -->
        <!-- ============================================================== -->
        <div class="auth-wrapper d-flex no-block justify-content-center align-items-center"
             style="background:url(/vendor/oka6/admin/nice-admin/assets/images/big/auth-bg.jpg) no-repeat center center;">
            <div class="auth-box">
                <div id="loginform">
                    <div class="logo">
                        <span class="db"><img src="{{\Illuminate\Support\Facades\Config::get('admin.logo')}}" alt="logo"
                                              style="max-width: 200px;padding-bottom: 20px"></span>
                        <h5 class="font-medium m-b-20">Recuperar senha</h5>
                    </div>
                    <!-- Form -->
                    <div class="row">

                        @if (session('status'))
                            <div class="alert alert-success">
                                {{ session('status') }}
                            </div>
                        @endif
                        <div class="col-12">
                            <form class="form-horizontal m-t-20" id="loginform" method="POST"
                                  action="{{ route('password.email') }}">
                                {{ csrf_field() }}
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i class="ti-user"></i></span>
                                    </div>
                                    <input type="email" id="email" class="form-control form-control-lg" name="email"
                                           value="{{ old('email') }}" placeholder="Email" required autofocus
                                           aria-describedby="basic-addon1">
                                </div>
                                @if ($errors->has('email'))
                                    <label class="text-danger" for="email">{{ $errors->first('email') }}</label>
                                @endif

                                <div class="custom-control custom-checkbox">
                                    <a href="{{route('login')}}" id="to-recover" class="text-dark float-right"><i
                                                class="fas fa-arrow-alt-circle-left m-r-5"></i> Voltar </a>
                                </div>

                                <div class="form-group text-center">
                                    <div class="col-xs-12 p-b-20">
                                        <button class="btn btn-block btn-lg btn-dark" type="submit">Solicitar</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- ============================================================== -->
        <!-- Login box.scss -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper scss in scafholding.scss -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper scss in scafholding.scss -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Right Sidebar -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Right Sidebar -->
        <!-- ============================================================== -->
    </div>


@endsection








