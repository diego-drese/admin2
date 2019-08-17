@extends('Admin::layouts.backend.main')
@section('title', 'Editar template '. $template->exists() ? $template->title : '')
@section('content')
    <div class="row">
        <div class="col-md-12">


            <div class="card">
{{--                action="{{route('admin.tutorial-help.update',$tutorial->id)}}"--}}
                <div class="card-body ">
                    <form id="form-template" method="post" >
                        {{ csrf_field() }}
                        @include('Admin::backend.templateSystem.form')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

