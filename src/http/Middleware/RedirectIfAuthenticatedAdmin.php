<?php

namespace Negotiate\Admin\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticatedAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $prefix_url         = \Config::get('admin.prefix_url');

        if (Auth::guard($guard)->check()) {
            $redirect = '';
            //$redirect = Auth::User()->resourceDefault->route_name;
            if($redirect){
                return redirect(route($redirect));
            }
            return redirect("/$prefix_url/dashboard");
        }

        return $next($request);
    }
}