@extends('Admin::layouts.blog.main')
@section('title', 'Blog Hclinic')
@section('content_blog')
    @component('Admin::layouts.blog.header',['data' => $cats])
    @endcomponent
    <div class="container">

        <div class="row">

            @component('Admin::layouts.blog.post_component',['data' => $posts])
            @endcomponent

        </div>
    </div>

@endsection


