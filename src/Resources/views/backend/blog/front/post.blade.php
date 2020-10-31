@extends('Admin::layouts.blog.main')
@section('title', 'Blog Hclinic')
@section('content_blog')
    {{--    @include('Admin::layouts.blog.header')--}}
    @component('Admin::layouts.blog.header',['data' => $cats])
    @endcomponent
    <div class="container">

        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <h1 class="headline">{{$post->title}}</h1>

                <div class="image">
                    <img class="d-none" src="/blog-images/{{$post->image}}" alt="{{$post->title}}">
                </div>

                <div class="post_info">
                    <div class="date">
                        <p>Postado dia {{$post->created_at->format('d/m/Y')}} em <a
                                    href="{{route('blogPost', [$post->category['slug']])}}"> {{$post->category['title']}}</a>
                        </p>
                    </div>

                    <div class="tags">
                        @if($post->tags)
                            @foreach($post->tags as $tag)
                                <a href="{{route('blogTag', [$tag])}}" class="btn btn-light btn-sm">{{$tag}}</a>
                            @endforeach
                        @endif
                    </div>
                </div>

                <div class="text">
                    {!! $post->description !!}
                </div>
            </div>
        </div>
    </div>

@endsection

@section('style_head')
    <style>
        .text, p, h2, h3, span {
            font-family: 'Montserrat', sans-serif !important;
        }

        .image {
            background-image: url(/storage/blog-images/{{$post->image}});
            height: 250px;
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            border-radius: 7px;
            margin-bottom: 12px;
        }

        @media only screen and (max-device-width: 550px) {
            .image {
                background-attachment: scroll;
            }
        }

        p, li, span {
            color: #7b7a7a !important;
        }

        .post_info a {
            color: #a184da !important;;
        }

        .headline {
            font-size: 3.4em;
            text-align: center;
            font-weight: 700;
            margin-bottom: 25px;
            color: #737373;
            font-family: 'Montserrat', sans-serif !important;
        }

        .category a {
            margin: 0 7px;
        }

        .post_info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.6em;
            margin-bottom: 16px;
        }

        .post_info .date, .post_info .tags {
            display: flex;
            align-items: center;
        }

        .post_info .date p {
            margin: 0;
        }

        .btn-light {
            color: #212529;
            background-color: #f8f5ff;
            border-color: #f8f9fa;
            font-size: 0.7em !important;
            margin: 0 3px;
        }
    </style>
@endsection
