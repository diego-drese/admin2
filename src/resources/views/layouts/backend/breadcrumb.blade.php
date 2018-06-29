{{--@php dd($ironForgeBreadCrumb)

<section class="content-header">
    <span class="fa fa-user-secret icon-header font-gradient"></span>
    <h1>{{$ironForgeCurrentResource->name}}</h1>
    <ol class="breadcrumb">
        @foreach($ironForgeBreadCrumb as $key => $value)
            @if($value['route_name'] && isset($ironForgeBreadCrumb[$key+1]))
                <a href="{{route($value['route_name'])}}">
                    <li class=""><i class="fa {{$value['icon']}}"></i> {{$value['menu']}}</li>
                </a>{{isset($ironForgeBreadCrumb[$key+1]) ? '/' : ''}}
            @else
                <a href="#">
                    <li class=""><i class="fa {{$value['icon']}}"></i> {{$value['menu']}}</li>
                </a> {{isset($ironForgeBreadCrumb[$key+1]) ? '/' : ''}}
            @endif
        @endforeach
    </ol>
</section> @endphp--}}