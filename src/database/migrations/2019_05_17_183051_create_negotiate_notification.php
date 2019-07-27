<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNegotiateNotification extends Migration {

    protected $connection = 'negotiate_notification';

    public function up() {
        Schema::connection($this->connection)
            ->table('negotiate_notification', function (Blueprint $collection){

                $collection->background(["alias"]);
                $collection->background(["status"]);
                $collection->background(["date_schedule_at"]);
                $collection->background(["date_sent_at"]);
                $collection->background(["created_at"]);
                $collection->background(["origin"]);
                $collection->background(["user_id"]);
                $collection->background(["client_id"]);
                $collection->background(["from"]);
                $collection->background(["to"]);
                $collection->background(["status_read"]);
                $collection->background(["filed"]);
                $collection->background(["type"]);
                $collection->background(["priority"]);

            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('negotiate_plan');
    }
}
