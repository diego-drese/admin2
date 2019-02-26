@extends('Admin::layouts.quillpro.main')
@section('title', 'Client Create')
@section('content')
    <div class="content-wrapper">
        <section class="content">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                    </div>
                    <div class="box-body ">
                        <form method="post" action="{{route('admin.client.store')}}">
                            {{ csrf_field() }}
                            @include('Admin::backend.clients.form')
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
