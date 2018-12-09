<?php

namespace Negotiate\Admin\Http\Controllers;

use Negotiate\Admin\Library\ResouceIronForge;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Negotiate\Admin\Resource;
use Illuminate\Http\Request;
use Yajra\Datatables\Datatables;

class ResourcesController extends BaseController {
    use ValidatesRequests;


    public function __construct(Resource $resource) {
        $this->resource         = $resource;
        $this->parentsDefault   = $this->resource->where('is_menu',1)->whereNull('route_name')->get();
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request,DataTables $datatables ) {
        if($request->ajax()){
            $query = Resource::with('profiles')->select('resources.*');
            return Datatables::of($query)
                ->addColumn('profiles_name', function(Resource $resource){
                    return $resource->profiles->map(function ($profiles) {
                       return  $profiles->name;
                    });
                })
                ->addColumn('edit_url', function($row){
                    return route('admin.resources.edit', [$row->id]);
                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->make(true);
        }

        $hasAdd     = ResouceIronForge::hasResourceByRouteName('admin.resources.create');
        $hasEdit    = ResouceIronForge::hasResourceByRouteName('admin.resources.edit', [1]);
        return view('Admin::backend.resources.index',compact('hasAdd', 'hasEdit'));

    }

     /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Resource $resource) {
        $parentsDefault = $this->parentsDefault;
        $hasSave        = ResouceIronForge::hasResourceByRouteName('admin.resources.store');
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
        $resource->name             = $request->name;
        $resource->menu             = $request->menu;
        $resource->is_menu          = $request->is_menu;
        $resource->route_name       = null;
        $resource->icon             = $request->icon;
        $resource->controller_method= '';
        $resource->can_be_default   = $request->can_be_default ? $request->can_be_default : 0;
        $resource->parent_id        = $request->parent_id;
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

        $resource       = $this->resource->findOrFail($id);
        $parentsDefault = $this->parentsDefault;
        $hasSave        = ResouceIronForge::hasResourceByRouteName('admin.resources.update',[1]);
        return view('Admin::backend.resources.edit',compact('resource','parent', 'parentsDefault', 'hasSave'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {

        $resource = $this->resource->findOrFail($id);
        $dataForm = $request->all();

        //dd($dataForm);
        $this->validate($request, [
            'name' => 'required',
            'is_menu' => 'required',
        ]);

        $resource->update($dataForm);
        toastr()->success('Recurso Atualizado com sucesso','Sucesso');
        return redirect(route('admin.resources.index'));

    }

}
