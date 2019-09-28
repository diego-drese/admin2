<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOka6WalletTransaction extends Migration {

    protected $connection = 'oka6_admin';

    public function up() {
        Schema::connection($this->connection)
            ->table('oka6_wallet_transaction', function (Blueprint $collection){
                $collection->background(["id"]);
                $collection->background(["type"]);//Credit, debit, reversal
                $collection->background(["client_id"]);
                $collection->background(["user_id"]);
                $collection->background(["plan_id"]);
                $collection->background(["token"]);
                $collection->background(["validate_at"]);
                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('oka6_wallet_transaction');
    }
}
