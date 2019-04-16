@extends('Admin::layouts.backend.main')
@section('title', 'Criar Plano')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body ">
                    <form id="form-profile" method="post" action="{{route('admin.profiles.store')}}">
                        {{ csrf_field() }}
                        @include('Admin::backend.plans.form')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection



