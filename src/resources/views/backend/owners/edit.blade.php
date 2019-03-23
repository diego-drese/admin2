@extends('Admin::layouts.backend.main')
@section('title', 'Owner edit')
@section('content')
<div class="content-wrapper">
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-header">
                    </div>
                    <div class="box-body ">
                        <form method="post" action="{{route('admin.owner.update',$owner->id)}}">
                            {{csrf_field()}}
                            @include('Admin::backend.owners.form')
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection