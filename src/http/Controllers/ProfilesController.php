<?php

namespace Negotiate\Admin\Http\Controllers;

use Negotiate\Admin\Library\ResourceAdmin;
use Illuminate\Routing\Controller as BaseController;
use Negotiate\Admin\Profile;
use Negotiate\Admin\Resource;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Negotiate\Admin\Sequence;
use Yajra\Datatables\Datatables;

class ProfilesController extends BaseController
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

            $query = Profile::all();

            return Datatables::of($query)
                ->addColumn('edit_url', function($row){
                    return route('admin.profiles.edit', [$row->id]);
                })->addColumn('resources', function($row){
                    $resources = Resource::whereIn('id', $row->resources_allow)->get();
                    if($resources){
                        return $resources->toArray();
                    }else{
                        return [];
                    }

                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->make(true);
        }

        $hasAdd     = ResourceAdmin::hasResourceByRouteName('admin.profiles.create');
        $hasEdit    = ResourceAdmin::hasResourceByRouteName('admin.profiles.edit', [1]);
        return view('Admin::backend.profiles.index', compact('hasAdd', 'hasEdit'));

    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Profile $profile) {
        $resources      = Resource::all('name', 'id', 'route_name');
        $resourcesMenu  = $this->getResourcesDefault;
        $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.profiles.store');

        $negotiateProfileTypes = \Config::get('admin.profile_type');
        return view('Admin::backend.profiles.create',compact('profile','resources','resourcesMenu', 'hasSave','negotiateProfileTypes'));
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
        $dataForm['id'] = Sequence::getSequence('profiles');
        $dataForm['resources_allow'] = array_map('intval', $dataForm['resources']);
        Profile::create($dataForm);

        toastr()->success('Profile Criado com sucesso','Sucesso');
        return redirect(route('admin.profiles.index'));

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
