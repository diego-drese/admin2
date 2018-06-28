@extends('layouts.backend.main')
@section('content')
@section('title', 'Editar Recurso')

<div class="content-wrapper">
@include('layouts.backend.breadcrumb')
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                    </div>
                    <div class="box-body ">
                        <div class="col-lg-8">
                            <form method="post" action="{{route('resources.update', $resource->id)}}">
                                {{csrf_field()}} {{method_field('PATCH')}}
                                @include('backend.resources.form')
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