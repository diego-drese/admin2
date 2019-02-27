@extends('Admin::layouts.quillpro.main')
@section('title', 'Criar Paciente')
@section('content')
    <div class="card-header">
        @include('Admin::layouts.quillpro.breadcrumb')
        <div class="pull-right">
            <button type="submit" class="btn btn-default"  form="form-user">Salvar</button>
        </div>
    </div>

    <div class="box">
        <div class="box-header">
        </div>
        <div class="box-body ">
            <form id="form-user" method="post" action="{{route('admin.pacient.store')}}">
                {{ csrf_field() }}
                @include('Admin::backend.pacients.form')
            </form>
        </div>
    </div>
@endsection
