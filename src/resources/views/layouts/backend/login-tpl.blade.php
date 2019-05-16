<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Login</title>
    <link rel="icon" type="image/png" sizes="16x16" href="/vendor/negotiate/admin/assets/images/favicon.png">

    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="{{mix('/vendor/negotiate/admin/css/basic.css')}}">
{{--    <script src="//use.edgefonts.net/kaushan-script.js"></script>--}}
{{--    <!--[if lt IE 9]>--}}
{{--    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>--}}
{{--    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>--}}
    <![endif]-->
</head>

<body>
        @yield('content')

        <script type="text/javascript" src={{mix('/vendor/negotiate/admin/js/basic.js')}}></script>
        @toastr_render
@yield('script')

        <script>
            $('[data-toggle="tooltip"]').tooltip();
            $(".preloader").fadeOut();
            // ==============================================================
            // Login and Recover Password
            // ==============================================================
            $('#to-recover').on("click", function() {
                $("#loginform").slideUp();
                $("#recoverform").fadeIn();
            });
        </script>

@yield('style')

</body>
</html>