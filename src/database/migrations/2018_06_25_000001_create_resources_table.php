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
        Schema::create('resources', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
            $table->string('name','255');

            $table->string('menu')->index()->nullable();
            $table->boolean('is_menu')->index();
            $table->text('route_name')->nullable();
            $table->string('icon');
            $table->string('controller_method');
            $table->boolean('can_be_default')->default(0);
            $table->bigInteger('parent_id')->index();
            $table->integer('order');
            $table->timestamps();
            $table->unique(['controller_method','menu']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resources');
    }
}