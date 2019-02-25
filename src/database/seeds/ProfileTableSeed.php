<?php


namespace Negotiate\Admin;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class ProfileTableSeed extends Seeder
{

    public function run()
    {
        Profile::insert(
            [
                'id'   => Sequence::getSequence(Profile::TABLE),
                'name' => "Admin",
                'desc' => "Perfil admin master",
                'resources_allow' => [],
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]
        );

        Profile::insert(
            [
                'id'   => Sequence::getSequence(Profile::TABLE),
                'name' => "User",
                'desc' => "Usuário do sistema",
                'resources_allow' => [],
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]
        );


    }
}
