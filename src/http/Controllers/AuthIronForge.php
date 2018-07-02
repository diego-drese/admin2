<?php

namespace Aggrega\Ironforge\Http\Controllers;

use Aggrega\Ironforge\Library\ResouceIronForge;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;


class AuthIronForge extends BaseController
{
   use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(Request $request)
    {
        $this->middleware(function ($request, $next) {
            $routeArray = app('request')->route()->getAction();
            $controllerAction = class_basename($routeArray['controller']);
            $controller= explode('@', $controllerAction);
            $ajax    = $request->ajax();
            $request->headers->set('controller' , $controller);
            $resources = ResouceIronForge::verifyUser($controllerAction);

           if($resources === false){
               if($ajax){
                   return response()->json(['message'=>'Recurso não cadastrado'],404);
               }
               abort(404,'Recurso não cadastrado');
           }

                if(!count($resources)){
                if($ajax){
                    return response()->json(['message'=>'Desculpe, você não tem permissão!'],403);
                }
                abort(403,'Desculpe, você não tem permissão!');
            }

            return $next($request);
        });
    }

    public static function canPermission($controllerMethod){

    }

}
