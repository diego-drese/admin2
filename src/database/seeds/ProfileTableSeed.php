<?php


namespace Negotiate\Admin;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class ProfileTableSeed extends Seeder
{

    public function run()
    {
        Profile::insert(
            [
                'id'   => Sequence::getSequence(Profile::TABLE),
                'type_user' => "root",
                'name' => "Root",
                'desc' => "Perfil admin master",
                'resources_allow' => [],
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]
        );

        Profile::insert(
            [
                'id'   => Sequence::getSequence(Profile::TABLE),
                'type_user' => "clinic_admin",
                'name' => "Administrador da Clinia",
                'desc' => "Usuário do sistema",
                'resources_allow' => [],
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]
        );

         Profile::insert(
            [
                'id'   => Sequence::getSequence(Profile::TABLE),
                'type_user' => "clinic_receptionist",
                'name' => "Recepcionista",
                'desc' => "Recepcionista do sistema",
                'resources_allow' => [],
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]
        );

         Profile::insert(
            [
                'id'   => Sequence::getSequence(Profile::TABLE),
                'type_user' => "clinic_doctor",
                'name' => "Médico",
                'desc' => "Médico do sistema",
                'resources_allow' => [],
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]
        );

    }
}
