<?php

namespace Aggrega\Ironforge;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{


    protected $fillable = ['name','user_id','profile_id'];

//    public function users()
//    {
//        return $this->belongsToMany('App\Models\User','user_has_profiles','user_id','profile_id')
//           ;// ->withPivot('profile_id');
//
//    }

    public function resources()
    {
        return $this->belongsToMany(Resource::class,'profile_has_resources','profile_id','resource_id');
    }


    public function user()
    {
        return $this->hasOne(User::class);
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
