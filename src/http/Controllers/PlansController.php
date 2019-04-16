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

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,DataTables $datatables ) {

        if($request->ajax()){

            $query = NegotiatePlans::all();

            return Datatables::of($query)
                ->addColumn('edit_url', function($row){
                    return route('admin.plans.edit', [$row->id]);
                })->addColumn('resources', function($row){
                    return '';

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


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(NegotiatePlans $plan) {
        $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.plans.store');
        $fieldsUpdate   =  Config::get('admin.plan_fields_update');
        return view('Admin::backend.plans.create',compact('plan', 'hasSave', 'fieldsUpdate'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $dataForm = $request->all();
        $this->validate($request, [
            'name' => 'required'
        ]);
        $dataForm['id'] = Sequence::getSequence(Profile::TABLE);
        $dataForm['resources_allow'] = array_map('intval', $dataForm['resources']);
        Profile::create($dataForm);

        toastr()->success('Profile Criado com sucesso','Sucesso');
        return redirect(route('admin.plans.index'));

    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
       $profile             = Profile::firstOrNew(['id'=>(int)$id]);
       $resources           = Resource::all('name', 'id', 'route_name');
       $profilesResources   = $profile->resources_allow;
       $resourcesMenu       = $this->getResourcesDefault;
       $hasSave             = ResourceAdmin::hasResourceByRouteName('admin.profiles.update',[1]);
       $negotiateProfileTypes = \Config::get('admin.profile_type');
       return view('Admin::backend.profiles.edit',compact('profile','resources', 'profilesResources','resourcesMenu', 'hasSave','negotiateProfileTypes'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        $profile    = Profile::firstOrNew(['id'=>(int)$id]);
        $dataForm   = $request->all();
        $this->validate($request, [
            'name' => 'required'
        ]);
        $dataForm['resources_allow'] = array_map('intval', $dataForm['resources']);
        $profile->fill($dataForm);
        $profile->save();

        toastr()->success("{$profile->name} Atualizado com sucesso",'Sucesso');
        return redirect(route('admin.profiles.index'));
    }


}
