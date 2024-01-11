<?php

namespace Oka6\Admin\Http\Controllers\Auth;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Oka6\Admin\Http\Controllers\Controller;
use Oka6\Admin\Library\MongoUtils;
use Oka6\Admin\Models\Profile;
use Oka6\Admin\Models\Resource;
use Oka6\Admin\Models\User;

class LoginController extends Controller {
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
	public function __construct() {
		$this->middleware('Oka6\\Admin\\Http\\Middleware\\RedirectIfAuthenticatedAdmin')->except('logout');
	}
	
	/**
	 * Show the application's login form.
	 *
	 * @return Response
	 */
	public function showLoginForm(Request $request) {
		$path = $request->get('path');
		return view('Admin::auth.login', compact('path'));
	}
	
	protected function sendFailedLoginResponse(Request $request) {
		throw ValidationException::withMessages([
			$this->username() => ['failed' => 'Essas credenciais não correspondem aos nossos registros.'],
		]);
	}
	
	protected function authenticated(Request $request, $user) {
		$prefix_url = Config::get('admin.prefix_url');
		$userAuth = Auth::User();
		if ($userAuth->active === 0) {
			$this->logout($request);
			toastr()->error('Desculpe, não é possível acessar o sistema! Entre em contato com o administrador', 'error');
			return redirect(route('login'));
		}
		$userAuth->last_login_at = MongoUtils::convertDatePhpToMongo(date('Y-m-d H:i:s'));
		$userAuth->save();
		
		$path = $request->get('path');
		if (filter_var($path, FILTER_VALIDATE_URL) && !strpos($path, 'logout')) {
			return redirect($path);
		}
		
		$redirect = Resource::where('id', (int)$userAuth->resource_default_id)->first();
		if (!isset($redirect->route_name)) {
			$profile = Profile::getById(Auth::User()->profile_id);
			$resource = Resource::whereIn('id', $profile->resources_allow)
				->where('can_be_default', 1)
				->orderBy('id', 'ASC')
				->first();
			if ($resource && $resource->id) {
				User::where('id', Auth::User()->id)
					->update(['resource_default_id' => $resource->id]);
				Log::info('LoginController, update resource default', ['user_id' => $userAuth->id, 'resource' => $resource->name, 'resource_id' => $resource->id]);
				return redirect(route($resource->route_name));
			}
			if (!$resource) {
				return redirect("$prefix_url/page-not-found");
			}
		}
		
		
		return redirect(route($redirect->route_name));
	}
	
	public function logout(Request $request) {
		$this->guard()->logout();
		$request->session()->invalidate();
		return redirect('/login');
	}
	
}
