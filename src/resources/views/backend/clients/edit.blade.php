@extends('Admin::layouts.backend.main')
@section('title', 'Editar Cliente')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body ">
                    <form method="post" action="{{route('admin.client.update', $oka6Client->id)}}" enctype="multipart/form-data">
                        {{csrf_field()}}
                        @include('Admin::backend.clients.form')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection


