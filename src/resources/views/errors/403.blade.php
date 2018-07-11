@if(Auth::check())
    @extends('Ironforge::layouts.backend.main')
    @section('title', 'Page not Allowed')
    @section('content')
    <div class="content-wrapper">
        <section class="content-header">
        <h1>Sem permisão para acessar</h1>
        </section>

        <div class="container">
            <div class="error-page center">
                <h2 class="headline text-red"> 403</h2>

                <div class="error-content"><br>
                    <h3><i class="fa fa-warning text-red" style="margin-top: 9px;"></i> Oops! page not allowed</h3>
                </div>
                <!-- /.error-content -->
            </div>
        </div>
    </div>
    @endsection
@endif