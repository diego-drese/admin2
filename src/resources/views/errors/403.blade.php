@if(abort_if(Auth::UserIronForge()->active == 0,404,'Desculpe, não é possível acessar o sistema! Entre em contato com o administrador'))

@elseif(Auth::check())
@extends('Ironforge::layouts.backend.main')
@section('content')
@section('title', 'Profiles')
<div class="content-wrapper">
    <section class="content-header">
    <h1>Sem permisão para acessar</h1>
    </section>

    <div class="container">
        <div class="error-page center">
            <h2 class="headline text-red"> 403</h2>

            <div class="error-content"><br>
                <h3><i class="fa fa-warning text-red" style="margin-top: 9px;"></i> Oops! {{$exception->getMessage()}}</h3>
            </div>
            <!-- /.error-content -->
        </div>
    </div>
</div>
@endsection



@else
    <h1>{{$exception->getMessage()}}</h1>
@endif