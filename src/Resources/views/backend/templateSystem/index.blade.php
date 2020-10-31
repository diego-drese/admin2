@extends('Admin::layouts.backend.main')
@section('title', 'Templates para Home')
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex no-block align-items-center m-b-10">
                        <h4 class="card-title">&nbsp;</h4>
                        <div class="ml-auto">
                            <div class="btn-group">
                                <a href="{{route('admin.template-system.create')}}">
                                    <a href="{{route('admin.template-system.create')}}" class="btn btn-primary">
                                        Adicionar <span class="fa fa-plus"></span>
                                    </a>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered" role="grid" aria-describedby="file_export_info">
                            <thead class="">
                            <tr>
                                <th>Título</th>
                                <th>Slug</th>
                                <th>Status do template</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($templates as $tpl)
                                <tr>
                                    <td class="title-table">{{$tpl->title}}</td>
                                    <td class="max-height-table">{!! $tpl->slug !!}</td>
                                    <td class="max-height-table">{{$tpl->active == 1 ? 'Ativo' : 'Desativado'}}</td>
                                    <td class="actions-table">
                                        <a href="{{route('admin.template-system.edit', ['id' => $tpl->id])}}"
                                           class="btn btn-xs btn-secondary" role="button" aria-pressed="true">
                                            Editar
                                        </a>
                                        <form action="{{route('admin.template-system.destroy', ['id' => $tpl->id])}}"
                                              method="POST">
                                            @method('DELETE')
                                            @csrf
                                            <button type="submit" class="btn btn-xs btn-danger" role="button"
                                                    aria-pressed="true">Remover
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
                {{ $templates->links() }}
            </div>
        </div>
    </div>
@endsection

@section('style_head')
    <style>

        td.title-table {
            vertical-align: middle;
            font-size: 1.2em;
            text-align: center;
        }

        td.actions-table {
            vertical-align: middle;
            text-align: center;
        }

        td.actions-table a {
            margin-bottom: 5px;
        }
    </style>

@endsection
