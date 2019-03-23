@if(!trim($__env->yieldContent('hideBreadCrumb')))
<div class="page-breadcrumb">
    <div class="row">
        <div class="col-5 align-self-center">
            <h4 class="page-title">@yield('title')</h4>
        </div>
        <div class="col-7 align-self-center">
            <div class="d-flex align-items-center justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        @foreach($ironForgeBreadCrumb as $key => $value)
                            @if($value['route_name'] && isset($ironForgeBreadCrumb[$key+1]))
                                <li class="breadcrumb-item">
                                   <a  href="{{route($value['route_name'])}}"> {{$value['menu']}}</a>
                                </li>
                            @else
                                <li class="breadcrumb-item active">
                                    {{$value['menu']}}
                                </li>
                            @endif
                        @endforeach
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>
@endif