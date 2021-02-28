<?php

namespace Oka6\Admin\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Notifications\Notifiable;
use Jenssegers\Mongodb\Eloquent\Model;
use Oka6\Admin\Notifications\ResetPasswordNotification;

class User extends Model implements AuthenticatableContract, AuthorizableContract, CanResetPasswordContract {
	use Authenticatable, Authorizable, CanResetPassword, Notifiable;
	
	const TABLE = 'users';
	const PROFILE_ID_ROOT = 5047785;
	public $rules = [
		'cell_phone' => 'required',
		'resource_default_id' => 'required',
		'name' => 'required',
		'email' => 'required',
		'password' => 'required|min:6|confirmed',
		'password_confirmation' => 'required|min:6|',
		'profile_id' => 'required',
		'client_id' => 'required',
	
	];
	protected $table = 'users';
	protected $connection = 'oka6_admin';
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'id',
		'name',
		'email',
		'password',
		'lastname',
		'cell_phone',
		'active',
		'profile_id',
		'resource_default_id',
		'picture',
		'type',
		'client_id'
	];
	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = [
		'password', 'remember_token',
	];
	
	public static function hasUserCreated() {
		return self::count();
	}
	
	public function resourceDefault() {
		return Resource::where('id', $this->resource_default_id)->first();
	}
	
	public function getById($id) {
		return self::where('id', (int)$id)->first();
	}
	
	public static function getByIdStatic($id) {
		$user = self::where('id', (int)$id)->first();
		$profile = Profile::getById($user->profile_id);
		$user->profile_name = $profile->name;
		$user->profile_desc = $profile->desc;
		return $user;
	}
	
	
	/**
	 * Send the password reset notification.
	 * @note: This override Authenticatable methodology
	 *
	 * @param string $token
	 * @return void
	 */
	public function sendPasswordResetNotification($token) {
		$this->notify(new ResetPasswordNotification());
	}
	
}
