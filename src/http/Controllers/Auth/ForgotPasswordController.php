<?php

namespace Oka6\Admin\Http\Controllers\Auth;

use Oka6\Admin\Notifications\ResetPasswordNotification;
use Illuminate\Http\Request;
use Oka6\Admin\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Oka6\Admin\PasswordReset;
use Oka6\Admin\User;

class ForgotPasswordController extends Controller
{
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
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function sendResetLinkEmail(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if(!$user){
            toastr()->error('não foi encontrado usuário com este e-mail.');
            return back();
        }
        $passwordReset = PasswordReset::create(['email'=>$user->email,'token'=>$user->remember_token]);
        $user->notify(new ResetPasswordNotification($passwordReset));


        toastr()->success('você recebeu um e-mail para recuperar a senha.');

        return redirect(route('login'));
    }

    //Shows form to request password reset
    public function showLinkRequestForm()
    {
        return view('Admin::auth.passwords.email');
    }

}
