@extends('Admin::layouts.quillpro.main')
@section('title', 'Profile Create')
@section('content')
    <div class="content-wrapper">
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header"> </div>
                        <div class="box-body">
                            <form method="post" action="{{route('admin.profiles.store',$profile->id)}}">
                                {{csrf_field()}}
                                @include('Admin::backend.profiles.form')
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection


