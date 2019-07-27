<?php

namespace Negotiate\Admin\Http\Controllers;

use Negotiate\Admin\Library\ResourceAdmin;
use Illuminate\Routing\Controller as BaseController;
use Negotiate\Admin\TutorialHelp;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;

class TutorialHelpController extends BaseController
{


    use ValidatesRequests;
    public function index(Request $request) {
        $tutorials = TutorialHelp::latest()->paginate(10);
        return view('Admin::backend.tutorialHelp.index', compact('tutorials'));
    }

    public function dataJson()
    {
        $tutorials = TutorialHelp::oldest()->get();
        return response()->json(['status' => 200, 'data' => $tutorials]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(TutorialHelp $tutorial) {
        return view('Admin::backend.tutorialHelp.create', compact('tutorial'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $this->makeValidate($request);
        TutorialHelp::createTutorial($request);
        toastr()->success('Tutorial Criado com sucesso','Sucesso');
        return redirect(route('admin.tutorial-help.index'));
    }

    public function destroy($id) {
        TutorialHelp::deleteTutorial($id);
        toastr()->success('Tutorial Deletado com sucesso','Sucesso');
        return redirect(route('admin.tutorial-help.index'));
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        $tutorial  = TutorialHelp::where('id',(int)$id)->first();
        return view('Admin::backend.tutorialHelp.edit', compact('tutorial'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        $this->makeValidate($request);
        TutorialHelp::updateTutorial($request, $id);
        toastr()->success('Tutorial Atualizado com sucesso','Sucesso');
        return redirect(route('admin.tutorial-help.index'));
    }

    protected function makeValidate(Request $request){
        $this->validate($request, [
            'title'              => 'required',
            'description'             => 'required',
        ]);
    }


}
