@extends('layouts.backend.main')
@section('content')
    <div class="content-wrapper">
        @include('layouts.backend.breadcrumb')

        <section class="content">
            <div class="row">
                <div class="col-xs-6">
                    <div class="box">
                        <div class="box-body ">
                            <h3>Bem Vindo!</h3>
                            <p class="lead text-muted">Olá {{Auth::user()->name}}, Welcome</p>

                            <h4>Get started</h4>
                            <p><a href="#" class="btn btn-primary">Primary</a></p>
                            <p><a href="#" class="btn btn-success">Success</a></p>
                            <p><a href="#" class="btn btn-warning">Warning</a></p>
                            <p><a href="#" class="btn btn-danger">Danger</a></p>
                        </div>
                    </div>
                </div>

                <div class="col-xs-6">
                    <div class="box">
                        <div class="box-body ">
                            <div class="box-body">
                                <div class="alert alert-danger alert-dismissible">
                                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×
                                    </button>
                                    <h4><i class="icon fa fa-ban"></i> Alert!</h4>
                                    Danger alert preview. This alert is dismissable. A wonderful serenity has taken
                                    possession of my entire
                                    soul, like these sweet mornings of spring which I enjoy with my whole heart.
                                </div>
                                <div class="alert alert-info alert-dismissible">
                                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×
                                    </button>
                                    <h4><i class="icon fa fa-info"></i> Alert!</h4>
                                    Info alert preview. This alert is dismissable.
                                </div>
                                <div class="alert alert-warning alert-dismissible">
                                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×
                                    </button>
                                    <h4><i class="icon fa fa-warning"></i> Alert!</h4>
                                    Warning alert preview. This alert is dismissable.
                                </div>
                                <div class="alert alert-success alert-dismissible">
                                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×
                                    </button>
                                    <h4><i class="icon fa fa-check"></i> Alert!</h4>
                                    Success alert preview. This alert is dismissable.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
