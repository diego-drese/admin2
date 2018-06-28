@extends('layouts.backend.main')
@section('content')
@section('title', 'Perfis')

<div class="content-wrapper">
    @include('layouts.backend.breadcrumb')

    <section class="content">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <div class="pull-left">
                            @php $canAdd =  \Aggrega\Ironforge\ResouceIronForge::verifyUser('ProfilesController@create'); @endphp
                            {{--@if($canAdd)--}}
                            <a href="{{route('profiles.create')}}" class="btn btn-success">
                                Novo Profile <span class="fa fa-plus"></span>
                            </a>
                            {{--@endif--}}
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
                                <td>Criação</td>
                                <td>Recursos</td>
                                <td>Ações</td>
                            </tr>
                            </thead>
                            <tbody>
                            @php $canEdit =  \Aggrega\Ironforge\ResouceIronForge::verifyUser('ProfilesController@edit');
                            @endphp
                            @foreach($profiles as $profile)


                                <tr>
                                    <td class="center bold">{{$profile->name}}</td>
                                    <td>{{$profile->created_at->format('d/m/Y')}}</td>
                                    <td>
                                        @foreach($profile->resources()->get() as $resource)
                                           <span class="label label-info">{{$resource->name}}</span>
                                        @endforeach
                                    </td>


                                    <td class="center">
                                        {{--@if($canEdit)--}}
                                        <a href="{{route('profiles.edit',$profile->id )}}"
                                           class="btn btn-xs btn-default">Editar</a>
                                        {{--@endif--}}
                                        {{--<a href="" class="btn btn-default"></a>--}}
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
