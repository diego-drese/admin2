<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();;
            $table->string('name','255');
            $table->string('lastname','255')->nullable();
            $table->string('cell_phone','255')->nullable();
            $table->boolean('active')->default(1);
            $table->bigInteger('profile_id')->unsigned()->nullable();


            $table->foreign('profile_id')->references('id')->on('profiles')->onDelete('restrict');
            $table->bigInteger('resource_default_id')->nullable();
            $table->string('email')->unique();
            $table->enum('type',['user','root'])->default('user');
            $table->string('password','255');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
