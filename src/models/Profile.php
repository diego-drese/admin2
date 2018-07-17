<?php

namespace Aggrega\Ironforge;

use Aggrega\Ironforge\User;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{


    protected $fillable = ['name','user_id','profile_id'];


    public function resources()
    {
        return $this->belongsToMany(\Aggrega\Ironforge\Resource::class,'profile_has_resources','profile_id','resource_id');
    }


    public function user()
    {
        return $this->hasOne(\Aggrega\Ironforge\User::class);
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
