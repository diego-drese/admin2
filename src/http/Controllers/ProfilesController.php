<?php

namespace Aggrega\Ironforge\Http\Controllers;

use Aggrega\Ironforge\Http\Controllers\AuthIronForge;
use Aggrega\Ironforge\Profile;
use Aggrega\Ironforge\Resource;
use Illuminate\Http\Request;

class ProfilesController extends AuthIronForge
{

    public function __construct(Request $request)
    {
        $this->getResourcesDefault = Resource::where('is_menu',1)->where('can_be_default',1)->get();

    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $profiles = Profile::latest()->paginate(10);

        return view('Ironforge::backend.profiles.index',compact('profiles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Profile $profile)
    {
        $resources = Resource::all('name','id','route_name');
        $resourcesMenu = $this->getResourcesDefault;

        return view('Ironforge::backend.profiles.create',compact('profile','resources','resourcesMenu'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $dataForm = $request->all();
        //dd($dataForm);
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       $profile = Profile::findOrFail($id);
       $resources = Resource::all('name','id','route_name');
       $profilesResources = $profile->resources()->pluck('id')->toArray();
       $resourcesMenu = $this->getResourcesDefault;
      // dd($profilesResources);

       return view('Ironforge::backend.profiles.edit',compact('profile','resources','profilesResources','resourcesMenu'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $profile = Profile::findOrFail($id);

        $dataForm = $request->all();

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
        return redirect('/console/profiles');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
