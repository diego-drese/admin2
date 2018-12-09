<?php

namespace Negotiate\Admin\Http\Controllers;

use Negotiate\CoreAggrega\Entities\Product;
use Negotiate\Reports\Library\Report;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Negotiate\Admin\Owner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Yajra\Datatables\Datatables;
use Negotiate\Admin\Library\ResouceIronForge;


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
                    return route('admin.owner.edit', [$row->id]);
                })
                ->addColumn('origin_id', function($row) {
                    $var     = $row->toArray();
                    $origins = [];
                    if (!empty($var['origin_id'])) {
                        $ids = json_decode($var['origin_id']);
                        if (is_array($ids) && count($ids) > 0) {
                            $names = json_decode($var['origin_name']);
                            if (is_array($ids) && count($ids) > 0) {
                                foreach ($names as $n) {
                                    /* multiple */
                                    $origins[]['name'] = $n;
                                }
                            }
                        } else {
                            /* single */
                            $origins[]['name'] = ($var['origin_name']) ? $var['origin_name'] : "Empty";
                        }
                    } else {
                        /* empty */
                        $origins[]['name'] = "Empty";
                    }
                    return $origins;
                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->rawColumns(['desc'])
                ->make(true);
        }

        $hasAdd     = ResouceIronForge::hasResourceByRouteName('admin.owner.create');
        $hasEdit    = ResouceIronForge::hasResourceByRouteName('admin.owner.edit', [1]);
        
        return view('Admin::backend.owners.index',compact('hasAdd', 'hasEdit'));

    }

    public function isJson($string) {
        json_decode($string);
        return (json_last_error() == JSON_ERROR_NONE);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Owner $owner,Request $request) {

        if ($request->ajax()) {
            //retorna o json com a lista de opcoes do type owner
            return $this->getArrOriginIdByOwnerType($request);
        }
        
        $origin_ids = [];
        $id         = "";
        $userOwners = $owner->user->pluck('id')->toArray();

        return view('Admin::backend.owners.create', compact('id', 'owner', 'userOwners', 'origin_ids'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {

        $data = $request->all();

        if (!isset($data['origin_excluding_ids'])) {
            $data['origin_excluding_ids'] = 0;
            $data['remain_list_id']       = '';
            $data['remain_list_name']     = '';
        }

        $this->validate($request, [
            'name' => 'required',
            'type' => 'required',
            'origin_id' => 'required',
        ]);

        $return = $this->prepareOwnerToSave($data);
        
        if (isset($return['origins'])) {
            $remain = $this->prepareRemainToSave($return['origins'], $return['type']);
            unset($return['origins']);
            $return += $remain;
        }

        if ($return) {
            $owner = Owner::create($return);
        }

        if (isset($data['users'])) {
            $owner->user()->attach($data['users']);
            $obj = new \stdClass();
            $obj->model = $owner;
            $obj->auth = Auth::user();
            $obj->request = $data;
            Event::fire('log.createdRequest', $obj);
        } else {
            $owner->user()->attach([]);
            $owner->user()->attach($data['users']);
            $obj = new \stdClass();
            $obj->model = $owner;
            $obj->auth = Auth::user();
            $obj->request = $data;
            Event::fire('log.createdRequest', $obj);
        }

        toastr()->success("{$owner->name} foi criado com sucesso", 'Sucesso');
        return redirect(route('admin.owner.index'));
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
    public function edit(Request $request, $id) {
        if ($request->ajax()) {
            //retorna o json com a lista de opcoes do type owner
            return $this->getArrOriginIdByOwnerType($request);
        }
        $aux        = [];
        $owner      = Owner::findOrFail($id);
        $origin_ids = array_combine(json_decode($owner['origin_id']), json_decode($owner['origin_name']));
        
        foreach ($origin_ids as $k => &$origin) {
            $aux[$k.'#'.$origin] = $origin;
        }
        $origin_ids = $aux;

        $userOwners = $owner->user->pluck('id')->toArray();

        return view('Admin::backend.owners.edit', compact('id', 'owner', 'userOwners', 'origin_ids'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {

        $owner = Owner::findOrFail($id);
        $data = $request->all();

        if (!isset($data['origin_excluding_ids'])) {
            $data['origin_excluding_ids'] = 0;
            $data['remain_list_id']       = '';
            $data['remain_list_name']     = '';
        }

        $this->validate($request, [
            'name' => 'required',
            'type' => 'required',
            'origin_id' => 'required',
        ]);

        $return = $this->prepareOwnerToSave($data);

        if (isset($return['origins'])) {
            $remain = $this->prepareRemainToSave($return['origins'], $return['type']);
            unset($return['origins']);
            $return += $remain;
        }

        if ($return) {
            $owner->update($return);
        }

        if (isset($data['users'])) {
            $owner->user()->sync($data['users']);
            $obj = new \stdClass();
            $obj->model = $owner;
            $obj->auth = Auth::user();
            $obj->request = $data;
            Event::fire('log.updatedRequest', $obj);
        } else {
            $owner->user()->sync([]);
            $obj = new \stdClass();
            $obj->model = $owner;
            $obj->auth = Auth::user();
            $obj->request = $data;
            Event::fire('log.updatedRequest', $obj);
        }

        toastr()->success("{$owner->name} foi Atualizado com sucesso", 'Sucesso');
        return redirect(route('admin.owner.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        //
    }

    private function getArrOriginIdByOwnerType($ownerType) {

       $ifronForgeConfigTypes = \Config::get('admin.owner_type');

       $class = new $ifronForgeConfigTypes[$ownerType->owner_type];

       $returnAll = $class::getOwnerId($ownerType->owner_type);

       if (!empty($returnAll) && method_exists($returnAll, 'toArray')) {
           $returnAll = $returnAll->toArray();
       }

       /* LOAD::REMOVE selected from the remain list */
       if (isset($ownerType->owner_edit)) {
           $returnUser = Owner::getOriginsList($ownerType->owner_edit);
           foreach ($returnAll as $key => &$value_all) {
               foreach ($returnUser as $value_user) {
                   if (isset($value_all->id)) {
                       if ($value_all->id == $value_user['id']) {
                           unset($returnAll[$key]);
                       }
                   } elseif (isset($value_all['id'])) {
                       if ($value_all['id'] == $value_user['id']) {
                           unset($returnAll[$key]);
                       }
                   }
               }
           }
           $returnAll = array_values($returnAll);
       }

       return $returnAll;
    }
    
    private function prepareOwnerToSave($data = null) {
        if (null == $data) {
            return false;
        }

        /* prepare list of normal active origns */
        if (!empty($data['origin_id']) && count($data['origin_id']) > 0) {
            foreach ($data['origin_id'] as $k => $origens_id ) {
                if ($origens_id == 'all') {
                    list($data['origins'][$k]['origin_id'], $data['origins'][$k]['origin_name']) = array('0' => "", '1' => $origens_id);
                } else {
                    list($data['origins'][$k]['origin_id'], $data['origins'][$k]['origin_name']) = explode('#', $origens_id);
                }
            }
        } elseif (!is_numeric($data['origin_id'])) {
            $data['origin_name'] = null;
        }
        
        if (isset($data['origin_id'])) {
            unset($data['origin_id']);
        }

        if (isset($data['origin_name'])) {
            unset($data['origin_name']);
        }
        
        foreach ($data['origins'] as $dt) {
            if ($dt['origin_name'] == 'all') {
                $origens_ids[] = 'all';
            } else {
                $origens_ids[] = $dt['origin_id'];
            }
            $origens_names[] = $dt['origin_name'];
        }

        if (isset($data['origins']) && !$data['origin_excluding_ids']) {
            unset($data['origins']);
        }

        $data['origin_id'] = json_encode($origens_ids);
        $data['origin_name'] = json_encode($origens_names);
        
        return $data;
    }

    private function prepareRemainToSave($data = null, $type = null) {
        if (null == $data || null == $type) {
            return false;
        }

        $ifronForgeConfigTypes = \Config::get('admin.owner_type');

        $class = new $ifronForgeConfigTypes[$type];

        $returnAll = $class::getOwnerId($type);

        $returnAll = $returnAll->toArray();

        /* REMOVE selected from the remain list */
        foreach ($returnAll as $key => &$value_all) {
            if (is_object($value_all)) {
                /* partners is object return */
                foreach ($data as $value_user) {
                    if ($value_all->id == $value_user['origin_id']) {
                        unset($returnAll[$key]);
                    }
                }
            } else {
                foreach ($data as $value_user) {
                    if ($value_all['id'] == $value_user['origin_id']) {
                        unset($returnAll[$key]);
                    }
                }
            }
        }

        $returnAll = array_values($returnAll);

        foreach ($returnAll as $dt) {
            if (is_object($dt)) {
                /* partners is object return */
                if ($dt->name == 'all') {
                    $origens_ids[] = 'all';
                } else {
                    $origens_ids[] = $dt->id;
                }
                $origens_names[] = $dt->name;
            } else {
                if ($dt['name'] == 'all') {
                    $origens_ids[] = 'all';
                } else {
                    $origens_ids[] = $dt['id'];
                }
                $origens_names[] = $dt['name'];
            }
        }
        unset($data);

        $data['remain_list_id'] = json_encode($origens_ids);
        $data['remain_list_name'] = json_encode($origens_names);

        return $data;
    }
    
    public function showActivedOrigin(Request $request) {
        $id   = ($request->get('id')) ? $request->get('id') : null;
        $list = Owner::getRemainList($id);
        $res  = array();

        if (!empty($list)) {
            $res = json_decode(json_encode($list), FALSE);
            return response()->json($res);
        } else {
            return response()->json([]);
        }
    }
    
    /**
     * Create column and update fields. 
     * 
     */
    public function updateFieldsToJson(Request $request) {
        /* normalize database */
        Owner::updateFieldsToJson();
    }

}