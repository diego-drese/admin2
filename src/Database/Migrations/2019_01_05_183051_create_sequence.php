<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;

class CreateSequence extends Migration {
	
	protected $connection = 'oka6_admin';
	
	public function up() {
		Schema::connection($this->connection)
			->table('sequence', function (Blueprint $collection) {
				$collection->background(["sequence"]);
			});
	}
	
	public function down() {
		Schema::connection($this->connection)->dropIfExists('sequence');
	}
}
