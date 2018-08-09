<section class="content-header">
    <span class="fa {{$ironForgeCurrentResource->icon}}  font-gradient"></span>&nbsp;&nbsp;
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
</section>