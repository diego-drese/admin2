@extends('Admin::layouts.blog.main')
@section('title', 'Blog Hclinic')
@section('content_blog')
    @component('Admin::layouts.blog.header',['data' => $cats])
    @endcomponent
    <div class="container posts">

        <div class="row">

            @component('Admin::layouts.blog.post_component',['data' => $posts])
            @endcomponent

        </div>
    </div>

@endsection


@section('style_page')
    <style>
        .container.posts {
            min-height: 52.2vh;
        }

    </style>
@endsection
