<?php

namespace Negotiate\Admin;

use Jenssegers\Mongodb\Eloquent\Model;

class Resource extends Model
{

    protected $fillable = ['id','name','menu','is_menu','icon','can_be_default','parent_id'];
    protected $table        = 'resource';
    const TABLE             = 'resource';
    protected $connection   = 'negotiate_admin';


    public static function getResourcesByProfiles($profile, $controller) {
        $profile = Profile::where('id', (int)$profile)->first();
        return self::whereIn('id', $profile->resources_allow)
            ->where('controller_method', $controller)
            ->get();
    }
    public static function getResourcesByRouteName($profile, $routeName) {
        $profile = Profile::where('id', (int)$profile)->first();
        return self::select('resource.*')
            ->where('route_name', $routeName)
            ->whereIn('id', $profile->resources_allow)
            ->get();

    }
    public static function getResourcesByControllerMethod($ControllerMethod)  {
        return self::where('controller_method', $ControllerMethod)->first();

    }

    public static function getItensMenuByParentAndProfile($parentID, $profileId){
        $profile = Profile::where('id', (int)$profileId)->first();
        return self::where('parent_id', (int)$parentID)
            ->where('is_menu', 1)
            ->whereIn('id', $profile->resources_allow)
            ->orderBy('order', 'asc')
            ->get();
    }

    public static function buildBreadCrumb($resource, $profileId){
        return self::where('id', $resource->parent_id)
            //->join('profile_has_resources', 'profile_has_resources.resource_id','resources.id')
            ->where('profile_id', $profileId)
            ->first();
    }
    public static function getResourceIdByRouteName($routeName){
        return self::where('route_name', $routeName)
            ->orWhere('name',$routeName)
            ->select('id')
            ->first();
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
