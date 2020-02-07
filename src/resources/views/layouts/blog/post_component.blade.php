@forelse($data as $post)
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
        <div class="card">
            @if($post->image)
                <a href="/post/{{$post->slug}}"><img class="card-img"
                                                    src="{{$post->image}}"
                                                    alt="{{$post->title}}"></a>
            @else
                <a href="/post/{{$post->slug}}" alt="{{$post->title}}">
                    <img class="card-img" src="https://via.placeholder.com/300x192/9572db/ffffff?text={{$post->title}}"
                         alt="{{$post->title}}"></a>
            @endif
            @if($post->tags)
                <div class="tags">
                    @foreach($post->tags as $tag)
                        <a href="/tag/{{$tag}}" class="btn btn-light btn-sm">{{$tag}}</a>
                    @endforeach
                </div>
            @endif
                <a href="/post/{{$post->slug}}" class="link-pt">
                    <div class="card-body">
                        <h4 class="card-title" title="{{$post->title}}">{{$post->title}}</h4>
                        <p class="card-text">{{$post->resume}}</p>
                    </div>
                </a>
            <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                <div class="views"><i class="fa fa-clock-o"></i> {{$post->created_at->diffForHumans()}}
                </div>

                <div class="stats">
                    <a href="/categoria/{{$post->category['slug']}}">{{$post->category['title']}}</a>
                </div>
            </div>
        </div>
    </div>
@empty
    <div class="text-center not-results">
        <p>Sem posts no momento, aguarde novidades!</p>
    </div>
@endforelse

@section('style_head')

    <style>
        .card{
            margin-bottom: 15px;
            min-height: 365px;
            max-height: 365px;
            border: 0;
            box-shadow: 0 1px 32px rgb(247, 244, 255), 0 1px 16px rgb(236, 231, 253);
        }

        .not-results{
            font-size: 2em;
            width: 100%;
            padding: 70px;
            font-family: 'Montserrat', sans-serif;
        }

        .card-img {
            min-height: 190px;
            max-height: 190px;
            object-fit: cover;
            border-radius: 5px 5px 0 0;
        }
        .card-img-overlay{
            position: relative!important;
        }

        .link-pt{
            color: #868686;
            font-size: 1.1em;
        }

        .link-pt:hover{
            transition: 1s ease;
            color: #9572db;
            text-decoration: none;
        }

        .tags{
            padding: 7px 1.25rem;
        }
        .tags a{
            background: #9572db;
            color: #fff;
            margin-right: 5px;
            border-radius: 4px;
            padding: 3px 8px;
            font-size: 1em;
        }

        .card-title {
            margin-bottom: 0.3rem;
            cursor: pointer;
            font-family: 'Montserrat', sans-serif!important;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-height: 16px;     /* fallback */
            max-height: 32px;      /* fallback */
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
        }

        .card-text{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-height: 16px;     /* fallback */
            max-height: 32px;      /* fallback */
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
            margin-top: 10px;
        }

        .cat {
            display: inline-block;
            margin-bottom: 1rem;
        }

        .fa-users {
            margin-left: 1rem;
        }

        .card-footer .views{
            display: flex;
            align-items: center;
        }
        .card-footer .views i{
            margin-right: 6px;
            margin-top: 1px;
        }

        .card-footer {
            font-size: 1.4em;
            text-transform: capitalize;
        }
        .card-footer .stats a{
            color: #9572db;
        }
    </style>
@endsection
