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

        $name                       = explode("\\", Route::getCurrentRoute()->getAction()['controller']);
        $controllerMethod           =  end($name);
        $ironForgeController        = explode("@", $controllerMethod);
        $ironForgeController        = array_first($ironForgeController);

        $ironForgeResourcesMenu    = $this->buildMenuRecursive(0,  Auth::user()->profile->id);
        $ironForgeCurrentResource  = Resource::getResourcesByControllerMethod($controllerMethod);
        $ironForgeBreadCrumb        = $this->buildBreadCrumb($ironForgeCurrentResource, Auth::user()->profile->id);
        $view->with(compact('ironForgeController', 'ironForgeResourcesMenu','ironForgeBreadCrumb', 'ironForgeCurrentResource'));
    }

    public function buildMenuRecursive($parentID = 0, $profileId)
    {
        $result = array();
        $menus = Resource::getItensMenuByParentAndProfile($parentID,$profileId);

        foreach ($menus as $key => $value) {
            $ctrl = explode('@',$value->controller_method);
            $result[$key] = array(
                'menu' => $value->menu,
                'route_name' =>$value->route_name,
                'controller' => $ctrl[0],
                'id' => $value->id,
                'icon' => $value->icon,
                'sub' => $this->buildMenuRecursive($value->id, $profileId),
            );
        }
        return $result;
    }
    public function buildBreadCrumb($resource, $profileId) {
        $result = array($resource->toArray());
        while($resource){
            $resource = Resource::buildBreadCrumb($resource,$profileId);
            if($resource){
                $result[] = $resource->toArray();
            }
        }

        return array_reverse($result);
    }
}