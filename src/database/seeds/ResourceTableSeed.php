<?php


namespace Oka6\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ResourceTableSeed extends Seeder
{

    public function run(){
        $this->startResources();
    }


    private function startResources(){
        $profile = Profile::where('id', User::PROFILE_ID_ROOT)->first();
        if(count($profile->resources_allow)){
            return true;
        }

        $id = Sequence::getSequence('resource');
        Resource::insert([
            [
                'id' => $id,
                'name' => "System Admin",
                'menu' => 'System',
                'is_menu' => 1,
                'route_name' => null,
                'icon' => 'fa-folder',
                'controller_method' => '',
                'can_be_default' => 0,
                'parent_id' => 0,
                'order' => 1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]

        ]);
        $id2 = Sequence::getSequence('resource');

        Resource::insert([
            [
                'id' => $id2,
                'name' => "Blog",
                'menu' => 'Blog',
                'is_menu' => 1,
                'route_name' => null,
                'icon' => 'fas fa-rss',
                'controller_method' => '',
                'can_be_default' => 0,
                'parent_id' => 0,
                'order' => 1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]

        ]);

       if(!count($profile->resources_allow)){
           $profile->resources_allow = [$id, $id2];
           $profile->save();
       }

    }

}
