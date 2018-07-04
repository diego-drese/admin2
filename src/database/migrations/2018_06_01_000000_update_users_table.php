<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned()->change();
            $table->string('name','255')->change();
            $table->string('lastname','255')->nullable();
            $table->string('cell_phone','255')->nullable();
            $table->boolean('active')->default(1);
            $table->bigInteger('profile_id')->unsigned()->nullable();
            $table->foreign('profile_id')->references('id')->on('profiles')->onDelete('restrict');
            $table->bigInteger('resource_default_id')->nullable();
            $table->enum('type',['user','root'])->default('user');
            $table->string('password','255')->change();
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
