<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNegotiateUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('negotiate_user', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',191);
            $table->enum('type', ['CPF', 'CNPJ']);
            $table->bigInteger('id_user_system')->unsigned();
            $table->foreign('id_user_system')->references('id')->on('users')->onDelete('restrict');
            $table->string('cpf', 191)->unique()->nullable();
            $table->string('cnpj', 191)->unique()->nullable();
            $table->string('social_reason',191)->nullable();
            $table->string('fantasy_name',191)->nullable();
            $table->string('state_register',191)->nullable();
            $table->string('birth_date',191)->timestamp();
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
        //
    }
}
