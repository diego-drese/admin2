<?php

namespace Negotiate\Admin\Http\Controllers\Auth;

use Negotiate\Admin\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/console/dashboard';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

        $this->middleware('Negotiate\\Admin\\Http\\Middleware\\RedirectIfAuthenticatedIronforge')->except('logout');
    }

    public function logout(Request $request)
    {
        $this->guard()->logout();
        $request->session()->invalidate();
        return redirect('/login');
    }

    protected function authenticated(Request $request, $user)
    {
        $prefix_url = \Config::get('admin.prefix_url');
        if(Auth::User()->active === 0){
            $this->logout($request);
            toastr()->error('Desculpe, não é possível acessar o sistema! Entre em contato com o administrador','error');
            return redirect(route('login'));
        }

        $redirect = Auth::User()->resourceDefault->route_name;
            if(!$redirect){
                return redirect("$prefix_url/dashboard");
            }
        return redirect(route($redirect));
    }
    /**
     * Show the application's login form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showLoginForm()
    {

        return view('Admin::auth.login');
    }

}
