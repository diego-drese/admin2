<?php

namespace Aggrega\Ironforge\Http\Controllers;

use Aggrega\Ironforge\Library\ResouceIronForge;
use Aggrega\Ironforge\Profile;
use Aggrega\Ironforge\UserIronForge;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;

class UserController extends BaseController {

    use ValidatesRequests;
    protected $limit = 10;

    public function index() {
        $users      = UserIronForge::latest()->paginate($this->limit);
        $hasAdd     = ResouceIronForge::hasResourceByRouteName('ironforge.users.create');
        $hasEdit    = ResouceIronForge::hasResourceByRouteName('ironforge.users.edit', [1]);
        return view('Ironforge::backend.users.index', compact('users','hasAdd', 'hasEdit'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(UserIronForge $user) {
        $profiles   = Profile::all('id', 'name');
        $hasSave    = ResouceIronForge::hasResourceByRouteName('ironforge.users.store');
        return view('Ironforge::backend.users.create', compact('profiles','user', 'hasSave'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $dataForm = $request->all();
        $this->validate($request, [
            'name'                  => 'required',
            'email'                 => 'required|unique:users',
            'password'              => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6|',
        ]);
        $dataForm['password'] = bcrypt($dataForm['password']);
        $request->user()->create($dataForm);

        toastr()->success('Usuário Criado!','Sucesso');
        return redirect('/console/users');

    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        $user           = UserIronForge::findOrFail($id);
        $profiles       = Profile::select('id','name')->get();
        $hasSave        = ResouceIronForge::hasResourceByRouteName('ironforge.users.update', [1]);
        return view('Ironforge::backend.users.edit', compact('user', 'profiles', 'hasSave'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        $user       = UserIronForge::findOrFail($id);
        $dataForm   = $request->all();

        $this->validate($request, [
            'name'                  => 'required',
            'resource_default_id'   => 'required',
            'email'                 => 'required|unique:users,email,'.$user->id,
            'password'              => 'confirmed',
        ]);

        $dataForm['password'] = bcrypt($dataForm['password']);
        $user->update( !isset($request->password) ? $request->except(['password']) : $dataForm);
        toastr()->success('Usuário Atualizado com sucesso','Sucesso');
        return redirect('/console/users');
    }

}
