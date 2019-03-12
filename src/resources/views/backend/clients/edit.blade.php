@extends('Admin::layouts.quillpro.main')
@section('title', 'Editar Cliente')
@section('content')
    <div class="content-wrapper">
        <section class="content">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                    </div>
                    <div class="box-body ">
                        <form method="post" action="{{route('admin.client.update', $negotiateClient->_id)}}">
                            {{csrf_field()}}
                            @include('Admin::backend.clients.form')
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection


