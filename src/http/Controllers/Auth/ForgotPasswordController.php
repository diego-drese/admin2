<?php

namespace Negotiate\Admin\Http\Controllers\Auth;

use App\Notifications\ResetPasswordNotification;
use Illuminate\Http\Request;
use Negotiate\Admin\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Negotiate\Admin\PasswordReset;
use Negotiate\Admin\User;

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
c    public function __construct()
    {
        $this->middleware('guest');
    }

    public function sendResetLinkEmail(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        $passwordReset = PasswordReset::create(['email'=>$user->email,'token'=>$user->remember_token]);
        $user->notify(new ResetPasswordNotification($passwordReset));
    }

    //Shows form to request password reset
    public function showLinkRequestForm()
    {
        return view('Admin::auth.passwords.email');
    }

}
