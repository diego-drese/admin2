<?php

namespace Negotiate\Admin;

use Jenssegers\Mongodb\Eloquent\Model;

class Profile extends Model
{

    protected $fillable     = ['id', 'name', 'desc', 'resources_allow','type_user'];
    protected $connection   = 'negotiate_admin';
    protected $table        = 'profile';
    const TABLE             = 'profile';

    public function resources(){
        return $this->belongsToMany(\Negotiate\Admin\Resource::class,'profile_has_resources','profile_id','resource_id');
    }


    public function user(){
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
