<nav class="navbar navbar-expand-lg navbar-light blog-oka">
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
                    <a class="nav-link " href="{{route('blogCategory', [$cat->slug])}}">{{$cat->title}}</a>
                </li>
                @endforeach
            </ul>
        </div>
    </div>
</nav>
