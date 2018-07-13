<?php

namespace Aggrega\Ironforge;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ProfileHasResourcesTableSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {

       $resources =  Resource::all('id');
       $addNews = [];
       for ($i=0; $i <= count($resources); $i++){
            $addNews[] = [
                'profile_id' => 1,
                'resource_id' => $i,
            ];
       }
        DB::table('profile_has_resources')->insert($addNews);
    }

}
