@extends('Admin::layouts.backend.main')
@section('title', 'Criar Post')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body ">
                    <form id="form" method="post" enctype="multipart/form-data" action="{{route('admin.blog.store')}}">
                        {{ csrf_field() }}
                        @include('Admin::backend.blog.form')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

