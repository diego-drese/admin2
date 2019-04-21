<?php

namespace Negotiate\Admin\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Negotiate\Admin\Library\ResourceAdmin;
use Negotiate\Admin\NegotiatePlans;
use Negotiate\Admin\NegotiateWallet;
use Negotiate\Admin\NegotiateWalletTransaction;
use Negotiate\Admin\Profile;
use Negotiate\Admin\NegotiateClient;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Negotiate\Admin\Resource;
use Negotiate\Admin\Sequence;
use Negotiate\Admin\User;
use Yajra\Datatables\Datatables;

class ClientController extends BaseController {

    use ValidatesRequests;
    protected function makeValidate(Request $request){
        $this->validate($request, [
            'name'              => 'required',
            'type'              => 'required',
            'user_id'           => 'required',
            'fantasy_name'      => 'required_if:type,==,CNPJ',
            'social_reason'     => 'required_if:type,==,CNPJ',
            'cellphone'         => 'required',
            'email'             => ['required',  function ($attribute, $value, $fail) use($request){
                $id     = (int)$request->get('id');
                if($id){
                    $result = NegotiateClient::where('email', $value)->where('id', '!=', $id)->first();
                }else{
                    $result = NegotiateClient::where('email', $value)->first();
                }
                if ($result) {
                    $fail('EMAIL['.$value.'] já utilizado');
                }
            },],
            'cpf'       => ['required_if:type,==,CPF',  function ($attribute, $value, $fail) use($request){
                if($request->get('type')=="CNPJ"){
                    $id     = (int)$request->get('id');
                    if($id){
                        $result = NegotiateClient::where('cpf', $value)->where('id', '!=', $id)->first();
                    }else{
                        $result = NegotiateClient::where('cpf', $value)->first();
                    }

                    if ($result) {
                        $fail('CPF['.$value.'] já utilizado');
                    }
                }
            },],
            'cnpj'       => ['required_if:type,==,CNPJ',  function ($attribute, $value, $fail) use($request){
               if($request->get('type')=="CNPJ"){
                   $id     = (int)$request->get('id');
                   if($id){
                       $result = NegotiateClient::where('cnpj', $value)->where('id', '!=', $id)->first();
                   }else{
                       $result = NegotiateClient::where('cnpj', $value)->first();
                   }
                   if ($result) {
                       $fail('CNPJ['.$value.'] já utilizado');
                   }
               }
            },],
        ]);
    }

