<?php


namespace Negotiate\Admin;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PacientTableSeed extends Seeder{

    public function run() {
        //$faker = Factory::create();
        NegotiatePacient::insert([
            'id'   => Sequence::getSequence(NegotiatePacient::TABLE),
            'active'=> '',
            'name'=> '',
            'birth_date'=> '',
            'father_name'=> '',
            'mother_name'=> '',
            'cid'=> '',
            'cpf'=> '',
            'phone'=> '',
            'cellphone'=> '',
            'health_plan'=> '',
            'number_health_plan'=> '',
            'date_of_first_session'=> '',
            'screening'=> '',//triagem
            'professional'=> '',
            'specialty'=> '',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
