<?php

namespace Negotiate\Admin\Http\Controllers;

use Negotiate\Admin\Library\ResourceAdmin;
use Illuminate\Routing\Controller as BaseController;
use Negotiate\Admin\NegotiateClient;
use Negotiate\Admin\NegotiateNotification;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Yajra\Datatables\Datatables;

class NotificationsController extends BaseController
{

    use ValidatesRequests;
    public function index(Request $request,DataTables $datatables ) {

        if($request->ajax()){


            $query = NegotiateNotification::client($this->clientId)->all();

            return Datatables::of($query)

                ->setRowClass(function () {
                    return 'center';
                })
                ->make(true);
        }

        $hasShow     = ResourceAdmin::hasResourceByRouteName('admin.notifications.get',[1]);
        $hasUpdate   = ResourceAdmin::hasResourceByRouteName('admin.notifications.edit', [1]);
        return view('Admin::backend.notifications.index', compact('hasShow', 'hasUpdate'));

    }



}
