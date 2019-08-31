<?php

namespace Negotiate\Admin\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Negotiate\Admin\Library\ResourceAdmin;
use Illuminate\Routing\Controller as BaseController;
use Negotiate\Admin\TemplateSystem;
use Negotiate\Admin\TutorialHelp;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;

class TemplateSystemController extends BaseController
{


    use ValidatesRequests;

    public function index(Request $request)
    {
        $templates = TemplateSystem::select('id', 'title', 'slug','active')
            ->orderBy('active', 'desc')
            ->paginate(10);
        return view('Admin::backend.templateSystem.index', compact('templates'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $template = TemplateSystem::where('id', (int)$id)->first();
        return view('Admin::backend.templateSystem.edit', compact('template'));
    }

    public function update(Request $request, $id = null)
    {
        $auth = Auth::user();
        $this->makeValidate($request);
        if ($auth->profile_id === 5047785) {
            $tpl = TemplateSystem::updateTemplate($request, $id);
            return response()->json([
                'status' => 200,
                'tpl' => $tpl->title,
                'tpl_id' => $tpl->id,
                'message' => 'atualizado com sucesso!'
            ]);
        }
        return abort(500);
    }

    public function changeStatus(Request $request, $id)
    {
        $auth = Auth::user();
        if ($auth->profile_id !== 5047785) {
            return abort(500);
        }
        TemplateSystem::changeStatusTpl($request, $id);
        return response()->json([
            'status' => 200,
            'message' => 'atualizado com sucesso!'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(TemplateSystem $template)
    {
        return view('Admin::backend.templateSystem.create', compact('template'));
    }


    public function destroy($id)
    {
        TemplateSystem::deleteTpl($id);
        toastr()->success('Template Deletado com sucesso', 'Sucesso');
        return redirect(route('admin.template-system.index'));
    }


    protected function makeValidate(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'slug' => 'required',
        ]);
    }


}
