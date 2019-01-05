<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateOwnersTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::connection('mysql')->table('owners', function (Blueprint $table) {
            $table->text('origin_id')->change();
			$table->text('origin_name')->change();
			$table->tinyInteger('origin_excluding_ids')->default(0);
			$table->text('remain_list_id')->nullable();
			$table->text('remain_list_name')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::connection('mysql')->dropIfExists('owners');
    }
}