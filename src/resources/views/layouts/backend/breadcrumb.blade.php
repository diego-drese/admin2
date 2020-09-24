@if(!trim($__env->yieldContent('hideBreadCrumb')))
<div class="page-breadcrumb">
    <div class="row">
        <div class="col-5 align-self-center">
            <h4 class="page-title">@yield('title')
                @yield('breadcrumb-title-right')
            </h4>
        </div>
        <div class="col-7 align-self-center">
            <div class="d-flex align-items-center justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        @foreach($adminBreadCrumb as $key => $value)
                            <li class="breadcrumb-item">
                                @if(isset($adminBreadCrumb[$key+1]))
                                    {{$value['menu'] ? $value['menu'] : $value['name']}}
                                    <i class="fas fa-angle-right"></i>
                                @else
                                    <i class="fas {{$value['icon']}}" title="{{$value['menu'] ? $value['menu'] : $value['name']}}"></i>
                                @endif
                            </li>
                        @endforeach
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>
@endif
