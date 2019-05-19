<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNegotiateNotification extends Migration {

    protected $connection = 'negotiate_notification';

    public function up() {
        Schema::connection($this->connection)
            ->table('negotiate_notification', function (Blueprint $collection){

                $collection->background(["client_id"]);
                $collection->background(["type"]);
                $collection->background(["send_to"]);
                $collection->background(["id_to"]);
                $collection->background(["status"]);
                $collection->background(["active"]);

                $collection->background(["delivery_at"]);
                $collection->background(["sent_at"]);
                $collection->background(["read_at"]);

                $collection->background(["created_at"]);
                $collection->background(["updated_at"]);
            });
    }

    public function down() {
        Schema::connection($this->connection)->dropIfExists('negotiate_plan');
    }
}
