<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNegotiateWalletReason extends Migration {

    protected $connection = 'negotiate_admin';

    public function up()    {
        Schema::connection($this->connection)
            ->table('negotiate_wallet_reason', function (Blueprint $collection){
                $collection->background(["id"]);
                $collection->background(["name"]);
                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('negotiate_wallet_reason');
    }
}
