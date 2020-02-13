<?php

namespace Oka6\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Image;
use Jenssegers\Mongodb\Eloquent\Model;

class BlogPost extends Model
{

    protected $fillable = ['title', 'category'];
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
        $post->category = json_decode($request->category);
        $post->tags = $tags;
        $post->image = self::imageTransform($request);
        $post->resume = $request->resume;
        $post->description = $request->description;
        $post->save();
    }

    public static function updatePost($request, $id)
    {

        $tags = Oka6Tag::createTag(Auth::user()->client_id, $request->tags, 'blog', 'post');
        $post = self::where('_id', $id)->first();
        $post->title = $request->title;
        $post->slug = $request->slug;
        $post->status = $request->status;
        $post->category = json_decode($request->category);
        $post->tags = $tags;
        $post->resume = $request->resume;
        $post->image = self::imageTransform($request, $post);;
        $post->description = $request->description;
        $post->save();
    }

    public static function deletePost($id)
    {
        $post = self::where('_id', $id)->first();
        Storage::delete("public/blog-images/{$post->image}");
        $post->delete();
    }

    public static function verifySlug($slug)
    {
        return self::where('slug', $slug)->first();
    }


    public static function imageTransform($request, $update = false)
    {
        if ($request->hasFile('image')) {
            $image = $request->image;
            $ext = $image->getClientOriginalExtension();
            $filename = $request->slug . '.' . $ext;
            if ($update) {
                Storage::delete("public/blog-images/{$update->image}");
            }
            $image->storeAs('public/blog-images', $filename);

            return $filename;
        }else{
            if($update){
                return $update->image;
            }
        }
    }
}
