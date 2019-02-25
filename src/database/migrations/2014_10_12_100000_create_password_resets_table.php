<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePasswordResetsTable extends Migration {
    protected $connection = 'negotiate_admin';

    public function up()
    {
        Schema::connection($this->connection)
            ->table('password_resets', function (Blueprint $collection){
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
    public function down()
    {
        Schema::connection($this->connection)->dropIfExists('password_resets');
    }
}
