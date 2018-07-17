<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title')</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    @yield('style')
    <link href="/vendor/aggrega/ironforge/laravel-package-ironforge/css/app.css" type="text/css" rel="stylesheet">
    <script src="//use.edgefonts.net/kaushan-script.js"></script>
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    @yield('script_body')
</head>
<body class="hold-transition skin-ironforge sidebar-mini">
<div class="wrapper">
    <div id="aggloader" style="opacity:0">
        <div class="sk-circle">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
        </div>
    </div>
    @include('Ironforge::layouts.backend.navbar')
    @include('Ironforge::layouts.backend.menu')
    @yield('content')
    <footer class="main-footer">
        <div class="pull-right hidden-xs">
            <b>Version</b> 1.0.0
        </div>
        <strong>{{date('Y')}}  Aggrega </strong> All rights
        reserved.
    </footer>
</div>
<script src="/vendor/aggrega/ironforge/laravel-package-ironforge/js/app.js"></script>
@yield('script')
<script>
    window.pb = new ControllerPB();
</script>
@toastr_render
</body>
</html>