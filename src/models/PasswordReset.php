<?php

namespace Negotiate\Admin;

use Illuminate\Notifications\Notifiable;
use Jenssegers\Mongodb\Eloquent\Model;
use Illuminate\Auth\Authenticatable;

use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use App\Notifications\ResetPasswordNotification;

class PasswordReset extends Model {

    protected $table        = 'password_resets';
    const TABLE             = 'password_resets';
    protected $connection   = 'negotiate_admin';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [

        '_id','id','email','token',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */



}