<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOwnerTable extends Migration {

    protected $connection = 'oka6_admin';

    public function up() {
        Schema::connection($this->connection)
            ->table('owner', function (Blueprint $collection){
                $collection->background(["id"]);
                $collection->background(["name"]);
                $collection->background(["type"]);
                $collection->background(["is_menu"]);
                $collection->background(["origin_id"]);
                $collection->background(["origin_name"]);
                $collection->background(["origin_excluding_ids"]);
                $collection->background(["remain_list_id"]);
                $collection->background(["remain_list_name"]);
                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('owner');
    }
}
