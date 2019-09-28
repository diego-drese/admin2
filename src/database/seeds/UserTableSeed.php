<?php


namespace Oka6\Admin;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UserTableSeed extends Seeder{

    public function run() {
        $faker = Factory::create();
        User::insert([
            'id'   => Sequence::getSequence(User::TABLE),
            'name' => "Admin",
            'lastname' => "Oka6",
            'cell_phone' => $faker->phoneNumber,
            'active' => 1,
            'profile_id' => User::PROFILE_ID_ROOT,
            'resource_default_id' => 2,
            "client_id" =>null,
            'email' => 'admin@oka6.com.br',
            'password' => bcrypt('oka6'),
            'type' => 'root',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        User::insert([
            'id'   => Sequence::getSequence(User::TABLE),
            'name' => "Cliente para teste",
            'lastname' => "Oka6",
            'cell_phone' => $faker->phoneNumber,
            'active' => 1,
            'profile_id' => 2,
            'resource_default_id' => 1,
            "client_id" =>null,
            'email' => 'client@oka6.com.br',
            'password' => bcrypt('oka6'),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        User::insert([
            'id'   => Sequence::getSequence(User::TABLE),
            'name' => "Usuário do Cliente para teste",
            'lastname' => "Oka6",
            'cell_phone' => $faker->phoneNumber,
            'active' => 1,
            'profile_id' => 3,
            'resource_default_id' => 1,
            "client_id" =>null,
            'email' => 'client.user@oka6.com.br',
            'password' => bcrypt('oka6'),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

    }
}
