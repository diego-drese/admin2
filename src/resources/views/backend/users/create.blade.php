@extends('Admin::layouts.backend.main')
@section('title', 'User Save')
@section('style')

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css">
@endsection
@section('content')
    <div class="content-wrapper">
        @include('Admin::layouts.backend.breadcrumb')
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                        </div>
                        <div class="box-body ">
                            <form method="post" action="{{route('admin.users.store')}}">
                                {{ csrf_field() }}
                                @include('Admin::backend.users.form')
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
