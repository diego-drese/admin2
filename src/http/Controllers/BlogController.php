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

    public function getCategories()
    {
        $cats = BlogCategory::all();
        $posts = collect();
        foreach ($cats as $c) {
            $posts->push($c, $c['count_posts'] = BlogPost::where('category.slug', $c->slug)->count());
        }
        return response()->json([
            'status' => 200,
            'message' => 'success',
            'data' => $posts
        ]);
    }

    public function categoryNew(Request $request)
    {
        if (!$request->title) {
            return response()->json([
                'status' => 400,
                'message' => 'Favor incluir titulo'
            ]);
        }

        $findCat = BlogCategory::where('slug', $request->slug)->first();
        if ($findCat) {
            return response()->json([
                'status' => 200,
                'message' => 'category_found',
                'data' => $findCat
            ]);
        } else {
            $cat = new BlogCategory();
            $cat->title = $request->title;
            $cat->slug = $request->slug;
            $cat->save();
            return response()->json([
                'status' => 200,
                'message' => 'success',
                'data' => $cat
            ]);
        }
    }

    public function updateOrDestroyCategory(Request $request)
    {
        if ($request->type === 'delete') {
            $findCat = BlogPost::where('slug', $request->slug)->first();
            if($findCat){
                return response()->json([
                    'status' => 400,
                    'message' => 'Não é possivel excluir uma categoria com posts',
                ]);
            }else{
                BlogCategory::where('slug', $request->slug)->delete();
                return response()->json([
                    'status' => 200,
                    'message' => 'Categoria deletada',
                ]);
            }
        }

        if ($request->type === 'edit') {
            $cat = BlogCategory::where('slug', $request->slug)->first();
            $cat->title = $request->title;
            $cat->save();
            $ct = json_encode($cat);

            $findPosts = BlogPost::where('category.slug', $request->slug)->get();
            foreach ($findPosts as $p){
                $p->category = json_decode($ct);
                $p->save();
            }

            return response()->json([
                'status' => 200,
                'message' => 'Categoria atualizada',
                'cat' => $cat,
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
        $post = BlogPost::where('slug', (string)$slug)->first();


        return view('Admin::backend.blog.front.post', compact('post', 'cats'));

    }

    public function blogTag($tag)
    {
        $cats = BlogCategory::all();
        $posts = BlogPost::whereIn('tags', [$tag])->simplePaginate(5);

        return view('Admin::backend.blog.front.tag', compact('posts', 'cats'));

    }

    public function blogCategory($cat)
    {
        $cats = BlogCategory::all();
        $posts = BlogPost::where('category.slug', $cat)->simplePaginate(5);
        return view('Admin::backend.blog.front.category', compact('posts', 'cats'));
    }

    public function tagsBlogAjax(Request $request)
    {
        return Oka6Tag::searchTagsByType(Auth::user()->client_id, 'blog', $request->term['term']);

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
