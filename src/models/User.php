<?php

namespace Aggrega\Ironforge;

use App\Models\Profile;
use Aggrega\Ironforge\Resource;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','lastname','cell_phone','active', 'profile_id','resource_default_id'
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
        return $this->belongsToMany('Aggrega\Ironforge\Owner','user_has_owners','user_id','owner_id');
    }

    public function profile(){
        return $this->belongsTo(Profile::class);
    }
    public function resourceDefault(){
        return $this->belongsTo(Resource::class,'resource_default_id');
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
