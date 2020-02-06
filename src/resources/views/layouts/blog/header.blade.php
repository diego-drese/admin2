<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
        <div class="menu-logo">
            <h1 class="logo "><a class="scroll" href="/blog">HClinic</a> </h1>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCt" aria-controls="navbarCt" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCt">
            <ul class="navbar-nav mr-auto">
                @foreach($data as $cat)
                <li class="nav-item">
                    <a class="nav-link " href="/categoria/{{$cat->slug}}">{{$cat->title}}</a>
                </li>
                @endforeach
            </ul>
{{--            <form class="form-inline">--}}
{{--                <div class="input-group search-box">--}}
{{--                    <input type="text" class="form-control" placeholder="Pesquisar?" aria-label="Pesquisa...">--}}
{{--                    <span class="input-group-btn">--}}
{{--                    <button class="btn btn-secondary" type="button"><i class="ion-search"></i></button>--}}
{{--                 </span>--}}
{{--                </div>--}}
{{--            </form>--}}
        </div>
    </div>
</nav>

@section('style_head_components')

    <style>
        .bg-fl-oka{
            background: url(https://formito.com/assets/img/bg-header.png) no-repeat
            right -59px top -116px,
            linear-gradient(123deg, #fff 0%, #fff 50%, #f3f0fc 100%) no-repeat right top;
        }
        .container {
            max-width: 960px;
        }
        .navbar-expand-lg {
            background-color: transparent;
            padding: 15px;
          // box-shadow:  -18px 5px 20px 9px rgba(242, 239, 254, 0.54);
            margin-bottom: 20px;
        }
        .navbar-expand-lg .navbar-nav .nav-link {
            color: #a39daf;
            font-size: 1.55em;
            font-family: inherit;
            margin: 0 2px;
            text-transform: uppercase;
            font-weight: 700;

        }

        .search-box {
            position: relative;
            height: 34px;
        }
        .search-box input {
            border: 0;
            border-radius: 3px !important;
            padding-right: 28px;
            font-size: 15px;
        }

        .search-box .input-group-btn {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 999;
        }

        .search-box .input-group-btn button {
            background-color: transparent;
            border: 0;
            padding: 4px 8px;
            color: rgba(0,0,0,.4);
            font-size: 20px;
        }

        .search-box .input-group-btn button:hover,
        .search-box .input-group-btn button:active,
        .search-box .input-group-btn button:focus {
            color: rgba(0,0,0,.4);
        }

        @media (min-width: 992px) {
            .navbar-expand-lg .navbar-nav .nav-link {
                padding-right: .7rem;
                padding-left: .7rem;
            }

            .search-box {
                width: 300px !important;
            }
        }

    </style>
    @endsection
