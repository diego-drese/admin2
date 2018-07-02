<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Login IronForge</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link href="vendor/aggrega/ironforge/laravel-package-ironforge/css/app.css" rel="stylesheet">
    <script src="//use.edgefonts.net/kaushan-script.js"></script>
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body class="hold-transition login-page">
<div id="app">
    <main>
        @yield('content')
    </main>
</div>


<script src="vendor/aggrega/ironforge/laravel-package-ironforge/js/app.js" defer></script>
<script>
   document.onready = function (){
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
    };
</script>
@yield('script')

</body>
</html>