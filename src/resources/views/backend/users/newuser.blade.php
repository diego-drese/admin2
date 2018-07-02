@extends('Ironforge::layouts.backend.main')
@section('content')
@section('style')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css">
@endsection

    <div class="content-wrapper">
        @include('Ironforge::layouts.backend.breadcrumb')

        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                        </div>
                        <div class="box-body ">

                            <div class="col-md-6">
                                <form method="post" action="{{route('users.store')}}">
                                    {{ csrf_field() }}
                                    @include('Ironforge::backend.users.form')
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
