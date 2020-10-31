<?php

namespace Oka6\Admin\Http\Middleware;

use Closure;
use Config;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Oka6\Admin\Library\ResourceAdmin;


class MiddlewareAdmin {
	use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
	
	public static function canPermission($controllerMethod) {
	
	}
	
	public function handle(Request $request, Closure $next, $ability = null, $boundModelName = null) {
		$routeArray = app('request')->route()->getAction();
		$prefix_url = Config::get('admin.prefix_url');
		$controllerAction = $routeArray['controller'];
		$controller = explode('@', $controllerAction);
		$ajax = $request->ajax();
		$json = $request->wantsJson();
		$request->headers->set('controller', $controller);
		$resources = ResourceAdmin::verifyUser($controllerAction);
		
		if ($resources === false) {
			if ($ajax || $json) {
				return response()->json(['message' => 'Recurso não cadastrado'], 404);
			}
			
			return redirect("/$prefix_url/page-not-found");
		}
		
		if (!count($resources)) {
			if ($ajax || $json) {
				return response()->json(['message' => 'Desculpe, você não tem permissão!'], 403);
			}
			return redirect("/$prefix_url/page-not-allowed");
		}
		
		return $next($request);
	}
	
}
