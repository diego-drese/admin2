<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/vendor/negotiate/admin/quillpro/img/favicon.png">
    <title>@yield('title')</title>
    @yield('style_head_start')
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&amp;subset=latin-ext" rel="stylesheet">
    <link rel="stylesheet" href="/vendor/negotiate/admin/quillpro/css/app.css">

    @yield('style_head_end')
</head>

<body>

<div class="container-fluid">
    <div class="row">
        <nav id="sidebar" class="px-0 bg-dark bg-gradient sidebar">
            <ul class="nav nav-pills flex-column">

                <li class="logo-nav-item">
                    <a class="navbar-brand" href="#">
                        <img src="/vendor/negotiate/admin/quillpro/img/negotiate-1.png" width="145" height="32.3" alt="Negotiate">
                    </a>

                </li>
            </ul>
            @include('Admin::layouts.quillpro.menu')

        </nav>
        <div class="right-column">
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <a class="navbar-brand d-block d-sm-block d-md-block d-lg-none" href="#">
                    <img src="/vendor/negotiate/admin/quillpro/img/negotiate-1.png" width="145" height="32.3" alt="Negotiate">
                </a>
                <button class="hamburger hamburger--slider" type="button" data-target=".sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle Sidebar">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
                </button>

                <div class="collapse navbar-collapse" id="navbar-header-content">
                    <ul class="navbar-nav navbar-language-translation mr-auto"></ul>
                    <ul class="navbar-nav ml-5 navbar-profile">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbar-dropdown-navbar-profile" data-toggle="dropdown" data-flip="false" aria-haspopup="true" aria-expanded="false">
                                <div class="profile-name">
                                    {{Auth::user()->name}}
                                </div>
                                <div class="profile-picture bg-gradient bg-primary has-message float-right">
                                    @if(Auth::user()->picture != "")
                                        <img src="{{url('/')}}/thumbnail/{{Auth::user()->picture}}" width="44" height="44">
                                    @else
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73r-pdCvEEff-PcCHvn1xXcRJ7ilZq7i5_s5C9Y8wqXO32ZWL" width="44" height="44">
                                    @endif
                                </div>
                            </a>

                            <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-dropdown-navbar-profile">
                                <li>
                                    <a class="dropdown-item" href="mail-inbox.html">
                                        Mensagens
                                        <span class="badge badge-danger badge-pill float-right">3</span>
                                    </a>
                                </li>
                                <li>
                                        <a href="{{route('admin.users.form-profile')}}" class="dropdown-item">Perfil</a>
                                </li>
                                <li>
                                    <a class="dropdown-item"  href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Sign out</a>
                                </li>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <main class="main-content p-4" role="main">
                <div class="row mb-4">
                    <div class="card col-md-12">
                       @yield('content')

                    </div>
                </div>



                <div class="row mb-4">
                    <div class="col-md-12">
                        <footer>
                           Desenvolvido por - <a href="https://negotiate.com" target="_blank" style="font-weight:300;color:#ffffff;background:#1d1d1d;padding:0 3px;"><span style="color:#ffa733;font-weight:bold">Negotiate</span></a>
                        </footer>
                    </div>
                </div>
            </main>
        </div>
    </div>
</div>
@yield('script_footer_start')
<script type="text/javascript" src="/vendor/negotiate/admin/quillpro/js/app.js"></script>
<script>
    window.negotiate = new NegotiateController();
</script>
@yield('script_footer_end')
@toastr_render
</body>
</html>
