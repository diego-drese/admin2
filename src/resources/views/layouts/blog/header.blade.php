<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
        <div class="menu-logo">
            <h1 class="logo "><a class="scroll" href="#home">HClinic</a> </h1>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCt" aria-controls="navbarCt" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCt">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link " href="#">Fundamentals</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Health</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">More <i class="ion-ios-arrow-down"></i></a>
                </li>
            </ul>
            <form class="form-inline">
                <div class="input-group search-box">
                    <input type="text" class="form-control" placeholder="What are you looking for?" aria-label="Search for...">
                    <span class="input-group-btn">
            <button class="btn btn-secondary" type="button"><i class="ion-search"></i></button>
          </span>
                </div>
            </form>
        </div>
    </div>
</nav>

@section('style_head')

    <style>
        .container {
            max-width: 960px;
        }
        .navbar-expand-lg {
            background-color: #fff;
            padding: 15px;
        }
        .navbar-expand-lg .navbar-nav .nav-link {
            color: #22292f;
            font-size: 1.4em;
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
