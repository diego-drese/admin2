<?php

namespace Negotiate\Admin\Http\Controllers;

use Illuminate\Support\Facades\Config;
use Negotiate\Admin\Library\ResourceAdmin;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Negotiate\Admin\NegotiatePlans;
use Negotiate\Admin\Resource;
use Negotiate\Admin\Sequence;
use Yajra\Datatables\Datatables;

class PlansController extends BaseController
{

    use ValidatesRequests;
    public function __construct(Request $request) {
        $this->getResourcesDefault = Resource::where('is_menu',1)->where('can_be_default',1)->get();

    }
    protected function makeValidate(Request $request){
        $this->validate($request, [
            'name'              => 'required',
            'value'             => 'required',
            'recurrence_days'   => 'required',
            'active'            => 'required',
            'total_retry'       => 'required',
            'retry_after_day'   => 'required',
            'type'              => 'required',
        ]);
    }

    public function index(Request $request,DataTables $datatables ) {
        if($request->ajax()){
            $query = NegotiatePlans::all();
            return Datatables::of($query)
                ->addColumn('edit_url', function($row){
                    return route('admin.plans.edit', [$row->id]);
                })
                ->addColumn('fields', function($row){
                  return Config::get('admin.plan_fields_update');
                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->make(true);
        }

        $hasAdd     = ResourceAdmin::hasResourceByRouteName('admin.plans.create');
        $hasEdit    = ResourceAdmin::hasResourceByRouteName('admin.plans.edit', [1]);
        return view('Admin::backend.plans.index', compact('hasAdd', 'hasEdit'));

    }

    public function create(NegotiatePlans $plan) {
        $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.plans.store');
        $fieldsUpdate   =  Config::get('admin.plan_fields_update');
        return view('Admin::backend.plans.create',compact('plan', 'hasSave', 'fieldsUpdate'));
    }

    public function store(Request $request) {
        $this->makeValidate($request);
        NegotiatePlans::createPlan($request);
        toastr()->success('Profile Criado com sucesso','Sucesso');
        return redirect(route('admin.plans.index'));

    }

    public function edit($id) {
       $plan           = NegotiatePlans::firstOrNew(['id'=>(int)$id]);
       $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.plans.update',[1]);
       $fieldsUpdate   =  Config::get('admin.plan_fields_update');
       return view('Admin::backend.plans.edit',compact('plan', 'hasSave', 'fieldsUpdate'));
    }

    public function update(Request $request, $id) {
        $this->makeValidate($request);
        NegotiatePlans::updatePlan($request, $id);
        toastr()->success("{$request->name} atualizado com sucesso",'Sucesso');
        return redirect(route('admin.plans.index'));
    }

}
