<?php

namespace Negotiate\Admin\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Negotiate\Admin\Library\MongoUtils;
use Negotiate\Admin\Library\ResourceAdmin;
use Illuminate\Routing\Controller as BaseController;
use Negotiate\Admin\NegotiateClient;
use Negotiate\Admin\NegotiatePlans;
use Negotiate\Admin\NegotiateWalletTransaction;
use Negotiate\Admin\Profile;
use Negotiate\Admin\Resource;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Negotiate\Admin\Sequence;
use Negotiate\Admin\User;
use Yajra\Datatables\Datatables;

class TransactionsController extends BaseController
{

    use ValidatesRequests;
    public function index(Request $request,DataTables $datatables ) {

        if($request->ajax()){

            $query = NegotiateWalletTransaction::all();

            return Datatables::of($query)
                ->addColumn('client_name', function($row){
                   $client = NegotiateClient::getById($row->client_id);
                   return $client->name;
                })->addColumn('get_url', function($row){
                    return route('admin.transactions.get', [$row->id]);
                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->make(true);
        }

        $hasShow     = ResourceAdmin::hasResourceByRouteName('admin.transactions.get',[1]);
        $hasUpdate   = ResourceAdmin::hasResourceByRouteName('admin.transactions.update', [1]);
        return view('Admin::backend.transactions.index', compact('hasShow', 'hasUpdate'));

    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get($id) {
        $transaction    = NegotiateWalletTransaction::getById($id);
        $client         = NegotiateClient::getById($transaction->client_id);
        $plan           = NegotiatePlans::getPlanById($transaction->plan_id);
        $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.transactions.update',[1]);
        $fieldsUpdate   = Config::get('admin.plan_fields_update');
        return view('Admin::backend.transactions.form',compact('transaction','client', 'hasSave', 'fieldsUpdate', 'plan'));


    }


    public function update(Request $request, $id) {
        $transactions    = NegotiateWalletTransaction::firstOrNew(['id'=>(int)$id]);

        if($transactions->status!="pending"){
            toastr()->error("Não é possivel atualziar essa transação.",'Erro');
            return redirect(route('admin.transactions.get',[$id]));
        }

        if(!$request->get('status')){
            toastr()->error("Status não recebido.",'Erro');
            return redirect(route('admin.transactions.get',[$id]));
        }

        if($request->get('status')!="complete" && $request->get('status')!="reject"){
            toastr()->error("Status deve ser complete ou reject",'Erro');
            return redirect(route('admin.transactions.get',[$id]));
        }
        $user                   = Auth::user();
        $historic               = ['user_id' =>($user ? $user->id : null),'user_name' =>($user ? $user->name : null), 'action'=> 'update', 'status'=> $request->get('status'), 'date_at'=> MongoUtils::convertDatePhpToMongo(date('Y-m-d H:i:s'))];
        $transactions->status   = $request->get('status');
        $transactions->historic = array_merge($transactions->historic,$historic);
        $transactions->save();

        toastr()->success("Status atuaizado com sucesso",'Sucesso');
        return redirect(route('admin.transactions.index'));


    }


}
