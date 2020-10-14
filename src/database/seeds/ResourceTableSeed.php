<?php
	
	
	namespace Oka6\Admin;
	
	use Illuminate\Database\Seeder;
	use Illuminate\Support\Facades\DB;
	use Carbon\Carbon;
	
	class ResourceTableSeed extends Seeder {
		
		public function run() {
			$this->startResources();
		}
		
		
		private function startResources() {
			if (!Resource::getResourceIdByRouteName('System')) {
				$profile = Profile::where('id', User::PROFILE_ID_ROOT)->first();
				$id = Sequence::getSequence('resource');
				Resource::insert([
					[
						'id' => $id,
						'name' => "System Admin",
						'menu' => 'System',
						'is_menu' => 1,
						'route_name' => 'System',
						'icon' => 'fas fa-folder',
						'controller_method' => '',
						'can_be_default' => 0,
						'parent_id' => 0,
						'order' => 1,
						'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
						'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
					]
				]);
				if (!count($profile->resources_allow)) {
					$profile->resources_allow = [$id];
					
				} else {
					$profile->resources_allow = array_merge($profile->resources_allow, [$id]);
					
				}
				
				$profile->save();
			}
		}
		
	}
