<?php

namespace Aggrega\Ironforge;

use Aggrega\Ironforge\Profile;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserIronForge extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','lastname','cell_phone','active', 'profile_id', 'resource_default_id', 'picture'
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
        return $this->belongsToMany(\Aggrega\Ironforge\Owner::class,'user_has_owners','user_id','owner_id');
    }

    public function profile(){
        return $this->belongsTo(\Aggrega\Ironforge\Profile::class);
    }
    public function resourceDefault(){
        return $this->belongsTo(\Aggrega\Ironforge\Resource::class,'resource_default_id');
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




