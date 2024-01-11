<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;

class CreatePasswordResetsTable extends Migration {
	protected $connection = 'oka6_admin';
	
	public function up() {
		Schema::connection($this->connection)
			->table('password_resets', function (Blueprint $collection) {
				$collection->background(["id"]);
				$collection->background(["token"]);
				$collection->background(["created_at"]);
				$collection->background(["updated_at"]);
			});
	}
	
	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::connection($this->connection)->dropIfExists('password_resets');
	}
}
