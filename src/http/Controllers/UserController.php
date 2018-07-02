<?php

namespace Aggrega\Ironforge\Http\Controllers;


use Aggrega\Ironforge\Profile;
use Aggrega\Ironforge\User;
use Aggrega\Ironforge\UserIronForge;
use Illuminate\Http\Request;


class UserController extends AuthIronForge
{
    protected $limit = 10;

    public function index()
    {

        $users = UserIronForge::latest()->paginate($this->limit);
//        dd(Auth::user()->profile);
        return view('Ironforge::backend.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(UserIronForge $user)
    {
        $profiles = Profile::all('id', 'name');

        return view('Ironforge::backend.users.newuser', compact('profiles','user'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $dataForm = $request->all();
        //dd($dataForm);
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6|',
        ]);
        $dataForm['password'] = bcrypt($dataForm['password']);
        $saveUser = $request->user()->create($dataForm);

        //SAVE In PIVOT "User_has_profiles
       // $user->profiles()->sync($dataForm['profile']);

        //$saveUser->profiles()->attach($dataForm['profile']);
        toastr()->success('Usuário Criado!','Sucesso');
        return redirect('/console/users');

    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user           = UserIronForge::findOrFail($id);
        $profiles       = Profile::select('id','name')->get();

        return view('Ironforge::backend.users.edit', compact('user', 'profiles'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = UserIronForge::findOrFail($id);
        $dataForm = $request->all();

        //dd($dataForm);
        $this->validate($request, [
            'name' => 'required',
            'resource_default_id' => 'required',
            'email' => 'required|unique:users,email,'.$user->id,
            'password' => 'confirmed',
        ]);

        $dataForm['password'] = bcrypt($dataForm['password']);
        $user->update( !isset($request->password) ? $request->except(['password']) : $dataForm);

        toastr()->success('Usuário Atualizado com sucesso','Sucesso');

        return redirect('/console/users');
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
