<?php


namespace Oka6\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TutorialTableSeed extends Seeder
{

    public function run(){
        $this->startTutorialData();
    }

    private function startTutorialData() {
        TutorialHelp::where('id', '>' ,0)->delete();
        TutorialHelp::insert([
            [
                'id' => 1,
                'title' => 'Primeiros Passos',
                'description' => '<h1>Bem vindo(a) ao HubCLinic! para começar:</h1>
                <p>01. Cadastre <a href="/clinic/professional/create">Profissionais</a>.</p>
                <p>02. Cadastre os <a href="/clinic/services/create">serviços</a> oferecidos por sua clinica.</p>
                <p>03. Cadastre ou <a href="/clinic/patients/import-view">importe</a>seus <a href="/clinic/patients/create">Pacientes</a>.</p>
                <p>04. Agora você pode acessar a <a href="/clinic/agenda">agenda</a>, selecionar o profissional e começar criar e gerenciar agendamentos.</p>
                ',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'id' => 2,
                'title' => 'Seu primeiro agendamento',
                'description' => '<a href="#" class="show-img" data-link="https://media.giphy.com/media/cLBjE22pADxyqQwo7k/giphy.gif">
                <span class="tx">Mostrar imagem</span>
                <img src="" class="img-fluid">
                </a>
                <br><br>
                <p>01. Acesse sua <a href="/clinic/agenda">agenda</a>.</p>
                <p>02. Confirme o horário para criar o agendamento.</p>
                <p>03. Procure o cliente</p>
                <p>04. Defina o serviço</p>
                <p>05. Cadastre o status de pagamento e clique em salvar</p>
                <p>06. Agendamento criado com sucesso!</p>',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'id' => 3,
                'title' => 'Integrar Hclinic ao Google Agenda',
                'description' => '<p>01. Acesse a tela de edição do <a href="/clinic/professional">Profissional</a>.</p>
                <img src="https://i.imgur.com/07srPb3.jpg" class="img-fluid">
                <p>02. Defina um nome e uma cor para a agenda (irá aparecer no Google) clique em salvar.</p>
                <p>03. Você será redirecionado para o google, faça seu login e conceda as permissões necessárias para integração.</p>
                <img src="https://i.imgur.com/9EShf9B.jpg" class="img-fluid">
                <p>04. Você será redirecionado novamente, os agendamentos do profissional vão estar disponíves no Google agenda e o melhor, a integração está completa ou seja, os próximos agendamentos também serão cadastrados.</p>
                 ',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]
        ]);


    }

}