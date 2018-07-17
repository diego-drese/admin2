<?php

namespace Aggrega\Ironforge\Http\Controllers;

use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Aggrega\Ironforge\Owner;
use Illuminate\Http\Request;
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
    public function create(Owner $owner)
    {

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
            'name' => 'required'
        ]);


        $owner = Owner::create($data);
        if (isset($data['users'])) {
            $owner->user()->attach($data['users']);
        }else{
            $owner->user()->attach([]);
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
    public function edit($id)
    {
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
            'name' => 'required'
        ]);

        $owner->update($data);
        if (isset($data['users'])) {
            $owner->user()->sync($data['users']);
        }else{
            $owner->user()->sync([]);
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
}
