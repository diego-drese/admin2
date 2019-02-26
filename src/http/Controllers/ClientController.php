<?php

namespace Negotiate\Admin\Http\Controllers;

use Negotiate\Admin\Library\ResourceAdmin;
use Negotiate\Admin\Profile;
use Negotiate\Admin\NegotiateClient;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Negotiate\Admin\Resource;
use Negotiate\Admin\Sequence;
use Yajra\Datatables\Datatables;
use Illuminate\Support\Facades\Hash;
use Image;
use App\Http\Requests;



class ClientController extends BaseController {

    use ValidatesRequests;

    public function index(Request $request,DataTables $datatables ) {

        if($request->ajax()){

            $query = NegotiateClient::all();

            return Datatables::of($query)
                ->addColumn('edit_url', function($row){
                    return route('admin.client.edit', [$row->id]);
                })
                ->addColumn('profileName', function($row){
                    if(isset($row->profile_id)) {
                        $profile = Profile::where('id', (int)$row->profile_id)->first();
                        return $profile->name;
                    }else{
                        return '';
                    }
                })
                ->addColumn('resourceName', function($row){
                    if(isset($row->resource_default_id)) {
                        $resource = Resource::where('id', (int)$row->resource_default_id)->first();
                        return $resource->name;
                    }else{
                        return '';
                    }

                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->make(true);
        }

        $hasAdd     = ResourceAdmin::hasResourceByRouteName('admin.client.create');
        $hasEdit    = ResourceAdmin::hasResourceByRouteName('admin.client.edit', [1]);
        return view('Admin::backend.clients.index', compact('hasAdd', 'hasEdit'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(NegotiateClient $negotiateClient) {
        $profiles   = Profile::all('id', 'name');
        $hasSave    = ResourceAdmin::hasResourceByRouteName('admin.client.store');
        return view('Admin::backend.clients.create', compact('profiles','negotiateClient', 'hasSave'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {

        $dataForm = $request->all();

        $customMessages = [
            'required' => 'campo é obrigatório'
        ];
        $this->validate($request, [
            'profile_id'                 => 'required',
            'name'                 => 'required',
            'email'                 => 'required|email',
            'type'                 => 'required',
            'type'                 => 'required',
            'cpf'                 => 'required_if:type,==,1',
            'cnpj'                 => 'required_if:type,==,2',
            //'id_user_system'       => 'required',
            'mother_name'       => 'required',
            'father_name'       => 'required',
            'cellphone'       => 'required',
            'phone'       => 'required',
            'health_plan'       => 'required',
            'number_health_plan'       => 'required',
            'password'              => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6|',
        ],$customMessages);

        if(NegotiateClient::where('email', $dataForm['email'])->first()){
            toastr()->error('O email já está em uso!','Email duplicado');
            return back()->withInput();
        }

        $dataForm['id'] = Sequence::getSequence('clients');
        $dataForm['password'] = bcrypt($dataForm['password']);
        if(NegotiateClient::create($dataForm)){
            toastr()->success('Usuário Criado!','Sucesso');
        }

        return redirect(route('admin.client.index'));

    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        $negotiateClient= NegotiateClient::firstOrNew(['id'=>(int)$id]);
        $profiles       = Profile::select('id','name')->get();
        $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.client.update', [1]);
        return view('Admin::backend.clients.edit', compact('negotiateClient', 'profiles', 'hasSave'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {

        $user       = NegotiateClient::firstOrNew(['id'=>(int)$id]);
        $dataForm   = $request->all();
        $this->validate($request, [
            'name'                  => 'required',
            //'resource_default_id'   => 'required',
          //  'email'                 => 'required|unique:users,email,'.$request->id,
            //'password'              => 'confirmed',
        ]);

        $dataForm['password'] = bcrypt($dataForm['password']);

        if($user->update( !isset($request->password) ? $request->except(['password']) : $dataForm)){
            toastr()->success('Cliente Atualizado com sucesso','Sucesso');
            dd('x');
        };

        return redirect(route('admin.client.index'));
    }

}
