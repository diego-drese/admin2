<?php

namespace Oka6\Admin\Http\Controllers;

use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Config;
use Oka6\Admin\Http\Library\ResourceAdmin;
use Oka6\Admin\Models\Profile;
use Oka6\Admin\Models\Resource;
use Oka6\Admin\Models\Sequence;
use Oka6\Admin\Models\User;
use Yajra\Datatables\Datatables;

class ProfilesController extends BaseController {
	
	use ValidatesRequests;
	
	public function index(Request $request) {
		
		if ($request->ajax()) {
			return Datatables::of(Profile::query())
				->addColumn('edit_url', function ($row) {
					return route('admin.profiles.edit', [$row->id]);
				})->addColumn('resources', function ($row) {
					$resources = Resource::whereIn('id', $row->resources_allow)->get();
					if ($resources) {
						return $resources->toArray();
					} else {
						return [];
					}
				})
				->setRowClass(function () {
					return 'center';
				})
				->toJson(true);
		}
		
		$hasAdd = ResourceAdmin::hasResourceByRouteName('admin.profiles.create');
		$hasEdit = ResourceAdmin::hasResourceByRouteName('admin.profiles.edit', [1]);
		return view('Admin::backend.profiles.index', compact('hasAdd', 'hasEdit'));
		
	}
	
	
	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create(Profile $profile) {
		$resources = Resource::all('name', 'id', 'route_name', 'menu','icon');
		$resourcesMenu = Resource::where('is_menu', 1)->where('can_be_default', 1)->get();
		$hasSave = ResourceAdmin::hasResourceByRouteName('admin.profiles.store');
		
		$oka6ProfileTypes = Config::get('admin.profile_type');
		return view('Admin::backend.profiles.create', compact('profile', 'resources', 'resourcesMenu', 'hasSave', 'oka6ProfileTypes'));
	}
	
	/**
	 * Store a newly created resource in storage.
	 *
	 * @param Request $request
	 * @return Response
	 */
	public function store(Request $request) {
		$dataForm = $request->all();
		$this->validate($request, [
			'name' => 'required'
		]);
		$dataForm['id'] = Sequence::getSequence(Profile::TABLE);
		$dataForm['resources_allow'] = array_map('intval', $dataForm['resources']);
		Profile::create($dataForm);
		
		toastr()->success('Profile Criado com sucesso', 'Sucesso');
		return redirect(route('admin.profiles.index'));
		
	}
	
	
	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param int $id
	 * @return Response
	 */
	public function edit($id) {
		$profile = Profile::getById((int)$id);
		$resources = Resource::all('name', 'id', 'route_name', 'menu','icon');
		$profilesResources = $profile->resources_allow;
		$resourcesMenu = Resource::where('is_menu', 1)->where('can_be_default', 1)->get();
		$hasSave = ResourceAdmin::hasResourceByRouteName('admin.profiles.update', [1]);
		$oka6ProfileTypes = Config::get('admin.profile_type');
		return view('Admin::backend.profiles.edit', compact('profile', 'resources', 'profilesResources', 'resourcesMenu', 'hasSave', 'oka6ProfileTypes'));
	}
	
	/**
	 * Update the specified resource in storage.
	 *
	 * @param Request $request
	 * @param int $id
	 * @return Response
	 */
	public function update(Request $request, $id) {
		if($id==User::PROFILE_ID_ROOT){
			toastr()->error("Esse perfil está bloqueado para edições", 'Erro');
			return redirect(route('admin.profiles.index'));
		}
		$profile = Profile::getById([(int)$id]);
		$dataForm = $request->all();
		$this->validate($request, [
			'name' => 'required'
		]);
		$dataForm['resources_allow'] = array_map('intval', isset($dataForm['resources']) ? $dataForm['resources'] : []);
		$profile->fill($dataForm);
		$profile->save();
		
		toastr()->success("{$profile->name} Atualizado com sucesso", 'Sucesso');
		return redirect(route('admin.profiles.index'));
	}
	
	
}
