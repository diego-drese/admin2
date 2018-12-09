<?php

namespace Negotiate\Admin\Http\Controllers;

use Negotiate\Admin\Library\ResouceIronForge;
use Negotiate\Admin\Profile;
use Negotiate\Admin\UserIronForge;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Yajra\Datatables\Datatables;
use Illuminate\Support\Facades\Hash;
use Image;
use App\Http\Requests;


class UserController extends BaseController {

    use ValidatesRequests;

    public function index(Request $request,DataTables $datatables ) {

        if($request->ajax()){

            $query = UserIronForge::select('users.*','profiles.name as profileName','resources.name as resourceName')
            ->join('profiles','profiles.id','users.profile_id')
            ->join('resources','resources.id','users.resource_default_id');

            return Datatables::of($query)

                ->addColumn('edit_url', function($row){
                    return route('admin.users.edit', [$row->id]);
                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->make(true);
        }

        $hasAdd     = ResouceIronForge::hasResourceByRouteName('admin.users.create');
        $hasEdit    = ResouceIronForge::hasResourceByRouteName('admin.users.edit', [1]);
        return view('Admin::backend.users.index', compact('hasAdd', 'hasEdit'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(UserIronForge $user) {
        $profiles   = Profile::all('id', 'name');
        $hasSave    = ResouceIronForge::hasResourceByRouteName('admin.users.store');
        return view('Admin::backend.users.create', compact('profiles','user', 'hasSave'));
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
        $hasSave        = ResouceIronForge::hasResourceByRouteName('admin.users.update', [1]);
        return view('Admin::backend.users.edit', compact('user', 'profiles', 'hasSave'));
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


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function viewUserProfile() {

        $auth = Auth::user();
        $user = UserIronForge::findOrFail($auth->id);
        return view('Admin::backend.users.edit-profile', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function updateUserProfile(Request $request) {

        $dataForm   = $request->all();

        $auth = Auth::user();
        $user = UserIronForge::findOrFail($auth->id);

        $this->validate($request, [
            'picture'               => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'name'                  => 'required',
            'resource_default_id'   => 'required',
            'email'                 => 'required|unique:users,email,'.$user->id,
            'old_password'          => [function ($attribute, $value, $fail) use ($request, $user) {

                if (!Hash::check($request->old_password, $user->password)) {
                    $fail('Current Password dont match!');
                }

                if ($value == '') {
                    $fail('Current Password is required!');
                }

            }],
            'password'              => ['confirmed'],
        ]);

        $dataForm['password'] = bcrypt($dataForm['password']);


        if( $request->hasFile('picture')){

            $image = $request->file('picture');

            $input['picture'] = time().'.'.$image->getClientOriginalExtension();

            $destinationPath = public_path('/thumbnail');

            if(!File::isDirectory($destinationPath)){
                File::makeDirectory($destinationPath, 0777);
            }

            $img = Image::make($image->getRealPath());

            $img->resize(100, 100, function ($constraint) {

                $constraint->aspectRatio();

            })->save($destinationPath.'/'.$input['picture']);

            $dataForm['picture'] = $input['picture'];
        }

        if( !isset($request->password) ){
            unset($dataForm['password']);
        }

        $user->fill($dataForm);
        $user->update($dataForm);

        toastr()->success('Usuário Atualizado com sucesso','Sucesso');

        return redirect(route('admin.users.form-profile'));
    }



}
