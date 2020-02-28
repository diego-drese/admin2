@forelse($posts as $post)
    <div class="col-12 col-sm-8 col-md-6 col-lg-4 blog-oka">
        <div class="card">
            @if($post->image)
                <a href="{{route('blogPost', [$post->slug])}}"><img class="card-img"
                                                     src="/blog-images/{{$post->image}}"
                                                     alt="{{$post->title}}"></a>
            @else
                <a href="{{route('blogPost', [$post->slug])}}" alt="{{$post->title}}">
                    <img class="card-img" src="https://via.placeholder.com/300x192/9572db/ffffff?text={{$post->title}}"
                         alt="{{$post->title}}"></a>
            @endif
            @if($post->tags)
                <div class="tags">
                    @foreach($post->tags as $tag)
                        <a href="{{route('blogTag', [$tag])}}" class="btn btn-light btn-sm">{{$tag}}</a>
                    @endforeach
                </div>
            @endif
            <a href="{{route('blogPost', [$post->slug])}}" class="link-pt">
                <div class="card-body">
                    <h4 class="card-title" title="{{$post->title}}">{{$post->title}}</h4>
                    <p class="card-text">{{$post->resume}}</p>
                </div>
            </a>
            <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                <div class="views"><i class="fa fa-clock-o"></i> {{$post->created_at->diffForHumans()}}
                </div>

                <div class="stats">
                    <a href="{{route('blogCategory', [$post->category['slug']])}}">{{$post->category['title']}}</a>
                </div>
            </div>
        </div>
    </div>
@empty
    <div class="text-center not-results">
        <p>Sem posts no momento, aguarde novidades!</p>
    </div>
@endforelse

