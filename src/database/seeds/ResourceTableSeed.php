<?php


namespace Aggrega\Ironforge;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ResourceTableSeed extends Seeder
{

    public function run()
    {
        $this->startResources();
    }


    private function startResources()
    {
        DB::table('resources')->insert([
            [
                'name' => "Sistema Ironforge",
                'menu' => 'Sistema',
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

        DB::table('profile_has_resources')->insert([
            'profile_id'    => 1,
            'resource_id'   => 1,
        ]);

    }

}