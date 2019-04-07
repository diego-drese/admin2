<?php

namespace Negotiate\Admin\Http\Controllers;

use Negotiate\Admin\Library\ResouceIronForge;
use Negotiate\Admin\Library\ResourceAdmin;
use Negotiate\Admin\NegotiateClient;
use Negotiate\Admin\Profile;
use Negotiate\Admin\Resource;
use Negotiate\Admin\Sequence;
use Negotiate\Admin\User;
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

    public function index(Request $request, DataTables $datatables ) {

        if($request->ajax()){
            $query = User::all();

            return Datatables::of($query)
                ->addColumn('edit_url', function($row){
                    if(isset($row->id)){
                        return route('admin.users.edit', [$row->id]);
                    }else{
                        return '';
                    }
                })
                ->addColumn('profileName', function($row){
                    $profile = Profile::where('id', (int)$row->profile_id)->first();
                    return $profile->name;
                })
                ->addColumn('resourceName', function($row){
                    $resource = Resource::where('id', (int)$row->resource_default_id)->first();
                   return '';
                    return isset($resource->name)?$resource->name:'';
                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->make(true);
        }

        $hasAdd     = 1;//ResourceAdmin::hasResourceByRouteName('admin.users.create');
        $hasEdit    = 1;//ResourceAdmin::hasResourceByRouteName('admin.users.edit', [1]);
        return view('Admin::backend.users.index', compact('hasAdd', 'hasEdit'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(User $user) {
        $profiles   = Profile::all('id', 'name');
        $clients    = NegotiateClient::all('id', 'name');
        $hasSave    = ResourceAdmin::hasResourceByRouteName('admin.users.store');
        return view('Admin::backend.users.create', compact('profiles','user','clients', 'hasSave'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $dataForm = $request->all();
        $auth       = Auth::user();
        $this->validate($request, [
            'name'                  => 'required',
            'profile_id'            => 'required|integer',
            'password'              => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6|',
            'email'                 => ['required',  function ($attribute, $value, $fail) use($dataForm,$auth){
                $result = User::where('email',$value)->where('client_id',$dataForm['client_id'])->first();
                if ($result) {
                    $fail($attribute.' Email inválido.');
                }
            },]

        ],['required'=>'Campo obrigatório','unique'=>'Email já cadastrado']);

        $dataForm['id']         = Sequence::getSequence('users');
        $dataForm['password']   = bcrypt($dataForm['password']);
        $dataForm['client_id']  = null;
        $request->user()->create($dataForm);

        toastr()->success('Usuário Criado!','Sucesso');
        return redirect(route('admin.users.index'));

    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        $user           = User::where('id',(int)$id)->first();
        $profiles       = Profile::select('id','name')->get();
        $clients   = NegotiateClient::all('id', 'name');
        $profileCurrent = "";
        foreach ($profiles as $profile){
            if($profile->id == $user->profile_id){
                $profileCurrent = $profile->name;
            }
        }
        foreach ($clients as $client){
            if($client->id == $user->client_id){
                $clientCurrent = $client->name;
            }
        }
        $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.users.update', [1]);
        return view('Admin::backend.users.edit', compact('user', 'clients','profiles', 'hasSave', 'profileCurrent','clientCurrent'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        $user       = User::firstOrNew(['id'=>(int)$id]);
        $dataForm   = $request->all();
        $auth       = Auth::user();
        $this->validate($request, [
            'name'                  => 'required',
            'client_id'             => 'required|integer',
            'profile_id'             => 'required|integer',
            'password'              => 'nullable|min:6|confirmed|nullable',
            'password_confirmation' => 'nullable|min:6',
            'email'                 => ['required',  function ($attribute, $value, $fail) use($dataForm,$auth){
                $result = User::where('email',$value)->where('client_id',$dataForm['client_id'])->where('id',(int)$auth->id)->first();
                if ($result) {
                    $fail($attribute.' Email inválido.');
                }
            },]

        ],['required'=>'Campo obrigatório','unique'=>'Email já cadastrado']);
//        if(User::where('email', $dataForm['email'])->where('id', '!=', (int)$id)->first()){
//            toastr()->error('O email já está em uso!','Email duplicado');
//            return back()->withInput();
//        }
        $dataForm['password'] = bcrypt($dataForm['password']);
        $user->update( !isset($request->password) ? $request->except(['password']) : $dataForm);
        toastr()->success('Usuário Atualizado com sucesso','Sucesso');
        return redirect(route('admin.users.index'));
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function viewUserProfile() {

        $auth = Auth::user();
        $user = User::firstOrNew(['id'=>(int)$auth->id]);
        $profiles   = Profile::pluck('name','id')->toArray();
        return view('Admin::backend.users.edit-profile', compact('profiles','user'));
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
        $user = User::firstOrNew(['id'=>(int)$auth->id]);

        $this->validate($request, [
            'picture'               => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'name'                  => 'required',
            'resource_default_id'   => 'required',
            'email'                 => 'required',
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
