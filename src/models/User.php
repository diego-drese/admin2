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

class User extends Model implements AuthenticatableContract, AuthorizableContract, CanResetPasswordContract{
    use Authenticatable, Authorizable, CanResetPassword, Notifiable;

    protected $table        = 'users';
    const TABLE             = 'users';
    protected $connection   = 'negotiate_admin';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'name', 'email', 'password','lastname','cell_phone','active', 'profile_id', 'resource_default_id', 'picture', 'client_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function owners()
    {
        return $this->belongsToMany(\Negotiate\Admin\Owner::class,'user_has_owners','user_id','owner_id');
    }

    public function profile(){

        return Profile::where('id', $this->profile_id)->first();
       // return $this->belongsTo(\Negotiate\Admin\Profile::class);
    }

    public function resourceDefault(){
        //dd($this->resource_default_id);
        return Resource::where('id', $this->resource_default_id)->first();
        //return $this->belongsTo(\Negotiate\Admin\Resource::class,'resource_default_id');
    }

    /**
     * Get the relationships for the entity.
     *
     * @return array
     */
    public function getQueueableRelations()
    {
        // TODO: Implement getQueueableRelations() method.
    }
}




