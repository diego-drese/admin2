<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTemplateSystemTable extends Migration
{

    protected $connection = 'oka6_admin_session';

    public function up()
    {
        Schema::connection($this->connection)
            ->table('template_system', function (Blueprint $collection) {
                $collection->background(["id"]);
                $collection->background(["slug"]);
                $collection->background(["active"]);
                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down()
    {
        Schema::connection($this->connection)->dropIfExists('template_system');
    }
}
