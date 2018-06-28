<?php

namespace Aggrega\Ironforge\Http\Controllers;

use Aggrega\Ironforge\Controllers\AuthIronForge;
use Aggrega\Ironforge\Resource;
use Illuminate\Http\Request;
use Yajra\Datatables\Datatables;

class ResourcesController extends AuthIronForge
{

    public function __construct(Resource $resource)
    {
        $this->resource = $resource;
        $this->parentsDefault = $this->resource->where('is_menu',1)->whereNull('route_name')->get();

    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request,DataTables $datatables )
    {
        if($request->ajax()){
            $query = Resource::with('profiles')->select('resources.*');
            return Datatables::of($query)
                ->addColumn('profiles_name', function(Resource $resource){
                    return $resource->profiles->map(function ($profiles) {
                       return  $profiles->name;
                    });
                })
                ->addColumn('edit_url', function($row){
                    return route('resources.edit', $row->id);
                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->make(true);
        }

        return view('backend.resources.index');


    }

       /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Resource $resource)
    {
        $parentsDefault = $this->parentsDefault;
        return view('backend.resources.create', compact('resource','parentsDefault'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request, [
            'name' => 'required',
            'is_menu' => 'required',
        ]);

        $resource = new Resource();
        $resource->name = $request->name;
        $resource->menu = $request->menu;
        $resource->is_menu = $request->is_menu;
        $resource->route_name = null;
        $resource->icon = $request->icon;
        $resource->controller_method = '';
        $resource->can_be_default = $request->can_be_default ? $request->can_be_default : 0;
        $resource->parent_id = $request->parent_id;
        $resource->order = 0;
        $resource->save();

        toastr()->success('Recurso Criado com sucesso','Sucesso');
        return redirect(route('resources.index'));
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

        $resource = $this->resource->findOrFail($id);
        $parentsDefault = $this->parentsDefault;
        //dd($parent);

        return view('backend.resources.edit',compact('resource','parent','parentsDefault'));
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

        $resource = $this->resource->findOrFail($id);
        $dataForm = $request->all();

        //dd($dataForm);
        $this->validate($request, [
            'name' => 'required',
            'is_menu' => 'required',
        ]);

        $resource->update($dataForm);
        toastr()->success('Recurso Atualizado com sucesso','Sucesso');
        return redirect(route('resources.index'));

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
