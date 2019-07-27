<?php

namespace Negotiate\Admin\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Negotiate\Admin\Library\ResourceAdmin;
use Illuminate\Routing\Controller as BaseController;
use Negotiate\Admin\NegotiateClient;
use Negotiate\Admin\NegotiateNotification;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Negotiate\Admin\User;
use Yajra\Datatables\Datatables;

class NotificationsController extends BaseController
{

    use ValidatesRequests;
    public function index(Request $request ) {

        if($request->ajax()){
            $user = Auth::user();
            if((int)$user->profile_id===(int)User::PROFILE_ID_ROOT){
                $query = NegotiateNotification::query();
            }else{
                $query = NegotiateNotification::client($user->client_id);
            }
            return Datatables::of($query)
                ->setRowClass(function () {
                    return 'center';
                })
                ->toJson();
        }

        $hasAdd      = ResourceAdmin::hasResourceByRouteName('admin.notifications.store',[1]);
        $hasShow     = ResourceAdmin::hasResourceByRouteName('admin.notifications.show',[1]);
        $hasEdit    = ResourceAdmin::hasResourceByRouteName('admin.notifications.edit', [1]);
        return view('Admin::backend.notifications.index', compact('hasShow', 'hasEdit', 'hasAdd'));

    }
    public function create(){
        $hasSave    = ResourceAdmin::hasResourceByRouteName('admin.notifications.store');
        $clients    = NegotiateClient::get();
        return view('Admin::backend.notifications.create', compact( 'hasSave', 'clients'));
    }

    public function store(){
        die('salva os dados');
    }

    public function edit($id){
        die('Formulário de edição');
    }

    public function update($id){
        die('edita os dados');
    }

    public function show($id){
        die('Mostra os dados');
    }


}
