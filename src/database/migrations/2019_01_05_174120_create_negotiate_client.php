<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNegotiateClient extends Migration{

    protected $connection = 'negotiate_admin';

    public function up() {
        Schema::connection($this->connection)
            ->table('negotiate_client', function (Blueprint $collection){
                $collection->background(["id"]);
                $collection->background(["name"]);
                $collection->background(["type"]);
                $collection->background(["id_user_system"]);
                $collection->background(["cpf"]);
                $collection->background(["cnpj"]);
                $collection->background(["fantasy_name"]);
                $collection->background(["state_register"]);
                $collection->background(["state_register"]);
                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('negotiate_client');
    }
}
