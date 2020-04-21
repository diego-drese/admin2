<?php


namespace Oka6\Admin;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UserTableSeed extends Seeder{

    public function run() {
        User::where('id','<', 0)->delete();
        $faker      = Factory::create();
        User::insert([
            'id'   => -1,
            'name' => "Admin",
            'lastname' => "Oka6",
            'cell_phone' => $faker->phoneNumber,
            'active' => 1,
            'profile_id' => User::PROFILE_ID_ROOT,
            'resource_default_id' => 0,
            "client_id" =>null,
            'email' => 'admin@oka6.com.br',
            'password' => bcrypt('oka6'),
            'type' => 'root',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
