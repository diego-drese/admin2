<?php

namespace Oka6\Admin\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ResetPasswordNotification extends Notification {
	use Queueable;
	
	/**
	 * Create a new notification instance.
	 *
	 * @return void
	 */
	public function __construct() {
	}
	
	/**
	 * Get the notification's delivery channels.
	 *
	 * @param mixed $notifiable
	 * @return array
	 */
	
	
	public function via($notifiable) {
		return ['mail'];
	}
	
	/**
	 * Get the mail representation of the notification.
	 *
	 * @param mixed $user
	 * @return \Illuminate\Notifications\Messages\MailMessage
	 */
	public function toMail($user) {
		if (isset($user->last_login_at) && $user->last_login_at == '---') {
			return (new MailMessage)
				->subject('Novo Acesso')
				->line('Você está recebendo este e-mail porque foi criada uma conta para acesso em nosso sistema.')
				->line('Clique no botão abaixo, coloque seu email, digite e confirme sua nova senha de acesso.')
				->action('Criar Senha', url(config('app.url') . route('password.reset', $user->remember_token, false)))
				->line('Se você desconhece esse remetente, nenhuma ação adicional é necessária.');
		} else {
			return (new MailMessage)
				->subject('Alterar Senha ')
				->line('Você está recebendo este e-mail porque recebemos um pedido de redefinição de senha para sua conta.')
				->action('Resetar Senha', url(config('app.url') . route('password.reset', $user->remember_token, false)))
				->line('Se você não solicitou uma alteração da senha, nenhuma ação adicional é necessária.');
		}
		
	}
	
	/**
	 * Get the array representation of the notification.
	 *
	 * @param mixed $notifiable
	 * @return array
	 */
	public function toArray($notifiable) {
		return [
			//
		];
	}
}
