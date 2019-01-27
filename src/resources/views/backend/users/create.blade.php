@extends('Admin::layouts.quillpro.main')
@section('title', 'User Edit')
@section('content')
    <div class="content-wrapper">
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
