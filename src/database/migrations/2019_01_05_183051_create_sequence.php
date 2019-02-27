<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSequence extends Migration {

    protected $connection = 'negotiate_admin';

    public function up() {
        Schema::connection($this->connection)
            ->table('sequence', function (Blueprint $collection){
                //$collection->background(["_id"]);
                $collection->background(["sequence"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('sequence');
    }
}
