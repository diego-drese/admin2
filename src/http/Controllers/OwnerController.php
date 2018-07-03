<?php

namespace Aggrega\Ironforge\Http\Controllers;

use Aggrega\Ironforge\Owner;
use Illuminate\Http\Request;

class OwnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $owners = Owner::all();
        return view('Ironforge::backend.owners.index', compact('owners'));
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
        return redirect(route('owners.index'));
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
        return redirect(route('owners.index'));
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
