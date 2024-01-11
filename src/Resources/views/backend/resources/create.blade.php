@extends('Admin::layouts.backend.main')
@section('title', 'Criar Recurso')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body ">
                    <form id="form-resource" method="post" action="{{route('admin.resources.store')}}">
                        {{ csrf_field() }}
                        @include('Admin::backend.resources.form')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
