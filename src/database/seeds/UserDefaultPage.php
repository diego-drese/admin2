<?php


namespace Oka6\Admin;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UserDefaultPage extends Seeder{

    public function run() {
        $resource   = Resource::getResourceIdByRouteName('admin.resources.index');
        User::where('id', -1)->update(['resource_default_id'=>$resource->id]);
    }
}
