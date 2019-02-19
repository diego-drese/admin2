<ol class="nav pull-left">
    @foreach($ironForgeBreadCrumb as $key => $value)
        @if($value['route_name'] && isset($ironForgeBreadCrumb[$key+1]))
            <li class="breadcrumb-item">
                <i class="fa {{$value['icon']}}"></i>
                <a  href="{{route($value['route_name'])}}"> {{$value['menu']}}</a>
            </li>
        @else
            <li class="breadcrumb-item active">
                <i class="fa {{$value['icon']}}"></i>
                {{$value['menu']}}
            </li>
        @endif
    @endforeach
</ol>
