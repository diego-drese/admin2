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
        Schema::connection('mysql')->table('users', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned()->change();
            $table->string('name','191')->change();
            $table->string('lastname','191')->nullable();
            $table->string('cell_phone','191')->nullable();
            $table->boolean('active')->default(1);
            $table->bigInteger('profile_id')->unsigned()->nullable();
            $table->foreign('profile_id')->references('id')->on('profiles')->onDelete('restrict');
            $table->bigInteger('resource_default_id')->nullable();
            $table->enum('type',['user', 'root', 'client'])->default('user');
            $table->bigInteger('parent_id')->default(0);
            $table->string('password','191')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql')->dropIfExists('users');
    }
}
