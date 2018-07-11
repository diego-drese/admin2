@if(Auth::check())
@extends('Ironforge::layouts.backend.main')

@section('title', 'Page not Found')
@section('content')
<div class="content-wrapper">
    <section class="content-header">
        <h1>Erro ao acessar</h1>
    </section>


    <div class="container">
        <div class="error-page">
            <h2 class="headline text-yellow"> 404</h2>

            <div class="error-content"><br>
                <h3 class="left"><i class="fa fa-warning text-yellow" style="margin-top: 9px;"></i> Oops! page not found</h3>
            </div>
            <!-- /.error-content -->
        </div>
    </div>

</div>
@endsection

@else
    <h1>{{$exception->getMessage()}}</h1>
@endif