<?php

namespace Oka6\Admin\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Oka6\Admin\Library\ResourceAdmin;
use Illuminate\Routing\Controller as BaseController;
use Oka6\Admin\Oka6Client;
use Oka6\Admin\Oka6Notification;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Oka6\Admin\User;
use Yajra\Datatables\Datatables;

class NotificationsController extends BaseController
{

    use ValidatesRequests;
    public function index(Request $request ) {

        if($request->ajax()){
            $user = Auth::user();
            if((int)$user->profile_id===(int)User::PROFILE_ID_ROOT){
                $query = Oka6Notification::query();
            }else{
                $query = Oka6Notification::client($user->client_id);
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
        $clients    = Oka6Client::get();
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
