<?php


namespace Oka6\Admin\Database\Seeds;

use Illuminate\Database\Seeder;
use Oka6\Admin\Models\Resource;
use Oka6\Admin\Models\User;

class UserDefaultPage extends Seeder {
	
	public function run() {
		$resource = Resource::getResourceIdByRouteName('admin.resources.index');
		User::where('id', -1)->update(['resource_default_id' => $resource->id]);
	}
}
