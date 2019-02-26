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
                $collection->background(["mother_name"]);
                $collection->background(["father_name"]);
                $collection->background(["phone"]);
                $collection->background(["cellphone"]);
                $collection->background(["health_plan"]);//convenio
                $collection->background(["number_health_plan"]);//number_convenio
                $collection->background(["state_register"]);
                $collection->background(["birth_date"]);
                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('negotiate_client');
    }
}
