@extends('Ironforge::layouts.backend.main')
@section('title', 'Novo Proprietário')
@section('content')


<div class="content-wrapper">
    @include('Ironforge::layouts.backend.breadcrumb')

    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                    </div>
                    <div class="box-body ">
                        <form method="post" action="{{route('ironforge.owner.store')}}">
                            {{csrf_field()}}
                            @include('Ironforge::backend.owners.form')
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection





