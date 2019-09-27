<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

    protected $connection = 'oka6_admin';
    public function up(){
        Schema::connection($this->connection)
            ->table('users', function (Blueprint $collection){
                $collection->background(["id"]);
                $collection->background(["name"]);
                $collection->background(["email"]);
                $collection->background(["active"]);
                $collection->background(["profile_id"]);
                $collection->background(["resource_default_id"]);
                $collection->background(["type"]);
                $collection->background(["client_id"]);
                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('users');
    }
}
