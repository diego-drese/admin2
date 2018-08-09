<?php

namespace Aggrega\Ironforge\Http\ViewComposers;

use Aggrega\Ironforge\Resource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\View\View;

class NavigationComposer
{
    // Injeção de metodos nas Views
    protected $resourceMenu = [];

    public function compose(View $view)
    {
        if(Auth::check() && isset(Route::getCurrentRoute()->getAction()['controller']) )$this->composeController($view);
    }

    private function composeController(View $view)
    {

        $ironForgeController        = array_first( explode("@", Route::getCurrentRoute()->getAction()['controller']));
        $ironForgeResourcesMenu     = $this->buildMenuRecursive(0,  Auth::user()->profile->id);
        $ironForgeCurrentResource   = Resource::getResourcesByControllerMethod(Route::getCurrentRoute()->getAction()['controller']);
        $ironForgeBreadCrumb        = $this->buildBreadCrumb($ironForgeCurrentResource, Auth::user()->profile->id);

        $view->with(compact('ironForgeController', 'ironForgeResourcesMenu','ironForgeBreadCrumb', 'ironForgeCurrentResource'));
    }

    public function buildMenuRecursive($parentID = 0, $profileId)
    {
        $result = array();
        $menus = Resource::getItensMenuByParentAndProfile($parentID,$profileId);

        foreach ($menus as $key => $value) {
            $ctrl        = array_first( explode("@", $value->controller_method));
            $result[$key] = array(
                'menu'          => $value->menu,
                'route_name'    => $value->route_name,
                'controller'    => $ctrl,
                'namespace'     => $value->controller_method,
                'id'            => $value->id,
                'icon'          => $value->icon,
                'sub'           => $this->buildMenuRecursive($value->id, $profileId),
            );
        }
        return $result;
    }
    public function buildBreadCrumb($resource, $profileId) {
        $result = [];

        if($resource){
            $result = array($resource->toArray());
        }else{
            $resource = false;
        }

        while($resource){
            $resource = Resource::buildBreadCrumb($resource,$profileId);
            if($resource){
                $result[] = $resource->toArray();
            }
        }

        return array_reverse($result);
    }
}