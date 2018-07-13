<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResourcesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql')->create('resources', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
            $table->string('name','255');
            $table->string('menu')->index()->nullable();
            $table->boolean('is_menu')->index();
            $table->string('route_name')->nullable();
            $table->string('icon')->nullable();
            $table->string('controller_method');
            $table->boolean('can_be_default')->default(0);
            $table->bigInteger('parent_id')->index()->default(0);
            $table->integer('order');
            $table->timestamps();
            $table->unique(['name','menu','route_name']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql')->dropIfExists('resources');
    }
}
