<?php

namespace Oka6\Admin\Http\Controllers;

use Oka6\Admin\Library\ResourceAdmin;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Oka6\Admin\Profile;
use Oka6\Admin\Resource;
use Illuminate\Http\Request;
use Oka6\Admin\Sequence;
use Yajra\Datatables\Datatables;

class ResourcesController extends BaseController {
    use ValidatesRequests;
    public function index(Request $request) {
        if($request->ajax()){

            return Datatables::of(Resource::query())
                ->addColumn('profiles', function(Resource $resource){

                    $profiles = Profile::where('resources_allow', $resource->id)->get();
                    if($profiles){
                        return $profiles->toArray();
                    }else{
                        return [];
                    }
                })
                ->addColumn('edit_url', function($row){
                    return route('admin.resources.edit', [$row->id]);
                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->toJson();
        }

        $hasAdd     = ResourceAdmin::hasResourceByRouteName('admin.resources.create');
        $hasEdit    = ResourceAdmin::hasResourceByRouteName('admin.resources.edit', [1]);
        return view('Admin::backend.resources.index',compact('hasAdd', 'hasEdit'));

    }

     /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Resource $resource) {
        $parentsDefault = Resource::where('is_menu',1)->whereNull('route_name')->get();
        $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.resources.store');
        return view('Admin::backend.resources.create', compact('resource','parentsDefault', 'hasSave'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {

        $this->validate($request, [
            'name' => 'required',
            'is_menu' => 'required',
        ]);

        $resource                   = new Resource();
        $resource->id               = Sequence::getSequence('resource');
        $resource->name             = $request->name;
        $resource->menu             = $request->menu;
        $resource->is_menu          = (int)$request->is_menu;
        $resource->route_name       = null;
        $resource->icon             = $request->icon;
        $resource->controller_method= '';
        $resource->can_be_default   = (int)($request->can_be_default ? $request->can_be_default : 0);
        $resource->parent_id        = (int)$request->parent_id;
        $resource->order            = 0;
        $resource->save();

        toastr()->success('Recurso Criado com sucesso','Sucesso');
        return redirect(route('admin.resources.index'));
    }

     /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        $resource       = Resource::firstOrNew(['id'=>(int)$id]);
        $parentsDefault = Resource::where('is_menu',1)->where('controller_method','')->get();
        $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.resources.update',[1]);
        return view('Admin::backend.resources.edit', compact('resource','parentsDefault', 'hasSave'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {

        $resource = Resource::firstOrNew(['id'=>(int)$id]);
        $dataForm = $request->all();

        //dd($dataForm);
        $this->validate($request, [
            'name' => 'required'

        ]);

        if(!isset($dataForm['is_menu'])){
            $dataForm['is_menu'] = 0;
        }else{
            $dataForm['is_menu'] = (int)$dataForm['is_menu'];
        }

        if(!isset($dataForm['can_be_default'])){
            $dataForm['can_be_default'] = 0;
        }else{
            $dataForm['can_be_default'] = (int)$dataForm['can_be_default'];
        }
        $dataForm['is_menu']          = (int)$request->is_menu;
        $dataForm['can_be_default']   = (int)$request->can_be_default;
        $dataForm['parent_id']        = (int)$request->parent_id;

        $resource->update($dataForm);
        toastr()->success('Recurso Atualizado com sucesso','Sucesso');
        return redirect(route('admin.resources.index'));

    }

}
