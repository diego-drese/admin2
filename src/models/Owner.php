<?php

namespace Aggrega\Ironforge;

use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    protected $fillable = ['name','desc'];

    public function user()
    {
        return $this->belongsToMany('Aggrega\Ironforge\UserIronForge','user_has_owners','owner_id','user_id');
//            ->withPivot('user_has_owners');
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
