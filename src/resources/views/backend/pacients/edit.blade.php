@extends('Admin::layouts.quillpro.main')
@section('title', 'Editar Paciente')
@section('content')
    <div class="content-wrapper">
        <section class="content">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                    </div>
                    <div class="box-body ">
                        <form method="post" action="{{route('admin.pacient.update', $negotiatePacient->id)}}">
                            {{csrf_field()}}
                            @include('Admin::backend.pacients.form')
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection


