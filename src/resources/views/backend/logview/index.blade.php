@extends('Admin::layouts.quillpro.main')
@section('title', 'Logs')
@section('content')
    <div class="content-wrapper">
        <section class="content">
            <div style="height:900px;">
                <iframe src="/log-viewer" width="100%" height="100%" style="border:0px"></iframe>
                <div class="clearfix"></div>
            </div>
        </section>
    </div>
@endsection