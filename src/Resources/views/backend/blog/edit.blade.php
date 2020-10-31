@extends('Admin::layouts.backend.main')
@section('title', 'Editar Post')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body ">
                    <form id="form-profile" enctype="multipart/form-data" method="post"
                          action="{{route('admin.blog.update',$post->_id)}}">
                        {{ csrf_field() }}
                        @include('Admin::backend.blog.form')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

