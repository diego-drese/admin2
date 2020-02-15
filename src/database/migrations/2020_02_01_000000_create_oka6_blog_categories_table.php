<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOka6BlogCategoriesTable extends Migration{

    protected $connection = 'oka6_admin_session';

    public function up() {
        Schema::connection($this->connection)
            ->table('oka6_blog_categories', function (Blueprint $collection){
                $collection->background(["id"]);
                $collection->background(["title"]);
                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('oka6_blog_categories');
    }
}
