<?php

namespace Oka6\Admin\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Oka6\Admin\BlogCategory;
use Oka6\Admin\BlogPost;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Oka6\Admin\Oka6Tag;

class BlogController extends BaseController
{

    use ValidatesRequests;

    public function index(Request $request)
    {
        $posts = BlogPost::latest()->orderBy('status', 'ASC')->simplePaginate(10);
        return view('Admin::backend.blog.index', compact('posts'));
    }

    public function create(BlogPost $post, BlogCategory $category)
    {
        $category = BlogCategory::all();
//        Oka6Tag::getTagsByType()
        return view('Admin::backend.blog.create', compact('post', 'category'));
    }


    public function store(Request $request)
    {
        $this->makeValidatePost($request);
        if (BlogPost::verifySlug($request->slug)) {
            toastr()->error('Slug (URL) já utilizada', 'Erro');
            return redirect()->back()->withInput($request->input());
        } else {
            BlogPost::newPost($request);
            toastr()->success('Post Criado com sucesso', 'Sucesso');
            return redirect(route('admin.blog.index'));
        }

    }

    public function editPost($id)
    {
        $category = BlogCategory::all();
        $post = BlogPost::where('_id', $id)->first();
        return view('Admin::backend.blog.edit', compact('post', 'category'));
    }

    public function update(Request $request, $id)
    {
        $this->makeValidatePost($request);
        BlogPost::updatePost($request, $id);
        toastr()->success('Post atualizado com sucesso', 'Sucesso');
        return redirect(route('admin.blog.index'));
    }

    public function destroy($id)
    {
        return $id;
        return view('Admin::backend.blog.edit');
    }

    public function categoryNew(Request $request)
    {
        if (!$request->title) {
            return response()->json([
                'status' => 400,
                'message' => 'Favor incluir titulo'
            ]);
        }

        $findCat = BlogCategory::where('title', $request->title)->first();
        if ($findCat) {
            return response()->json([
                'status' => 200,
                'message' => 'sucess',
                'data' => $findCat
            ]);
        } else {
            $cat = new BlogCategory();
            $cat->title = $request->title;
            $cat->slug = $request->slug;
            $cat->save();
            return response()->json([
                'status' => 200,
                'message' => 'sucess',
                'data' => $cat
            ]);
        }
    }

    public function blogFront()
    {

        $cats = BlogCategory::all();
        $posts = BlogPost::where('status', '1')
            ->latest()
            ->simplePaginate(8);
        //  return $posts;

        return view('Admin::backend.blog.front.index', compact('posts', 'cats'));
    }

    public function blogPost($slug)
    {
        $cats = BlogCategory::all();
        $post =  BlogPost::where('slug', (string)$slug)->first();


        return view('Admin::backend.blog.front.post', compact('post', 'cats'));

    }

    public function blogTag($tag)
    {
       $posts =  BlogPost::whereIn('tags', [$tag])->get();
       return $posts;
    }

    public function blogCategory($cat)
    {
        $cats = BlogCategory::all();

        $posts = BlogPost::where('category.slug', $cat)->simplePaginate(5);

        return view('Admin::backend.blog.front.category', compact('posts', 'cats'));


    }

    protected function makeValidatePost(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'slug' => 'required',
            'category' => 'required',
            'description' => 'required',
        ]);
    }

}
