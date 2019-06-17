<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNegotiateTag extends Migration {

    protected $connection = 'negotiate_admin';

    public function up() {
        Schema::connection($this->connection)
            ->table('negotiate_tag', function (Blueprint $collection){

                $collection->background(["id"]);
                $collection->background(["tag"]);
                $collection->background(["client_id"]);
                $collection->background(["type"]);

                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('negotiate_tag');
    }
}
