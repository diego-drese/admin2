@extends('Admin::layouts.backend.main')
@section('content')
@section('title', 'Editar Perfil')

<div class="content-wrapper">
    <section class="content-header">
        <span class="fa fa-user icon-header font-gradient"></span>
        <h1> Editar Perfil</h1>
        <ol class="breadcrumb">
            <a href="{{route('dashboard')}}">
                <li class=""><i class="fa fa-dashboard"></i> Dashboard</li>
            </a> /
            <a href="{{route('profiles.index')}}">
                <li class="active"><i class="fa fa-user"></i> Perfil</li>
            </a>
        </ol>
    </section>

    <section class="content">
        <div class="row">
            <div class="col-md-7 col-sm-12">
                <div class="box">
                    <div class="box-header">
                    </div>
                    <div class="box-body ">
                        <div class="col-md-12">
                            <form method="post" action="{{route('users.profileupdate',$user->id)}}">
                                {{csrf_field()}} {{method_field('PATCH')}}
                                @include('Admin::backend.authProfile.form')
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection


