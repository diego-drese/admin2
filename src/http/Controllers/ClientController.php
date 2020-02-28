<?php

namespace Oka6\Admin\Http\Controllers;

use function GuzzleHttp\Promise\all;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Oka6\Admin\Library\ResourceAdmin;
use Oka6\Admin\Oka6Plans;
use Oka6\Admin\Oka6Wallet;
use Oka6\Admin\Oka6WalletTransaction;
use Oka6\Admin\Profile;
use Oka6\Admin\Oka6Client;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Oka6\Admin\Resource;
use Oka6\Admin\Sequence;
use Oka6\Admin\User;
use Yajra\Datatables\Datatables;

class ClientController extends BaseController {

    use ValidatesRequests;
    protected function makeValidate(Request $request){
        $this->validate($request, [
            'address_street'         => 'required',
            'address_number'         => 'required',
            'address_neighborhood'   => 'required',
            'address_city'           => 'required',
            'address_state'          => 'required',
            'name'              => 'required',
            'type'              => 'required',
            'user_id'           => 'required',
            'fantasy_name'      => 'required_if:type,==,CNPJ',
            'social_reason'     => 'required_if:type,==,CNPJ',
            'cellphone'         => 'required',
            'email'             => ['required',  function ($attribute, $value, $fail) use($request){
                $id     = (int)$request->get('id');
                if($id){
                    $result = Oka6Client::where('email', $value)->where('id', '!=', $id)->first();
                }else{
                    $result = Oka6Client::where('email', $value)->first();
                }
                if ($result) {
                    $fail('EMAIL['.$value.'] já utilizado');
                }
            },],
            'cpf'       => ['required_if:type,==,CPF',  function ($attribute, $value, $fail) use($request){
                if($request->get('type')=="CNPJ"){
                    $id     = (int)$request->get('id');
                    if($id){
                        $result = Oka6Client::where('cpf', $value)->where('id', '!=', $id)->first();
                    }else{
                        $result = Oka6Client::where('cpf', $value)->first();
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
                       $result = Oka6Client::where('cnpj', $value)->where('id', '!=', $id)->first();
                   }else{
                       $result = Oka6Client::where('cnpj', $value)->first();
                   }
                   if ($result) {
                       $fail('CNPJ['.$value.'] já utilizado');
                   }
               }
            },],
        ]);
    }

