@extends('Ironforge::layouts.backend.main')
@section('content')
@section('title', 'Resource Create')

<div class="content-wrapper">
    @include('Ironforge::layouts.backend.breadcrumb')
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                    </div>
                    <div class="box-body ">
                        <div class="col-lg-12">
                            <form method="post" action="{{route('ironforge.resources.store')}}">
                                {{csrf_field()}}
                                @include('Ironforge::backend.resources.form')
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection


@section('style')
    <style>
        .radio label{
            padding: 0px 20px;
        }
    </style>
@endsection