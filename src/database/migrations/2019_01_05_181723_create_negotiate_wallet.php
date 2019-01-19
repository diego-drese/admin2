<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNegotiateWallet extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('negotiate_wallet', function (Blueprint $table) {
            $table->increments('id');
            $table->double('value', 10, 2);
            $table->integer('negotiate_client_id')->unsigned();
            $table->foreign('negotiate_client_id')->references('id')->on('negotiate_client')->onDelete('restrict');
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
        Schema::connection('mysql')->dropIfExists('negotiate_wallet');
    }
}
