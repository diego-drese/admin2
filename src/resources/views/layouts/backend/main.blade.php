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
    <style>
        .logo{width: 100%;text-align: center;}
        .logo-text {
            position: relative;
            display: inline-flex;
        }.logo-name{
            font-weight: bold;
            font-size: 1.5em;
            color: white;
            width: 209px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: poiret-one, sans-serif;
        }
    </style>
    <script src="//use.edgefonts.net/poiret-one.js"></script>
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
<!-- ============================================================== -->
<!-- Main wrapper - style you can find in pages.scss -->
<!-- ============================================================== -->
<div id="main-wrapper">
    <!-- ============================================================== -->
    <!-- Topbar header - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md navbar-dark">
            <div class="navbar-header">
                <!-- This is for the sidebar toggle which is visible on mobile only -->
                <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)">
                    <i class="ti-menu ti-close"></i>
                </a>
                <!-- ============================================================== -->
                <!-- Logo -->
                <!-- ============================================================== -->
                <div class="navbar-brand">
                    <a href="#" class="logo">
                        <!-- Logo icon -->
                        <b class="logo-icon">
                            <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                            <!-- Dark Logo icon -->


                            <img src="/vendor/oka6/admin/assets/images/logo-icon.png" alt="homepage" class="dark-logo"/>
                            <!-- Light Logo icon -->
{{--                            <img src="/vendor/oka6/admin/assets/images/logo-light-icon.png" alt="homepage"--}}
{{--                                 class="light-logo"/>--}}
                        </b>
                        <!--End Logo icon -->
                        <!-- Logo text -->
                        <span class="logo-text">
                                <!-- dark Logo text -->
{{--                               <img src="/vendor/oka6/admin/assets/images/logo-text.png" alt="homepage" class="dark-logo"/>--}}
                            <!-- Light Logo text -->
{{--                               <img src="/vendor/oka6/admin/assets/images/logo-light-text.png" class="light-logo" alt="homepage"/>--}}
                            @if (Auth::user()->ClinicName)
                                <span class="logo-name">{{Auth::user()->ClinicName }}</span>
                                @else
                                <span class="logo-name">Hclinic</span>
                            @endif
                         </span>
                    </a>
                    <a class="sidebartoggler d-none d-md-block" href="javascript:void(0)"
                       data-sidebartype="mini-sidebar">
                        <i class="mdi mdi-toggle-switch mdi-toggle-switch-off font-20"></i>
                    </a>
                </div>
                <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Toggle which is visible on mobile only -->
                <!-- ============================================================== -->
                <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)"
                   data-toggle="collapse" data-target="#navbarSupportedContent"
                   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="ti-more"></i>
                </a>
            </div>


            <!-- ============================================================== -->
            <!-- End Logo -->
            <!-- ============================================================== -->
            <div class="navbar-collapse collapse" id="navbarSupportedContent">
                <!-- ============================================================== -->
                <!-- toggle and nav items -->
                <!-- ============================================================== -->
                <div id="nav-bar-left" class="navbar-nav float-left mr-auto w-100 " style="max-width: 314px">
                    @yield('nav_bar_left')
                </div>
                <!-- ============================================================== -->
                <!-- Right side toggle and nav items -->
                <!-- ============================================================== -->
                <ul class="navbar-nav float-right">
                    <!-- ============================================================== -->
                    <!-- Messages -->
                    <!-- ============================================================== -->
                    <li class="nav-item dropdown">
                        {{--                        <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">--}}
                        {{--                            <i class="fas fa-info-circle" style="font-size: 22px;margin-top: 22px;"></i>--}}
                        {{--                            <span class="badge badge-pill badge-danger ml-auto m-r-15" style="position: absolute;top: 14px;right: -12px;">0</span>--}}
                        {{--                        </a>--}}
                        <div class="dropdown-menu dropdown-menu-right mailbox animated bounceInDown"
                             aria-labelledby="2">
                                <span class="with-arrow">
                                    <span class="bg-danger"></span>
                                </span>
                            <ul class="list-style-none">
                                <li>
                                    <div class="drop-title text-white bg-danger">
                                        <h4 class="m-b-0 m-t-5">5 New</h4>
                                        <span class="font-light">Messages</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="message-center message-body">
                                        <!-- Message -->
                                        <a href="javascript:void(0)" class="message-item">
                                                <span class="user-img">
                                                    <img src="/vendor/oka6/admin/assets/images/users/user_avatar.svg"
                                                         alt="user" class="rounded-circle">
                                                    <span class="profile-status online pull-right"></span>
                                                </span>
                                            <div class="mail-contnet">
                                                <h5 class="message-title">Pavan kumar</h5>
                                                <span class="mail-desc">Just see the my admin!</span>
                                                <span class="time">9:30 AM</span>
                                            </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="javascript:void(0)" class="message-item">
                                                <span class="user-img">
                                                    <img src="/vendor/oka6/admin/assets/images/users/user_avatar.svg"
                                                         alt="user" class="rounded-circle">
                                                    <span class="profile-status busy pull-right"></span>
                                                </span>
                                            <div class="mail-contnet">
                                                <h5 class="message-title">Sonu Nigam</h5>
                                                <span class="mail-desc">I've sung a song! See you at</span>
                                                <span class="time">9:10 AM</span>
                                            </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="javascript:void(0)" class="message-item">
                                                <span class="user-img">
                                                    <img src="/vendor/oka6/admin/assets/images/users/user_avatar.svg"
                                                         alt="user" class="rounded-circle">
                                                    <span class="profile-status away pull-right"></span>
                                                </span>
                                            <div class="mail-contnet">
                                                <h5 class="message-title">Arijit Sinh</h5>
                                                <span class="mail-desc">I am a singer!</span>
                                                <span class="time">9:08 AM</span>
                                            </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="javascript:void(0)" class="message-item">
                                                <span class="user-img">
                                                    <img src="/vendor/oka6/admin/assets/images/users/user_avatar.svg"
                                                         alt="user" class="rounded-circle">
                                                    <span class="profile-status offline pull-right"></span>
                                                </span>
                                            <div class="mail-contnet">
                                                <h5 class="message-title">Pavan kumar</h5>
                                                <span class="mail-desc">Just see the my admin!</span>
                                                <span class="time">9:02 AM</span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <a class="nav-link text-center link text-dark" href="javascript:void(0);">
                                        <b>See all e-Mails</b>
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- ============================================================== -->
                    <!-- End Messages -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- Comment -->
                    <!-- ============================================================== -->
                {{--<li class="nav-item dropdown border-right">--}}
                {{--<a class="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">--}}
                {{--<i class="mdi mdi-bell-outline font-22"></i>--}}
                {{--<span class="badge badge-pill badge-info noti">3</span>--}}
                {{--</a>--}}
                {{--<div class="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">--}}
                {{--<span class="with-arrow">--}}
                {{--<span class="bg-primary"></span>--}}
                {{--</span>--}}
                {{--<ul class="list-style-none">--}}
                {{--<li>--}}
                {{--<div class="drop-title bg-primary text-white">--}}
                {{--<h4 class="m-b-0 m-t-5">4 New</h4>--}}
                {{--<span class="font-light">Notifications</span>--}}
                {{--</div>--}}
                {{--</li>--}}
                {{--<li>--}}
                {{--<div class="message-center notifications">--}}
                {{--<!-- Message -->--}}
                {{--<a href="javascript:void(0)" class="message-item">--}}
                {{--<span class="btn btn-danger btn-circle">--}}
                {{--<i class="fa fa-link"></i>--}}
                {{--</span>--}}
                {{--<div class="mail-contnet">--}}
                {{--<h5 class="message-title">Luanch Admin</h5>--}}
                {{--<span class="mail-desc">Just see the my new admin!</span>--}}
                {{--<span class="time">9:30 AM</span>--}}
                {{--</div>--}}
                {{--</a>--}}
                {{--<!-- Message -->--}}
                {{--<a href="javascript:void(0)" class="message-item">--}}
                {{--<span class="btn btn-success btn-circle">--}}
                {{--<i class="ti-calendar"></i>--}}
                {{--</span>--}}
                {{--<div class="mail-contnet">--}}
                {{--<h5 class="message-title">Event today</h5>--}}
                {{--<span class="mail-desc">Just a reminder that you have event</span>--}}
                {{--<span class="time">9:10 AM</span>--}}
                {{--</div>--}}
                {{--</a>--}}
                {{--<!-- Message -->--}}
                {{--<a href="javascript:void(0)" class="message-item">--}}
                {{--<span class="btn btn-info btn-circle">--}}
                {{--<i class="ti-settings"></i>--}}
                {{--</span>--}}
                {{--<div class="mail-contnet">--}}
                {{--<h5 class="message-title">Settings</h5>--}}
                {{--<span class="mail-desc">You can customize this template as you want</span>--}}
                {{--<span class="time">9:08 AM</span>--}}
                {{--</div>--}}
                {{--</a>--}}
                {{--<!-- Message -->--}}
                {{--<a href="javascript:void(0)" class="message-item">--}}
                {{--<span class="btn btn-primary btn-circle">--}}
                {{--<i class="ti-user"></i>--}}
                {{--</span>--}}
                {{--<div class="mail-contnet">--}}
                {{--<h5 class="message-title">Pavan kumar</h5>--}}
                {{--<span class="mail-desc">Just see the my admin!</span>--}}
                {{--<span class="time">9:02 AM</span>--}}
                {{--</div>--}}
                {{--</a>--}}
                {{--</div>--}}
                {{--</li>--}}
                {{--<li>--}}
                {{--<a class="nav-link text-center m-b-5 text-dark" href="javascript:void(0);">--}}
                {{--<strong>Check all notifications</strong>--}}
                {{--<i class="fa fa-angle-right"></i>--}}
                {{--</a>--}}
                {{--</li>--}}
                {{--</ul>--}}
                {{--</div>--}}
                {{--</li>--}}
                {{--<!-- ============================================================== -->--}}
                <!-- End Comment -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- User profile and search -->
                    <!-- ============================================================== -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle waves-effect waves-dark pro-pic" href=""
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            @if(Auth::user()->picture != "")
                                <img src="{{Auth::user()->picture}}" alt="user" class="rounded-circle" width="40">
                            @else
                                <img class="avatar-default hidden-xs " src="/vendor/oka6/admin/assets/images/users/user_avatar.svg"
                                     width="44" height="44">
                                <i class="fa fa-user hidden-lg  link-configuration "></i>
                            @endif
                            <span class="m-l-5 font-medium d-none d-sm-inline-block"> {{Auth::user()->name}} <i
                                    class="mdi mdi-chevron-down"></i></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <span class="with-arrow">
                                    <span class="bg-primary"></span>
                                </span>
                            <div
                                class="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10 user-conf-bg">
                                <div class="">
                                    @if(Auth::user()->picture != "")
                                        <img src="{{Auth::user()->picture}}" alt="user" class="rounded-circle"
                                             width="60">
                                    @else
                                        <img class="avatar-default"
                                             src="/vendor/oka6/admin/assets/images/users/user_avatar.svg" width="20"
                                             height="20">
                                    @endif
                                </div>
                                <div class="m-l-10">
                                    <h4 class="m-b-0"> {{Auth::user()->name}}</h4>
                                    <p class=" m-b-0"> {{Auth::user()->email}}</p>
                                </div>
                            </div>
                            <div class="profile-dis scrollable">
                                <a class="dropdown-item" href="{{route('admin.users.form-profile')}}">
                                    <i class="ti-user m-r-5 m-l-5"></i> Meu Perfil</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item theme-btn">
                                    <i class="fa fa-code m-r-5 m-l-5"></i> Tema
                                </a>
                                <div class="color-list" style="display: none">
                                    <ul>
                                        <li class="color-change" data-color="theme1"><span class="theme1"></span></li>
                                        <li class="color-change" data-color="theme2"><span class="theme2"></span></li>
                                        <li class="color-change" data-color="theme3"><span class="theme3"></span></li>
                                        <li class="color-change" data-color="theme4"><span class="theme4"></span></li>
                                        <li class="color-change" data-color="theme5"><span class="theme5"></span></li>
                                        <li class="color-change" data-color="theme6"><span class="theme6"></span></li>
                                        {{--                                        <li class="color-change" data-color="remove"><span class="default-theme"></span></li>--}}
                                    </ul>
                                </div>

                                <div class="dropdown-divider"></div>

                                @yield('admin-menu-item-client')

                                <a class="dropdown-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                          style="display: none;">
                                        {{ csrf_field() }}
                                    </form>
                                    <i class="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                                <div class="dropdown-divider"></div>
                            </div>
                        </div>
                    </li>
                    <!-- ============================================================== -->
                    <!-- User profile and search -->
                    <!-- ============================================================== -->
                </ul>
            </div>
        </nav>
    </header>
    <!-- ============================================================== -->
    <!-- End Topbar header -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->

    <aside class="left-sidebar" data-sidebarbg="skin5">
        <!-- Sidebar scroll-->
        <div class="scroll-sidebar">
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav">
                @include('Admin::layouts.backend.menu')
            </nav>
            <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
    </aside>

    <!-- ============================================================== -->
    <!-- End Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Page wrapper  -->
    <!-- ============================================================== -->
    <div class="page-wrapper">
        <!-- ============================================================== -->
        <!-- Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
    @include('Admin::layouts.backend.breadcrumb')
    <!-- ============================================================== -->
        <!-- End Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== -->
        <div class="container-fluid">
            @yield('content')
        </div>
        <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- footer -->
        <!-- ============================================================== -->
        <footer class="footer text-center">
            Desenvolvido por <a href="https://oka6.com.br" target="_blank">Oka6</a> SoftwareHouse
            <a href="#" class="help-btn">
                <i class="fa fa-question my-float"></i>
            </a>
        </footer>
        <!-- ============================================================== -->
        <!-- End footer -->
        <!-- ============================================================== -->

        <!--HELP PopUp -->
        <div class="popup-help" role="alert">
            <div class="popup-help-container">
                <div class="head"><span>Ajuda</span></div>
                <div class="popup-container-content">
                    <div id="accordion">
                        <div class="append-index-tutorial-help"></div>
                        <div class="load-tutorial lds-ripple" style="display: none">
                            <div class="lds-pos"></div>
                            <div class="lds-pos"></div>
                        </div>
                    </div>
                </div>
            </div> <!-- popup-container -->
        </div> <!-- popup -->
    </div>
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
    var openMenuActive = function () {
        let activeMenuId = "#" + $('.activeMenu').prop('id');
        let count = 0;
        if (activeMenuId) {
            while ($(activeMenuId).closest('ul').length) {
                let parent = $(activeMenuId).closest('ul');
                parent.addClass('in');
                parent.prev().addClass('active');
                activeMenuId = parent.prop('id');
                count++;
                if (count > 50) {
                    break;
                }
            }
        }
    };

    var confTheme = function () {
        const colorList = $('.color-list');
        $('.theme-btn').on('click', function (event) {
            colorList.toggle();
            event.stopPropagation();
        });

        $('.color-change').on('click', function (event) {
            let color = $(this).data("color");
            if (color != 'remove') {
                removeColorsClass();
                $('body').addClass(color);
                window.localStorage.setItem('theme-set', color);
                event.stopPropagation();
            } else {
                removeColorsClass();
                window.localStorage.removeItem('theme-set');
                event.stopPropagation();
            }
        })
    };

    function removeColorsClass() {
        for (let i = 0; i < 10; i++) {
            $('body').removeClass(`theme${i}`)
        }
    }

    async function getStorage(key) {
        return await new Promise((resolve, reject) => {
            resolve(window.localStorage.getItem(key));
        })
    }

    function themeSet() {
        getStorage('theme-set').then((res) => {
            if (res) {
                $('body').addClass(res);
            } else {
                window.localStorage.setItem('theme-set', 'theme1');
                $('body').addClass('theme1');
            }
        })
    }

    $(document).on('click', '.sidebartoggler', function () {
        var wrapper = $('#main-wrapper').attr('class');
        if (wrapper == 'mini-sidebar') {
            window.localStorage.setItem('sidebar-mini', 'on')
        } else {
            window.localStorage.setItem('sidebar-mini', 'off')
        }
    });

    function setSidebar() {
        getStorage('sidebar-mini').then((res) => {
            if (res == 'on') {
                $(function () {
                    $('#main-wrapper').attr('data-sidebartype', 'mini-sidebar');
                    $('#main-wrapper').addClass('mini-sidebar')
                })
            }
        })
    }


    themeSet();
    confTheme();
    openMenuActive();
    $(function () {
        setSidebar();
    });
</script>

<script src="//use.edgefonts.net/sail.js"></script>
</body>

</html>
