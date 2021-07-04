<?php

namespace Oka6\Admin\Models;

use App\Notifications\ResetPasswordNotification;
use Jenssegers\Mongodb\Eloquent\Model;

class PasswordReset extends Model {
	
	const TABLE = 'password_resets';
	protected $table = 'password_resets';
	protected $connection = 'oka6_admin';
	
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		
		'_id', 'id', 'email', 'token', 'new_account'
	];
	
	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	
	
}