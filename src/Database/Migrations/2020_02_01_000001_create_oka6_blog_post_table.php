<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;

class CreateOka6BlogPostTable extends Migration {
	
	protected $connection = 'oka6_admin_session';
	
	public function up() {
		Schema::connection($this->connection)
			->table('oka6_blog_post', function (Blueprint $collection) {
				$collection->background(["id"]);
				$collection->background(["category_id"]);
				$collection->background(["title"]);
				$collection->background(["slug"]);
				$collection->background(["status"]);
				$collection->background(["created_at"]);
				$collection->background(["updated_at"]);
			});
	}
	
	public function down() {
		Schema::connection($this->connection)->dropIfExists('oka6_blog_post');
	}
}
