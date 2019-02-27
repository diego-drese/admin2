<?php


namespace Negotiate\Admin;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserTableSeed extends Seeder{

    public function run() {
        $faker = Factory::create();
        User::insert([
            'id'   => Sequence::getSequence(User::TABLE),
            'name' => "Admin",
            'lastname' => "Negotiate",
            'cell_phone' => $faker->phoneNumber,
            'active' => 1,
            'profile_id' => 1,
            'resource_default_id' => 1,
            "client_id" =>null,
            'email' => 'admin@negotiate.com.br',
            'password' => bcrypt('negotiate'),
            'type' => 'root',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

    }
}
