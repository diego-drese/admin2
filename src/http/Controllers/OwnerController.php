<?php

namespace Aggrega\Ironforge\Http\Controllers;

use Aggrega\CoreAggrega\Entities\Product;
use Aggrega\Reports\Library\Report;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Aggrega\Ironforge\Owner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Yajra\Datatables\Datatables;
use Aggrega\Ironforge\Library\ResouceIronForge;


class OwnerController extends BaseController
{

    use ValidatesRequests;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request,DataTables $datatables ) {

        if($request->ajax()){

            $query = Owner::with('user');

            return Datatables::of($query)

                ->addColumn('edit_url', function($row){
                    return route('ironforge.owner.edit', [$row->id]);
                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->rawColumns(['desc'])
                ->make(true);
        }

        $hasAdd     = ResouceIronForge::hasResourceByRouteName('ironforge.owner.create');
        $hasEdit    = ResouceIronForge::hasResourceByRouteName('ironforge.owner.edit', [1]);
        return view('Ironforge::backend.owners.index',compact('hasAdd', 'hasEdit'));

    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Owner $owner,Request $request)
    {
        if($request->ajax()){
            //retorna o json com a lista de opcoes do type owner
            return $this->getArrOriginIdByOwnerType($request);
        }
        $userOwners = $owner->user->pluck('id')->toArray();
        return view('Ironforge::backend.owners.create', compact('owner','userOwners'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $this->validate($request, [
            'name' => 'required',
            'type' => 'required',
            'origin_id' => 'required',
        ]);

        if(isset($data['origin_id']) && strpos($data['origin_id'], '#') ){
            list($data['origin_id'],$data['origin_name']) = explode('#',$data['origin_id']);
        }elseif(!is_numeric($data['origin_id'])){
            $data['origin_name'] = null;
        }

        $owner = Owner::create($data);

        if (isset($data['users'])) {

            $owner->user()->attach($data['users']);

            $obj = new \stdClass();
            $obj->model = $owner;
            $obj->auth = Auth::user();
            $obj->request = $data;

            Event::fire('log.createdRequest', $obj);

        }else{
            $owner->user()->attach([]);

            $owner->user()->attach($data['users']);

            $obj = new \stdClass();
            $obj->model = $owner;
            $obj->auth = Auth::user();
            $obj->request = $data;

            Event::fire('log.createdRequest', $obj);

        }

        toastr()->success("{$owner->name} foi criado com sucesso", 'Sucesso');
        return redirect(route('ironforge.owner.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,$id)
    {
        if($request->ajax()){
            //retorna o json com a lista de opcoes do type owner
            return $this->getArrOriginIdByOwnerType($request);
        }
        $owner = Owner::findOrFail($id);
        $userOwners = $owner->user->pluck('id')->toArray();

        return view('Ironforge::backend.owners.edit', compact('owner', 'userOwners'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $owner = Owner::findOrFail($id);
        $data = $request->all();

        $this->validate($request, [
            'name' => 'required',
            'type' => 'required',
            'origin_id' => 'required',
        ]);

        if(isset($data['origin_id']) && strpos($data['origin_id'], '#') ){

            list($data['origin_id'],$data['origin_name']) = explode('#',$data['origin_id']);

        }elseif($data['origin_id']=='all'){//quando o origin id for all limpar origin_name
            $data['origin_name'] = $data['origin_id'] = 'all';
        }

        $owner->update($data);


        if (isset($data['users'])) {
            $owner->user()->sync($data['users']);

            $obj = new \stdClass();
            $obj->model = $owner;
            $obj->auth = Auth::user();
            $obj->request = $data;

            Event::fire('log.updatedRequest', $obj);

        }else{
            $owner->user()->sync([]);

            $obj = new \stdClass();
            $obj->model = $owner;
            $obj->auth = Auth::user();
            $obj->request = $data;

            Event::fire('log.updatedRequest', $obj);
        }

        toastr()->success("{$owner->name} foi Atualizado com sucesso", 'Sucesso');
        return redirect(route('ironforge.owner.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    private function getArrOriginIdByOwnerType($ownerType){

       $ifronForgeConfigTypes = \Config::get('ironforge.owner_type');

       $class = new $ifronForgeConfigTypes[$ownerType->owner_type];

       return $class::getOwnerId($ownerType->owner_type);

    }
}
