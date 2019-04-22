<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNegotiatePLan extends Migration {

    protected $connection = 'negotiate_admin';

    public function up() {
        Schema::connection($this->connection)
            ->table('negotiate_plan', function (Blueprint $collection){
                $collection->background(["id"]);
                $collection->background(["recurrence_days"]);
                $collection->background(["value"]);
                $collection->background(["active"]);
                $collection->background(["type"]);
                $collection->background(["total_retry"]);
                $collection->background(["retry_after_day"]);
                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('negotiate_plan');
    }
}
