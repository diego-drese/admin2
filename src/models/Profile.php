<?php

namespace Negotiate\Admin;

use Jenssegers\Mongodb\Eloquent\Model;

class Profile extends Model
{

    protected $fillable     = ['id', 'name', 'desc', 'resources_allow','type_user'];
    protected $connection   = 'negotiate_admin';
    protected $table        = 'profile';
    const TABLE             = 'profile';

    public function user(){
        return $this->hasOne(\Negotiate\Admin\User::class);
    }

    public static function getProfilesByTypes($type){
        if(is_array($type)){
            if (($key = array_search('Admin', $type)) !== false) {
                unset($type['admin']);
            }

            return self::whereIn('type', $type)->get();
        }
        return self::where('type', $type)->get();
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
