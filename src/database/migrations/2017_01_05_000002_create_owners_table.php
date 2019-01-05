<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOwnersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql')->create('owners', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
            $table->string('name','191');
            $table->string('type','191')->nullable();
            $table->string('origin_id','191')->nullable();
            $table->text('desc')->nullable();
            $table->index('type');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql')->dropIfExists('owners');
    }
}
