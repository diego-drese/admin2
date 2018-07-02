@extends('Ironforge::layouts.backend.main')
@section('content')
@section('title', 'Editar Owner')


<div class="content-wrapper">
    @include('Ironforge::layouts.backend.breadcrumb')

    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                    </div>
                    <div class="box-body ">
                        <div class="col-md-6">
                            <form method="post" action="{{route('owners.update',$owner->id)}}">
                                @csrf {{method_field('put')}}
                                @include('Ironforge::backend.owners.form')
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection





