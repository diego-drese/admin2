<?php

namespace Negotiate\Admin\Library;

use Negotiate\Admin\Profile;
use Negotiate\Admin\Resource;
use Negotiate\Admin\User;
use Negotiate\Admin\UserIronForge;
use Illuminate\Support\Facades\Auth;

class ResouceIronForge
{
    public static function verifyUser($controllerAction){

        $controller = $controllerAction;
        $findController = Resource::where('controller_method','=',$controller)->first();
        if($findController == null){
            return false;
        }

        $auth = Auth::user();
        $userProfiles   = UserIronForge::select('profile_id')->findOrFail($auth->id);
        $userResources = Resource::getResourcesByProfiles($userProfiles, $controller);
        if(abort_if($auth->active == 0,404,' Desculpe, não é possível acessar o sistema! Entre em contato com o administrador '))

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
        $auth           = Auth::user();
        $userProfiles   = UserIronForge::select('profile_id')->findOrFail($auth->id);
        $userResources  = Resource::getResourcesByRouteName($userProfiles, $routeName);

        if(count($userResources)){
            return true;
        }
        return false;
    }


}
