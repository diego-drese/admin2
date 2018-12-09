<?php

namespace Negotiate\Admin;

use Negotiate\Admin\User;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{

    protected $fillable = ['name','user_id','profile_id'];

    public function resources()
    {

        return $this->belongsToMany(\Negotiate\Admin\Resource::class,'profile_has_resources','profile_id','resource_id');
    }


    public function user()
    {
        return $this->hasOne(\Negotiate\Admin\User::class);
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