    public function index(Request $request, DataTables $datatables ) {
        if($request->ajax()){
            $user   = Auth::user();
            if($user->profile_id== User::PROFILE_ID_ROOT){
                $query = NegotiateClient::all();
            }else{
                $query = NegotiateClient::where('user_id', (int)$user->id)->get();
            }
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
        $user       = Auth::user();
        $profiles   = [];
        $hasSave    = ResourceAdmin::hasResourceByRouteName('admin.client.store');
        $plans      = NegotiatePlans::getAllActives();

        return view('Admin::backend.clients.create', compact('profiles','negotiateClient', 'hasSave', 'user', 'plans'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $dataForm        = [];
        $this->makeValidate($request);
        NegotiateClient::createClient($request);
        toastr()->success('Cliente ['. $request->get('name').'] foi criado!','Sucesso');
        return redirect(route('admin.client.edit',[$dataForm['id']]));
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        $user           = Auth::user();
        if($user->profile_id== User::PROFILE_ID_ROOT){
            $negotiateClient= NegotiateClient::where('id', (int)$id)->first();
        }else{
            $negotiateClient= NegotiateClient::where('id', (int)$id)->where('user_id', (int)$user->id)->first();
            if(!$negotiateClient){
                return view('Admin::errors.403');
            }
        }

        $plans          = NegotiatePlans::getAllActives();
        $fieldsUpdate   = Config::get('admin.plan_fields_update');
        $profiles       = Profile::getProfilesByTypes(Config::get('admin.profile_type'));
        $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.client.update', [1]);
        return view('Admin::backend.clients.edit', compact('negotiateClient', 'profiles', 'hasSave', 'user', 'plans', 'fieldsUpdate'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        $user       = Auth::user();
        if($user->profile_id == User::PROFILE_ID_ROOT){
            $negotiateClient = NegotiateClient::where('id',(int)$id)->first();
        }else{
            $negotiateClient = NegotiateClient::where('id',(int)$id)->where('user_id', (int)$user->id)->first();
        }

        if(!$negotiateClient){
            return view('Admin::errors.403');
        }
        $request->request->add(['id'=>$id]);
        $this->makeValidate($request);
        NegotiateClient::updateClient($request, $id);
        toastr()->success('Cliente Atualizado com sucesso','Sucesso');

        return redirect(route('admin.client.index'));
    }

    public function searchUser(Request $request) {
        $search     = trim($request->get('query'));
        $options    = [];
        if(strlen($search)>=3){
            $users = User::where(function($query) use($search) {
                $query->orWhere('name', 'like', '%'.$search.'%')
                    ->orWhere('lastname', 'like', '%'.$search.'%')
                    ->orWhere('email', 'like', '%'.$search.'%')
                    ->orWhere('cellphone', 'like', '%'.$search.'%');
            })
            ->where('active' , 1)
            ->take(10)
            ->get();

            foreach ($users as $user){
                $options[] = ['id'=> $user->id, 'value'=> $user->name.' '.$user->lastname ,'name'=>  $user->name.' '.$user->lastname, 'email'=> $user->email , 'cellphone'=>$user->cell_phone];
            }
        }
        return response()->json(['options'=>$options], 200);
    }

    public function userSave(Request $request, $idClient, $idUser=null) {
        $user       = Auth::user();
        if($user->profile_id != User::PROFILE_ID_ROOT){
            /** Valida se esse cliente é do usuário logado */
            $isOwnerClient = NegotiateClient::where('id', (int)$idClient)->where('user_id', (int)$user->id)->first();
            if(!$isOwnerClient){
                return response()->json(['message'=>'Esse cliente não pertence a você'], 400);
            }

            /** Valida se o profile passado é permitido */
            $profile = Profile::getProfilesByIdAndTypes($request->get('profile_id'), Config::get('admin.profile_type'));
           if(!$profile){
               return response()->json(['message'=>'Perfil não encontrado'], 400);
           }

        }else{
            $profile = Profile::getById($request->get('profile_id'));
            if(!$profile){
                return response()->json(['message'=>'Perfil não encontrado'], 400);
            }
        }

        $id         = (int)$idUser;
        $dataForm   = [];
        if($id){
            $emailUsed = User::where('email',$request->get('email'))->where('id', '!=', $id)->first();
            if(!empty($request->get('password') && !empty($request->get('password_confirm')))){
                $dataForm['password'] = bcrypt($request->get('password_confirm'));
            }
        }else{
            $emailUsed = User::where('email',$request->get('email'))->first();
            $dataForm['password'] = bcrypt($request->get('password_confirm'));
        }

        if($emailUsed){
            return response()->json(['message'=>'Esse email não não pode ser usado'], 400);
        }

        $id         = $id ? $id : Sequence::getSequence('users');
        $user       = User::firstOrNew(['id'=>(int)$id]);

        $dataForm['id']                 = $id;
        $dataForm['name']               = $request->get('name');
        $dataForm['lastname']           = $request->get('lastname');
        $dataForm['email']              = $request->get('email');
        $dataForm['cell_phone']         = $request->get('cell_phone');
        $dataForm['profile_id']         = $request->get('profile_id');
        $dataForm['resource_default_id']= $request->get('resource_default_id');
        $dataForm['client_id']          = (int)$idClient;
        $dataForm['active']             = (int)$request->get('active') ? 1 : 0;
        $dataForm['type']               = $profile->type;

        $user->fill($dataForm)->save();
        return response()->json(['message'=>'success'], 200);
    }

    public function userGet(Request $request, $idClient) {
        $user       = Auth::user();
        if($user->profile_id != User::PROFILE_ID_ROOT){
            /** Valida se esse cliente é do usuário logado */
            $isOwnerClient = NegotiateClient::where('id', (int)$idClient)->where('user_id', (int)$user->id)->first();
            if(!$isOwnerClient){
                $idClient=0;
            }
        }


        if($request->exists('id')){
            $query  = User::where('id', (int)$request->id)->where('client_id', (int)$idClient)->get();
        }else{
            $query  = User::where('client_id', (int)$idClient)->get();
        }

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
                return isset($resource->name)?$resource->name:'';
            })
            ->setRowClass(function () {
                return 'center';
            })
            ->make(true);
    }
    public function paymentCurrent(Request $request, $idClient) {
        $user       = Auth::user();
        if($user->profile_id != User::PROFILE_ID_ROOT){
            /** Valida se esse cliente é do usuário logado */
            $isOwnerClient = NegotiateClient::where('id', (int)$idClient)->where('user_id', (int)$user->id)->first();
            if(!$isOwnerClient){
                return response()->json(['message'=>'Cliente nao encontrado'], 400);
            }
        }else{
            $isOwnerClient = NegotiateClient::where('id', (int)$idClient)->first();
        }

        $plan = NegotiatePlans::getPlanById($isOwnerClient->plan_id);
        return response()->json(['message'=>'success', 'data'=> $plan->toArray()], 200);


    }
    public function paymentRequest(Request $request, $idClient) {
        $user       = Auth::user();
        if($user->profile_id != User::PROFILE_ID_ROOT){
            /** Valida se esse cliente é do usuário logado */
            $isOwnerClient = NegotiateClient::where('id', (int)$idClient)->where('user_id', (int)$user->id)->first();
            if(!$isOwnerClient){
                return response()->json(['message'=>'Cliente nao encontrado'], 400);
            }
        }else{
            $isOwnerClient = NegotiateClient::where('id', (int)$idClient)->first();
        }
        $plan = NegotiatePlans::getPlanById($isOwnerClient->plan_id);
        if($plan->type!="manual"){
            return response()->json(['message'=>'Não é permitido adicionar transações para esse plano'], 400);
        }
        /** Verifica se ja existe uma transação */
        $lastTransaction = NegotiateWalletTransaction::getLast($idClient);
        if($lastTransaction && ($lastTransaction->status=="pending" || $lastTransaction->status=="success")){
            return response()->json(['message'=>'Existe um pagamento em analise, aguarde para solicitar.'], 400);
        }
        NegotiateWalletTransaction::insertPayment($plan, $idClient, $user);
        return response()->json(['message'=>'success'], 200);
    }

    public function walletTransaction(Request $request, $idClient) {
        $user       = Auth::user();
        if($user->profile_id != User::PROFILE_ID_ROOT){
            /** Valida se esse cliente é do usuário logado */
            $isOwnerClient = NegotiateClient::where('id', (int)$idClient)->where('user_id', (int)$user->id)->first();
            if(!$isOwnerClient){
                $idClient=0;
            }
        }
        $query  = NegotiateWalletTransaction::where('client_id', (int)$idClient)->get();
        return Datatables::of($query)
            ->setRowClass(function () {
                return 'center';
            })
            ->make(true);
    }

}
