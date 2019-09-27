<?php

namespace Oka6\Admin\Http\Controllers;

use Illuminate\Support\Facades\Config;
use Oka6\Admin\Library\ResourceAdmin;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Oka6\Admin\Oka6Plans;
use Yajra\Datatables\Datatables;

class PlansController extends BaseController
{

    use ValidatesRequests;

    protected function makeValidate(Request $request){
        $this->validate($request, [
            'name'              => 'required',
            'value'             => 'required',
            'plan_duration'      => 'required',
            'recurrence_days'   => 'required',
            'active'            => 'required',
            'total_retry'       => 'required',
            'retry_after_day'   => 'required',
            'type'              => 'required',
        ]);
    }

    public function index(Request $request) {
        if($request->ajax()){
            return Datatables::of(Oka6Plans::query())
                ->addColumn('edit_url', function($row){
                    return route('admin.plans.edit', [$row->id]);
                })
                ->addColumn('fields', function($row){
                  return Config::get('admin.plan_fields_update');
                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->toJson(true);
        }

        $hasAdd     = ResourceAdmin::hasResourceByRouteName('admin.plans.create');
        $hasEdit    = ResourceAdmin::hasResourceByRouteName('admin.plans.edit', [1]);
        return view('Admin::backend.plans.index', compact('hasAdd', 'hasEdit'));

    }

    public function create(Oka6Plans $plan) {
        $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.plans.store');
        $fieldsUpdate   =  Config::get('admin.plan_fields_update');
        return view('Admin::backend.plans.create',compact('plan', 'hasSave', 'fieldsUpdate'));
    }

    public function store(Request $request) {
        $this->makeValidate($request);
        Oka6Plans::createPlan($request);
        toastr()->success('Profile Criado com sucesso','Sucesso');
        return redirect(route('admin.plans.index'));

    }

    public function edit($id) {
       $plan           = Oka6Plans::firstOrNew(['id'=>(int)$id]);
       $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.plans.update',[1]);
       $fieldsUpdate   = Config::get('admin.plan_fields_update');
       return view('Admin::backend.plans.edit',compact('plan', 'hasSave', 'fieldsUpdate'));
    }

    public function update(Request $request, $id) {
        $this->makeValidate($request);
        Oka6Plans::updatePlan($request, $id);
        toastr()->success("{$request->name} atualizado com sucesso",'Sucesso');
        return redirect(route('admin.plans.index'));
    }

}
