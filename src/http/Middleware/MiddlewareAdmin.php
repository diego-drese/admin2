<?php

namespace Oka6\Admin\Http\Middleware;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Closure;
use Oka6\Admin\Library\ResourceAdmin;


class MiddlewareAdmin
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function handle(Request $request, Closure $next, $ability = null, $boundModelName = null)
    {
        $routeArray         = app('request')->route()->getAction();
        $prefix_url         = \Config::get('admin.prefix_url');
        $controllerAction   = $routeArray['controller'];
        $controller         = explode('@', $controllerAction);
        $ajax               = $request->ajax();
        $request->headers->set('controller' , $controller);
        $resources          = ResourceAdmin::verifyUser($controllerAction);

        if($resources === false){
            if($ajax){
                return response()->json(['message'=>'Recurso não cadastrado'],404);
            }

            return redirect("/$prefix_url/page-not-found");
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
