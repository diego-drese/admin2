<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;

class CreateResourceTable extends Migration {
	
	protected $connection = 'oka6_admin';
	
	public function up() {
		Schema::connection($this->connection)
			->table('resource', function (Blueprint $collection) {
				$collection->background(["id"]);
				$collection->background(["name"]);
				$collection->background(["menu"]);
				$collection->background(["is_menu"]);
				$collection->background(["route_name"]);
				$collection->background(["parent_id"]);
				$collection->background(["parent_id"]);
				$collection->background(["order"]);
				$collection->background(["created_at"]);
				$collection->background(["updated_at"]);
			});
	}
	
	
	public function down() {
		Schema::connection($this->connection)->dropIfExists('resource');
	}
}
