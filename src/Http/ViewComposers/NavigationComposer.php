<?php

namespace Oka6\Admin\Http\ViewComposers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\View\View;
use Oka6\Admin\Models\Resource;

class NavigationComposer {
	// Injeção de metodos nas Views
	protected $resourceMenu = [];
	
	public function compose(View $view) {
		if (Auth::check() && isset(Route::getCurrentRoute()->getAction()['controller'])) $this->composeController($view);
	}
	
	private function composeController(View $view) {
		
		$adminController = explode("@", Route::getCurrentRoute()->getAction()['controller'])[0];
		$adminResourcesMenu = $this->buildMenuRecursive(0, Auth::user()->profile_id);
		$adminCurrentResource = Resource::getResourcesByControllerMethod(Route::getCurrentRoute()->getAction()['controller']);
		$adminBreadCrumb = $this->buildBreadCrumb($adminCurrentResource, Auth::user()->profile_id);
		
		$view->with(compact('adminController', 'adminResourcesMenu', 'adminBreadCrumb', 'adminCurrentResource'));
	}
	
	public function buildMenuRecursive($parentID, $profileId) {
		$result = array();
		
		$menus = Resource::getItensMenuByParentAndProfile($parentID, $profileId);
		
		foreach ($menus as $key => $value) {
			$ctrl = explode("@", $value->controller_method)[0];
			
			$result[$key] = array(
				'menu' => $value->menu,
				'route_name' => $value->route_name,
				'controller' => $ctrl,
				'namespace' => $value->controller_method,
				'id' => $value->id,
				'icon' => $value->icon,
				'sub' => $this->buildMenuRecursive($value->id, $profileId),
			);
		}
		return $result;
	}
	
	public function buildBreadCrumb($resource, $profileId) {
		$result = [];
		
		if ($resource) {
			$result[] = $resource->toArray();
		} else {
			$resource = false;
		}
		
		while ($resource) {
			$resource = Resource::buildBreadCrumb($resource, $profileId);
			
			if ($resource) {
				$result[] = $resource->toArray();
			}
		}
		
		return array_reverse($result);
	}
}