<?php

namespace Oka6\Admin\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Oka6\Admin\Library\MongoUtils;
use Oka6\Admin\Library\ResourceAdmin;
use Illuminate\Routing\Controller as BaseController;
use Oka6\Admin\Oka6Client;
use Oka6\Admin\Oka6Plans;
use Oka6\Admin\Oka6WalletTransaction;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Yajra\Datatables\Datatables;

class TransactionsController extends BaseController {

    use ValidatesRequests;
    public function index(Request $request) {

        if($request->ajax()){
            return Datatables::of(Oka6WalletTransaction::query())
                ->addColumn('client_name', function($row){
                   $client = Oka6Client::getById($row->client_id);
                   return $client->name;
                })->addColumn('get_url', function($row){
                    return route('admin.transactions.get', [$row->id]);
                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->toJson();
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
        $transaction    = Oka6WalletTransaction::getById($id);
        $client         = Oka6Client::getById($transaction->client_id);
        $plan           = Oka6Plans::getPlanById($transaction->plan_id);
        $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.transactions.update',[1]);
        $fieldsUpdate   = Config::get('admin.plan_fields_update');
        return view('Admin::backend.transactions.form',compact('transaction','client', 'hasSave', 'fieldsUpdate', 'plan'));


    }


    public function update(Request $request, $id) {

        $transactions    = Oka6WalletTransaction::firstOrNew(['id'=>(int)$id]);
        if($transactions->status!="pending"){
            toastr()->error("Não é possivel atualziar essa transação.",'Erro');
            return redirect(route('admin.transactions.get',[$id]));
        }

        if(!$request->exists('status')){
            toastr()->error("Status não recebido.",'Erro');
            return redirect(route('admin.transactions.get',[$id]));
        }

        if($request->get('status')!="complete" && $request->get('status')!="rejected"){
            toastr()->error("Status deve ser complete ou reject",'Erro');
            return redirect(route('admin.transactions.get',[$id]));
        }

        $user                               = Auth::user();
        $historic                           = $transactions->historic;
        $historic[]                         = ['user_id' =>($user ? $user->id : null),'user_name' =>($user ? $user->name : null), 'action'=> 'update', 'status'=> $request->get('status'), 'date_at'=> MongoUtils::convertDatePhpToMongo(date('Y-m-d H:i:s'))];
        $transactions->status_description   = Oka6WalletTransaction::STATUS[$request->get('status')];
        $transactions->status               = $request->get('status');
        $transactions->historic             = $historic;
        $transactions->save();

        if($request->get('status')=="complete"){
            /** Ajusta o cliente */
            $client                         = Oka6Client::getById($transactions->client_id);
            $client->total_charging         = (double)$client->total_charging+$transactions->value;
            $client->last_payment_value     = (double)$transactions->value;
            $client->current_plan           = $transactions->plan_name;
            if($client->next_charging_attempt){
                $dateCurrent = $client->next_charging_attempt;
                $dateCurrent->add(new \DateInterval('P'.$transactions->recurrence_days.'D'));
                $client->next_charging_attempt  = MongoUtils::convertDatePhpToMongo($dateCurrent->format('Y-m-d H:i:s'));
            }else{
                $client->next_charging_attempt  = MongoUtils::convertDatePhpToMongo(date('Y-m-d H:i:s', strtotime('+'.$transactions->recurrence_days.' days')));
            }

            $fieldsUpdate                   = Config::get('admin.plan_fields_update');
            foreach ($fieldsUpdate as $value){
                $client->{$value['name']} = $client->{$value['name']}+$transactions->{$value['name']};
            }
            $client->save();
        }

        toastr()->success("Status atuaizado com sucesso",'Sucesso');
        return redirect(route('admin.transactions.index'));


    }


}
