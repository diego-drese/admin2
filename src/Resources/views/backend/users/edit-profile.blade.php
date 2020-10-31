@extends('Admin::layouts.backend.main')
@section('title', 'Editar Perfil')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body ">
                    <form method="post" action="{{route('admin.users.update-profile')}}" enctype="multipart/form-data">
                        {{csrf_field()}}
                        @include('Admin::backend.users.form-profile')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection



