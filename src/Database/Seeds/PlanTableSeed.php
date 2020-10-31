<?php


namespace Oka6\Admin;

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class PlanTableSeed extends Seeder {
	public function run() {
		Oka6Plans::where('id', '<', 0)->delete();
		Oka6Plans::insert(
			[
				'id' => -1,
				"name" => "Plano start",
				"value" => 0.0,
				"recurrence_days" => 180,
				"plan_duration" => 180,
				"active" => 1,
				"total_retry" => 10,
				"retry_after_day" => 1,
				"type" => "manual",
				"description" => "Cadastrado via seeder",
				
				"total_scheduling" => 1000,
				"total_sms_api" => 0,
				"total_sms_client" => 0,
				"total_email" => 0,
				"total_cpf_serasa" => 0,
				
				'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
				'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
			]
		);
		
		
	}
}
