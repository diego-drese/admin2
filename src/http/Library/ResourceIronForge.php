<?php

namespace Aggrega\Ironforge\Library;

use Aggrega\Ironforge\Profile;
use Aggrega\Ironforge\Resource;
use Aggrega\Ironforge\User;
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
        $userProfiles   = User::select('profile_id')->findOrFail($auth->id);
        $userResources = Resource::getResourcesByProfiles($userProfiles, $controller);
        if(abort_if($auth->active == 0,404,' Desculpe, não é possível acessar o sistema! Entre em contato com o administrador '))

        if(!$userResources){
            $userResources = [];
        }else{
            $userResources = $userResources->toArray();
        }

        return $userResources;
    }



}
