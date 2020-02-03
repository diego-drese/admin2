<?php

namespace Oka6\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Jenssegers\Mongodb\Eloquent\Model;

class BlogPost extends Model
{

    protected $fillable = ['title'];
    protected $connection = 'oka6_admin';
    protected $table = 'oka6_blog_post';
    const TABLE = 'oka6_blog_post';


    public static function newPost($request)
    {

        $tags = Oka6Tag::createTag(Auth::user()->client_id, $request->tags, 'blog', 'post');

        $post = new BlogPost();
        $post->title = $request->title;
        $post->slug = $request->slug;
        $post->status = $request->status;
        $post->category = $request->category;
        $post->tags = $tags;
        $post->image = $request->image;
        $post->description = $request->description;
        $post->save();
    }

    public static function updatePost($request, $id)
    {

        $tags = Oka6Tag::createTag(Auth::user()->client_id, $request->tags, 'blog', 'post');

        $post =  self::where('_id', $id)->first();
        $post->title = $request->title;
        $post->slug = $request->slug;
        $post->status = $request->status;
        $post->category = $request->category;
        $post->tags = $tags;
        $post->image = $request->image;
        $post->description = $request->description;
        $post->save();
    }


}
