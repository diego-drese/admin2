@extends('Admin::layouts.backend.main')
@section('title', 'Editar Perfil')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body ">
                    <form id="form-profile" method="post" action="{{route('admin.profiles.update',$profile->id)}}">
                        {{ csrf_field() }}
                        @include('Admin::backend.plans.form')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection




