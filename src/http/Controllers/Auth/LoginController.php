<?php

namespace Oka6\Admin\Http\Controllers\Auth;

use Illuminate\Validation\ValidationException;
use Oka6\Admin\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Oka6\Admin\Resource;
use Oka6\Admin\User;

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
        $this->middleware('Oka6\\Admin\\Http\\Middleware\\RedirectIfAuthenticatedAdmin')->except('logout');
    }
    protected function sendFailedLoginResponse(Request $request)
    {
        throw ValidationException::withMessages([
            $this->username() => ['failed' => 'Essas credenciais não correspondem aos nossos registros.'],
        ]);
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

        $redirect = Resource::where('id', (int)Auth::User()->resource_default_id)->first();
        if(!isset($redirect->route_name)){
            return redirect("$prefix_url/dashboard");
        }
        return redirect(route($redirect->route_name));
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
