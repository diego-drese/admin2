@extends('Admin::layouts.backend.main')
@section('title', 'Criar Notificação')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body ">
                    <form id="form-profile" method="post" action="{{route('admin.notifications.store')}}">
                        {{ csrf_field() }}
                        @include('Admin::backend.notifications.form')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection



