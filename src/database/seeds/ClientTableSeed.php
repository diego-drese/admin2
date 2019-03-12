<?php


namespace Negotiate\Admin;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ClientTableSeed extends Seeder{

    public function run() {
        //$faker = Factory::create();

        NegotiateClient::insert([
            'id'   => Sequence::getSequence(NegotiateClient::TABLE),
            'name' => '',
            'type' => '',
            'id_user_system' => '',
            'cpf' => '',
            'cnpj' => '',
            'fantasy_name' => '',
            'state_register' => '',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
