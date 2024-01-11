@extends('Admin::layouts.backend.main')
@section('title', 'Editar Usuário')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body ">
                    <form id="form-user" method="post" action="{{route('admin.users.update', $user->id)}}">
                        {{csrf_field()}}
                        @include('Admin::backend.users.form')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

