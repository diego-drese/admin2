<?php

namespace Aggrega\Ironforge\Http\Controllers;

use Aggrega\Ironforge\Library\ResouceIronForge;
use Illuminate\Routing\Controller as BaseController;
use Aggrega\Ironforge\Profile;
use Aggrega\Ironforge\Resource;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;


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
    public function index(){
        $profiles   = Profile::latest()->paginate(10);
        $hasAdd     = ResouceIronForge::hasResourceByRouteName('ironforge.profiles.create');
        $hasEdit    = ResouceIronForge::hasResourceByRouteName('ironforge.profiles.edit', [1]);
        return view('Ironforge::backend.profiles.index',compact('profiles', 'hasAdd', 'hasEdit'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Profile $profile) {
        $resources      = Resource::all('name','id','route_name');
        $resourcesMenu  = $this->getResourcesDefault;
        $hasSave        = ResouceIronForge::hasResourceByRouteName('ironforge.profiles.store');
        return view('Ironforge::backend.profiles.create',compact('profile','resources','resourcesMenu', 'hasSave'));
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

        $profile = Profile::create($dataForm);
        if(isset($dataForm['resources']))
        {
            $profile->resources()->attach($dataForm['resources']);
        }
        else{
            $profile->resources()->attach([]);
        }

        toastr()->success('Profile Criado com sucesso','Sucesso');
        return redirect('/console/profiles');

    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
       $profile             = Profile::findOrFail($id);
       $resources           = Resource::all('name', 'id', 'route_name');
       $profilesResources   = $profile->resources()->pluck('id')->toArray();
       $resourcesMenu       = $this->getResourcesDefault;
       $hasSave             = ResouceIronForge::hasResourceByRouteName('ironforge.profiles.update',[1]);

       return view('Ironforge::backend.profiles.edit',compact('profile','resources','profilesResources','resourcesMenu', 'hasSave'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        $profile    = Profile::findOrFail($id);
        $dataForm   = $request->all();
        $this->validate($request, [
            'name' => 'required'
        ]);

        $profile->update($dataForm);
        if(isset($dataForm['resources'])){
            $profile->resources()->sync($dataForm['resources']);
        }else{
            $profile->resources()->sync([]);
        }

        toastr()->success("{$profile->name} Atualizado com sucesso",'Sucesso');
        return redirect(route('ironforge.profiles.index'));
    }


}