    public function index(Request $request) {
        if($request->ajax()){
            $user   = Auth::user();
            if($user->profile_id== User::PROFILE_ID_ROOT){
                $query = Oka6Client::orderBy('name');
            }else{
                $query = Oka6Client::where('user_id', (int)$user->id);
            }

            return Datatables($query)
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
                ->toJson();
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
    public function create(Oka6Client $oka6Client) {
        $user       = Auth::user();
        $profiles   = [];
        $hasSave    = ResourceAdmin::hasResourceByRouteName('admin.client.store');
        $plans      = Oka6Plans::getAllActives();

        return view('Admin::backend.clients.create', compact('profiles','oka6Client', 'hasSave', 'user', 'plans'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $this->makeValidate($request);
        $dataForm = Oka6Client::createClient($request);
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
            $oka6Client= Oka6Client::where('id', (int)$id)->first();
        }else{
            $oka6Client= Oka6Client::where('id', (int)$id)->where('user_id', (int)$user->id)->first();
            if(!$oka6Client){
                return view('Admin::errors.403');
            }
        }

        $plans          = Oka6Plans::getAllActives();
        $fieldsUpdate   = Config::get('admin.plan_fields_update');
        $profiles       = Profile::getProfilesByTypes(Config::get('admin.profile_type'));
        $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.client.update', [1]);
        return view('Admin::backend.clients.edit', compact('oka6Client', 'profiles', 'hasSave', 'user', 'plans', 'fieldsUpdate'));
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
            $oka6Client = Oka6Client::where('id',(int)$id)->first();
        }else{
            $oka6Client = Oka6Client::where('id',(int)$id)->where('user_id', (int)$user->id)->first();
        }

        if(!$oka6Client){
            return view('Admin::errors.403');
        }
        $request->request->add(['id'=>$id]);
        $this->makeValidate($request);
        Oka6Client::updateClient($request, $id);
        toastr()->success('Cliente Atualizado com sucesso','Sucesso');
        return redirect(route('admin.client.index'));
    }

    public function searchUser(Request $request) {
        $search     = trim($request->get('query'));
        $clients    = $request->get('clients');
        $options    = [];
        if(strlen($search)>=3){
            if(is_array($clients) && !in_array('all', $clients)){
                $users = User::where(function($query) use($search) {
                    $query->orWhere('name', 'like', '%'.$search.'%')
                        ->orWhere('lastname', 'like', '%'.$search.'%')
                        ->orWhere('email', 'like', '%'.$search.'%')
                        ->orWhere('cellphone', 'like', '%'.$search.'%');
                })
                    ->where('active' , 1)
                    ->whereIn('client_id', array_map('intval', $clients))
                    ->take(10)
                    ->get();
            }else{
                $users = User::where(function($query) use($search) {
                    $query->orWhere('name', 'like', '%'.$search.'%')
                        ->orWhere('lastname', 'like', '%'.$search.'%')
                        ->orWhere('email', 'like', '%'.$search.'%')
                        ->orWhere('cellphone', 'like', '%'.$search.'%');
                })
                    ->where('active' , 1)
                    ->take(10)
                    ->get();
            }


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
            $isOwnerClient = Oka6Client::where('id', (int)$idClient)->where('user_id', (int)$user->id)->first();
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
            $isOwnerClient = Oka6Client::where('id', (int)$idClient)->where('user_id', (int)$user->id)->first();
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
            $isOwnerClient = Oka6Client::where('id', (int)$idClient)->where('user_id', (int)$user->id)->first();
            if(!$isOwnerClient){
                return response()->json(['message'=>'Cliente nao encontrado'], 400);
            }
        }else{
            $isOwnerClient = Oka6Client::where('id', (int)$idClient)->first();
        }

        $plan = Oka6Plans::getPlanById($isOwnerClient->plan_id);
        if($plan){
            return response()->json(['message'=>'success', 'data'=> $plan->toArray()], 200);
        }else{
            return response()->json(['message'=>'Cadastre um plano'], 400);
        }


    }
    public function paymentRequest(Request $request, $idClient) {
        $user       = Auth::user();
        if($user->profile_id != User::PROFILE_ID_ROOT){
            /** Valida se esse cliente é do usuário logado */
            $isOwnerClient = Oka6Client::where('id', (int)$idClient)->where('user_id', (int)$user->id)->first();
            if(!$isOwnerClient){
                return response()->json(['message'=>'Cliente nao encontrado'], 400);
            }
        }else{
            $isOwnerClient = Oka6Client::where('id', (int)$idClient)->first();
        }
        $plan = Oka6Plans::getPlanById($isOwnerClient->plan_id);
        if($plan->type!="manual"){
            return response()->json(['message'=>'Não é permitido adicionar transações para esse plano'], 400);
        }
        /** Verifica se ja existe uma transação */
        $lastTransaction = Oka6WalletTransaction::getLast($idClient);
        if($lastTransaction && ($lastTransaction->status=="pending" || $lastTransaction->status=="success")){
            return response()->json(['message'=>'Existe um pagamento em analise, aguarde para solicitar.'], 400);
        }
        Oka6WalletTransaction::insertPayment($plan, $idClient, $user);
        return response()->json(['message'=>'success'], 200);
    }

    public function walletTransaction(Request $request, $idClient) {
        $user       = Auth::user();
        if($user->profile_id != User::PROFILE_ID_ROOT){
            /** Valida se esse cliente é do usuário logado */
            $isOwnerClient = Oka6Client::where('id', (int)$idClient)->where('user_id', (int)$user->id)->first();
            if(!$isOwnerClient){
                $idClient=0;
            }
        }
        $query  = Oka6WalletTransaction::where('client_id', (int)$idClient);
        return Datatables::of($query)
            ->setRowClass(function () {
                return 'center';
            })
            ->toJson();
    }

}
