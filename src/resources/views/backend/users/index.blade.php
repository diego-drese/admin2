@extends('Ironforge::layouts.backend.main')
@section('content')
@section('title', 'Usuários')

<div class="content-wrapper">
    @include('Ironforge::layouts.backend.breadcrumb')

    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                        <div class="pull-left">
                            <a href="{{route('users.create')}}" class="btn btn-success">
                                Novo Usuário <span class="fa fa-plus"></span>
                            </a>
                        </div>
                    </div>
                    <div class="box-body ">
                        @if(session('message'))
                            <div class="alert alert-success alert-dismissible">
                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×
                                </button>
                                <h4><i class="icon fa fa-check"></i> Sucesso!</h4>
                                {{session('message')}}
                            </div>
                        @endif

                        <table class="table table-active table-bordered ">
                            <thead>
                            <tr class="center">
                                <td>Nome</td>
                                <td>Email</td>
                                <td>Perfil</td>
                                <td>Status</td>
                                <td>Contato</td>
                                <td>Pagina Default</td>
                                <td>Criado Em:</td>
                                <td>Ações</td>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($users as $user)
                                <tr class="{{$user->active == 0 ? 'disabled-class' : ''}}">
                                    <td>{{$user->name}}</td>
                                    <td>{{$user->email}}</td>
                                    <td>
                                        <span class="label label-info">{{ $user->profile->name }}</span>
                                    </td>
                                    <td>{{$user->active == 1 ? 'Ativo' : 'Inativo'}}</td>
                                    <td>{{$user->cell_phone}}</td>
                                    <td>{{ucfirst($user->resourceDefault->name)}}</td>
                                    <td>{{$user->created_at->format('d/m/Y H:i')}}</td>
                                    <td class="center">
                                        <a href="{{route('users.edit',$user->id)}}">
                                            <button class="btn btn-xs btn-default">Editar</button>
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
                {{$users->appends(Request::query())->links()}}
            </div>
        </div>
    </section>
</div>
@endsection
