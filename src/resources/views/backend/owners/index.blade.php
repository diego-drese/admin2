@extends('Ironforge::layouts.backend.main')
@section('content')
@section('title', 'Owners')

<div class="content-wrapper">
    @include('Ironforge::layouts.backend.breadcrumb')

    <section class="content">
        <div class="row">
            <div class="col-md-8 col-sm-12 col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <div class="pull-left">
                            <a href="{{route('owners.create')}}" class="btn btn-success">
                                Novo Owner <span class="fa fa-plus"></span>
                            </a>
                        </div>
                    </div>
                    <div class="box-body ">

                        <table class="table table-active table-bordered ">
                            <thead>
                            <tr class="center">
                                <td>Nome</td>
                                <td>Descrição</td>
                                <td>Usuários</td>
                                <td>Ações</td>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($owners as $owner)
                                <tr>
                                    <td class="center bold">{{$owner->name}}</td>
                                    <td>{!!  $owner->desc!!}</td>
                                    <td>
                                    {!!
                                        $owner->user->map(function ($item) {
                                           return '<span class="label label-info">'.$item->name.'</span>';
                                        })->implode(' - ')
                                    !!}
                                    </td>
                                    <td class="center">
                                        <a href="{{route('owners.edit',$owner->id )}}"
                                           class="btn btn-xs btn-default">Editar</a>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>


                    </div>
                </div>
                {{--{{$users->appends(Request::query())->links()}}--}}
            </div>
        </div>
    </section>
</div>
@endsection
