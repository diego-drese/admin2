@extends('Admin::layouts.backend.main')
@section('title', 'Editar Tutorial')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body ">
                    <form id="form-profile" method="post" action="{{route('admin.tutorial-help.update',$tutorial->id)}}">
                        {{ csrf_field() }}
                        @include('Admin::backend.tutorialHelp.form')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

