<?php

namespace Aggrega\Ironforge\Http\Middleware;

use Aggrega\Ironforge\Library\ResouceIronForge;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Closure;


class MiddlewareIronForge
{
   use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function handle(Request $request, Closure $next, $ability = null, $boundModelName = null)
    {

        $routeArray         = app('request')->route()->getAction();
        $prefix_url         = config('ironforge.prefix_url');
        $controllerAction   = $routeArray['controller'];
        $controller         = explode('@', $controllerAction);
        $ajax               = $request->ajax();
        $request->headers->set('controller' , $controller);
        $resources          = ResouceIronForge::verifyUser($controllerAction);

       if($resources === false){
           if($ajax){
               return response()->json(['message'=>'Recurso não cadastrado'],404);
           }
           return redirect("/$prefix_url/page-not-found");
           //abort('Ironforge::errors.404','Recurso não cadastrado');
       }

            if(!count($resources)){
            if($ajax){
                return response()->json(['message'=>'Desculpe, você não tem permissão!'],403);
            }
                return redirect("/$prefix_url/page-not-allowed");
        }

        return $next($request);
    }

    public static function canPermission($controllerMethod){

    }

}
