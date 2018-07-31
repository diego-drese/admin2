<?php

namespace Aggrega\Ironforge\Http\Controllers;

use Aggrega\Ironforge\Library\ResouceIronForge;
use Aggrega\Ironforge\UserIronForge;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Spatie\Activitylog\Models\Activity;
use Yajra\Datatables\Datatables;
use Image;
use App\Http\Requests;


class ActivityController extends BaseController {

    use ValidatesRequests;

    public function index(Request $request,DataTables $datatables ) {

        if($request->ajax()){

            $query = Activity::query();

            return DataTables::of($query)->make(true);
        }

        return view('Ironforge::backend.activities.index');

    }

}
