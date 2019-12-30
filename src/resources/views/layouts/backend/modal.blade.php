<!DOCTYPE html>
<html dir="ltr" lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" sizes="16x16" href="/vendor/oka6/admin/assets/images/favicon.png">
    <title>@yield('title')</title>
    @yield('style_head_start')
    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/basic.css')}}">
    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/themes.css')}}">
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/basic.js')}}></script>
    @yield('style_head')
    @yield('style_components')
</head>
<body>
<!-- ============================================================== -->
<!-- Preloader - style you can find in spinners.css -->
<!-- ============================================================== -->
<div class="preloader">
    <div class="lds-ripple">
        <div class="lds-pos"></div>
        <div class="lds-pos"></div>
    </div>
</div>
<div class="container-fluid" id="main-wrapper">
    @yield('content')
</div>

<!-- ============================================================== -->
<!-- End Wrapper -->


<!-- ============================================================== -->
<!-- All Js -->
<!-- ============================================================== -->
@yield('script_footer_start')

@yield('script_footer_end')
@toastr_render
@yield('script_components')
    <script type="text/javascript">
        function themeSet(){
            getStorage('theme-set').then((res) => {
                if(res) {
                    $('body').addClass(res);
                }
            })
        }
        async function getStorage(key){
            return await new Promise((resolve, reject) => {
                resolve(window.localStorage.getItem(key));
            })
        }
        themeSet();
    </script>
</body>

</html>
