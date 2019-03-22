<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" sizes="16x16" href="/vendor/negotiate/admin/nice-admin/assets/images/favicon.png">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="/vendor/negotiate/admin/nice-admin/css/app.css">
    @yield('style_head_start')

    @yield('style_head_end')
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
                    <a href="index.html" class="logo">
                        <!-- Logo icon -->
                        <b class="logo-icon">
                            <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                            <!-- Dark Logo icon -->
                            <img src="/vendor/negotiate/admin/nice-admin/assets/images/logo-icon.png" alt="homepage" class="dark-logo" />
                            <!-- Light Logo icon -->
                            <img src="/vendor/negotiate/admin/nice-admin/assets/images/logo-light-icon.png" alt="homepage" class="light-logo" />
                        </b>
                        <!--End Logo icon -->
                        <!-- Logo text -->
                        <span class="logo-text">
                                <!-- dark Logo text -->
                                <img src="/vendor/negotiate/admin/nice-admin/assets/images/logo-text.png" alt="homepage" class="dark-logo" />
                            <!-- Light Logo text -->
                                <img src="/vendor/negotiate/admin/nice-admin/assets/images/logo-light-text.png" class="light-logo" alt="homepage" />
                            </span>
                    </a>
                    <a class="sidebartoggler d-none d-md-block" href="javascript:void(0)" data-sidebartype="mini-sidebar">
                        <i class="mdi mdi-toggle-switch mdi-toggle-switch-off font-20"></i>
                    </a>
                </div>
                <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Toggle which is visible on mobile only -->
                <!-- ============================================================== -->
                <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent"
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
                <ul class="navbar-nav float-left mr-auto">
                    <!-- <li class="nav-item d-none d-md-block">
                        <a class="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar">
                            <i class="mdi mdi-menu font-24"></i>
                        </a>
                    </li> -->
                    <!-- ============================================================== -->
                    <!-- Search -->
                    <!-- ============================================================== -->
                    <li class="nav-item search-box">
                        <a class="nav-link waves-effect waves-dark" href="javascript:void(0)">
                            <div class="d-flex align-items-center">
                                <i class="mdi mdi-magnify font-20 mr-1"></i>
                                <div class="ml-1 d-none d-sm-block">
                                    <span>Search</span>
                                </div>
                            </div>
                        </a>
                        <form class="app-search position-absolute">
                            <input type="text" class="form-control" placeholder="Search &amp; enter">
                            <a class="srh-btn">
                                <i class="ti-close"></i>
                            </a>
                        </form>
                    </li>
                </ul>
                <!-- ============================================================== -->
                <!-- Right side toggle and nav items -->
                <!-- ============================================================== -->
                <ul class="navbar-nav float-right">
                    <!-- ============================================================== -->
                    <!-- Messages -->
                    <!-- ============================================================== -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="font-22 mdi mdi-email-outline"></i>

                        </a>
                        <div class="dropdown-menu dropdown-menu-right mailbox animated bounceInDown" aria-labelledby="2">
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
                                                    <img src="/vendor/negotiate/admin/nice-admin/assets/images/users/1.jpg" alt="user" class="rounded-circle">
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
                                                    <img src="/vendor/negotiate/admin/nice-admin/assets/images/users/2.jpg" alt="user" class="rounded-circle">
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
                                                    <img src="/vendor/negotiate/admin/nice-admin/assets/images/users/3.jpg" alt="user" class="rounded-circle">
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
                                                    <img src="/vendor/negotiate/admin/nice-admin/assets/images/users/4.jpg" alt="user" class="rounded-circle">
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
                    <li class="nav-item dropdown border-right">
                        <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="mdi mdi-bell-outline font-22"></i>
                            <span class="badge badge-pill badge-info noti">3</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
                                <span class="with-arrow">
                                    <span class="bg-primary"></span>
                                </span>
                            <ul class="list-style-none">
                                <li>
                                    <div class="drop-title bg-primary text-white">
                                        <h4 class="m-b-0 m-t-5">4 New</h4>
                                        <span class="font-light">Notifications</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="message-center notifications">
                                        <!-- Message -->
                                        <a href="javascript:void(0)" class="message-item">
                                                <span class="btn btn-danger btn-circle">
                                                    <i class="fa fa-link"></i>
                                                </span>
                                            <div class="mail-contnet">
                                                <h5 class="message-title">Luanch Admin</h5>
                                                <span class="mail-desc">Just see the my new admin!</span>
                                                <span class="time">9:30 AM</span>
                                            </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="javascript:void(0)" class="message-item">
                                                <span class="btn btn-success btn-circle">
                                                    <i class="ti-calendar"></i>
                                                </span>
                                            <div class="mail-contnet">
                                                <h5 class="message-title">Event today</h5>
                                                <span class="mail-desc">Just a reminder that you have event</span>
                                                <span class="time">9:10 AM</span>
                                            </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="javascript:void(0)" class="message-item">
                                                <span class="btn btn-info btn-circle">
                                                    <i class="ti-settings"></i>
                                                </span>
                                            <div class="mail-contnet">
                                                <h5 class="message-title">Settings</h5>
                                                <span class="mail-desc">You can customize this template as you want</span>
                                                <span class="time">9:08 AM</span>
                                            </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="javascript:void(0)" class="message-item">
                                                <span class="btn btn-primary btn-circle">
                                                    <i class="ti-user"></i>
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
                                    <a class="nav-link text-center m-b-5 text-dark" href="javascript:void(0);">
                                        <strong>Check all notifications</strong>
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- ============================================================== -->
                    <!-- End Comment -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- User profile and search -->
                    <!-- ============================================================== -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="/vendor/negotiate/admin/nice-admin/assets/images/users/2.jpg" alt="user" class="rounded-circle" width="40">
                            <span class="m-l-5 font-medium d-none d-sm-inline-block">Jonathan Doe <i class="mdi mdi-chevron-down"></i></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <span class="with-arrow">
                                    <span class="bg-primary"></span>
                                </span>
                            <div class="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10">
                                <div class="">
                                    <img src="/vendor/negotiate/admin/nice-admin/assets/images/users/2.jpg" alt="user" class="rounded-circle" width="60">
                                </div>
                                <div class="m-l-10">
                                    <h4 class="m-b-0">Jonathan Doe</h4>
                                    <p class=" m-b-0">jon@gmail.com</p>
                                </div>
                            </div>
                            <div class="profile-dis scrollable">
                                <a class="dropdown-item" href="javascript:void(0)">
                                    <i class="ti-user m-r-5 m-l-5"></i> My Profile</a>
                                <a class="dropdown-item" href="javascript:void(0)">
                                    <i class="ti-wallet m-r-5 m-l-5"></i> My Balance</a>
                                <a class="dropdown-item" href="javascript:void(0)">
                                    <i class="ti-email m-r-5 m-l-5"></i> Inbox</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="javascript:void(0)">
                                    <i class="ti-settings m-r-5 m-l-5"></i> Account Setting</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="javascript:void(0)">
                                    <i class="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                                <div class="dropdown-divider"></div>
                            </div>
                            <div class="p-l-30 p-10">
                                <a href="javascript:void(0)" class="btn btn-sm btn-success btn-rounded">View Profile</a>
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
        <div class="page-breadcrumb">
            <div class="row">
                <div class="col-5 align-self-center">
                    <h4 class="page-title">Form Inputs</h4>
                </div>
                <div class="col-7 align-self-center">
                    <div class="d-flex align-items-center justify-content-end">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Form Inputs</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- End Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== -->
        <div class="container-fluid">
            <!-- ============================================================== -->
            <!-- Start Page Content -->
            <!-- ============================================================== -->
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Default Input</h4>
                            <h6 class="card-subtitle">To use add <code>form-control</code> class to the input</h6>
                            <form class="m-t-25">
                                <div class="form-group">
                                    <input type="text" class="form-control">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input With Helper Text</h4>
                            <form class="m-t-20">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="nametext" aria-describedby="name" placeholder="Name">
                                    <small id="name" class="form-text text-muted">Helper Text</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Password</h4>
                            <form class="m-t-40">
                                <div class="form-group">
                                    <input type="password" class="form-control" id="passtext" placeholder="Password">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Disabled Input</h4>
                            <h6 class="card-subtitle">Add attribute <code>disabled</code> to disable input field.</h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="nametext1" placeholder="Name" disabled>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Predefined Input Value</h4>
                            <h6 class="card-subtitle">Add attribute <code>value="VALUE"</code> to set predefined value.</h6>
                            <form class="m-t-10">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="prenametext" value="Name">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Readonly Input Field</h4>
                            <h6 class="card-subtitle">Add attribute <code>readonly</code> to set field readonly.</h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="readonly" placeholder="Readonly Text" readonly>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input With Placeholder</h4>
                            <h6 class="card-subtitle">Add attribute <code>placeholder="..."</code> to input area.</h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="placeholder" placeholder="Placeholder Text">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Maximum Value</h4>
                            <h6 class="card-subtitle">Add attribute <code>maxlength="6"</code> to input area.</h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="text" class="form-control" maxlength="6" id="maxval" aria-describedby="maxval" placeholder="Name">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Minimum Value</h4>
                            <h6 class="card-subtitle">Add attribute <code>minlength="5"</code> to input area.</h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="text" class="form-control" minlength="5" id="minval" aria-describedby="minval" placeholder="Name">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="card-title m-t-40">Input Type Options</h4>
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Type Text</h4>
                            <h6 class="card-subtitle">Using <code>input type="text"</code></h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="text" class="form-control" value="Name">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Type Password</h4>
                            <h6 class="card-subtitle">Using <code>input type="password"</code></h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="password" class="form-control" value="Name">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Phone Number</h4>
                            <h6 class="card-subtitle">Using <code>input type="tel"</code></h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="tel" class="form-control" value="1-(444)-444-4445">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Type Email</h4>
                            <h6 class="card-subtitle">Using <code>input type="email"</code></h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="email" class="form-control" value="abc@example.com">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Type URL</h4>
                            <h6 class="card-subtitle">Using <code>input type="url"</code></h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="url" class="form-control" value="http://google.com">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Type Search</h4>
                            <h6 class="card-subtitle">Using <code>input type="search"</code></h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="search" class="form-control" value="how to...">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Type Numbers</h4>
                            <h6 class="card-subtitle">Using <code>input type="number"</code></h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="number" class="form-control" value="6029">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Type Date Time</h4>
                            <h6 class="card-subtitle">Using <code>input type="datetime-local"</code></h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="datetime-local" class="form-control" value="2008-05-13T22:33:00">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Type Date</h4>
                            <h6 class="card-subtitle">Using <code>input type="date"</code></h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="date" class="form-control" value="2018-05-13">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Type Time</h4>
                            <h6 class="card-subtitle">Using <code>input type="time"</code></h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="time" class="form-control" value="22:33:00">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Type Week</h4>
                            <h6 class="card-subtitle">Using <code>input type="week"</code></h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="week" class="form-control" value="2011-W33">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Type Month</h4>
                            <h6 class="card-subtitle">Using <code>input type="month"</code></h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="month" class="form-control" value="1999-08">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Type Color</h4>
                            <h6 class="card-subtitle">Using <code>input type="color"</code></h6>
                            <form class="m-t-30">
                                <div class="form-group">
                                    <input type="color" class="form-control" value="#563d7c">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Type Range</h4>
                            <h6 class="card-subtitle">Using <code>input type="range"</code></h6>
                            <form class="m-t-20">
                                <div class="form-group">
                                    <input type="range" class="form-control" value="1999-08">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="card-title m-t-40">General Textarea</h4>
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Textarea</h4>
                            <form class="m-t-20">
                                <div class="form-group">
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Textarea With Placeholder</h4>
                            <form class="m-t-20">
                                <div class="form-group">
                                    <textarea class="form-control" rows="3" placeholder="Text Here..."></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Textarea With Helper Text</h4>
                            <form>
                                <div class="form-group">
                                    <textarea class="form-control" rows="3" placeholder="Text Here..."></textarea>
                                    <small id="textHelp" class="form-text text-muted">Helper Text</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="card-title">Inline Checkboxes &amp; Radios</h4>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Inline Default Checkbox</h4>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                <label class="form-check-label" for="inlineCheckbox1">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                <label class="form-check-label" for="inlineCheckbox2">2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                                <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title"> Inline Default Radio Button</h4>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                                <label class="form-check-label" for="inlineRadio1">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                <label class="form-check-label" for="inlineRadio2">2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
                                <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Inline Custom Checkbox</h4>
                            <div class="form-check form-check-inline">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                                    <label class="custom-control-label" for="customCheck1">1</label>
                                </div>
                            </div>
                            <div class="form-check form-check-inline">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck2">
                                    <label class="custom-control-label" for="customCheck2">2</label>
                                </div>
                            </div>
                            <div class="form-check form-check-inline">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck3" disabled="">
                                    <label class="custom-control-label" for="customCheck3">3</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Inline Custom Radios</h4>
                            <div class="form-check form-check-inline">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked">
                                    <label class="custom-control-label" for="customControlValidation2">1</label>
                                </div>
                            </div>
                            <div class="form-check form-check-inline">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked">
                                    <label class="custom-control-label" for="customControlValidation3">2</label>
                                </div>
                            </div>
                            <div class="form-check form-check-inline">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="customControlValidation4" name="radio-stacked" disabled>
                                    <label class="custom-control-label" for="customControlValidation4">3</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="card-title m-t-40">General Select</h4>
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Select</h4>
                            <form class="m-t-30">
                                <div class="form-group m-b-30">
                                    <label for="exampleFormControlSelect1">Select No</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Custom Select</h4>
                            <h6 class="card-subtitle">To use add <code>.custom-select</code> class</h6>
                            <form>
                                <div class="form-group m-b-30">
                                    <label class="mr-sm-2" for="inlineFormCustomSelect">Select</label>
                                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Multiple Select</h4>
                            <h6 class="card-subtitle">To use add <code>multiple</code> to the field</h6>
                            <form>
                                <select multiple class="form-control" id="exampleFormControlSelect2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Select With Addons</h4>
                            <h6 class="card-subtitle">To use add <code>.input-group-prepend</code> class to the div</h6>
                            <form>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                    </div>
                                    <select class="custom-select" id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Select With Buttons</h4>
                            <h6 class="card-subtitle">To use add <code>.input-group-append</code> class to the div</h6>
                            <form class="m-t-25">
                                <div class="input-group">
                                    <select class="custom-select" id="inputGroupSelect04">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="card-title m-t-40">File Upload</h4>
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Default File Upload</h4>
                            <h6 class="card-subtitle">To use add <code>.form-control-file</code> class to the input</h6>
                            <form class="m-t-20">
                                <fieldset class="form-group">
                                    <input type="file" class="form-control-file" id="exampleInputFile">
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Custom File Upload</h4>
                            <h6 class="card-subtitle">To use add <code>.custom-file-input</code> class to the input</h6>
                            <form>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Upload</span>
                                    </div>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Custom File Upload with Button Left</h4>
                            <h6 class="card-subtitle">To use add <code>.input-group-prepend</code> class to the div</h6>
                            <form class="m-t-25">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="inputGroupFile03">
                                        <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Custom File Upload with Button Right</h4>
                            <h6 class="card-subtitle">To use add <code>.input-group-append</code> class to the div</h6>
                            <form class="m-t-25">
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="inputGroupFile04">
                                        <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                                    </div>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="card-title m-t-40">Different Style in Helper Text</h4>
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Left Helper Text</h4>
                            <h6 class="card-subtitle">To use add <code>float-left</code> class to the text</h6>
                            <form class="m-t-20">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="nametext2" aria-describedby="name" placeholder="Name">
                                    <small id="name1" class="badge badge-default badge-info form-text text-white float-left">Helper Text</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Center Helper Text</h4>
                            <h6 class="card-subtitle">To use add <code>text-center</code> class to the text</h6>
                            <form class="m-t-20">
                                <div class="form-group m-b-0">
                                    <input type="text" class="form-control" id="nametext4" aria-describedby="name" placeholder="Name">
                                    <p class="text-center m-b-0">
                                        <small id="name45" class="badge badge-default badge-warning form-text text-white">Helper Text</small>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Right Helper Text</h4>
                            <h6 class="card-subtitle">To use add <code>float-right</code> class to the text</h6>
                            <form class="m-t-20">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="nametext12" aria-describedby="name" placeholder="Name">
                                    <small id="name13" class="badge badge-default badge-danger form-text text-white float-right">Helper Text</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Inline Helper Text</h4>
                            <form class="m-t-20">
                                <div class="row">
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" id="helpInput10" placeholder="Helper Text">
                                    </div>
                                    <div class="col-md-4">
                                        <small class="text-muted">Helper Text</small>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Inline Helper Text With Color</h4>
                            <form class="m-t-20">
                                <div class="row">
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" id="helpInput11" placeholder="Help Text">
                                    </div>
                                    <div class="col-md-4 block-tag">
                                        <small class="badge badge-default badge-success text-white">Helper Text</small>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="card-title m-t-40">Input With Validaton</h4>
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input With Success</h4>
                            <h6 class="card-subtitle">To use add <code>is-valid</code> class to the input</h6>
                            <form class="m-t-20">
                                <label class="form-control-label" for="inputSuccess1">Input with success</label>
                                <input type="text" class="form-control is-valid" id="inputSuccess1">
                                <div class="valid-feedback">
                                    Success! You've done it.
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input With Danger</h4>
                            <h6 class="card-subtitle">To use add <code>is-invalid</code> class to the input</h6>
                            <form class="m-t-20">
                                <label class="form-control-label" for="inputDanger1">Input with danger</label>
                                <input type="text" class="form-control is-invalid" id="inputDanger1">
                                <div class="invalid-feedback">
                                    Sorry, that username's taken. Try another?
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Inline Input With Success</h4>
                            <h6 class="card-subtitle">To use add <code>form-horizontal</code> class to the input</h6>
                            <form class="m-t-20 form-horizontal">
                                <div class="form-group row">
                                    <label for="inputHorizontalSuccess" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control is-valid" id="inputHorizontalSuccess" placeholder="name@example.com">
                                        <div class="valid-feedback">Success! You've done it.</div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Inline Input With Danger</h4>
                            <h6 class="card-subtitle">To use add <code>form-horizontal</code> class to the input</h6>
                            <form class="m-t-20 form-horizontal">
                                <div class="form-group row">
                                    <label for="inputHorizontalDnger" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control is-invalid" id="inputHorizontalDnger" placeholder="name@example.com">
                                        <div class="invalid-feedback">Sorry, that username's taken. Try another?</div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="card-title m-t-40">Input With Tooltip</h4>
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Tooltip Bottom</h4>
                            <form class="m-t-20">
                                <input type="text" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom" class="form-control" placeholder="Bottom">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Tooltip Right</h4>
                            <form class="m-t-20">
                                <input type="text" data-toggle="tooltip" data-placement="right" title="Tooltip on right" class="form-control" placeholder="Right">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Tooltip Top</h4>
                            <form class="m-t-20">
                                <input type="text" data-toggle="tooltip" data-placement="top" title="Tooltip on top" class="form-control" placeholder="Top">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Tooltip Left</h4>
                            <form class="m-t-20">
                                <input type="text" data-toggle="tooltip" data-placement="left" title="Tooltip on left" class="form-control" placeholder="Left">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="card-title m-t-40">Input Text Styles</h4>
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Text Bold</h4>
                            <form class="m-t-20">
                                <input type="text" class="form-control font-weight-bold" placeholder="Bold Text">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Text Normal</h4>
                            <form class="m-t-20">
                                <input type="text" class="form-control font-weight-normal" placeholder="Normal Text">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Text Light</h4>
                            <form class="m-t-20">
                                <input type="text" class="form-control font-weight-light" placeholder="Light Text">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Text Italic</h4>
                            <form class="m-t-20">
                                <input type="text" class="form-control font-italic" placeholder="Italic Text">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Text Lowercase</h4>
                            <form class="m-t-20">
                                <input type="text" class="form-control text-lowercase" placeholder="Lowercase">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Text Uppercase</h4>
                            <form class="m-t-20">
                                <input type="text" class="form-control text-uppercase" placeholder="Uppercase">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Input Text Capitalize</h4>
                            <form class="m-t-20">
                                <input type="text" class="form-control text-capitalize" placeholder="capitalize">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="card-title m-t-40">Input Sizing</h4>
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Small Input</h4>
                            <form class="m-t-20">
                                <input type="text" id="example-input-small" name="example-input-small" class="form-control form-control-sm" placeholder="Small">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Normal Input</h4>
                            <form class="m-t-20">
                                <input type="text" id="example-input-normal" name="example-input-normal" class="form-control" placeholder="Normal">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Large Input</h4>
                            <form class="m-t-20">
                                <input type="text" id="example-input-large" name="example-input-large" class="form-control form-control-lg" placeholder="Large">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ============================================================== -->
            <!-- End PAge Content -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Right sidebar -->
            <!-- ============================================================== -->
            <!-- .right-sidebar -->
            <!-- ============================================================== -->
            <!-- End Right sidebar -->
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- footer -->
        <!-- ============================================================== -->
        <footer class="footer text-center">
            All Rights Reserved by  xtream admin. Designed and Developed by <a href="https://wrappixel.com">WrapPixel</a>.
        </footer>
        <!-- ============================================================== -->
        <!-- End footer -->
        <!-- ============================================================== -->
    </div>

@yield('content')
    <!-- ============================================================== -->
    <!-- End Page wrapper  -->
    <!-- ============================================================== -->
</div>
<!-- ============================================================== -->
<!-- End Wrapper -->


    <!-- ============================================================== -->
    <!-- All Js -->
    <!-- ============================================================== -->
   @yield('script_footer_start')

    <script type="text/javascript" src="/vendor/negotiate/admin/nice-admin/js/app.js"></script>
	<script type="text/javascript">
    	//window.negotiate = new NegotiateController();
	</script>
	@yield('script_footer_end')
</body>

</html>
