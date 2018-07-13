@extends('Ironforge::layouts.backend.main')
@section('content')
@section('title', 'Editar Perfil')

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

                            <div class="col-md-12">
                                <form method="post" action="{{route('ironforge.profiles.update',$profile->id)}}">
                                    {{csrf_field()}}
                                    @include('Ironforge::backend.profiles.form')
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection


