<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNegotiatePacient extends Migration{

    protected $connection = 'negotiate_admin';

    public function up() {
        Schema::connection($this->connection)
            ->table('negotiate_pacient', function (Blueprint $collection){
                $collection->background(["id"]);
                $collection->background(["active"]);
                $collection->background(["name"]);
                $collection->background(["cid"]);
                $collection->background(["user_id"]);
                $collection->background(["cpf"]);
                $collection->background(["cnpj"]);
                $collection->background(["mother_name"]);
                $collection->background(["father_name"]);
                $collection->background(["phone"]);
                $collection->background(["cellphone"]);
                $collection->background(["health_plan"]);//convenio
                $collection->background(["number_health_plan"]);//number_convenio
                $collection->background(["date_of_first_session"]);
                $collection->background(["screening"]);
                $collection->background(["professional"]);
                $collection->background(["specialty"]);
                $collection->background(["birth_date"]);
                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('negotiate_pacient');
    }
}
