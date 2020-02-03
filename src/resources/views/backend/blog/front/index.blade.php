@extends('Admin::layouts.blog.main')
@section('title', 'Blog Hclinic')
@section('content_blog')
    @include('Admin::layouts.blog.header')
    <div class="container">

        <div class="row">

            @forelse($posts as $post)
                <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div class="card">
                        @if($post->image)
                        <img class="card-img"
                             src="{{$post->image}}"
                             alt="{{$post->title}}">
                            @else
                            <img class="card-img"
                                 src="http://via.placeholder.com/739x415/9572db/ffffff?text=Hclinic+Blog d"
                                 alt="{{$post->title}}">
                        @endif
                        <div class="card-img-overlay">
                            @foreach($post->tags as $tag)
                            <a href="#" class="btn btn-light btn-sm">{{$tag}}</a>
                            @endforeach
                        </div>

                        <div class="card-body">
                            <h4 class="card-title">{{$post->title}}</h4>
                            <a href="#" class="btn btn-info">Read Recipe</a>
                        </div>
                        <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                            <div class="views">{{$post->created_at->diffForHumans()}}
                            </div>
                        </div>
                    </div>
                </div>
            @empty
                <div class="text-center">
                    <p>Sem posts no momento, aguarde novidades!</p>
                </div>
            @endforelse

        </div>
    </div>

@endsection

@section('style_head')

    <style>

        .card-img {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            min-height: 430px;
        }

        .card-title {
            margin-bottom: 0.3rem;
        }

        .cat {
            display: inline-block;
            margin-bottom: 1rem;
        }

        .fa-users {
            margin-left: 1rem;
        }

        .card-footer {
            font-size: 0.8rem;
        }
    </style>
@endsection
