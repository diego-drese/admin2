<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOka6Tag extends Migration {

    protected $connection = 'oka6_admin';

    public function up() {
        Schema::connection($this->connection)
            ->table('oka6_tag', function (Blueprint $collection){

                $collection->background(["id"]);
                $collection->background(["tag"]);
                $collection->background(["client_id"]);
                $collection->background(["type"]);

                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('oka6_tag');
    }
}
