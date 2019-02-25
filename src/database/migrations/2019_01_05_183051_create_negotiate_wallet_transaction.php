<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNegotiateWalletTransaction extends Migration {

    protected $connection = 'negotiate_admin';

    public function up() {
        Schema::connection($this->connection)
            ->table('negotiate_wallet_transaction', function (Blueprint $collection){
                $collection->background(["id"]);
                $collection->background(["type"]);
                $collection->background(["negotiate_client_id"]);
                $collection->background(["token"]);
                $collection->background(["validate_at"]);
                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('negotiate_wallet_transaction');
    }
}
