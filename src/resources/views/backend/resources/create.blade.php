@extends('Admin::layouts.backend.main')
@section('title', 'Resource Create')
@section('content')
    <div class="card-header">
        @include('Admin::layouts.backend.breadcrumb')
        <div class="pull-right">
            <button type="submit" class="btn btn-default"  form="form-resource">Salvar</button>
        </div>
    </div>

    <div class="box">
        <div class="box-header">
        </div>
        <div class="box-body ">
            <form id="form-resource" method="post" action="{{route('admin.resources.store')}}">
                {{ csrf_field() }}
                @include('Admin::backend.resources.form')
            </form>
        </div>
    </div>
@endsection
