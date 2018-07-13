@extends('Ironforge::layouts.backend.main')
@section('content')
@section('title', 'Perfis')

<div class="content-wrapper">
    @include('Ironforge::layouts.backend.breadcrumb')

    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                        <div class="pull-left">
                            @if($hasAdd)
                                <a href="{{route('ironforge.profiles.create')}}" class="btn btn-success">
                                    Novo Profile <span class="fa fa-plus"></span>
                                </a>
                            @endif
                        </div>
                    </div>
                    <div class="box-body ">
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
                            @php $canEdit =  Aggrega\Ironforge\Library\ResouceIronForge::verifyUser('ProfilesController@edit');
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
                                        @if($hasEdit)
                                            <a href="{{route('ironforge.profiles.edit',$profile->id )}}" class="btn btn-xs btn-default">Editar</a>
                                        @endif
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
