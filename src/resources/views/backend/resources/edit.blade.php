@extends('Admin::layouts.quillpro.main')
@section('title', 'Resource Edit')
@section('content')

<div class="content-wrapper">
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                    </div>
                    <div class="box-body ">
                        <div class="col-lg-12">
                            <form method="post" action="{{route('admin.resources.update', $resource->id)}}">
                                {{csrf_field()}}
                                @include('Admin::backend.resources.form')
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection
