@extends('Admin::layouts.backend.main')
@section('title', 'Tutorial')
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex no-block align-items-center m-b-10">
                        <h4 class="card-title">&nbsp;</h4>
                        <div class="ml-auto">
                            <div class="btn-group">
                                <a href="{{route('admin.tutorial-help.create')}}">
                                    <a href="{{route('admin.tutorial-help.create')}}" class="btn btn-primary">
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
                                <th>Descrição</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($tutorials as $tuto)
                                <tr>
                                    <td class="title-table">{{$tuto->title}}</td>
                                    <td class="max-height-table">{!! $tuto->description!!}</td>
                                    <td class="actions-table">
                                        <a href="{{route('admin.tutorial-help.edit', ['id' => $tuto->id])}}"
                                           class="btn btn-xs btn-secondary" role="button" aria-pressed="true">
                                            Editar
                                        </a>
                                        <form action="{{route('admin.tutorial-help.destroy', ['id' => $tuto->id])}}"
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
                {{ $tutorials->links() }}
            </div>
        </div>
    </div>
@endsection

@section('style_head')
    <style>
        td.max-height-table {
            display: block;
            max-height: 350px;
            width: 450px;
            overflow-y: auto;
            border-bottom: 0;
            overflow-x: hidden;
        }

        td.title-table {
            vertical-align: middle;
            font-size: 1.5em;
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
