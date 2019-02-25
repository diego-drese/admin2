@extends('Admin::layouts.quillpro.main')
@section('title', 'Profile Create')
@section('content')
    <div class="card-header">
        @include('Admin::layouts.quillpro.breadcrumb')
        <div class="pull-right">
            <button type="submit" class="btn btn-default"  form="form-profile">Salvar</button>
        </div>
    </div>

    <div class="box">
        <div class="box-header">
        </div>
        <div class="box-body ">
            <form id="form-profile" method="post" action="{{route('admin.profiles.store')}}">
                {{ csrf_field() }}
                @include('Admin::backend.profiles.form')
            </form>
        </div>
    </div>
@endsection



