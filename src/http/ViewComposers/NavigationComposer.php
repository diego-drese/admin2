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
        $ironForgeCurrentResource  = Resource::getResourcesByControllerMethod(Route::getCurrentRoute()->getAction()['controller']);

        $ironForgeBreadCrumb        = $this->buildBreadCrumb($ironForgeCurrentResource, Auth::user()->profile->id);
        $ironForgeController        = Route::getCurrentRoute()->getAction()['controller'];
        $view->with(compact('ironForgeController', 'ironForgeResourcesMenu','ironForgeBreadCrumb', 'ironForgeCurrentResource'));
    }

    public function buildMenuRecursive($parentID = 0, $profileId)
    {
        $result = array();
        $menus = Resource::getItensMenuByParentAndProfile($parentID,$profileId);

        foreach ($menus as $key => $value) {
            $name               = explode("\\", $value->controller_method);
            $controllerMethod   =  end($name);
            $ctrl               = explode("@", $controllerMethod);
            $result[$key] = array(
                'menu'          => $value->menu,
                'route_name'    => $value->route_name,
                'controller'    => $value->controller_method,
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