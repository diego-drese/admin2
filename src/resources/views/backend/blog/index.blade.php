@extends('Admin::layouts.backend.main')
@section('title', 'Blog')
@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex no-block align-items-center m-b-10">
                        <h4 class="card-title">&nbsp;</h4>
                        <div class="ml-auto">
                            <div class="btn-group">
                                <a href="{{route('admin.blog.create')}}" class="btn btn-primary">
                                    Novo Post <span class="fa fa-plus"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered" role="grid" aria-describedby="file_export_info">
                            <thead class="">
                            <tr>
                                <th>Título</th>
                                <th>Post</th>
                                <th>status</th>
                                <th>Categoria</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($posts as $post)
                            <tr>
                                <td class="title-table">{{$post->title}}</td>
                                <td class="max-height-table">{!! $post->description!!}</td>
                                <td class="">{{$post->status == 0 ? 'Rascunho' : 'Ativo'}}</td>
                                <td class="">{{$post->category['title']}}</td>
                                <td class="actions-table">
                                    <a href="{{route('admin.blog.edit', ['id' => $post->_id])}}"
                                       class="btn btn-xs btn-secondary" role="button" aria-pressed="true">
                                        Editar
                                    </a>
                                    <form action="{{route('admin.blog.destroy', ['id' => $post->_id])}}" method="POST">
                                        @method('DELETE')
                                        @csrf
                                        <button type="submit" class="btn btn-xs btn-danger" role="button" aria-pressed="true">Remover</button>
                                    </form>
                                </td>
                            </tr>
                            @endforeach
                            </tbody>
                    </table>
                    </div>
                </div>
                {{ $posts->links() }}
            </div>
        </div>
    </div>
@endsection

@section('style_head')
   <style>
       td.max-height-table{
           display: block;
           max-height: 100px;
           width: auto;
           overflow-y: auto;
           border-bottom: 0;
           overflow-x: hidden;
           max-width: 600px;
       }
       td.title-table{
           vertical-align: middle;
           font-size: 1.2em;
           text-align: center;
           width: 210px;
       }
       td.actions-table{
           vertical-align: middle;
           text-align: center;
       }
       td.actions-table a{
           margin-bottom: 5px;
       }
   </style>

@endsection
