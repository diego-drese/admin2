@forelse($data as $post)
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
        <div class="card">
            @if($post->image)
                <a href="/post/{{$post->slug}}"><img class="card-img"
                                                    src="{{$post->image}}"
                                                    alt="{{$post->title}}"></a>
            @else
                <a href="post/{{$post->slug}}" alt="{{$post->title}}">
                    <img class="card-img" src="https://via.placeholder.com/300x192/9572db/ffffff?text={{$post->title}}"
                         alt="{{$post->title}}"></a>
            @endif
            @if($post->tags)
                <div class="tags">
                    @foreach($post->tags as $tag)
                        <a href="tag/{{$tag}}" class="btn btn-light btn-sm">{{$tag}}</a>
                    @endforeach
                </div>
            @endif
            <div class="card-body">
                <h4 class="card-title" title="{{$post->title}}">{{$post->title}}</h4>
                <p class="card-text">{{$post->resume}}</p>
                <a href="/post/{{$post->slug}}" class="btn btn-dark">Leia mais</a>
            </div>
            <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                <div class="views">{{$post->created_at->diffForHumans()}}
                </div>

                <div class="stats">
                    <a href="categoria/{{$post->category['slug']}}">{{$post->category['title']}}</a>
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
            min-height: 386px;
            max-height: 386px;
        }

        .not-results{
            font-size: 2em;
            width: 100%;
            padding: 70px;
            font-family: 'Montserrat', sans-serif;
        }

        .card-img {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            min-height: 190px;
            max-height: 190px;
            object-fit: cover;
        }
        .card-img-overlay{
            position: relative!important;
        }

        .tags{
            padding: 7px 1.25rem;
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
        }

        .cat {
            display: inline-block;
            margin-bottom: 1rem;
        }

        .fa-users {
            margin-left: 1rem;
        }

        .card-footer {
            font-size: 1.2em;
            text-transform: capitalize;
        }
    </style>
@endsection
