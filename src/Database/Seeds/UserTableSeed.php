<?php


namespace Oka6\Admin\Database\Seeds;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Oka6\Admin\Models\User;

class UserTableSeed extends Seeder {
	
	public function run() {
		User::where('id', '<', 0)->delete();
		User::insert([
			'id' => -1,
			'name' => "Admin",
			'lastname' => "Oka6",
			'cell_phone' => "(51) 99999-9999",
			'active' => 1,
			'profile_id' => User::PROFILE_ID_ROOT,
			'resource_default_id' => 0,
			"client_id" => null,
			'email' => 'admin@oka6.com.br',
			'password' => bcrypt('oka6'),
			'type' => 'root',
			'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
			'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
		]);
	}
}
