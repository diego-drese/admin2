<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNegotiateWalletTransaction extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Schema::create('negotiate_wallet_transaction', function (Blueprint $table) {
            $table->increments('id');
            $table->double('value', 10, 2);
            $table->tinyInteger('type')->nullable();
            $table->tinyInteger('status')->nullable();
            $table->integer('reason_id')->unsigned();
            $table->foreign('reason_id')->references('id')->on('negotiate_wallet_reason')->onDelete('restrict');
            $table->integer('negotiate_client_id')->unsigned();
            $table->foreign('negotiate_client_id')->references('id')->on('negotiate_client')->onDelete('restrict');
            $table->string('token','191');
            $table->timestamp('validate_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::connection('mysql')->dropIfExists('negotiate_wallet_transaction');
    }
}
