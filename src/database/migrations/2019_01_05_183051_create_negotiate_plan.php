<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOka6PLan extends Migration {

    protected $connection = 'oka6_admin';

    public function up() {
        Schema::connection($this->connection)
            ->table('oka6_plan', function (Blueprint $collection){
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
        Schema::connection($this->connection)->dropIfExists('oka6_plan');
    }
}
