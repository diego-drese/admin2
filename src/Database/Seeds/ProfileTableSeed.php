<?php


namespace Oka6\Admin;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;

class ProfileTableSeed extends Seeder {
	
	public function run() {
		Profile::where('id', User::PROFILE_ID_ROOT)->delete();
		Profile::insert(
			[
				'id' => User::PROFILE_ID_ROOT,
				'type' => Config::get('admin.profile_type')['admin'],
				'name' => "Root",
				'desc' => "Perfil admin master",
				'resources_allow' => [],
				'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
				'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
			]
		);
		
	}
}
