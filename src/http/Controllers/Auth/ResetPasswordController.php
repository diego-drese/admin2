<?php

namespace Oka6\Admin\Http\Controllers\Auth;

use Illuminate\Notifications\Messages\MailMessage;
use Oka6\Admin\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Oka6\Admin\PasswordReset;
use Oka6\Admin\User;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;


    /**
     * Where to redirect users after resetting their password.
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
        $this->middleware('guest');
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Alterar Senha - EspecializaTi Academy')
            ->line('Você está recebendo este e-mail porque recebemos um pedido de redefinição de senha para sua conta.')
            ->action('Resetar Senha', url(config('app.url').route('password.reset', $this->token, false)))
            ->line('Se você não solicitou uma alteração da senha, nenhuma ação adicional é necessária.');
    }

    public function showResetForm(Request $request, $token = null)
    {
        return view('Admin::auth.passwords.reset')->with(
            ['token' => $token, 'email' => $request->email]
        );
    }

    public function reset(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string|confirmed',
            'token' => 'required|string'
        ]);

        $passwordReset = PasswordReset::where('email', $request->email)->where('token', $request->token)->first();

        if (!$passwordReset){
            toastr()->error('Token inválido','Erro');
            return back();
        }

        $user = User::where('email', $passwordReset->email)->first();

        if (!$user){
            toastr()->error('não foi encontrado usuário com este e-mail.');
            return back();
        }

        $user->password = bcrypt($request->password);
        $user->save();

        if($passwordReset->delete()){
            toastr()->success('Senha alterada com sucesso!');
            return redirect(route('login'));
        }
    }
}
