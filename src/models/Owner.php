<?php

namespace Aggrega\Ironforge;

use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    protected $fillable = ['name','desc','type','origin_id','origin_name'];

    public function user()
    {
        return $this->belongsToMany('Aggrega\Ironforge\UserIronForge','user_has_owners','owner_id','user_id');
    }

    /**
     * Get the relationships for the entity.
     *
     * @return array
     */
    public function getQueueableRelations(){
        // TODO: Implement getQueueableRelations() method.
    }

    public static function getArrayOriginsIdByUserAndType($userId, $type)
    {
        $retval = [];
        $owners =  self::select('origin_id')
            ->join('user_has_owners','user_has_owners.owner_id','owners.id')
            ->where('user_has_owners.user_id' , $userId)
            ->where('type',$type)
            ->pluck('origin_id');

        if($owners){
            $retval = $owners->toArray();
        }
        return $retval;
    }
}
