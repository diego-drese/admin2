<?php

namespace Oka6\Admin\Http\Controllers;

use Illuminate\Support\Facades\Auth;
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
        BlogPost::newPost($request);
        toastr()->success('Post Criado com sucesso', 'Sucesso');
        return redirect(route('admin.blog.index'));
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

        $posts = BlogPost::where('status','1')->latest()->paginate(5);

        return view('Admin::backend.blog.front.index', compact('posts'));
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
