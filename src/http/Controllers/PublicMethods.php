<?php

namespace Aggrega\Ironforge\Http\Controllers;

use Aggrega\Ironforge\Resource;

class PublicMethods extends Controller
{
    public function getResourcesDefault($profileId){
        $profile = Resource::select('*')
            ->join('profile_has_resources', 'profile_has_resources.resource_id','resources.id')
            ->where('profile_has_resources.profile_id', $profileId)
            ->where('resources.can_be_default', 1)
            ->get();

        return response()->json($profile);
    }
}
