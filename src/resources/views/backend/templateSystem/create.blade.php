@extends('Admin::layouts.backend.main')
@section('title', 'Criar Template')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body ">
                    <form id="form-profile" method="post" >
                        {{ csrf_field() }}
                        @include('Admin::backend.templateSystem.form')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

