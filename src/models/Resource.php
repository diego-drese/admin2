<?php

namespace Negotiate\Admin;

use Negotiate\Admin\User;
use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{

    protected $fillable = ['name','menu','is_menu','icon','can_be_default','parent_id'];

    public function profiles()
    {
        return $this->belongsToMany('Negotiate\Admin\Profile','profile_has_resources');

    }
    public static function getResourcesByProfiles($profiles, $controller)
    {
        return self::select('resources.*')
            ->distinct()
            ->join('profile_has_resources', 'resource_id','resources.id')
            ->where('controller_method',$controller)
            ->whereIn('profile_id', $profiles)
            ->get();

    }
    public static function getResourcesByRouteName($profiles, $routeName)
    {
        return self::select('resources.*')
            ->distinct()
            ->join('profile_has_resources', 'resource_id','resources.id')
            ->where('route_name',$routeName)
            ->whereIn('profile_id', $profiles)
            ->get();

    }
    public static function getResourcesByControllerMethod($ControllerMethod)  {
        return self::where('controller_method', $ControllerMethod)->first();

    }

    public static function getItensMenuByParentAndProfile($parentID, $profileId){
        return self::where('parent_id', $parentID)
            ->where('is_menu', 1)
            ->where('profile_has_resources.profile_id', $profileId)
            ->orderBy('order', 'asc')
            ->join('profile_has_resources', 'profile_has_resources.resource_id','resources.id')
            ->get();
    }

    public static function buildBreadCrumb($resource, $profileId){
        return self::where('id', $resource->parent_id)
            ->join('profile_has_resources', 'profile_has_resources.resource_id','resources.id')
            ->where('profile_has_resources.profile_id', $profileId)
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
