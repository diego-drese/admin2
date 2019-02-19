<?php

namespace Negotiate\Admin\Library;

use Negotiate\Admin\Resource;
use Illuminate\Support\Facades\Auth;

class ResourceAdmin
{
    public static function verifyUser($controllerAction){

        $controller = $controllerAction;
        $findController = Resource::where('controller_method','=',$controller)->first();
        if($findController == null){
            return false;
        }
        $userResources = Resource::getResourcesByProfiles(Auth::user()->profile_id, $controller);
        if(abort_if(Auth::user()->active == 0,404,' Desculpe, não é possível acessar o sistema! Entre em contato com o administrador '))

        if(!$userResources){
            $userResources = [];
        }else{
            $userResources = $userResources->toArray();
        }

        return $userResources;
    }

    public static function hasResourceByRouteName($routeName, $params = []){
        $route          = route($routeName, $params);
        $findResource   = Resource::where('route_name','=',$routeName)->first();
        if($findResource == null){
            return false;
        }
        $userResources  = Resource::getResourcesByRouteName(Auth::user()->profile_id, $routeName);

        if(count($userResources)){
            return true;
        }
        return false;
    }


}
