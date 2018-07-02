<?php

namespace Aggrega\Ironforge;

use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    public function users()
    {
        return $this->belongsToMany('Aggrega\Ironforge\User','user_has_owners','owner_id','user_id');
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
