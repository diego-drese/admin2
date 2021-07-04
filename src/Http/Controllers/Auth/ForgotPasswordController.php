<?php

namespace Oka6\Admin\Http\Controllers\Auth;

use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Oka6\Admin\Http\Controllers\Controller;
use Oka6\Admin\Notifications\ResetPasswordNotification;
use  Oka6\Admin\Models\PasswordReset;
use  Oka6\Admin\Models\User;

class ForgotPasswordController extends Controller {
	/*
	|--------------------------------------------------------------------------
	| Password Reset Controller
	|--------------------------------------------------------------------------
	|
	| This controller is responsible for handling password reset emails and
	| includes a trait which assists in sending these notifications from
	| your application to your users. Feel free to explore this trait.
	|
	*/
	
	use SendsPasswordResetEmails;
	
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct() {
		$this->middleware('guest');
	}
	
	public function sendResetLinkEmail(Request $request) {
		$user = User::where('email', $request->email)->first();
		if (!$user) {
			toastr()->error('não foi encontrado usuário com este e-mail.');
			return back();
		}
		if(!$user->remember_token){
			$user->remember_token = Str::random(60);
			$user->save();
		}
		$passwordReset = PasswordReset::create(['email' => $user->email, 'token' => $user->remember_token, 'new_account' => false]);
		$user->notify(new ResetPasswordNotification($passwordReset));
		
		
		toastr()->success('você recebeu um e-mail para recuperar a senha.');
		
		return redirect(route('login'));
	}
	
	//Shows form to request password reset
	public function showLinkRequestForm() {
		return view('Admin::auth.passwords.email');
	}
	
}
