@extends('Admin::layouts.quillpro.main')
@section('title', 'Profiles Edit')
@section('content')
    <div class="content-wrapper">
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                        </div>
                        <div class="box-body ">

                            <div class="col-md-12">
                                <form method="post" action="{{route('admin.profiles.update',$profile->id)}}">
                                    {{csrf_field()}}
                                    @include('Admin::backend.profiles.form')
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection



