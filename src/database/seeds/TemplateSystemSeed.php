<?php


namespace Oka6\Admin;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TemplateSystemSeed extends Seeder
{

    public function run() {
        $this->startDataTemplates();
    }

    private function startDataTemplates() {
        TemplateSystem::where('id', '>' ,0)->delete();
        $id = Sequence::getSequence(TemplateSystem::TABLE);
        TemplateSystem::insert([
            [
                'id' => 1,
                'title' => 'Hclinic - Gerencie sua clinica com eficiencia',
                'html' => '<nav class="menu navbar navbar-expand-lg navbar-light">
    <div class="container">
        <div class="menu-logo">
            <h1 class="logo "><a class="scroll" href="#home">HClinic</a> </h1>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link scroll active" href="#home">Início </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link scroll" href="#recursos">Recursos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link scroll" href="#imagens">Imagens</a>
                </li>
            </ul>
           <div class=" mt-2 mt-md-0 buttons">
                   <a class="login" href="/login"><i class="fas fa-user-circle"></i>Entrar</a>
                <a class="login scroll" href="#formcontact"><i class="fa fa-arrow-right"></i>Começar</a>

            </div>

        </div>
    </div>
</nav>


<section class="home">


    <div class="bg-home" id="home">
        <div class="container">
            <div class="call-to-action">
                <div>
                    <h1 class="head-title">Apenas um texto headline para teste e tals</h1>
                    <p class="head-paragraph">Tenha mais praticidade no seu dia a dia com o software para
                        clínicas mais fácil de usar. Dê o primeiro passo agora</p>
                    <div class="buttons">
                        <button class="register">Comece Agora <i class="icon fas fa-arrow-right"></i></button>

                        <button class="video">Assista o vídeo</button>
                    </div>
                    <div class=\'mouse-container\'>
                        <div class=\'mouse\'>
                            <span class=\'scroll-down\'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<div class="svgs">

</div>

<section class="cards">
    <div class="text-center">
        <h1 class="headline" id="recursos">Alguns Recursos...</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-12">
                <div class="card js-way-1">
                    <img src="vendor/oka6/templates/clinic/calendar.svg" class="img" alt="Agendamentos com Hclinic">
                    <div class="desc">
                        <h2 class="title">Agendamentos Online</h2>
                        <p>Agende e Gerencie as marcações de horários dos seus clientes, em qualquer lugar ou hora.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <img src="vendor/oka6/templates/clinic/schedule.svg" class="img" alt="Agendamentos com Hclinic">
                    <div class="desc">
                        <h2 class="title">Integrado ao Google Agenda</h2>
                        <p>Faça um agendamento no Hclinic e acompanhe-o pelo Google Calendar</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <img src="vendor/oka6/templates/clinic/finance.svg" class="img" alt="Agendamentos com Hclinic">
                    <div class="desc">
                        <h2 class="title">Gerencie sua clinica</h2>
                        <p>Acompanhe o rendimento dos seus atendimentos através de graficos</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="outlines">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-3 ">
                <div class="simple-card-icon">
                    <img src="vendor/oka6/templates/clinic/outline-icons/patient.svg" class="svg"/>
                    <p>Cadastro ilimitado de pacientes</p>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-3">
                <div class="simple-card-icon">
                    <img src="vendor/oka6/templates/clinic/outline-icons/doctor.svg" class="svg"/>
                    <p>Cadastro ilimitado de médicos</p>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-3">
                <div class="simple-card-icon">
                    <img src="vendor/oka6/templates/clinic/outline-icons/calendar.svg" class="svg"/>
                    <p>Agendamentos online integrado a agenda pessoal do profissional</p>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-3">
                <div class="simple-card-icon">
                    <img src="vendor/oka6/templates/clinic/outline-icons/result.svg" class="svg">/
                    <p>Relatórios de atendimentos e agendamentos</p>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-3">
                <div class="simple-card-icon">
                    <img src="vendor/oka6/templates/clinic/outline-icons/network.svg" class="svg"/>
                    <p>Controle de Acessos e permissões para usuários</p>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-3">
                <div class="simple-card-icon">
                    <img src="vendor/oka6/templates/clinic/outline-icons/team.svg" class="svg">
                    <p>Cadastre e gerencie os membros da sua Clinica.</p>
                </div>
            </div>

            <div class="col-sm-12 col-md-4 col-lg-3">
                <div class="simple-card-icon">
                    <img src="vendor/oka6/templates/clinic/outline-icons/analysis.svg" class="svg">
                    <p>Acompanhe os rendimentos da sua clinica</p>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-3">
                <div class="simple-card-icon">
                    <img src="vendor/oka6/templates/clinic/outline-icons/shield.svg" class="svg">
                    <p>100% Online e Seguro</p>
                </div>
            </div>
        </div>
    </div>
</section>


<div class="container">
    <div class="row feature">
        <div class="col-sm-12 col-md-7">
            <img src="vendor/oka6/templates/clinic/agendas-multiplas.png" alt="Multiplas agendas para profissionais" class="img-fluid">
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="featured-headline">
                <h1 class="headline">Múltiplas Agendas</h1>
                <p>Organize seu dia a dia facilmente, tenha múltiplas e ilimitadas agendas para todos os profissionais
                    cadastrados.</p>
            </div>
        </div>
    </div>
    <div class="row feature">
        <div class="col-sm-12 col-md-5">
            <div class="featured-headline">
                <h1 class="headline">Controle total</h1>
                <p>Cadastro completo do profissional permitindo maior controle e precisão dos agendamentos.</p>
            </div>
        </div>
        <div class="col-sm-12 col-md-7">
            <img src="vendor/oka6/templates/clinic/controle-total-agenda.png" alt="Controle total das agendas dos profissionais"
                 class="img-fluid">
        </div>
    </div>
    <div class="row feature">
        <div class="col-sm-12 col-md-7">
            <img src="vendor/oka6/templates/clinic/relatorios-agendamentos.png" alt="Relatórios de agendamentos" class="img-fluid">
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="featured-headline">
                <h1 class="headline">Estatísticas dos Agendamentos</h1>
                <p>Tenha uma visão geral completa da sua clinica. Através dos nossos relatórios você irá descobrir os
                    serviços mais lucrativos, planos mais utilizados e etc...</p>
            </div>
        </div>
    </div>
</div>

<div class="container contact-form" id="formcontact">
    <div class="contact-image">
        <img src="https://image.flaticon.com/icons/svg/488/488372.svg" alt="rocket_contact"/>
    </div>
    <form method="post">
        <h3 class="headline">Entre em contato conosco</h3>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" name="txtName" class="form-control" placeholder="Seu Nome *"/>
                </div>
                <div class="form-group">
                    <input type="email" name="txtEmail" class="form-control" placeholder="Seu Email *" />
                </div>
                <div class="form-group">
                    <input type="number" min="8" max="12" name="txtPhone" class="form-control" placeholder="Telefone para contato*" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <textarea name="txtMsg" class="form-control" placeholder="Como podemos ajudar você *" style="width: 100%; height: 148px;"></textarea>
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                       <button type="button" class="btnContact">
                        <div class="lds-ellipsis d-none"><div></div><div></div><div></div><div></div></div>
                        <span class="txt">Enviar Mensagem</span>
                       </button>
                </div>
            </div>
        </div>
    </form>
</div>

<section class="gallery" id="imagens">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" class="bg-svg">
        <path class="er-var" oparesumo-ss="0.33"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
        <path class="er-var" oparesumo-ss="0.66"
              d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
        <path class="er-var"
              d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
    </svg>
    <div class="container-fluid margin-top-medium">
        <div class="text-center">
            <h1 class="headline">Veja mais...</h1>
        </div>
        <div class="row">

            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active tabstyle" id="agenda-ss-tab" data-toggle="pill" href="#agenda-ss"
                       role="tab" aria-controls="agenda-ss" aria-selected="true">Agenda</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link tabstyle" id="cadastros-ss-tab" data-toggle="pill" href="#cadastros-ss"
                       role="tab" aria-controls="cadastros-ss" aria-selected="false">Cadastros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link tabstyle" id="resumo-ss-tab" data-toggle="pill" href="#resumo-ss" role="tab"
                       aria-controls="resumo-ss" aria-selected="false">Resumo Diário</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link tabstyle" id="dashboard-ss-tab" data-toggle="pill" href="#dashboard-ss"
                       role="tab" aria-controls="dashboard-ss" aria-selected="false">Dashboard</a>
                </li>
            </ul>
        </div>

        <div class="container">
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="agenda-ss" role="tabpanel" aria-labelledby="agenda-ss-tab">
                    <div class="nav-tab-gal"><a href="#">
                        <img class="card-img" src="vendor/oka6/templates/clinic/gallery/agenda.png"
                             alt=""></a>
                    </div>
                </div>
                <div class="tab-pane fade" id="cadastros-ss" role="tabpanel" aria-labelledby="cadastros-ss-tab">
                    <div class="nav-tab-gal"><a href="#">
                        <img class="card-img"
                             src="https://via.placeholder.com/640x480/f2f2f2/808080?text=Imagem Cadastros" alt=""></a>
                    </div>
                </div>
                <div class="tab-pane fade" id="resumo-ss" role="tabpanel" aria-labelledby="resumo-ss-tab">
                    <div class="nav-tab-gal"><a href="#">
                        <img class="card-img"
                             src="https://via.placeholder.com/640x480/f2f2f2/808080?text= Resumo Agendamentos"
                             alt=""></a>
                    </div>
                </div>
                <div class="tab-pane fade" id="dashboard-ss" role="tabpanel" aria-labelledby="dashboard-ss-tab">
                    <div class="nav-tab-gal"><a href="#!">
                        <img class="card-img"
                             src="https://via.placeholder.com/640x480/f2f2f2/808080?text=Imagem Dashboard" alt=""></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>


<div class="container">
    <section class="call">
        <div>
            <h1>Economize tempo, dinheiro e pessoal, comece agora e seja mais eficente.</h1>
        </div>
         <div>
          <a class="register scroll" href="#formcontact">Iniciar <i class="icon fas fa-arrow-right"></i></a>
        </div>
    </section>
</div>


<div class="container">
    <section class="footer-links">
        <div class="logo">
            <h1 class="logo">HubClinic</h1>
            <div class="links">
                <a href="" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
        <div class="cls">
            <h3 class="title">Plataform</h3>
            <ul>
                <li>Faça um tour</li>
                <li>Preços</li>
                <li>Login</li>
            </ul>
        </div>
        <div class="cls">
            <h3 class="title">Serviço</h3>
            <ul>
                <li>Recursos</li>
                <li>Termos de uso</li>
                <li>Politica de privacidade</li>
            </ul>
        </div>
        <div class="cls">
            <h3 class="title">Links rápidos</h3>
            <ul>
                <li>Comece Agora</li>
                <li>Ajuda</li>
                <li>Diferenciais</li>
            </ul>
        </div>
    </section>
</div>


<footer>
    <p>Copyright © Oka6 | Todos os direitos reservados.</p>
</footer>

<!--<div class="margin-bottom-big" ></div>-->
<script src="https://use.edgefonts.net/passion-one.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/js/all.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="js/bundle.js"></script>

</body>
</html>
                ',
                'style' => '

                /*!
 * Bootstrap v4.1.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */@import url("https://fonts.googleapis.com/css?family=Noto+Sans+HK:900|Lato|Open+Sans:400,600&display=swap");:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}@-ms-viewport{width:device-width}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex="-1"]:focus{outline:0 !important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}dfn{font-style:italic}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg:not(:root){overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none !important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,0.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer::before{content:"\2014 \00A0"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-break:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container{max-width:540px}}@media (min-width: 768px){.container{max-width:720px}}@media (min-width: 992px){.container{max-width:960px}}@media (min-width: 1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first{-ms-flex-order:-1;order:-1}.order-last{-ms-flex-order:13;order:13}.order-0{-ms-flex-order:0;order:0}.order-1{-ms-flex-order:1;order:1}.order-2{-ms-flex-order:2;order:2}.order-3{-ms-flex-order:3;order:3}.order-4{-ms-flex-order:4;order:4}.order-5{-ms-flex-order:5;order:5}.order-6{-ms-flex-order:6;order:6}.order-7{-ms-flex-order:7;order:7}.order-8{-ms-flex-order:8;order:8}.order-9{-ms-flex-order:9;order:9}.order-10{-ms-flex-order:10;order:10}.order-11{-ms-flex-order:11;order:11}.order-12{-ms-flex-order:12;order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width: 576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-sm-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-sm-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first{-ms-flex-order:-1;order:-1}.order-sm-last{-ms-flex-order:13;order:13}.order-sm-0{-ms-flex-order:0;order:0}.order-sm-1{-ms-flex-order:1;order:1}.order-sm-2{-ms-flex-order:2;order:2}.order-sm-3{-ms-flex-order:3;order:3}.order-sm-4{-ms-flex-order:4;order:4}.order-sm-5{-ms-flex-order:5;order:5}.order-sm-6{-ms-flex-order:6;order:6}.order-sm-7{-ms-flex-order:7;order:7}.order-sm-8{-ms-flex-order:8;order:8}.order-sm-9{-ms-flex-order:9;order:9}.order-sm-10{-ms-flex-order:10;order:10}.order-sm-11{-ms-flex-order:11;order:11}.order-sm-12{-ms-flex-order:12;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width: 768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-md-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-md-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first{-ms-flex-order:-1;order:-1}.order-md-last{-ms-flex-order:13;order:13}.order-md-0{-ms-flex-order:0;order:0}.order-md-1{-ms-flex-order:1;order:1}.order-md-2{-ms-flex-order:2;order:2}.order-md-3{-ms-flex-order:3;order:3}.order-md-4{-ms-flex-order:4;order:4}.order-md-5{-ms-flex-order:5;order:5}.order-md-6{-ms-flex-order:6;order:6}.order-md-7{-ms-flex-order:7;order:7}.order-md-8{-ms-flex-order:8;order:8}.order-md-9{-ms-flex-order:9;order:9}.order-md-10{-ms-flex-order:10;order:10}.order-md-11{-ms-flex-order:11;order:11}.order-md-12{-ms-flex-order:12;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width: 992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-lg-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-lg-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first{-ms-flex-order:-1;order:-1}.order-lg-last{-ms-flex-order:13;order:13}.order-lg-0{-ms-flex-order:0;order:0}.order-lg-1{-ms-flex-order:1;order:1}.order-lg-2{-ms-flex-order:2;order:2}.order-lg-3{-ms-flex-order:3;order:3}.order-lg-4{-ms-flex-order:4;order:4}.order-lg-5{-ms-flex-order:5;order:5}.order-lg-6{-ms-flex-order:6;order:6}.order-lg-7{-ms-flex-order:7;order:7}.order-lg-8{-ms-flex-order:8;order:8}.order-lg-9{-ms-flex-order:9;order:9}.order-lg-10{-ms-flex-order:10;order:10}.order-lg-11{-ms-flex-order:11;order:11}.order-lg-12{-ms-flex-order:12;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width: 1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xl-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-xl-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first{-ms-flex-order:-1;order:-1}.order-xl-last{-ms-flex-order:13;order:13}.order-xl-0{-ms-flex-order:0;order:0}.order-xl-1{-ms-flex-order:1;order:1}.order-xl-2{-ms-flex-order:2;order:2}.order-xl-3{-ms-flex-order:3;order:3}.order-xl-4{-ms-flex-order:4;order:4}.order-xl-5{-ms-flex-order:5;order:5}.order-xl-6{-ms-flex-order:6;order:6}.order-xl-7{-ms-flex-order:7;order:7}.order-xl-8{-ms-flex-order:8;order:8}.order-xl-9{-ms-flex-order:9;order:9}.order-xl-10{-ms-flex-order:10;order:10}.order-xl-11{-ms-flex-order:11;order:11}.order-xl-12{-ms-flex-order:12;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;max-width:100%;margin-bottom:1rem;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table .table{background-color:#fff}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,0.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,0.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,0.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,0.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,0.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#32383e}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#32383e}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,0.05)}.table-dark.table-hover tbody tr:hover{background-color:rgba(255,255,255,0.075)}@media (max-width: 575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-sm>.table-bordered{border:0}}@media (max-width: 767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-md>.table-bordered{border:0}}@media (max-width: 991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-lg>.table-bordered{border:0}}@media (max-width: 1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 0.2rem rgba(0,123,255,0.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:not([size]):not([multiple]){height:calc(2.25rem + 2px)}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm,.input-group-lg>.form-control-plaintext.form-control,.input-group-lg>.input-group-append>.form-control-plaintext.btn,.input-group-lg>.input-group-append>.form-control-plaintext.input-group-text,.input-group-lg>.input-group-prepend>.form-control-plaintext.btn,.input-group-lg>.input-group-prepend>.form-control-plaintext.input-group-text,.input-group-sm>.form-control-plaintext.form-control,.input-group-sm>.input-group-append>.form-control-plaintext.btn,.input-group-sm>.input-group-append>.form-control-plaintext.input-group-text,.input-group-sm>.input-group-prepend>.form-control-plaintext.btn,.input-group-sm>.input-group-prepend>.form-control-plaintext.input-group-text{padding-right:0;padding-left:0}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-sm>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:calc(1.8125rem + 2px)}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-lg>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:calc(2.875rem + 2px)}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled ~ .form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(40,167,69,0.8);border-radius:.2rem}.custom-select.is-valid,.form-control.is-valid,.was-validated .custom-select:valid,.was-validated .form-control:valid{border-color:#28a745}.custom-select.is-valid:focus,.form-control.is-valid:focus,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 0.2rem rgba(40,167,69,0.25)}.custom-select.is-valid ~ .valid-feedback,.custom-select.is-valid ~ .valid-tooltip,.form-control.is-valid ~ .valid-feedback,.form-control.is-valid ~ .valid-tooltip,.was-validated .custom-select:valid ~ .valid-feedback,.was-validated .custom-select:valid ~ .valid-tooltip,.was-validated .form-control:valid ~ .valid-feedback,.was-validated .form-control:valid ~ .valid-tooltip{display:block}.form-control-file.is-valid ~ .valid-feedback,.form-control-file.is-valid ~ .valid-tooltip,.was-validated .form-control-file:valid ~ .valid-feedback,.was-validated .form-control-file:valid ~ .valid-tooltip{display:block}.form-check-input.is-valid ~ .form-check-label,.was-validated .form-check-input:valid ~ .form-check-label{color:#28a745}.form-check-input.is-valid ~ .valid-feedback,.form-check-input.is-valid ~ .valid-tooltip,.was-validated .form-check-input:valid ~ .valid-feedback,.was-validated .form-check-input:valid ~ .valid-tooltip{display:block}.custom-control-input.is-valid ~ .custom-control-label,.was-validated .custom-control-input:valid ~ .custom-control-label{color:#28a745}.custom-control-input.is-valid ~ .custom-control-label::before,.was-validated .custom-control-input:valid ~ .custom-control-label::before{background-color:#71dd8a}.custom-control-input.is-valid ~ .valid-feedback,.custom-control-input.is-valid ~ .valid-tooltip,.was-validated .custom-control-input:valid ~ .valid-feedback,.was-validated .custom-control-input:valid ~ .valid-tooltip{display:block}.custom-control-input.is-valid:checked ~ .custom-control-label::before,.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before{background-color:#34ce57}.custom-control-input.is-valid:focus ~ .custom-control-label::before,.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before{box-shadow:0 0 0 1px #fff,0 0 0 0.2rem rgba(40,167,69,0.25)}.custom-file-input.is-valid ~ .custom-file-label,.was-validated .custom-file-input:valid ~ .custom-file-label{border-color:#28a745}.custom-file-input.is-valid ~ .custom-file-label::before,.was-validated .custom-file-input:valid ~ .custom-file-label::before{border-color:inherit}.custom-file-input.is-valid ~ .valid-feedback,.custom-file-input.is-valid ~ .valid-tooltip,.was-validated .custom-file-input:valid ~ .valid-feedback,.was-validated .custom-file-input:valid ~ .valid-tooltip{display:block}.custom-file-input.is-valid:focus ~ .custom-file-label,.was-validated .custom-file-input:valid:focus ~ .custom-file-label{box-shadow:0 0 0 0.2rem rgba(40,167,69,0.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(220,53,69,0.8);border-radius:.2rem}.custom-select.is-invalid,.form-control.is-invalid,.was-validated .custom-select:invalid,.was-validated .form-control:invalid{border-color:#dc3545}.custom-select.is-invalid:focus,.form-control.is-invalid:focus,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 0.2rem rgba(220,53,69,0.25)}.custom-select.is-invalid ~ .invalid-feedback,.custom-select.is-invalid ~ .invalid-tooltip,.form-control.is-invalid ~ .invalid-feedback,.form-control.is-invalid ~ .invalid-tooltip,.was-validated .custom-select:invalid ~ .invalid-feedback,.was-validated .custom-select:invalid ~ .invalid-tooltip,.was-validated .form-control:invalid ~ .invalid-feedback,.was-validated .form-control:invalid ~ .invalid-tooltip{display:block}.form-control-file.is-invalid ~ .invalid-feedback,.form-control-file.is-invalid ~ .invalid-tooltip,.was-validated .form-control-file:invalid ~ .invalid-feedback,.was-validated .form-control-file:invalid ~ .invalid-tooltip{display:block}.form-check-input.is-invalid ~ .form-check-label,.was-validated .form-check-input:invalid ~ .form-check-label{color:#dc3545}.form-check-input.is-invalid ~ .invalid-feedback,.form-check-input.is-invalid ~ .invalid-tooltip,.was-validated .form-check-input:invalid ~ .invalid-feedback,.was-validated .form-check-input:invalid ~ .invalid-tooltip{display:block}.custom-control-input.is-invalid ~ .custom-control-label,.was-validated .custom-control-input:invalid ~ .custom-control-label{color:#dc3545}.custom-control-input.is-invalid ~ .custom-control-label::before,.was-validated .custom-control-input:invalid ~ .custom-control-label::before{background-color:#efa2a9}.custom-control-input.is-invalid ~ .invalid-feedback,.custom-control-input.is-invalid ~ .invalid-tooltip,.was-validated .custom-control-input:invalid ~ .invalid-feedback,.was-validated .custom-control-input:invalid ~ .invalid-tooltip{display:block}.custom-control-input.is-invalid:checked ~ .custom-control-label::before,.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before{background-color:#e4606d}.custom-control-input.is-invalid:focus ~ .custom-control-label::before,.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before{box-shadow:0 0 0 1px #fff,0 0 0 0.2rem rgba(220,53,69,0.25)}.custom-file-input.is-invalid ~ .custom-file-label,.was-validated .custom-file-input:invalid ~ .custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid ~ .custom-file-label::before,.was-validated .custom-file-input:invalid ~ .custom-file-label::before{border-color:inherit}.custom-file-input.is-invalid ~ .invalid-feedback,.custom-file-input.is-invalid ~ .invalid-tooltip,.was-validated .custom-file-input:invalid ~ .invalid-feedback,.was-validated .custom-file-input:invalid ~ .invalid-tooltip{display:block}.custom-file-input.is-invalid:focus ~ .custom-file-label,.was-validated .custom-file-input:invalid:focus ~ .custom-file-label{box-shadow:0 0 0 0.2rem rgba(220,53,69,0.25)}.form-inline{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width: 576px){.form-inline label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (prefers-reduced-motion: reduce){.btn{transition:none}}.btn:focus,.btn:hover{text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 0.2rem rgba(0,123,255,0.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}.btn:not(:disabled):not(.disabled).active,.btn:not(:disabled):not(.disabled):active{background-image:none}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 0.2rem rgba(0,123,255,0.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(0,123,255,0.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 0.2rem rgba(108,117,125,0.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(108,117,125,0.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 0.2rem rgba(40,167,69,0.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(40,167,69,0.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 0.2rem rgba(23,162,184,0.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(23,162,184,0.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 0.2rem rgba(255,193,7,0.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(255,193,7,0.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 0.2rem rgba(220,53,69,0.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(220,53,69,0.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 0.2rem rgba(248,249,250,0.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(248,249,250,0.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5)}.btn-outline-primary{color:#007bff;background-color:transparent;background-image:none;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 0.2rem rgba(0,123,255,0.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(0,123,255,0.5)}.btn-outline-secondary{color:#6c757d;background-color:transparent;background-image:none;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 0.2rem rgba(108,117,125,0.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(108,117,125,0.5)}.btn-outline-success{color:#28a745;background-color:transparent;background-image:none;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 0.2rem rgba(40,167,69,0.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(40,167,69,0.5)}.btn-outline-info{color:#17a2b8;background-color:transparent;background-image:none;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 0.2rem rgba(23,162,184,0.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(23,162,184,0.5)}.btn-outline-warning{color:#ffc107;background-color:transparent;background-image:none;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 0.2rem rgba(255,193,7,0.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(255,193,7,0.5)}.btn-outline-danger{color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 0.2rem rgba(220,53,69,0.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(220,53,69,0.5)}.btn-outline-light{color:#f8f9fa;background-color:transparent;background-image:none;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 0.2rem rgba(248,249,250,0.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(248,249,250,0.5)}.btn-outline-dark{color:#343a40;background-color:transparent;background-image:none;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5)}.btn-link{font-weight:400;color:#007bff;background-color:transparent}.btn-link:hover{color:#0056b3;text-decoration:underline;background-color:transparent;border-color:transparent}.btn-link.focus,.btn-link:focus{text-decoration:underline;border-color:transparent;box-shadow:none}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media screen and (prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media screen and (prefers-reduced-motion: reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.15);border-radius:.25rem}.dropdown-menu-right{right:0;left:auto}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:"";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:""}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;width:0;height:0;margin-right:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-ms-flex:0 1 auto;flex:0 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:1}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:1}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group,.btn-group-vertical .btn+.btn,.btn-group-vertical .btn+.btn-group,.btn-group-vertical .btn-group+.btn,.btn-group-vertical .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}.btn-group-vertical .btn,.btn-group-vertical .btn-group{width:100%}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.input-group{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:stretch;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file:focus,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control{margin-left:-1px}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append,.input-group-prepend{display:-ms-flexbox;display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:-ms-inline-flexbox;display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked ~ .custom-control-label::before{color:#fff;background-color:#007bff}.custom-control-input:focus ~ .custom-control-label::before{box-shadow:0 0 0 1px #fff,0 0 0 0.2rem rgba(0,123,255,0.25)}.custom-control-input:active ~ .custom-control-label::before{color:#fff;background-color:#b3d7ff}.custom-control-input:disabled ~ .custom-control-label{color:#6c757d}.custom-control-input:disabled ~ .custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0}.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:"";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#dee2e6}.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:"";background-repeat:no-repeat;background-position:center center;background-size:50% 50%}.custom-checkbox .custom-control-label::before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before{background-color:#007bff}.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3E%3Cpath fill=\'%23fff\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3E%3C/svg%3E")}.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before{background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\'%3E%3Cpath stroke=\'%23fff\' d=\'M0 2h4\'/%3E%3C/svg%3E")}.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked ~ .custom-control-label::before{background-color:#007bff}.custom-radio .custom-control-input:checked ~ .custom-control-label::after{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3E%3Ccircle r=\'3\' fill=\'%23fff\'/%3E%3C/svg%3E")}.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.custom-select{display:inline-block;width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E") no-repeat right 0.75rem center;background-size:8px 10px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:inset 0 1px 2px rgba(0,0,0,0.075),0 0 5px rgba(128,189,255,0.5)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size="1"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{height:calc(1.8125rem + 2px);padding-top:.375rem;padding-bottom:.375rem;font-size:75%}.custom-select-lg{height:calc(2.875rem + 2px);padding-top:.375rem;padding-bottom:.375rem;font-size:125%}.custom-file{position:relative;display:inline-block;width:100%;height:calc(2.25rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(2.25rem + 2px);margin:0;opacity:0}.custom-file-input:focus ~ .custom-file-label{border-color:#80bdff;box-shadow:0 0 0 0.2rem rgba(0,123,255,0.25)}.custom-file-input:focus ~ .custom-file-label::after{border-color:#80bdff}.custom-file-input:lang(en) ~ .custom-file-label::after{content:"Browse"}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(2.25rem + 2px);padding:.375rem .75rem;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:2.25rem;padding:.375rem .75rem;line-height:1.5;color:#495057;content:"Browse";background-color:#e9ecef;border-left:1px solid #ced4da;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;padding-left:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-appearance:none;appearance:none}.custom-range::-webkit-slider-thumb:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 0.2rem rgba(0,123,255,0.25)}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-moz-appearance:none;appearance:none}.custom-range::-moz-range-thumb:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 0.2rem rgba(0,123,255,0.25)}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;appearance:none}.custom-range::-ms-thumb:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 0.2rem rgba(0,123,255,0.25)}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.nav{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.nav-justified .nav-item{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem 1rem}.navbar>.container,.navbar>.container-fluid{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler:not(:disabled):not(.disabled){cursor:pointer}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:"";background:no-repeat center center;background-size:100% 100%}@media (max-width: 575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 576px){.navbar-expand-sm{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-sm .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width: 767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 768px){.navbar-expand-md{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-md .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width: 991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 992px){.navbar-expand-lg{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width: 1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 1200px){.navbar-expand-xl{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-xl .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,0.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,0.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,0.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,0.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,0.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,0.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,0.5);border-color:rgba(0,0,0,0.1)}.navbar-light .navbar-toggler-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'rgba(0, 0, 0, 0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3E%3C/svg%3E")}.navbar-light .navbar-text{color:rgba(0,0,0,0.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,0.9)}.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,0.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,0.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,0.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,0.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,0.5);border-color:rgba(255,255,255,0.1)}.navbar-dark .navbar-toggler-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'rgba(255, 255, 255, 0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3E%3C/svg%3E")}.navbar-dark .navbar-text{color:rgba(255,255,255,0.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,0.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,0.03);border-bottom:1px solid rgba(0,0,0,0.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,0.03);border-top:1px solid rgba(0,0,0,0.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.card-deck .card{margin-bottom:15px}@media (min-width: 576px){.card-deck{-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:-ms-flexbox;display:flex;-ms-flex:1 0 0%;flex:1 0 0%;-ms-flex-direction:column;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.card-group>.card{margin-bottom:15px}@media (min-width: 576px){.card-group{-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group>.card{-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:first-child .card-header,.card-group>.card:first-child .card-img-top{border-top-right-radius:0}.card-group>.card:first-child .card-footer,.card-group>.card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:last-child .card-header,.card-group>.card:last-child .card-img-top{border-top-left-radius:0}.card-group>.card:last-child .card-footer,.card-group>.card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group>.card:only-child{border-radius:.25rem}.card-group>.card:only-child .card-header,.card-group>.card:only-child .card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-group>.card:only-child .card-footer,.card-group>.card:only-child .card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-group>.card:not(:first-child):not(:last-child):not(:only-child){border-radius:0}.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width: 576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion .card:not(:first-of-type):not(:last-of-type){border-bottom:0;border-radius:0}.accordion .card:not(:first-of-type) .card-header:first-child{border-radius:0}.accordion .card:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion .card:last-of-type{border-top-left-radius:0;border-top-right-radius:0}.breadcrumb{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:"/"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:2;outline:0;box-shadow:0 0 0 0.2rem rgba(0,123,255,0.25)}.page-link:not(:disabled):not(.disabled){cursor:pointer}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}.badge-primary[href]:focus,.badge-primary[href]:hover{color:#fff;text-decoration:none;background-color:#0062cc}.badge-secondary{color:#fff;background-color:#6c757d}.badge-secondary[href]:focus,.badge-secondary[href]:hover{color:#fff;text-decoration:none;background-color:#545b62}.badge-success{color:#fff;background-color:#28a745}.badge-success[href]:focus,.badge-success[href]:hover{color:#fff;text-decoration:none;background-color:#1e7e34}.badge-info{color:#fff;background-color:#17a2b8}.badge-info[href]:focus,.badge-info[href]:hover{color:#fff;text-decoration:none;background-color:#117a8b}.badge-warning{color:#212529;background-color:#ffc107}.badge-warning[href]:focus,.badge-warning[href]:hover{color:#212529;text-decoration:none;background-color:#d39e00}.badge-danger{color:#fff;background-color:#dc3545}.badge-danger[href]:focus,.badge-danger[href]:hover{color:#fff;text-decoration:none;background-color:#bd2130}.badge-light{color:#212529;background-color:#f8f9fa}.badge-light[href]:focus,.badge-light[href]:hover{color:#212529;text-decoration:none;background-color:#dae0e5}.badge-dark{color:#fff;background-color:#343a40}.badge-dark[href]:focus,.badge-dark[href]:hover{color:#fff;text-decoration:none;background-color:#1d2124}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width: 576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:-ms-flexbox;display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media screen and (prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}.media{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.media-body{-ms-flex:1;flex:1}.list-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,0.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item:focus,.list-group-item:hover{z-index:1;text-decoration:none}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{border-bottom:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:focus,.close:hover{color:#000;text-decoration:none;opacity:.75}.close:not(:disabled):not(.disabled){cursor:pointer}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0, -25%);transform:translate(0, -25%)}@media screen and (prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.modal-dialog-centered{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:calc(100% - (.5rem * 2))}.modal-content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between;padding:1rem;border-bottom:1px solid #e9ecef;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}.modal-footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:1rem;border-top:1px solid #e9ecef}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width: 576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-centered{min-height:calc(100% - (1.75rem * 2))}.modal-sm{max-width:300px}}@media (min-width: 992px){.modal-lg{max-width:800px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:"";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;content:"";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top] .arrow,.bs-popover-top .arrow{bottom:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::after,.bs-popover-top .arrow::before{border-width:.5rem .5rem 0}.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::before{bottom:0;border-top-color:rgba(0,0,0,0.25)}.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-top .arrow::after{bottom:1px;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right] .arrow,.bs-popover-right .arrow{left:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::after,.bs-popover-right .arrow::before{border-width:.5rem .5rem .5rem 0}.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::before{left:0;border-right-color:rgba(0,0,0,0.25)}.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-right .arrow::after{left:1px;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom] .arrow,.bs-popover-bottom .arrow{top:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::after,.bs-popover-bottom .arrow::before{border-width:0 .5rem .5rem .5rem}.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::before{top:0;border-bottom-color:rgba(0,0,0,0.25)}.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-bottom .arrow::after{top:1px;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:"";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left] .arrow,.bs-popover-left .arrow{right:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::after,.bs-popover-left .arrow::before{border-width:.5rem 0 .5rem .5rem}.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::before{right:0;border-left-color:rgba(0,0,0,0.25)}.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-left .arrow::after{right:1px;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-item{position:relative;display:none;-ms-flex-align:center;align-items:center;width:100%;transition:-webkit-transform .6s ease;transition:transform .6s ease;transition:transform .6s ease,-webkit-transform .6s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}@media screen and (prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.carousel-item-next,.carousel-item-prev{position:absolute;top:0}.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translateX(0);transform:translateX(0)}@supports (-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d){.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}.active.carousel-item-right,.carousel-item-next{-webkit-transform:translateX(100%);transform:translateX(100%)}@supports (-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d){.active.carousel-item-right,.carousel-item-next{-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}}.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translateX(-100%);transform:translateX(-100%)}@supports (-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d){.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}.carousel-fade .carousel-item{opacity:0;transition-duration:.6s;transition-property:opacity}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{opacity:0}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-prev,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item.active{-webkit-transform:translateX(0);transform:translateX(0)}@supports (-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-prev,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item.active{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:transparent no-repeat center center;background-size:100% 100%}.carousel-control-prev-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' viewBox=\'0 0 8 8\'%3E%3Cpath d=\'M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z\'/%3E%3C/svg%3E")}.carousel-control-next-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' viewBox=\'0 0 8 8\'%3E%3Cpath d=\'M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z\'/%3E%3C/svg%3E")}.carousel-indicators{position:absolute;right:0;bottom:10px;left:0;z-index:15;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{position:relative;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:rgba(255,255,255,0.5)}.carousel-indicators li::before{position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:""}.carousel-indicators li::after{position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:""}.carousel-indicators .active{background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.bg-primary{background-color:#007bff !important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc !important}.bg-secondary{background-color:#6c757d !important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62 !important}.bg-success{background-color:#28a745 !important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34 !important}.bg-info{background-color:#17a2b8 !important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b !important}.bg-warning{background-color:#ffc107 !important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00 !important}.bg-danger{background-color:#dc3545 !important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130 !important}.bg-light{background-color:#f8f9fa !important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5 !important}.bg-dark{background-color:#343a40 !important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124 !important}.bg-white{background-color:#fff !important}.bg-transparent{background-color:transparent !important}.border{border:1px solid #dee2e6 !important}.border-top{border-top:1px solid #dee2e6 !important}.border-right{border-right:1px solid #dee2e6 !important}.border-bottom{border-bottom:1px solid #dee2e6 !important}.border-left{border-left:1px solid #dee2e6 !important}.border-0{border:0 !important}.border-top-0{border-top:0 !important}.border-right-0{border-right:0 !important}.border-bottom-0{border-bottom:0 !important}.border-left-0{border-left:0 !important}.border-primary{border-color:#007bff !important}.border-secondary{border-color:#6c757d !important}.border-success{border-color:#28a745 !important}.border-info{border-color:#17a2b8 !important}.border-warning{border-color:#ffc107 !important}.border-danger{border-color:#dc3545 !important}.border-light{border-color:#f8f9fa !important}.border-dark{border-color:#343a40 !important}.border-white{border-color:#fff !important}.rounded{border-radius:0.25rem !important}.rounded-top{border-top-left-radius:0.25rem !important;border-top-right-radius:0.25rem !important}.rounded-right{border-top-right-radius:0.25rem !important;border-bottom-right-radius:0.25rem !important}.rounded-bottom{border-bottom-right-radius:0.25rem !important;border-bottom-left-radius:0.25rem !important}.rounded-left{border-top-left-radius:0.25rem !important;border-bottom-left-radius:0.25rem !important}.rounded-circle{border-radius:50% !important}.rounded-0{border-radius:0 !important}.clearfix::after{display:block;clear:both;content:""}.d-none{display:none !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:-ms-flexbox !important;display:flex !important}.d-inline-flex{display:-ms-inline-flexbox !important;display:inline-flex !important}@media (min-width: 576px){.d-sm-none{display:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:-ms-flexbox !important;display:flex !important}.d-sm-inline-flex{display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 768px){.d-md-none{display:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:-ms-flexbox !important;display:flex !important}.d-md-inline-flex{display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 992px){.d-lg-none{display:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:-ms-flexbox !important;display:flex !important}.d-lg-inline-flex{display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 1200px){.d-xl-none{display:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:-ms-flexbox !important;display:flex !important}.d-xl-inline-flex{display:-ms-inline-flexbox !important;display:inline-flex !important}}@media print{.d-print-none{display:none !important}.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:-ms-flexbox !important;display:flex !important}.d-print-inline-flex{display:-ms-inline-flexbox !important;display:inline-flex !important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:""}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{-ms-flex-direction:row !important;flex-direction:row !important}.flex-column{-ms-flex-direction:column !important;flex-direction:column !important}.flex-row-reverse{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-column-reverse{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-fill{-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-grow-0{-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-grow-1{-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-start{-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-end{-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-center{-ms-flex-pack:center !important;justify-content:center !important}.justify-content-between{-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-start{-ms-flex-align:start !important;align-items:flex-start !important}.align-items-end{-ms-flex-align:end !important;align-items:flex-end !important}.align-items-center{-ms-flex-align:center !important;align-items:center !important}.align-items-baseline{-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-stretch{-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-auto{-ms-flex-item-align:auto !important;align-self:auto !important}.align-self-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-center{-ms-flex-item-align:center !important;align-self:center !important}.align-self-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-stretch{-ms-flex-item-align:stretch !important;align-self:stretch !important}@media (min-width: 576px){.flex-sm-row{-ms-flex-direction:row !important;flex-direction:row !important}.flex-sm-column{-ms-flex-direction:column !important;flex-direction:column !important}.flex-sm-row-reverse{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-sm-column-reverse{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-sm-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-sm-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-sm-fill{-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-sm-grow-0{-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-sm-grow-1{-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-sm-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-sm-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-sm-start{-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-sm-end{-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-sm-center{-ms-flex-pack:center !important;justify-content:center !important}.justify-content-sm-between{-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-sm-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-sm-start{-ms-flex-align:start !important;align-items:flex-start !important}.align-items-sm-end{-ms-flex-align:end !important;align-items:flex-end !important}.align-items-sm-center{-ms-flex-align:center !important;align-items:center !important}.align-items-sm-baseline{-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-sm-stretch{-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-sm-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-sm-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-sm-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-sm-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-sm-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-sm-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-sm-auto{-ms-flex-item-align:auto !important;align-self:auto !important}.align-self-sm-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-sm-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-sm-center{-ms-flex-item-align:center !important;align-self:center !important}.align-self-sm-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-sm-stretch{-ms-flex-item-align:stretch !important;align-self:stretch !important}}@media (min-width: 768px){.flex-md-row{-ms-flex-direction:row !important;flex-direction:row !important}.flex-md-column{-ms-flex-direction:column !important;flex-direction:column !important}.flex-md-row-reverse{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-md-column-reverse{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-md-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-md-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-md-fill{-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-md-grow-0{-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-md-grow-1{-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-md-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-md-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-md-start{-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-md-end{-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-md-center{-ms-flex-pack:center !important;justify-content:center !important}.justify-content-md-between{-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-md-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-md-start{-ms-flex-align:start !important;align-items:flex-start !important}.align-items-md-end{-ms-flex-align:end !important;align-items:flex-end !important}.align-items-md-center{-ms-flex-align:center !important;align-items:center !important}.align-items-md-baseline{-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-md-stretch{-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-md-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-md-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-md-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-md-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-md-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-md-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-md-auto{-ms-flex-item-align:auto !important;align-self:auto !important}.align-self-md-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-md-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-md-center{-ms-flex-item-align:center !important;align-self:center !important}.align-self-md-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-md-stretch{-ms-flex-item-align:stretch !important;align-self:stretch !important}}@media (min-width: 992px){.flex-lg-row{-ms-flex-direction:row !important;flex-direction:row !important}.flex-lg-column{-ms-flex-direction:column !important;flex-direction:column !important}.flex-lg-row-reverse{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-lg-column-reverse{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-lg-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-lg-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-lg-fill{-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-lg-grow-0{-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-lg-grow-1{-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-lg-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-lg-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-lg-start{-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-lg-end{-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-lg-center{-ms-flex-pack:center !important;justify-content:center !important}.justify-content-lg-between{-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-lg-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-lg-start{-ms-flex-align:start !important;align-items:flex-start !important}.align-items-lg-end{-ms-flex-align:end !important;align-items:flex-end !important}.align-items-lg-center{-ms-flex-align:center !important;align-items:center !important}.align-items-lg-baseline{-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-lg-stretch{-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-lg-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-lg-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-lg-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-lg-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-lg-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-lg-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-lg-auto{-ms-flex-item-align:auto !important;align-self:auto !important}.align-self-lg-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-lg-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-lg-center{-ms-flex-item-align:center !important;align-self:center !important}.align-self-lg-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-lg-stretch{-ms-flex-item-align:stretch !important;align-self:stretch !important}}@media (min-width: 1200px){.flex-xl-row{-ms-flex-direction:row !important;flex-direction:row !important}.flex-xl-column{-ms-flex-direction:column !important;flex-direction:column !important}.flex-xl-row-reverse{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-xl-column-reverse{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-xl-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-xl-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-xl-fill{-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-xl-grow-0{-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-xl-grow-1{-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-xl-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-xl-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-xl-start{-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-xl-end{-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-xl-center{-ms-flex-pack:center !important;justify-content:center !important}.justify-content-xl-between{-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-xl-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-xl-start{-ms-flex-align:start !important;align-items:flex-start !important}.align-items-xl-end{-ms-flex-align:end !important;align-items:flex-end !important}.align-items-xl-center{-ms-flex-align:center !important;align-items:center !important}.align-items-xl-baseline{-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-xl-stretch{-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-xl-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-xl-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-xl-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-xl-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-xl-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-xl-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-xl-auto{-ms-flex-item-align:auto !important;align-self:auto !important}.align-self-xl-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-xl-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-xl-center{-ms-flex-item-align:center !important;align-self:center !important}.align-self-xl-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-xl-stretch{-ms-flex-item-align:stretch !important;align-self:stretch !important}}.float-left{float:left !important}.float-right{float:right !important}.float-none{float:none !important}@media (min-width: 576px){.float-sm-left{float:left !important}.float-sm-right{float:right !important}.float-sm-none{float:none !important}}@media (min-width: 768px){.float-md-left{float:left !important}.float-md-right{float:right !important}.float-md-none{float:none !important}}@media (min-width: 992px){.float-lg-left{float:left !important}.float-lg-right{float:right !important}.float-lg-none{float:none !important}}@media (min-width: 1200px){.float-xl-left{float:left !important}.float-xl-right{float:right !important}.float-xl-none{float:none !important}}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:-webkit-sticky !important;position:sticky !important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports (position: -webkit-sticky) or (position: sticky){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important}.shadow{box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important}.shadow-none{box-shadow:none !important}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mw-100{max-width:100% !important}.mh-100{max-height:100% !important}.m-0{margin:0 !important}.mt-0,.my-0{margin-top:0 !important}.mr-0,.mx-0{margin-right:0 !important}.mb-0,.my-0{margin-bottom:0 !important}.ml-0,.mx-0{margin-left:0 !important}.m-1{margin:0.25rem !important}.mt-1,.my-1{margin-top:0.25rem !important}.mr-1,.mx-1{margin-right:0.25rem !important}.mb-1,.my-1{margin-bottom:0.25rem !important}.ml-1,.mx-1{margin-left:0.25rem !important}.m-2{margin:0.5rem !important}.mt-2,.my-2{margin-top:0.5rem !important}.mr-2,.mx-2{margin-right:0.5rem !important}.mb-2,.my-2{margin-bottom:0.5rem !important}.ml-2,.mx-2{margin-left:0.5rem !important}.m-3{margin:1rem !important}.mt-3,.my-3{margin-top:1rem !important}.mr-3,.mx-3{margin-right:1rem !important}.mb-3,.my-3{margin-bottom:1rem !important}.ml-3,.mx-3{margin-left:1rem !important}.m-4{margin:1.5rem !important}.mt-4,.my-4{margin-top:1.5rem !important}.mr-4,.mx-4{margin-right:1.5rem !important}.mb-4,.my-4{margin-bottom:1.5rem !important}.ml-4,.mx-4{margin-left:1.5rem !important}.m-5{margin:3rem !important}.mt-5,.my-5{margin-top:3rem !important}.mr-5,.mx-5{margin-right:3rem !important}.mb-5,.my-5{margin-bottom:3rem !important}.ml-5,.mx-5{margin-left:3rem !important}.p-0{padding:0 !important}.pt-0,.py-0{padding-top:0 !important}.pr-0,.px-0{padding-right:0 !important}.pb-0,.py-0{padding-bottom:0 !important}.pl-0,.px-0{padding-left:0 !important}.p-1{padding:0.25rem !important}.pt-1,.py-1{padding-top:0.25rem !important}.pr-1,.px-1{padding-right:0.25rem !important}.pb-1,.py-1{padding-bottom:0.25rem !important}.pl-1,.px-1{padding-left:0.25rem !important}.p-2{padding:0.5rem !important}.pt-2,.py-2{padding-top:0.5rem !important}.pr-2,.px-2{padding-right:0.5rem !important}.pb-2,.py-2{padding-bottom:0.5rem !important}.pl-2,.px-2{padding-left:0.5rem !important}.p-3{padding:1rem !important}.pt-3,.py-3{padding-top:1rem !important}.pr-3,.px-3{padding-right:1rem !important}.pb-3,.py-3{padding-bottom:1rem !important}.pl-3,.px-3{padding-left:1rem !important}.p-4{padding:1.5rem !important}.pt-4,.py-4{padding-top:1.5rem !important}.pr-4,.px-4{padding-right:1.5rem !important}.pb-4,.py-4{padding-bottom:1.5rem !important}.pl-4,.px-4{padding-left:1.5rem !important}.p-5{padding:3rem !important}.pt-5,.py-5{padding-top:3rem !important}.pr-5,.px-5{padding-right:3rem !important}.pb-5,.py-5{padding-bottom:3rem !important}.pl-5,.px-5{padding-left:3rem !important}.m-auto{margin:auto !important}.mt-auto,.my-auto{margin-top:auto !important}.mr-auto,.mx-auto{margin-right:auto !important}.mb-auto,.my-auto{margin-bottom:auto !important}.ml-auto,.mx-auto{margin-left:auto !important}@media (min-width: 576px){.m-sm-0{margin:0 !important}.mt-sm-0,.my-sm-0{margin-top:0 !important}.mr-sm-0,.mx-sm-0{margin-right:0 !important}.mb-sm-0,.my-sm-0{margin-bottom:0 !important}.ml-sm-0,.mx-sm-0{margin-left:0 !important}.m-sm-1{margin:0.25rem !important}.mt-sm-1,.my-sm-1{margin-top:0.25rem !important}.mr-sm-1,.mx-sm-1{margin-right:0.25rem !important}.mb-sm-1,.my-sm-1{margin-bottom:0.25rem !important}.ml-sm-1,.mx-sm-1{margin-left:0.25rem !important}.m-sm-2{margin:0.5rem !important}.mt-sm-2,.my-sm-2{margin-top:0.5rem !important}.mr-sm-2,.mx-sm-2{margin-right:0.5rem !important}.mb-sm-2,.my-sm-2{margin-bottom:0.5rem !important}.ml-sm-2,.mx-sm-2{margin-left:0.5rem !important}.m-sm-3{margin:1rem !important}.mt-sm-3,.my-sm-3{margin-top:1rem !important}.mr-sm-3,.mx-sm-3{margin-right:1rem !important}.mb-sm-3,.my-sm-3{margin-bottom:1rem !important}.ml-sm-3,.mx-sm-3{margin-left:1rem !important}.m-sm-4{margin:1.5rem !important}.mt-sm-4,.my-sm-4{margin-top:1.5rem !important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem !important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem !important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem !important}.m-sm-5{margin:3rem !important}.mt-sm-5,.my-sm-5{margin-top:3rem !important}.mr-sm-5,.mx-sm-5{margin-right:3rem !important}.mb-sm-5,.my-sm-5{margin-bottom:3rem !important}.ml-sm-5,.mx-sm-5{margin-left:3rem !important}.p-sm-0{padding:0 !important}.pt-sm-0,.py-sm-0{padding-top:0 !important}.pr-sm-0,.px-sm-0{padding-right:0 !important}.pb-sm-0,.py-sm-0{padding-bottom:0 !important}.pl-sm-0,.px-sm-0{padding-left:0 !important}.p-sm-1{padding:0.25rem !important}.pt-sm-1,.py-sm-1{padding-top:0.25rem !important}.pr-sm-1,.px-sm-1{padding-right:0.25rem !important}.pb-sm-1,.py-sm-1{padding-bottom:0.25rem !important}.pl-sm-1,.px-sm-1{padding-left:0.25rem !important}.p-sm-2{padding:0.5rem !important}.pt-sm-2,.py-sm-2{padding-top:0.5rem !important}.pr-sm-2,.px-sm-2{padding-right:0.5rem !important}.pb-sm-2,.py-sm-2{padding-bottom:0.5rem !important}.pl-sm-2,.px-sm-2{padding-left:0.5rem !important}.p-sm-3{padding:1rem !important}.pt-sm-3,.py-sm-3{padding-top:1rem !important}.pr-sm-3,.px-sm-3{padding-right:1rem !important}.pb-sm-3,.py-sm-3{padding-bottom:1rem !important}.pl-sm-3,.px-sm-3{padding-left:1rem !important}.p-sm-4{padding:1.5rem !important}.pt-sm-4,.py-sm-4{padding-top:1.5rem !important}.pr-sm-4,.px-sm-4{padding-right:1.5rem !important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem !important}.pl-sm-4,.px-sm-4{padding-left:1.5rem !important}.p-sm-5{padding:3rem !important}.pt-sm-5,.py-sm-5{padding-top:3rem !important}.pr-sm-5,.px-sm-5{padding-right:3rem !important}.pb-sm-5,.py-sm-5{padding-bottom:3rem !important}.pl-sm-5,.px-sm-5{padding-left:3rem !important}.m-sm-auto{margin:auto !important}.mt-sm-auto,.my-sm-auto{margin-top:auto !important}.mr-sm-auto,.mx-sm-auto{margin-right:auto !important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto !important}.ml-sm-auto,.mx-sm-auto{margin-left:auto !important}}@media (min-width: 768px){.m-md-0{margin:0 !important}.mt-md-0,.my-md-0{margin-top:0 !important}.mr-md-0,.mx-md-0{margin-right:0 !important}.mb-md-0,.my-md-0{margin-bottom:0 !important}.ml-md-0,.mx-md-0{margin-left:0 !important}.m-md-1{margin:0.25rem !important}.mt-md-1,.my-md-1{margin-top:0.25rem !important}.mr-md-1,.mx-md-1{margin-right:0.25rem !important}.mb-md-1,.my-md-1{margin-bottom:0.25rem !important}.ml-md-1,.mx-md-1{margin-left:0.25rem !important}.m-md-2{margin:0.5rem !important}.mt-md-2,.my-md-2{margin-top:0.5rem !important}.mr-md-2,.mx-md-2{margin-right:0.5rem !important}.mb-md-2,.my-md-2{margin-bottom:0.5rem !important}.ml-md-2,.mx-md-2{margin-left:0.5rem !important}.m-md-3{margin:1rem !important}.mt-md-3,.my-md-3{margin-top:1rem !important}.mr-md-3,.mx-md-3{margin-right:1rem !important}.mb-md-3,.my-md-3{margin-bottom:1rem !important}.ml-md-3,.mx-md-3{margin-left:1rem !important}.m-md-4{margin:1.5rem !important}.mt-md-4,.my-md-4{margin-top:1.5rem !important}.mr-md-4,.mx-md-4{margin-right:1.5rem !important}.mb-md-4,.my-md-4{margin-bottom:1.5rem !important}.ml-md-4,.mx-md-4{margin-left:1.5rem !important}.m-md-5{margin:3rem !important}.mt-md-5,.my-md-5{margin-top:3rem !important}.mr-md-5,.mx-md-5{margin-right:3rem !important}.mb-md-5,.my-md-5{margin-bottom:3rem !important}.ml-md-5,.mx-md-5{margin-left:3rem !important}.p-md-0{padding:0 !important}.pt-md-0,.py-md-0{padding-top:0 !important}.pr-md-0,.px-md-0{padding-right:0 !important}.pb-md-0,.py-md-0{padding-bottom:0 !important}.pl-md-0,.px-md-0{padding-left:0 !important}.p-md-1{padding:0.25rem !important}.pt-md-1,.py-md-1{padding-top:0.25rem !important}.pr-md-1,.px-md-1{padding-right:0.25rem !important}.pb-md-1,.py-md-1{padding-bottom:0.25rem !important}.pl-md-1,.px-md-1{padding-left:0.25rem !important}.p-md-2{padding:0.5rem !important}.pt-md-2,.py-md-2{padding-top:0.5rem !important}.pr-md-2,.px-md-2{padding-right:0.5rem !important}.pb-md-2,.py-md-2{padding-bottom:0.5rem !important}.pl-md-2,.px-md-2{padding-left:0.5rem !important}.p-md-3{padding:1rem !important}.pt-md-3,.py-md-3{padding-top:1rem !important}.pr-md-3,.px-md-3{padding-right:1rem !important}.pb-md-3,.py-md-3{padding-bottom:1rem !important}.pl-md-3,.px-md-3{padding-left:1rem !important}.p-md-4{padding:1.5rem !important}.pt-md-4,.py-md-4{padding-top:1.5rem !important}.pr-md-4,.px-md-4{padding-right:1.5rem !important}.pb-md-4,.py-md-4{padding-bottom:1.5rem !important}.pl-md-4,.px-md-4{padding-left:1.5rem !important}.p-md-5{padding:3rem !important}.pt-md-5,.py-md-5{padding-top:3rem !important}.pr-md-5,.px-md-5{padding-right:3rem !important}.pb-md-5,.py-md-5{padding-bottom:3rem !important}.pl-md-5,.px-md-5{padding-left:3rem !important}.m-md-auto{margin:auto !important}.mt-md-auto,.my-md-auto{margin-top:auto !important}.mr-md-auto,.mx-md-auto{margin-right:auto !important}.mb-md-auto,.my-md-auto{margin-bottom:auto !important}.ml-md-auto,.mx-md-auto{margin-left:auto !important}}@media (min-width: 992px){.m-lg-0{margin:0 !important}.mt-lg-0,.my-lg-0{margin-top:0 !important}.mr-lg-0,.mx-lg-0{margin-right:0 !important}.mb-lg-0,.my-lg-0{margin-bottom:0 !important}.ml-lg-0,.mx-lg-0{margin-left:0 !important}.m-lg-1{margin:0.25rem !important}.mt-lg-1,.my-lg-1{margin-top:0.25rem !important}.mr-lg-1,.mx-lg-1{margin-right:0.25rem !important}.mb-lg-1,.my-lg-1{margin-bottom:0.25rem !important}.ml-lg-1,.mx-lg-1{margin-left:0.25rem !important}.m-lg-2{margin:0.5rem !important}.mt-lg-2,.my-lg-2{margin-top:0.5rem !important}.mr-lg-2,.mx-lg-2{margin-right:0.5rem !important}.mb-lg-2,.my-lg-2{margin-bottom:0.5rem !important}.ml-lg-2,.mx-lg-2{margin-left:0.5rem !important}.m-lg-3{margin:1rem !important}.mt-lg-3,.my-lg-3{margin-top:1rem !important}.mr-lg-3,.mx-lg-3{margin-right:1rem !important}.mb-lg-3,.my-lg-3{margin-bottom:1rem !important}.ml-lg-3,.mx-lg-3{margin-left:1rem !important}.m-lg-4{margin:1.5rem !important}.mt-lg-4,.my-lg-4{margin-top:1.5rem !important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem !important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem !important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem !important}.m-lg-5{margin:3rem !important}.mt-lg-5,.my-lg-5{margin-top:3rem !important}.mr-lg-5,.mx-lg-5{margin-right:3rem !important}.mb-lg-5,.my-lg-5{margin-bottom:3rem !important}.ml-lg-5,.mx-lg-5{margin-left:3rem !important}.p-lg-0{padding:0 !important}.pt-lg-0,.py-lg-0{padding-top:0 !important}.pr-lg-0,.px-lg-0{padding-right:0 !important}.pb-lg-0,.py-lg-0{padding-bottom:0 !important}.pl-lg-0,.px-lg-0{padding-left:0 !important}.p-lg-1{padding:0.25rem !important}.pt-lg-1,.py-lg-1{padding-top:0.25rem !important}.pr-lg-1,.px-lg-1{padding-right:0.25rem !important}.pb-lg-1,.py-lg-1{padding-bottom:0.25rem !important}.pl-lg-1,.px-lg-1{padding-left:0.25rem !important}.p-lg-2{padding:0.5rem !important}.pt-lg-2,.py-lg-2{padding-top:0.5rem !important}.pr-lg-2,.px-lg-2{padding-right:0.5rem !important}.pb-lg-2,.py-lg-2{padding-bottom:0.5rem !important}.pl-lg-2,.px-lg-2{padding-left:0.5rem !important}.p-lg-3{padding:1rem !important}.pt-lg-3,.py-lg-3{padding-top:1rem !important}.pr-lg-3,.px-lg-3{padding-right:1rem !important}.pb-lg-3,.py-lg-3{padding-bottom:1rem !important}.pl-lg-3,.px-lg-3{padding-left:1rem !important}.p-lg-4{padding:1.5rem !important}.pt-lg-4,.py-lg-4{padding-top:1.5rem !important}.pr-lg-4,.px-lg-4{padding-right:1.5rem !important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem !important}.pl-lg-4,.px-lg-4{padding-left:1.5rem !important}.p-lg-5{padding:3rem !important}.pt-lg-5,.py-lg-5{padding-top:3rem !important}.pr-lg-5,.px-lg-5{padding-right:3rem !important}.pb-lg-5,.py-lg-5{padding-bottom:3rem !important}.pl-lg-5,.px-lg-5{padding-left:3rem !important}.m-lg-auto{margin:auto !important}.mt-lg-auto,.my-lg-auto{margin-top:auto !important}.mr-lg-auto,.mx-lg-auto{margin-right:auto !important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto !important}.ml-lg-auto,.mx-lg-auto{margin-left:auto !important}}@media (min-width: 1200px){.m-xl-0{margin:0 !important}.mt-xl-0,.my-xl-0{margin-top:0 !important}.mr-xl-0,.mx-xl-0{margin-right:0 !important}.mb-xl-0,.my-xl-0{margin-bottom:0 !important}.ml-xl-0,.mx-xl-0{margin-left:0 !important}.m-xl-1{margin:0.25rem !important}.mt-xl-1,.my-xl-1{margin-top:0.25rem !important}.mr-xl-1,.mx-xl-1{margin-right:0.25rem !important}.mb-xl-1,.my-xl-1{margin-bottom:0.25rem !important}.ml-xl-1,.mx-xl-1{margin-left:0.25rem !important}.m-xl-2{margin:0.5rem !important}.mt-xl-2,.my-xl-2{margin-top:0.5rem !important}.mr-xl-2,.mx-xl-2{margin-right:0.5rem !important}.mb-xl-2,.my-xl-2{margin-bottom:0.5rem !important}.ml-xl-2,.mx-xl-2{margin-left:0.5rem !important}.m-xl-3{margin:1rem !important}.mt-xl-3,.my-xl-3{margin-top:1rem !important}.mr-xl-3,.mx-xl-3{margin-right:1rem !important}.mb-xl-3,.my-xl-3{margin-bottom:1rem !important}.ml-xl-3,.mx-xl-3{margin-left:1rem !important}.m-xl-4{margin:1.5rem !important}.mt-xl-4,.my-xl-4{margin-top:1.5rem !important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem !important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem !important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem !important}.m-xl-5{margin:3rem !important}.mt-xl-5,.my-xl-5{margin-top:3rem !important}.mr-xl-5,.mx-xl-5{margin-right:3rem !important}.mb-xl-5,.my-xl-5{margin-bottom:3rem !important}.ml-xl-5,.mx-xl-5{margin-left:3rem !important}.p-xl-0{padding:0 !important}.pt-xl-0,.py-xl-0{padding-top:0 !important}.pr-xl-0,.px-xl-0{padding-right:0 !important}.pb-xl-0,.py-xl-0{padding-bottom:0 !important}.pl-xl-0,.px-xl-0{padding-left:0 !important}.p-xl-1{padding:0.25rem !important}.pt-xl-1,.py-xl-1{padding-top:0.25rem !important}.pr-xl-1,.px-xl-1{padding-right:0.25rem !important}.pb-xl-1,.py-xl-1{padding-bottom:0.25rem !important}.pl-xl-1,.px-xl-1{padding-left:0.25rem !important}.p-xl-2{padding:0.5rem !important}.pt-xl-2,.py-xl-2{padding-top:0.5rem !important}.pr-xl-2,.px-xl-2{padding-right:0.5rem !important}.pb-xl-2,.py-xl-2{padding-bottom:0.5rem !important}.pl-xl-2,.px-xl-2{padding-left:0.5rem !important}.p-xl-3{padding:1rem !important}.pt-xl-3,.py-xl-3{padding-top:1rem !important}.pr-xl-3,.px-xl-3{padding-right:1rem !important}.pb-xl-3,.py-xl-3{padding-bottom:1rem !important}.pl-xl-3,.px-xl-3{padding-left:1rem !important}.p-xl-4{padding:1.5rem !important}.pt-xl-4,.py-xl-4{padding-top:1.5rem !important}.pr-xl-4,.px-xl-4{padding-right:1.5rem !important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem !important}.pl-xl-4,.px-xl-4{padding-left:1.5rem !important}.p-xl-5{padding:3rem !important}.pt-xl-5,.py-xl-5{padding-top:3rem !important}.pr-xl-5,.px-xl-5{padding-right:3rem !important}.pb-xl-5,.py-xl-5{padding-bottom:3rem !important}.pl-xl-5,.px-xl-5{padding-left:3rem !important}.m-xl-auto{margin:auto !important}.mt-xl-auto,.my-xl-auto{margin-top:auto !important}.mr-xl-auto,.mx-xl-auto{margin-right:auto !important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto !important}.ml-xl-auto,.mx-xl-auto{margin-left:auto !important}}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}.text-justify{text-align:justify !important}.text-nowrap{white-space:nowrap !important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left !important}.text-right{text-align:right !important}.text-center{text-align:center !important}@media (min-width: 576px){.text-sm-left{text-align:left !important}.text-sm-right{text-align:right !important}.text-sm-center{text-align:center !important}}@media (min-width: 768px){.text-md-left{text-align:left !important}.text-md-right{text-align:right !important}.text-md-center{text-align:center !important}}@media (min-width: 992px){.text-lg-left{text-align:left !important}.text-lg-right{text-align:right !important}.text-lg-center{text-align:center !important}}@media (min-width: 1200px){.text-xl-left{text-align:left !important}.text-xl-right{text-align:right !important}.text-xl-center{text-align:center !important}}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.font-weight-light{font-weight:300 !important}.font-weight-normal{font-weight:400 !important}.font-weight-bold{font-weight:700 !important}.font-italic{font-style:italic !important}.text-white{color:#fff !important}.text-primary{color:#007bff !important}a.text-primary:focus,a.text-primary:hover{color:#0062cc !important}.text-secondary{color:#6c757d !important}a.text-secondary:focus,a.text-secondary:hover{color:#545b62 !important}.text-success{color:#28a745 !important}a.text-success:focus,a.text-success:hover{color:#1e7e34 !important}.text-info{color:#17a2b8 !important}a.text-info:focus,a.text-info:hover{color:#117a8b !important}.text-warning{color:#ffc107 !important}a.text-warning:focus,a.text-warning:hover{color:#d39e00 !important}.text-danger{color:#dc3545 !important}a.text-danger:focus,a.text-danger:hover{color:#bd2130 !important}.text-light{color:#f8f9fa !important}a.text-light:focus,a.text-light:hover{color:#dae0e5 !important}.text-dark{color:#343a40 !important}a.text-dark:focus,a.text-dark:hover{color:#1d2124 !important}.text-body{color:#212529 !important}.text-muted{color:#6c757d !important}.text-black-50{color:rgba(0,0,0,0.5) !important}.text-white-50{color:rgba(255,255,255,0.5) !important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media print{*,::after,::before{text-shadow:none !important;box-shadow:none !important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:" (" attr(title) ")"}pre{white-space:pre-wrap !important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px !important}.container{min-width:992px !important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse !important}.table td,.table th{background-color:#fff !important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6 !important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}.clear-fix::after{content:"";display:table;clear:both}.bg-primary{background:#9a74ec}.bg-tertiary{background:#2998ff}*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}html{font-size:62%}body{font-family:"Lato", sans-serif;font-weight:400;line-height:1.7;color:#576275;padding:0px;box-sizing:border-box;overflow-x:hidden}.text-center{text-align:center}.margin-bottom-big{margin-bottom:8rem}.margin-bottom-medium{margin-bottom:4rem}.margin-bottom-small{margin-bottom:1.5rem}.margin-top-medium{margin-top:4rem}.headline{font-size:3em;font-family:"Noto Sans HK", sans-serif;color:#576275;margin-top:16px}.register{border:0;padding:10px 18px;border-radius:4px;margin-right:15px;background:#44b9f7;color:#fff;font-weight:600;font-size:2em;font-family:\'Open Sans\', sans-serif;display:flex;justify-content:center;align-items:center;cursor:pointer}.register:hover{background:#6b5aed;color:white;text-decoration:none;transition:background-color 1s}.register:hover .icon{transition:1s;transform:rotate(360deg)}.register .icon{margin-left:10px;background:#fff;padding:9px;border-radius:50%;color:#44b9f7;font-size:1.1em;width:32px;height:32px;transition:1s}@keyframes moveInLeft{0%{opacity:0;transform:translateX(-6.25rem)}80%{transform:translateX(0.0625rem)}100%{opacity:1;transform:translateX(0px)}}@keyframes moveInRight{0%{opacity:0;transform:translateX(6.25rem)}80%{transform:translateX(-0.0625rem)}100%{opacity:1;transform:translate(0px)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(1.875rem)}100%{opacity:1;transform:translate(0px)}}@-webkit-keyframes scroll-inner{from{margin-top:15%}to{margin-top:50%}}@keyframes scroll-inner{from{margin-top:15%}to{margin-top:50%}}@-webkit-keyframes scroll-mouse{from{margin-top:0}to{margin-top:15px}}@keyframes scroll-mouse{from{margin-top:0}to{margin-top:15px}}div.mouse-container{position:absolute;margin-top:15px;width:50%}div.mouse{position:relative;margin:0 auto;display:block;width:35px;height:60px;border:solid 2px #c5c5c5;border-radius:25px;cursor:pointer;-webkit-animation:scroll-mouse 2.5s;animation:scroll-mouse 2.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}div.mouse span.scroll-down{display:block;width:10px;height:10px;background:#c5c5c5;border-radius:50%;margin:15% auto auto auto;-webkit-animation:scroll-inner 1.5s;animation:scroll-inner 1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease;animation-timing-function:ease}@keyframes fader{from{opacity:0}to{opacity:1}}@keyframes scale{from{transform:scale(0)}to{transform:scale(1)}}.head-title{animation:fader 0.3s linear 0s;animation-fill-mode:both}.head-paragraph{animation:fader 0.5s linear 0.3s;animation-fill-mode:both}.register{animation:scale 0.7s linear 0.5s;animation-fill-mode:both}.menu{width:100%;padding:0px;align-items:center;z-index:200;position:fixed;background:transparent;transition:background-color linear 0.3s}.menu .nav-link{font-family:"Lato", sans-serif;color:#576275 !important;font-size:2em}.menu .nav-item.active>a{color:#44b9f7 !important;transition:color ease-in 0.3s}.menu .buttons{display:flex}.menu .buttons button{margin-right:12px}.menu .navbar-collapse.collapse.show,.menu .navbar-collapse.collapsing{background:#fbfbfb;padding:12px}.menu-logo{font-family:passion-one, sans-serif;margin-right:20px;background:linear-gradient(to right, #9572db, #a184da);-webkit-background-clip:text !important;-webkit-text-fill-color:transparent;transition:background-color 0.3s}.menu-logo h1{font-size:4em;margin:0;padding:6px 0px}.menu-buttons{display:flex;align-items:center;width:100%;justify-content:space-between;color:#fff !important}.menu-buttons .calltoaction{background:linear-gradient(50deg, #9974eb, #6c68fd);padding:9px 15px;border:0;border-radius:3px;margin-left:20px;color:white}.menu-buttons .item-menu{text-decoration:none;margin-right:12px;font-size:1.95em;color:#576275;font-weight:400}.menu .login{text-decoration:none;font-size:1.5em;background:#44b9f7;border:1px solid #44b9f7;padding:8px 15px;color:#fff !important;display:flex;margin:0 7px;justify-content:center;border-radius:30px;align-items:center;cursor:pointer}.menu .login svg{margin:0 5px}.menu-onscroll{background:#fff;box-shadow:0px 0px 1rem rgba(54,54,56,0.15)}body{min-height:100vh}.call-to-action{display:flex;justify-content:start;align-items:center;width:50%;min-height:82vh}.call-to-action h1{color:#576275;font-weight:bold;font-family:\'Noto Sans HK\', sans-serif;font-size:3.7em;width:90%}.call-to-action p{font-size:2em;color:#7c7f84;line-height:1.75;margin:12px 0px;width:90%}.call-to-action .buttons{margin-top:19px;display:flex}.call-to-action .buttons .video{border:0;background:transparent;color:#6c68fd;font-size:1.5em;font-weight:bold}.bg-home{min-height:750px}.home{position:relative;z-index:1;overflow:hidden}.home:before{content:\'\';position:absolute;z-index:1;top:0;left:50%;display:block;width:1100px;height:700px;transform:translate3d(-65px, 0, 0);background:url(/vendor/oka6/templates/clinic/bg-clinic.png) no-repeat;background-position:left top}.footer-links{display:flex;justify-content:space-evenly;margin:80px auto;max-width:100%;align-items:center;align-content:center}.footer-links .logo{font-family:passion-one, sans-serif;color:#9c76ec;font-size:1.9em;display:flex;flex-wrap:wrap;justify-content:center}.footer-links .logo h1{width:100%}.footer-links .logo svg{margin-right:6px;color:rgba(87,98,117,0.65);font-size:1.2em;cursor:pointer}.footer-links .cls ul{list-style:none}.footer-links .cls ul li{font-size:1.4em;color:rgba(128,128,128,0.82);cursor:pointer}.footer-links .cls .title{font-family:"Noto Sans HK", sans-serif;margin-bottom:15px}.feature{padding-top:15px;width:90%;margin:0 auto}.feature .featured-headline{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;height:100%;align-content:center;text-align:center}.feature .featured-headline h1{margin-bottom:10px}.feature .featured-headline p{font-size:2em;text-align:center}footer{margin-top:10px;padding:15px;background:#f2f2f2;text-align:center}footer p{font-size:1.4em}footer:before{content:"";position:absolute;display:block;width:100%;clip-path:ellipse(53% 80% at 50% 119%);background:#f2f2f2;height:4rem;margin-top:-53px;left:0}.cards{background:transparent;z-index:1;position:relative}.cards .card{min-height:430px;padding:15px;margin-top:15px;margin-bottom:15px;box-shadow:0 1px 7px #eeeaf7;display:flex;flex-wrap:wrap;align-items:center;background:white;border-radius:3%;border:0px}.cards .card .img{display:block;padding:10px 40px;max-width:100%}.cards .card .desc .title{font-size:2.1em;text-align:center;color:#576275;font-family:"Noto Sans HK", sans-serif;margin:10px 0}.cards .card .desc p{font-size:2rem;color:#aaaeb6}.svgs{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0)),url(../assets/bg/bg2.png) no-repeat center center/contain fixed}.svgs .svg-detail{transform:rotate(180deg);fill:rgba(154,122,218,0.03);margin-top:0px;width:100%;height:205px;position:relative;z-index:0}.svgs .svg-detail-two{fill:rgba(154,122,218,0.03);width:100%;height:261px;margin-top:-4.6px;position:relative;z-index:1}.outlines{margin-top:15px}.simple-card-icon{text-align:center;padding:15px;box-shadow:0px 3px 6px rgba(234,234,234,0.98);border-radius:10px;min-height:175px;margin-top:16px;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin-bottom:2px;background:#fff;border:3px solid transparent;transition:border 1s}.simple-card-icon:hover{border-color:#9c7cdb}.simple-card-icon svg{width:106px;height:78px;fill:#9a74ec;background:#fff;padding:8px}.simple-card-icon p{text-align:center;font-size:1.5em}section.call{padding:40px;display:flex;justify-content:center;align-items:center;border-radius:15px;box-shadow:0px 3px 14px #a9a9a9;background:linear-gradient(#9a74ec, rgba(155,118,236,0.509804)),url(../assets/bg/bg3.png) no-repeat center center/cover;color:#fff;text-shadow:0px 0px 14px #a78deb}section.call h1{font-family:"Noto Sans HK", sans-serif;font-size:3.3em;font-weight:bold;max-width:690px;line-height:1.6}section.call button{padding:15px}.gallery{margin-bottom:30px}.gallery .bg-svg{fill:#9a7fef66;height:100px;margin-top:495px;transform:rotate(180deg);position:absolute;width:100%}.gallery .bg-svg path:nth-child(1){fill:rgba(160,130,218,0.1)}.gallery .bg-svg path:nth-child(2){fill:#f5f2fb}.gallery .bg-svg path:nth-child(3){fill:#ccbef6}.gallery .nav-tab-gal{position:relative;margin:5px auto;display:flex;justify-content:center;align-items:center;width:100%;transition-duration:0.4s;border-radius:5px;animation:openGal ease-in 0.3s;-webkit-backface-visibility:visible;backface-visibility:visible}.gallery .nav-link.tabstyle{font-size:1.5em;padding:6px 23px;border:1px solid rgba(151,136,183,0.3);border-radius:20px;color:#9a74ec;font-weight:bold;margin-right:7px}.gallery .nav-link.tabstyle.active{background-color:rgba(68,185,247,0.18);color:#44b9f7 !important;border:1px solid #d9edf9 !important}.gallery .nav-tab-gal img{max-width:100%;z-index:22;position:relative;border-radius:5px;box-shadow:0px 9px 5px rgba(0,0,0,0.2)}.gallery ul#pills-tab{width:100%;display:flex;justify-content:center;align-items:center;margin:25px auto}.gallery:after{content:"";display:block;bottom:19px;left:0;width:100%;clip-path:ellipse(52% 0% at 50% 119%);z-index:211;background:#ccbef6;height:8rem;transform:rotate(180deg);margin-top:-10px}@keyframes openGal{0%{opacity:0;transform:scale3d(0.5, 0.3, 0.3)}50%{opacity:1}}@media (min-width: 1000px) and (max-width: 1300px){.home:before{background-size:contain;width:719px;transform:translate3d(0px, 0, 0)}.bg-home{min-height:auto}}@media (min-width: 768px) and (max-width: 999px){.home:before{background-size:contain;width:632px;transform:translate3d(-51px, 0, 0)}.bg-home{min-height:auto}.call-to-action h1{font-size:3em}.call-to-action p{font-size:1.5em}.menu-logo{margin-left:15px}.navbar-toggler-icon{background-image:url("data:image/svg+xml;charset=utf8,<svg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'><path stroke=\'rgba(255,255, 255, 0.9)\' stroke-width=\'2\' stroke-linecap=\'\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/></svg>") !important;border-color:#9f80dc !important}}@media (min-width: 520px) and (max-width: 767px){.call-to-action h1{font-size:2.5em}.bg-home{min-height:auto}.menu-logo{margin-left:15px}.call-to-action p{font-size:1.3em;line-height:inherit}.home:before{background-size:contain;width:645px;transform:translate3d(-20px, 0, 0)}.navbar-toggler{margin-right:15px}.navbar-toggler-icon{background-image:url("data:image/svg+xml;charset=utf8,<svg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'><path stroke=\'rgba(255,255, 255, 0.9)\' stroke-width=\'2\' stroke-linecap=\'\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/></svg>") !important;border-color:#9f80dc !important}.register{border:0;padding:1px 7px;border-radius:4px;margin-right:15px;background:#44b9f7;color:#fff;font-weight:600;font-size:1.5em;font-family:\'Open Sans\', sans-serif;display:flex;justify-content:center;align-items:center;cursor:pointer;text-align:center;line-height:normal;white-space:pre}}@media (min-width: 0px) and (max-width: 520px){.menu .nav-item:active{background:#9a74ec}.menu .nav-item:active a{color:#fff !important;padding:5px}.menu-logo{width:100%;display:flex;justify-content:center;align-items:center;text-align:center;margin:0}.headline{font-size:2.2em}.cards .card .img{padding:3px 0px}.cards .card .desc p{line-height:1.4}.cards .card .desc .title{font-size:1.7em}.menu{background:#fff;display:flex;justify-content:center;align-items:center;padding:8px;box-shadow:0px 0px 1rem rgba(54,54,56,0.15)}.menu .menu-logo h1{margin:0;font-size:3.5em}.menu button.navbar-toggler.collapsed{position:absolute;left:12px}.menu button.navbar-toggler{position:absolute;top:22px;left:12px;border:0}.menu .login{width:100%;border-radius:0}.home .bg-home{min-height:auto}.home .call-to-action{width:100%;min-height:auto;margin-top:80px}.home .call-to-action .video{text-align:center;width:100%;margin-top:25px}.home h1{font-size:3em;text-align:center;margin-top:0px;width:100%}.home p{font-size:1.7em;line-height:1.45;width:100%}.home .buttons{flex-wrap:wrap}.home .buttons .register{width:100%}.home:before{display:none}.home div.mouse-container{display:none}.simple-card-icon{flex-wrap:inherit;min-height:auto}.simple-card-icon .svg{max-width:100%}.simple-card-icon p{text-align:left;font-size:1.6em;margin-left:8px;width:100%;text-align:left}.footer-links{flex-wrap:wrap}.footer-links .cls{margin-top:15px;width:100%;text-align:center}section.call{padding:8px 14px;flex-wrap:wrap}section.call h1{font-family:"Noto Sans HK", sans-serif;font-size:2.0em;text-align:center}section.call button{padding:8px 12px}.gallery .bg-svg{display:none}.gallery:after{display:none}.register{margin-right:0px;padding:8px 14px}.register .icon{margin-left:5px;background:#fff;padding:6px;border-radius:50%;color:#44b9f7;font-size:1.1em;width:23px;height:23px;transition:1s;text-align:center}.gallery ul#pills-tab{margin:8px auto;display:flex;align-items:center;justify-content:center;padding:5px 0px}.gallery .nav-link.tabstyle{font-size:1.25em;padding:6px 8px;border:1px solid rgba(151,136,183,0.3);border-radius:4px;color:#9a74ec;font-weight:bold;margin-right:6px;margin-bottom:6px}.cards .card{min-height:auto}}.contact-form{background:#f9f9f9;margin-top:0%;margin-bottom:4%;width:100%;max-width:100%}.contact-form .form-control{border-radius:1rem;padding:1em 0.75rem;font-size:1.2em}.contact-image{text-align:center}.contact-image img{width:105px;margin-top:-2%;transform:rotate(29deg);padding:15px;background:#fff;box-shadow:1px 1px 18px #e5e4e6;border-radius:50%}.contact-form form{max-width:700px;margin:0 auto;padding-bottom:70px}.contact-form form .row{margin-bottom:-7%}.contact-form h3{padding:16px;text-align:center;color:#576275}.contact-form .btnContact{width:100%;border:none;border-radius:1rem;padding:12px;background:#9a74ec;font-weight:600;color:#fff;cursor:pointer;margin:9px auto;font-size:1.5em}.btnContactSubmit{width:50%;border-radius:1rem;padding:1.5%;color:#fff;background-color:#fff;border:none;cursor:pointer}


 /*
 * Note that this is toastr v2.1.3, the "latest" version in url has no more maintenance,
 * please go to https://cdnjs.com/libraries/toastr.js and pick a certain version you want to use,
 * make sure you copy the url from the website since the url may change between versions.
 * */
.toast-title{font-weight:700}.toast-message{-ms-word-wrap:break-word;word-wrap:break-word}.toast-message a,.toast-message label{color:#FFF}.toast-message a:hover{color:#CCC;text-decoration:none}.toast-close-button{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#FFF;-webkit-text-shadow:0 1px 0 #fff;text-shadow:0 1px 0 #fff;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80);line-height:1}.toast-close-button:focus,.toast-close-button:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)}.rtl .toast-close-button{left:-.3em;float:left;right:.3em}button.toast-close-button{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.toast-top-center{top:0;right:0;width:100%}.toast-bottom-center{bottom:0;right:0;width:100%}.toast-top-full-width{top:0;right:0;width:100%}.toast-bottom-full-width{bottom:0;right:0;width:100%}.toast-top-left{top:12px;left:12px}.toast-top-right{top:12px;right:12px}.toast-bottom-right{right:12px;bottom:12px}.toast-bottom-left{bottom:12px;left:12px}#toast-container{position:fixed;z-index:999999;pointer-events:none}#toast-container *{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}#toast-container>div{position:relative;pointer-events:auto;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;-moz-box-shadow:0 0 12px #999;-webkit-box-shadow:0 0 12px #999;box-shadow:0 0 12px #999;color:#FFF;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80)}#toast-container>div.rtl{direction:rtl;padding:15px 50px 15px 15px;background-position:right 15px center}#toast-container>div:hover{-moz-box-shadow:0 0 12px #000;-webkit-box-shadow:0 0 12px #000;box-shadow:0 0 12px #000;opacity:1;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:alpha(opacity=100);cursor:pointer}#toast-container>.toast-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=)!important}#toast-container>.toast-error{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=)!important}#toast-container>.toast-success{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==)!important}#toast-container>.toast-warning{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=)!important}#toast-container.toast-bottom-center>div,#toast-container.toast-top-center>div{width:300px;margin-left:auto;margin-right:auto}#toast-container.toast-bottom-full-width>div,#toast-container.toast-top-full-width>div{width:96%;margin-left:auto;margin-right:auto}.toast{background-color:#030303}.toast-success{background-color:#51A351}.toast-error{background-color:#BD362F}.toast-info{background-color:#2F96B4}.toast-warning{background-color:#F89406}.toast-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)}@media all and (max-width:240px){#toast-container>div{padding:8px 8px 8px 50px;width:11em}#toast-container>div.rtl{padding:8px 50px 8px 8px}#toast-container .toast-close-button{right:-.2em;top:-.2em}#toast-container .rtl .toast-close-button{left:-.2em;right:.2em}}@media all and (min-width:241px) and (max-width:480px){#toast-container>div{padding:8px 8px 8px 50px;width:18em}#toast-container>div.rtl{padding:8px 50px 8px 8px}#toast-container .toast-close-button{right:-.2em;top:-.2em}#toast-container .rtl .toast-close-button{left:-.2em;right:.2em}}@media all and (min-width:481px) and (max-width:768px){#toast-container>div{padding:15px 15px 15px 50px;width:25em}#toast-container>div.rtl{padding:15px 50px 15px 15px}}

.contact-form .btnContact{
        display: flex;
    justify-content: center;
    align-items: center;
}
.lds-ellipsis {
    display: flex;
    position: relative;
    width: 75px;
    height: 20px;
}
.lds-ellipsis div {
  position: absolute;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}


                ',
                'js' => '$(function () {
    $(window).scroll(function () {
        var nav = document.querySelector(\'nav.menu\');
        if ($(document).scrollTop() > 100) {
            nav.classList.add(\'menu-onscroll\')
        } else {
            nav.classList.remove(\'menu-onscroll\')
        }
    });
    $(".scroll").click(function (event) {
        event.preventDefault();

        var menu = document.querySelector(\'.navbar-nav\');
        $(\'a\').each(function () {
            $(this).removeClass(\'active\');
        })

        this.classList.add(\'active\');
        $(\'.navbar-collapse\').collapse(\'hide\');
        $(\'html,body\').animate({scrollTop: $(this.hash).offset().top - 90}, 800, \'linear\');

    });
    svgStyleImg();
    onScroll();

    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    $(document).on(\'click\', \'.mouse\', function () {
        $(\'html, body\').animate({ scrollTop: $($("#recursos")).offset().top - 90}, 800, \'linear\');
    })

    /*Anime On*/

    $(\'.js-way-1\').waypoint(function (direction) {
        $(\'.js-way-1\').addClass(\'animate fadeIn\')
    })

});


function onScroll(event){
    // Cache selectors
    var lastId,
        topMenu = $(".navbar-nav"),
        topMenuHeight = topMenu.outerHeight()+15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

// Bind click handler to menu items
// so we can get a fancy scroll animation
    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $(\'html, body\').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

// Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href=\'#"+id+"\']").parent().addClass("active");
        }
    });
}


    function svgStyleImg() {
        $(\'img.svg\').each(function(){
            var $img = $(this);
            var imgID = $img.attr(\'id\');
            var imgClass = $img.attr(\'class\');
            var imgURL = $img.attr(\'src\');

            $.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find(\'svg\');

                // Add replaced image\'s ID to the new SVG
                if(typeof imgID !== \'undefined\') {
                    $svg = $svg.attr(\'id\', imgID);
                }
                // Add replaced image\'s classes to the new SVG
                if(typeof imgClass !== \'undefined\') {
                    $svg = $svg.attr(\'class\', imgClass+\' replaced-svg\');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr(\'xmlns:a\');

                // Check if the viewport is set, if the viewport is not set the SVG wont\'t scale.
                if(!$svg.attr(\'viewBox\') && $svg.attr(\'height\') && $svg.attr(\'width\')) {
                    $svg.attr(\'viewBox\', \'0 0 \' + $svg.attr(\'height\') + \' \' + $svg.attr(\'width\'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, \'xml\');

        });
    }


    $(document).on("click", ".btnContact", function() {
            if(!validateForm()){
                return
            }

            var name = $("input[name=\'txtName\']").val();
            var email = $("input[name=\'txtEmail\']").val();
            var phone = $("input[name=\'txtPhone\']").val();
            var msg = $("textarea[name=\'txtMsg\']").val();
            $.ajax({
                url: "/contact/send-mail",
                type: "POST",
                beforeSend: function() {
                  $(\'.lds-ellipsis\').removeClass("d-none");
                  $(\'.btnContact .txt\').text(\'Enviando Mensagem\');
                  $(".btnContact").attr("disabled", true);
                },
                data: {
                    name,email,phone,msg
                },
                success: function(res) {
                     $(\'.lds-ellipsis\').addClass(\'d-none\')
                     $(\'.btnContact .txt\').text(\'Enviar Mensagem\');
                     $(\'.btnContact\').removeAttr("disabled");

                     if(res.status === 200){
                         toastr.success(\'Obrigado por entrar em contato conosco, vamos retornar em breve.\', \'Sucesso\');
                         clearForm();
                     }
                },
                error: function(e) {
                    $(\'.lds-ellipsis\').addClass(\'d-none\')
                    $(\'.btnContact .txt\').text(\'Enviar Mensagem\');
                   $(\'.btnContact\').removeAttr("disabled");
                    console.log(e)
                }
            })
    });


    function validateForm() {
        toastr.options.newestOnTop = true;
        toastr.options.progressBar = true;
        toastr.options.hideMethod = \'slideUp\';
        toastr.options.hideMethod  = \'fadeOut\';
        toastr.options.preventDuplicates = true;
        var name = $("input[name=\'txtName\']").val();
        var email = $("input[name=\'txtEmail\']").val();
        var phone = $("input[name=\'txtPhone\']").val();
        var msg = $("textarea[name=\'txtMsg\']").val();
        if(!name.length || !email.length || !phone.length || !msg.length){
               toastr.error(\'Por favor, preencha os campos para enviar sua mensagem\')
               return false
        }else if(!email.includes(\'@\')){
              toastr.warning(\'Por favor, digite um email válido.\')
              return false
        }else if(phone.length < 8){
              toastr.warning(\'Por favor, digite um telefone válido.\')
              return false
        }else{
            return true
        }
    }

    function clearForm(){
        $("input[name=\'txtName\']").val(\'\');
        $("input[name=\'txtEmail\']").val(\'\');
        $("input[name=\'txtPhone\']").val(\'\');
        $("textarea[name=\'txtMsg\']").val(\'\');
    }
',              'slug' => 'clinic',
                'active' => 1,
                'description' => 'Tenha mais produtividade na sua clinica usando Hclinic',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'id' => 2,
                'title' => 'Hclinic 2 - Gerencie sua clinica com eficiencia',
                'slug' => 'landings',
                'description' => 'Tenha mais produtividade na sua clinica usando Hclinic',
                'html' => '<!DOCTYPE html>
<html class="no-js" lang="en">

	<head>
		<title>TechLand</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

		<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
		<meta name="viewport" content="user-scalable=no, width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, minimal-ui" />

		<meta name="theme-color" content="#056EB9" />
		<meta name="msapplication-navbutton-color" content="#056EB9" />
		<meta name="apple-mobile-web-app-status-bar-style" content="#056EB9" />

		<!-- Favicons
		================================================== -->
		<link rel="shortcut icon" href="img/favicon.ico">
		<link rel="apple-touch-icon" href="img/apple-touch-icon.png">
		<link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png">

		<!-- Critical styles
		================================================== -->
		<link rel="stylesheet" href="vendor/oka6/templates/landings/css/critical.min.css" type="text/css">

		<!-- Load google font
		================================================== -->
		<script type="text/javascript">
			WebFontConfig = {
				google: { families: [ \'Nunito+Sans:400,400i,700,700i,800,800i,900,900i\', \'Quicksand:300,400,700\', \'Baloo+Bhaijaan\'] }
			};
			(function() {
				var wf = document.createElement(\'script\');
				wf.src = (\'https:\' == document.location.protocol ? \'https\' : \'http\') + \'://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js\';
				wf.type = \'text/javascript\';
				wf.async = \'true\';
				var s = document.getElementsByTagName(\'script\')[0];
				s.parentNode.insertBefore(wf, s);
			})();
		</script>

		<!-- Load other scripts
		================================================== -->
		<script type="text/javascript">
			var _html = document.documentElement,
				isTouch = ((\'ontouchstart\' in _html) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));

			_html.className = _html.className.replace("no-js","js");
			_html.classList.add( isTouch ? "touch" : "no-touch");
		</script>
		<script type="text/javascript" src="vendor/oka6/templates/landings/js/device.min.js"></script>
	</head>


	<body>
		<div id="app">
			<!-- start header -->
			<header id="top-bar" class="top-bar top-bar--dark" data-nav-anchor="true">
			    <div class="top-bar__inner">
			        <div class="container-fluid">
			            <div class="row align-items-center no-gutters">

			                <a class="top-bar__logo site-logo logo dark" href="index.html">
			                    Hclinic
			                </a>

			                <a id="top-bar__navigation-toggler" class="top-bar__navigation-toggler" href="javascript:void(0);">
			                    <span></span>
			                </a>

			                <div class="top-bar__collapse">
			                    <nav id="top-bar__navigation" class="top-bar__navigation" role="navigation">
			                        <ul>
			                            <li>
			                                <a class="nav-link active" href="#start-screen">Home</a>
			                            </li>

			                            <li>
			                                <a class="nav-link" href="#services">Services</a>
			                            </li>

			                            <li>
			                                <a class="nav-link" href="#pricing">Pricing</a>
			                            </li>

			                            <li>
			                                <a class="nav-link" href="#features">Features</a>
			                            </li>

			                            <li>
			                                <a class="nav-link" href="#team">Team</a>
			                            </li>


			                        </ul>
			                    </nav>

			                    <div id="top-bar__action" class="top-bar__action">
			                        <div class="d-xl-flex flex-xl-row flex-xl-wrap align-items-xl-center">


			                            <div class="top-bar__auth-btns">
			                                <a href="/login">Sign In</a>

			                                <a class="custom-btn custom-btn--medium custom-btn--style-3" href="/register">Get in Touch</a>
			                            </div>


			                        </div>
			                    </div>
			                </div>

			            </div>
			        </div>
			    </div>
			</header>


			<!-- end header -->

			<!-- start start screen -->
			<div id="start-screen" class="start-screen start-screen--full-height start-screen--style-1">
				<div class="start-screen__bg-container">
					<div class="start-screen__bg" style="background-image: url(
https://res.cloudinary.com/vargatt/image/upload/v1570849061/oka6/img/start-screen_img/start-screen_1/bg_1.png);background-position: center bottom;"></div>
				</div>

				<div class="start-screen__shapes  d-none d-lg-block">
					<img class="img-shape d-none d-xl-block" src="
https://res.cloudinary.com/vargatt/image/upload/v1570849061/oka6/img/start-screen_img/start-screen_1/shape_1.png" alt="demo" />

					<img class="img-shape" src="
https://res.cloudinary.com/vargatt/image/upload/v1570849061/oka6/img/start-screen_img/start-screen_1/shape_2.png" alt="demo" />
				</div>

				<div class="start-screen__content-container">
					<div class="start-screen__content__item align-items-center">
						<div class="container">
							<div class="row">
								<div class="col-12 col-md-10 col-lg-6">

									<h1><span>Tenha o Controle da sua clinica</span></h1>

									<p>
										Vimba, zebrafish yellow and black triplefin guitarfish Redfin perch tripod fish zebra lionfish, nase slickhead! Jewelfish angler Devario gray reef shark forehead brooder. Pike conger alewife sand lance
									</p>

									<div class="spacer py-2 py-sm-4"></div>

									<div class="d-sm-table">
										<div class="d-sm-table-cell  pb-5 pb-sm-0 pr-sm-8 pr-md-10">
											<a class="custom-btn custom-btn--big custom-btn--style-1" href="#">Discover</a>
										</div>

										<div class="d-sm-table-cell">
											<a class="play-btn" href="https://www.youtube.com/embed/1zG1iq9LZ2U" data-fancybox="start-screen-video"><span></span>Watch video</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- end start screen -->

			<!-- start main price -->
			<main role="main">
				<!-- Common styles
				================================================== -->
				<link rel="stylesheet" href="/vendor/oka6/templates/landings/css/style.min.css" type="text/css">

				<!-- Load lazyLoad scripts
				================================================== -->
				<script>
					(function(w, d){
						var m = d.getElementsByTagName(\'main\')[0],
							s = d.createElement("script"),
							v = !("IntersectionObserver" in w) ? "8.17.0" : "12.0.0",
							o = {
								elements_selector: ".lazy",
								threshold: 500,
								callback_enter: function (element) {

								},
								callback_load: function (element) {

								},
								callback_set: function (element) {

									oTimeout = setTimeout(function ()
									{
										clearTimeout(oTimeout);

										AOS.refresh();
									}, 1000);
								},
								callback_error: function(element) {
									element.src = "https://placeholdit.imgix.net/~text?txtsize=21&txt=Image%20not%20load&w=200&h=200";
								}
							};
						s.type = \'text/javascript\';
						s.async = false; // This includes the script as async. See the "recipes" section for more information about async loading of LazyLoad.
						s.src = "https://cdn.jsdelivr.net/npm/vanilla-lazyload@" + v + "/dist/lazyload.min.js";
						m.appendChild(s);
						// m.insertBefore(s, m.firstChild);
						w.lazyLoadOptions = o;
					}(window, document));
				</script>

				<!-- start section -->
				<section id="about" class="section section--no-pb">
					<div class="container">
						<div class="row flex-md-row-reverse justify-content-sm-center align-items-md-center">
							<div class="col-12 col-md-6">
								<div class="section-heading">
									<h6 class="__subtitle">About us</h6>

									<h2 class="__title">Awesome Things<br><span>About TechLand</span></h2>
								</div>

								<div class="spacer py-4"></div>

								<div>
									<p>
										<strong style="color: #555">Spaghetti eel crocodile icefish lake trout. Blacksmelt, tripod fish grunt mackerel vendace surfperch.</strong><br>
										Carpsucker surgeonfish streamer fish boga deepwater stingray.  Minnow arrowtooth eel darter Atlantic herring southern sandfish. Vimba, zebrafish yellow and black triplefin guitarfish Redfin perch
									</p>

									<p class="mt-9">
										<a class="custom-btn custom-btn--medium custom-btn--style-2" href="#">More About</a>
									</p>
								</div>
							</div>

							<div class="spacer py-4 d-md-none"></div>

							<div class="col-12 col-md-6  text-center text-md-left">

								<figure class="image-container js-tilt" data-tilt-speed="600" data-tilt-max="15" data-tilt-perspective="700">
									<img class="img-fluid lazy" width="381" height="424" src="https://res.cloudinary.com/vargatt/image/upload/v1570849061/oka6/img/blank.gif" data-src="https://res.cloudinary.com/vargatt/image/upload/v1570849061/oka6/img/" data-srcset="https://res.cloudinary.com/vargatt/image/upload/v1570849061/oka6/img/img_1.png 1x, https://res.cloudinary.com/vargatt/image/upload/v1570849061/oka6/img/ 2x" alt="demo" />
								</figure>

							</div>
						</div>
					</div>
				</section>
				<!-- end section -->

				<!-- start section -->
				<section id="services" class="section">
					<div class="container">
						<div class="section-heading section-heading--center">
							<h6 class="__subtitle">our services</h6>

							<h2 class="__title">What We <span>can do for you</span></h2>
						</div>

						<div class="spacer py-6"></div>

						<div class="row">
							<div class="col-12">

								<!-- start services -->
								<div class="services services--s6">
									<div class="__inner">
										<div class="row">
											<!-- start item -->
											<div class="col-12 col-sm-6 col-xl-3 d-sm-flex">
												<div class="__item __item--rounded __item--shadow js-tilt" data-tilt-speed="600" data-tilt-max="22" data-tilt-perspective="800">
													<div class="mb-5">
														<i class="__ico">
															<svg fill="#1065b2" width="60" height="60" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.586 262.957c-.016-.012-.031-.02-.047-.031-.09-.07-.18-.133-.27-.2A27.579 27.579 0 0 0 407.5 257h-25v-17.5c0-4.145-3.355-7.5-7.5-7.5s-7.5 3.355-7.5 7.5v50.645l-150 85.714-150-85.714V127.668a7.5 7.5 0 1 0-15 0V257h-25a27.57 27.57 0 0 0-16.793 5.742c-.078.059-.16.113-.238.176a.326.326 0 0 1-.047.031C3.8 268.2 0 276.055 0 284.5v200c0 8.445 3.8 16.3 10.414 21.543A27.582 27.582 0 0 0 27.5 512h380c6.078 0 12.04-2.055 16.828-5.77.059-.043.121-.085.18-.132a.792.792 0 0 0 .07-.051C431.2 500.8 435 492.945 435 484.5v-200c0-8.445-3.8-16.3-10.414-21.543zM382.5 272h16.758l-16.758 9.574zm-330 9.574L35.742 272H52.5zM19.738 494.29A12.417 12.417 0 0 1 15 484.5v-200c0-2.195.582-4.297 1.633-6.145L305.34 443.332a7.435 7.435 0 0 0 3.71.988 7.489 7.489 0 0 0 6.52-3.78 7.493 7.493 0 0 0-2.789-10.231L232.617 384.5l185.75-106.145A12.402 12.402 0 0 1 420 284.5v200c0 2.195-.582 4.297-1.633 6.145l-77.82-44.47a7.496 7.496 0 0 0-10.23 2.794 7.496 7.496 0 0 0 2.788 10.23L399.258 497H27.5c-2.848 0-5.531-.934-7.762-2.71zm0 0"/><path d="M441.637 91.355C444.027 87.723 447 83.207 447 77.5s-2.977-10.223-5.363-13.855c-1.157-1.754-2.356-3.57-2.668-4.758-.356-1.325-.23-3.582-.11-5.77.239-4.27.536-9.59-2.238-14.383-2.8-4.843-7.594-7.25-11.441-9.183-1.922-.969-3.914-1.969-4.836-2.895-.926-.922-1.926-2.914-2.895-4.84-1.933-3.847-4.34-8.636-9.187-11.441-4.79-2.77-10.11-2.473-14.383-2.234-2.184.12-4.441.246-5.77-.11-1.183-.316-3-1.511-4.757-2.668C379.722 2.977 375.203 0 369.5 0s-10.223 2.977-13.855 5.363c-1.754 1.157-3.57 2.356-4.758 2.668-1.324.356-3.582.23-5.77.11-4.273-.239-9.594-.536-14.383 2.238-4.843 2.8-7.25 7.594-9.183 11.441-.969 1.922-1.969 3.914-2.895 4.836-.922.926-2.914 1.926-4.84 2.895-3.847 1.933-8.636 4.34-11.441 9.187-.168.29-.324.586-.473.883H60a7.5 7.5 0 0 0-7.5 7.5V96a7.5 7.5 0 1 0 15 0V54.621h232.719c.078 1.668.09 3.246-.184 4.27-.316 1.183-1.512 3-2.668 4.757-2.39 3.63-5.367 8.149-5.367 13.852 0 5.707 2.977 10.227 5.367 13.855 1.156 1.754 2.352 3.57 2.668 4.758.352 1.325.227 3.586.106 5.77-.239 4.273-.536 9.594 2.238 14.383 1.402 2.421 3.3 4.238 5.332 5.687h-54.422l-22.617-22.617a9.763 9.763 0 0 0-8.399-2.727 9.755 9.755 0 0 0-7.136 5.176l-10.328 20.164H115.5a7.5 7.5 0 1 0 0 15h81.633l-10.75 21H115.5a7.5 7.5 0 1 0 0 15h63.203l-10.75 21H115.5a7.5 7.5 0 1 0 0 15h41.316c-.07.067-.144.125-.214.196l-36.524 36.52c-4.512 4.515-4.543 11.835-.101 16.398-4.645 6.476-7.157 14.226-7.157 22.367 0 10.289 4 19.957 11.266 27.222 7.273 7.274 16.945 11.278 27.227 11.278 8.148 0 15.902-2.52 22.37-7.164a11.63 11.63 0 0 0 8.145 3.312 11.64 11.64 0 0 0 8.258-3.414l2.348-2.348 26.511 26.516c4.39 4.387 10.153 6.578 15.914 6.578s11.528-2.191 15.914-6.578c4.25-4.25 6.59-9.902 6.59-15.91s-2.34-11.656-6.59-15.906l-26.52-26.52 2.352-2.351a11.648 11.648 0 0 0 2.98-5.102l104.4-53.438a9.774 9.774 0 0 0 5.16-7.152 9.765 9.765 0 0 0-2.73-8.379l-32.126-32.129H331.5c4.145 0 7.5-3.355 7.5-7.5a7.5 7.5 0 0 0-7.5-7.5h-42.21l-21-21h55.257c1.668 2.864 3.848 5.742 7.191 7.676 4.79 2.77 10.11 2.473 14.383 2.234 2.184-.12 4.442-.246 5.77.106 1.183.316 3 1.516 4.757 2.672 3.196 2.101 7.079 4.656 11.852 5.238V208a7.5 7.5 0 0 0 7.5 7.5c4.145 0 7.5-3.355 7.5-7.5v-57.805c.29-.187.574-.379.855-.562 1.754-1.156 3.57-2.352 4.758-2.668 1.328-.352 3.586-.227 5.77-.106 4.273.235 9.594.532 14.383-2.238 4.843-2.805 7.254-7.594 9.187-11.441.965-1.926 1.965-3.914 2.89-4.836.927-.926 2.915-1.926 4.84-2.895 3.848-1.933 8.641-4.34 11.442-9.187 2.773-4.79 2.477-10.11 2.238-14.383-.125-2.184-.25-4.442.106-5.77.312-1.183 1.511-3 2.668-4.754zM134.69 301.047c-4.43-4.434-6.87-10.332-6.87-16.617 0-4.106 1.046-8.047 2.995-11.516l32.008 32.008a23.348 23.348 0 0 1-11.511 3.012c-6.278 0-12.18-2.446-16.622-6.887zm-1.656-47.125l31.82-31.82 48.793 48.789-31.82 31.82zm107.133 64.703a7.44 7.44 0 0 1 2.195 5.3c0 2-.777 3.884-2.199 5.302-2.926 2.925-7.684 2.925-10.61 0l-26.515-26.512 10.61-10.61zm-16.152-58.578l-48.317-48.317 49.489-96.667 95.5 95.5zm205.09-176.942c-1.727 2.625-3.688 5.598-4.633 9.133-.973 3.64-.77 7.274-.59 10.477.12 2.16.285 5.12-.246 6.035-.559.969-3.239 2.313-5.192 3.297-2.847 1.43-6.078 3.055-8.71 5.687-2.637 2.637-4.258 5.864-5.688 8.711-.985 1.957-2.328 4.637-3.297 5.196-.914.527-3.879.363-6.035.242-3.203-.18-6.836-.38-10.477.594-3.535.945-6.511 2.902-9.133 4.628-1.957 1.29-4.394 2.895-5.605 2.895s-3.648-1.605-5.605-2.895c-2.625-1.726-5.598-3.687-9.133-4.632-2.164-.575-4.32-.739-6.39-.739-1.411 0-2.786.075-4.087.149-2.16.12-5.125.285-6.035-.246-.969-.559-2.313-3.239-3.297-5.192-1.43-2.847-3.055-6.078-5.687-8.71-2.637-2.637-5.864-4.258-8.711-5.688-1.957-.984-4.637-2.328-5.196-3.297-.527-.914-.363-3.875-.242-6.035.18-3.203.38-6.836-.594-10.477-.945-3.535-2.902-6.511-4.628-9.133-1.29-1.96-2.895-4.398-2.895-5.605 0-1.21 1.602-3.648 2.895-5.605 1.726-2.625 3.683-5.602 4.628-9.133.973-3.645.774-7.274.594-10.477-.078-1.375-.168-3.07-.094-4.36l.012-.109c.047-.683.145-1.254.324-1.57.563-.965 3.239-2.312 5.196-3.293 2.847-1.433 6.074-3.055 8.71-5.687 2.633-2.637 4.258-5.864 5.688-8.711.985-1.957 2.328-4.637 3.297-5.196.91-.53 3.875-.363 6.035-.242 3.203.18 6.836.38 10.477-.594 3.535-.945 6.508-2.902 9.133-4.632C365.852 16.605 368.289 15 369.5 15s3.648 1.605 5.605 2.895c2.625 1.726 5.598 3.687 9.133 4.632 3.645.97 7.27.77 10.477.59 2.16-.12 5.125-.285 6.035.246.969.559 2.313 3.239 3.297 5.192 1.43 2.847 3.055 6.078 5.687 8.71 2.637 2.637 5.864 4.258 8.711 5.688 1.957.984 4.637 2.328 5.196 3.297.527.914.363 3.875.242 6.035-.18 3.203-.38 6.836.594 10.477.945 3.535 2.902 6.511 4.628 9.133 1.29 1.96 2.895 4.398 2.895 5.605 0 1.21-1.605 3.648-2.895 5.605zm0 0"/><path d="M354.637 55.137c0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5zm44.726 44.726c0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5zm-12.457-50.379l-45.422 45.422a7.502 7.502 0 0 0 10.61 10.61l45.422-45.422a7.502 7.502 0 0 0 0-10.61 7.51 7.51 0 0 0-10.61 0zm0 0"/></svg>
														</i>
													</div>

													<h4 class="__title"><a href="#">Email Marketing</a></h4>

													<p>
														Spaghetti eel crocodile icefish lake trout. Blacksmelt, tripod fish grunt mackerel vendace surfperch carpsucker surgeonfish streamer fish boga deepwater stingray.
													</p>
												</div>
											</div>
											<!-- end item -->

											<!-- start item -->
											<div class="col-12 col-sm-6 col-xl-3 d-sm-flex">
												<div class="__item __item--rounded __item--shadow js-tilt" data-tilt-speed="600" data-tilt-max="22" data-tilt-perspective="800">
													<div class="mb-5">
														<i class="__ico">
															<svg fill="#3aba86" width="60" height="60" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M106.5 383.668c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5v-80.18c.152 0 .305.008.457.008 5.168 0 9.781-.71 13.203-1.453a8.514 8.514 0 0 0 6.692-8.457 8.52 8.52 0 0 0-7-8.211c-3.735-.668-6.274-2.27-7.989-5.035-3.656-5.895-3.035-15.695-1.875-22.36h39.95c25.398 0 46.062-20.664 46.062-46.062v-92.875c0-25.398-20.664-46.063-46.063-46.063H121.5V61h38.168c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5H121.5v-8.5c0-12.406 10.094-22.5 22.5-22.5h224c12.406 0 22.5 10.094 22.5 22.5V46H191.668a7.5 7.5 0 1 0 0 15H390.5v35c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5V37.5C405.5 16.82 388.68 0 368 0H144c-20.68 0-37.5 16.82-37.5 37.5v35.48H46.062C20.665 72.98 0 93.645 0 119.043v92.875c0 25.398 20.664 46.062 46.063 46.062h30.765c2.164 17.028 8.371 29.524 18.5 37.204 3.574 2.71 7.363 4.597 11.172 5.89zM91.152 250.035a7.499 7.499 0 0 0-7.488-7.055H46.062C28.934 242.98 15 229.047 15 211.918v-92.875c0-17.129 13.934-31.063 31.063-31.063h118.874c17.13 0 31.063 13.934 31.063 31.063v92.875c0 17.129-13.934 31.062-31.063 31.062H119a7.498 7.498 0 0 0-7.191 5.38c-.73 2.468-6.778 24.269 1.898 39.206-3.227-.789-6.426-2.144-9.312-4.336-7.832-5.937-12.29-17.105-13.243-33.195zM236 489h40c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5h-40c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5zm0 0"/><path d="M155 152.578c0-17.437-12.41-31.098-28.25-31.098-9.441 0-16.402 3.887-20.75 7.372-4.348-3.485-11.309-7.372-20.75-7.372-15.84 0-28.25 13.66-28.25 31.098 0 11.067 5.648 32.606 43.492 52.543a11.789 11.789 0 0 0 5.508 1.363c1.895 0 3.785-.457 5.512-1.363C149.352 185.184 155 163.645 155 152.578zm-83 0c0-7.805 4.645-16.098 13.25-16.098 6.23 0 10.531 3.036 13.04 5.583 2.015 2.042 4.823 3.21 7.71 3.21s5.695-1.171 7.71-3.21c2.509-2.547 6.81-5.583 13.04-5.583 8.605 0 13.25 8.293 13.25 16.098 0 12.79-12.367 26.762-34 38.48-21.633-11.722-34-25.69-34-38.48zm393.938 42.402H405.5v-67.316c0-4.14-3.36-7.5-7.5-7.5s-7.5 3.36-7.5 7.5v67.316h-43.438c-25.398 0-46.062 20.665-46.062 46.063v92.871c0 25.402 20.664 46.066 46.063 46.066h39.94c1.134 6.602 1.774 16.47-1.855 22.34-1.714 2.778-4.257 4.383-8 5.055a8.517 8.517 0 0 0-7 8.207 8.518 8.518 0 0 0 6.692 8.461c3.422.742 8.031 1.45 13.203 1.45.148 0 .305-.005.457-.005V451h-269v-35.168a7.5 7.5 0 1 0-15 0V474.5c0 20.68 16.82 37.5 37.5 37.5h224c20.676 0 37.5-16.82 37.5-37.5v-51.426c3.809-1.293 7.594-3.18 11.168-5.89 10.133-7.68 16.34-20.176 18.5-37.204h30.766c25.402 0 46.066-20.664 46.066-46.062v-92.875c0-25.398-20.664-46.063-46.063-46.063zM390.5 474.5c0 12.406-10.094 22.5-22.5 22.5H144c-12.406 0-22.5-10.094-22.5-22.5V466h269zM497 333.918c0 17.129-13.934 31.062-31.063 31.062h-37.605a7.498 7.498 0 0 0-7.484 7.055c-.957 16.09-5.41 27.262-13.243 33.195-2.886 2.192-6.085 3.547-9.312 4.336 8.676-14.941 2.629-36.742 1.898-39.207A7.498 7.498 0 0 0 393 364.98h-45.937c-17.13 0-31.063-13.933-31.063-31.062v-92.875c0-17.129 13.934-31.063 31.063-31.063h118.875c17.128 0 31.062 13.934 31.062 31.063zm0 0"/><path d="M428.676 274.93A28.343 28.343 0 0 0 435 257.055c0-15.715-12.785-28.5-28.5-28.5s-28.5 12.785-28.5 28.5c0 6.765 2.371 12.98 6.324 17.875C372.254 281.3 364 293.977 364 308.547v.664c0 10.113 8.23 18.344 18.348 18.344h48.308c10.114 0 18.344-8.23 18.344-18.344v-.664c0-14.57-8.254-27.246-20.324-33.617zM406.5 243.555c7.445 0 13.5 6.058 13.5 13.5 0 7.445-6.055 13.5-13.5 13.5s-13.5-6.055-13.5-13.5c0-7.442 6.055-13.5 13.5-13.5zM434 309.21c0 1.844-1.5 3.344-3.348 3.344h-48.308A3.348 3.348 0 0 1 379 309.21v-.664c0-12.676 10.313-22.992 22.992-22.992h9.016c12.68 0 22.992 10.316 22.992 22.992zM348.11 92.648h-106a7.5 7.5 0 0 0-7.5 7.5 7.5 7.5 0 0 0 7.5 7.5h106c4.14 0 7.5-3.359 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5zm0 30h-106a7.5 7.5 0 0 0-7.5 7.5 7.5 7.5 0 0 0 7.5 7.5h106c4.14 0 7.5-3.359 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5zm7.5 37.5c0-4.14-3.36-7.5-7.5-7.5h-106a7.5 7.5 0 0 0-7.5 7.5 7.5 7.5 0 0 0 7.5 7.5h106c4.14 0 7.5-3.359 7.5-7.5zm-81.52 151.68c0-4.14-3.36-7.5-7.5-7.5h-106a7.5 7.5 0 0 0-7.5 7.5v30a7.5 7.5 0 0 0 7.5 7.5h106c4.14 0 7.5-3.36 7.5-7.5zm-15 22.5h-91v-15h91zm7.5 30h-106a7.5 7.5 0 1 0 0 15h106c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5zm0 0"/></svg>
														</i>
													</div>

													<h4 class="__title">Social Media</h4>

													<p>
														Blacksmelt, tripod fish grunt mackerel vendace surfperch carpsucker surgeonfish streamer fish boga deepwater stingray. Spaghetti eel crocodile icefish lake
													</p>
												</div>
											</div>
											<!-- end item -->

											<!-- start item -->
											<div class="col-12 col-sm-6 col-xl-3 d-sm-flex">
												<div class="__item __item--rounded __item--shadow js-tilt" data-tilt-speed="600" data-tilt-max="22" data-tilt-perspective="800">
													<div class="mb-5">
														<i class="__ico">
															<svg fill="#f2ae3b" width="60" height="60" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M31 47c0 12.406 10.094 22.5 22.5 22.5S76 59.406 76 47 65.906 24.5 53.5 24.5 31 34.594 31 47zm30 0c0 4.137-3.363 7.5-7.5 7.5S46 51.137 46 47s3.363-7.5 7.5-7.5S61 42.863 61 47zm30 0c0 12.406 10.094 22.5 22.5 22.5S136 59.406 136 47s-10.094-22.5-22.5-22.5S91 34.594 91 47zm30 0c0 4.137-3.363 7.5-7.5 7.5S106 51.137 106 47s3.363-7.5 7.5-7.5 7.5 3.363 7.5 7.5zm30 0c0 12.406 10.094 22.5 22.5 22.5S196 59.406 196 47s-10.094-22.5-22.5-22.5S151 34.594 151 47zm30 0c0 4.137-3.363 7.5-7.5 7.5S166 51.137 166 47s3.363-7.5 7.5-7.5 7.5 3.363 7.5 7.5zm0 0"/><path d="M371.5 0H7.5A7.5 7.5 0 0 0 0 7.5v440.168c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5V95h302.25c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5H15V15h349v65h-14.5c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5H364v402H15v-16.5a7.5 7.5 0 1 0-15 0v24a7.5 7.5 0 0 0 7.5 7.5h364a7.5 7.5 0 0 0 7.5-7.5V7.5a7.5 7.5 0 0 0-7.5-7.5zm0 0"/><path d="M189.5 326c49.352 0 89.5-40.148 89.5-89.5S238.852 147 189.5 147 100 187.148 100 236.5s40.148 89.5 89.5 89.5zm0-164c41.078 0 74.5 33.422 74.5 74.5S230.578 311 189.5 311 115 277.578 115 236.5s33.422-74.5 74.5-74.5zm0 0"/><path d="M65.61 215.004C61.573 221.133 57 228.078 57 236.5s4.574 15.367 8.61 21.496c2.43 3.691 4.722 7.176 5.535 10.219.875 3.277.636 7.586.382 12.148-.402 7.207-.855 15.375 3.211 22.403 4.125 7.129 11.485 10.828 17.98 14.093 4.028 2.024 7.837 3.938 10.16 6.262 2.325 2.32 4.235 6.129 6.263 10.16 3.261 6.492 6.96 13.856 14.09 17.98a23.159 23.159 0 0 0 3.769 1.731V480.5a7.502 7.502 0 0 0 11.387 6.414L189.5 455.93l51.11 30.984A7.517 7.517 0 0 0 244.5 488a7.502 7.502 0 0 0 7.5-7.5v-88.375a7.5 7.5 0 1 0-15 0v75.059l-15-9.094V354.684c3.168-.657 7.152-.446 11.363-.211 1.192.066 2.407.132 3.637.18v5.097a7.5 7.5 0 1 0 15 0v-6.758a22.981 22.981 0 0 0 3.77-1.73c7.128-4.125 10.828-11.485 14.09-17.98 2.023-4.028 3.937-7.837 6.261-10.16 2.32-2.321 6.129-4.235 10.16-6.263 6.496-3.261 13.856-6.96 17.98-14.09 4.067-7.03 3.614-15.199 3.212-22.406-.254-4.562-.493-8.87.382-12.148.813-3.043 3.106-6.528 5.536-10.215 4.035-6.133 8.609-13.078 8.609-21.5s-4.574-15.367-8.61-21.496c-2.43-3.692-4.722-7.176-5.535-10.215-.875-3.277-.636-7.59-.382-12.152.402-7.203.855-15.371-3.211-22.403-4.125-7.129-11.485-10.828-17.98-14.09-4.028-2.027-7.837-3.94-10.16-6.265-2.325-2.32-4.235-6.129-6.263-10.16-3.261-6.492-6.96-13.856-14.09-17.98-7.03-4.067-15.199-3.61-22.406-3.212-4.562.254-8.87.496-12.148-.382-3.043-.813-6.528-3.106-10.219-5.536-6.129-4.035-13.074-8.609-21.496-8.609s-15.367 4.574-21.496 8.61c-3.692 2.43-7.176 4.722-10.219 5.535-3.277.875-7.59.636-12.148.382-7.207-.402-15.375-.855-22.407 3.211-7.128 4.125-10.828 11.485-14.09 17.98-2.023 4.028-3.937 7.837-6.261 10.16-2.32 2.321-6.129 4.235-10.16 6.263-6.496 3.261-13.856 6.96-17.98 14.09-4.067 7.03-3.614 15.199-3.212 22.406.254 4.562.493 8.87-.382 12.148-.813 3.043-3.106 6.527-5.536 10.219zM142 354.652c1.23-.047 2.445-.113 3.637-.18 4.21-.234 8.195-.445 11.363.212V458.09l-15 9.094zm43.613 86.094L172 448.996V362.97c5.133 3.183 10.855 6.031 17.5 6.031s12.367-2.848 17.5-6.031v86.027l-13.613-8.25a7.51 7.51 0 0 0-7.774 0zM78.137 223.25c2.98-4.523 6.058-9.2 7.5-14.59 1.496-5.594 1.175-11.32.867-16.855-.313-5.61-.606-10.907 1.219-14.063 1.882-3.25 6.668-5.652 11.73-8.199 4.918-2.469 10-5.023 14.031-9.059 4.036-4.03 6.59-9.117 9.059-14.03 2.547-5.067 4.95-9.852 8.2-11.731 3.155-1.825 8.452-1.528 14.058-1.22 5.539.31 11.265.63 16.86-.866 5.386-1.442 10.066-4.52 14.589-7.5 4.797-3.157 9.324-6.137 13.25-6.137s8.453 2.98 13.25 6.137c4.523 2.98 9.2 6.058 14.59 7.5 5.594 1.496 11.32 1.175 16.855.867 5.61-.309 10.907-.606 14.059 1.219 3.25 1.879 5.656 6.664 8.2 11.73 2.472 4.914 5.026 10 9.058 14.031 4.035 4.036 9.12 6.59 14.035 9.063 5.066 2.543 9.851 4.945 11.73 8.195 1.825 3.156 1.532 8.453 1.22 14.059-.31 5.539-.63 11.265.866 16.86 1.442 5.39 4.52 10.066 7.5 14.589 3.157 4.797 6.137 9.324 6.137 13.25s-2.98 8.453-6.137 13.25c-2.98 4.523-6.058 9.2-7.5 14.59-1.496 5.594-1.176 11.32-.867 16.855.313 5.61.606 10.907-1.219 14.063-1.882 3.25-6.668 5.652-11.73 8.199-4.918 2.469-10 5.023-14.031 9.059-4.036 4.03-6.59 9.117-9.059 14.03-2.547 5.067-4.95 9.852-8.2 11.731-3.155 1.828-8.452 1.532-14.058 1.22-5.539-.31-11.265-.63-16.86.866-2.222.594-4.316 1.477-6.331 2.504l-.117.059c-2.836 1.457-5.52 3.21-8.141 4.937-4.797 3.157-9.324 6.137-13.25 6.137s-8.453-2.98-13.25-6.137c-2.621-1.726-5.305-3.48-8.137-4.937l-.117-.059c-2.02-1.031-4.113-1.91-6.336-2.504-3.262-.87-6.566-1.125-9.855-1.125-2.352 0-4.692.13-7 .258-5.61.313-10.907.61-14.059-1.219-3.25-1.879-5.656-6.664-8.2-11.73-2.472-4.914-5.026-10-9.058-14.031-4.035-4.036-9.12-6.59-14.035-9.063-5.066-2.543-9.851-4.945-11.73-8.195-1.825-3.156-1.532-8.453-1.22-14.059.31-5.539.63-11.265-.866-16.86-1.442-5.39-4.52-10.066-7.5-14.589C74.98 244.953 72 240.426 72 236.5s2.98-8.453 6.137-13.25zm0 0"/><path d="M141.73 241.29l35.633 28.487a7.48 7.48 0 0 0 4.68 1.641c2.07 0 4.129-.852 5.605-2.512l48.82-54.84a7.497 7.497 0 0 0-.613-10.586 7.502 7.502 0 0 0-10.59.614l-44.09 49.523-30.081-24.047a7.499 7.499 0 0 0-10.54 1.176 7.5 7.5 0 0 0 1.176 10.543zm0 0"/></svg>
														</i>
													</div>

													<h4 class="__title">Guarantee of Quality</h4>

													<p>
														Vendace surfperch carpsucker surgeonfish streamer fish boga deepwater stingray. Minnow arrowtooth eel darter
													</p>
												</div>
											</div>
											<!-- end item -->

											<!-- start item -->
											<div class="col-12 col-sm-6 col-xl-3 d-sm-flex">
												<div class="__item __item--rounded __item--shadow js-tilt" data-tilt-speed="600" data-tilt-max="22" data-tilt-perspective="800">
													<div class="mb-5">
														<i class="__ico">
															<svg fill="#ff478e" width="60" height="60" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M489.5 467H465V308.054c0-.296-.023-.585-.055-.874l-.035-.23a7.566 7.566 0 0 0-.133-.673l-.058-.23a6.752 6.752 0 0 0-.25-.75l-.035-.098a7.245 7.245 0 0 0-.403-.82l-.023-.05-42.613-74.388a1.491 1.491 0 0 1-.063-.105c-1.969-3.305-5.27-5.281-8.832-5.281s-6.863 1.976-8.832 5.28a1.64 1.64 0 0 1-.063.106l-42.613 74.387c-.012.016-.015.035-.023.05-.153.267-.285.54-.403.821l-.035.098a6.752 6.752 0 0 0-.308.98 7.566 7.566 0 0 0-.133.672l-.035.23c-.032.29-.055.579-.055.876v72.113c0 4.14 3.355 7.5 7.5 7.5s7.5-3.36 7.5-7.5v-64.61h15V467h-15v-54.832c0-4.145-3.355-7.5-7.5-7.5s-7.5 3.355-7.5 7.5V467h-51.5V254.5c0-.297-.023-.59-.055-.879l-.035-.226a7.298 7.298 0 0 0-.133-.672 7.1 7.1 0 0 0-.309-.984l-.034-.094a7.245 7.245 0 0 0-.403-.82l-.023-.055-42.613-74.383a1.492 1.492 0 0 1-.063-.106c-1.969-3.308-5.27-5.281-8.832-5.281s-6.863 1.973-8.832 5.281c-.02.035-.04.07-.063.106l-42.613 74.383c-.012.02-.015.035-.023.054a6.936 6.936 0 0 0-.403.82l-.035.098c-.097.242-.18.492-.25.75a2.21 2.21 0 0 0-.058.23 7.298 7.298 0 0 0-.133.673l-.035.226c-.032.29-.055.582-.055.879v13.668c0 4.14 3.355 7.5 7.5 7.5s7.5-3.36 7.5-7.5V262h15v205h-15V300.168c0-4.145-3.355-7.5-7.5-7.5s-7.5 3.355-7.5 7.5V467H152v-22.832c0-4.145-3.355-7.5-7.5-7.5s-7.5 3.355-7.5 7.5V467h-15v-94.844h15v40.176c0 4.145 3.355 7.5 7.5 7.5s7.5-3.355 7.5-7.5v-47.68c0-.297-.023-.586-.055-.875l-.035-.23a7.854 7.854 0 0 0-.441-1.652l-.035-.094a6.99 6.99 0 0 0-.403-.824c-.008-.016-.015-.036-.023-.051l-42.613-74.387a1.491 1.491 0 0 1-.063-.105c-1.969-3.305-5.27-5.282-8.832-5.282s-6.863 1.977-8.832 5.282c-.02.035-.04.07-.063.105l-42.613 74.387c-.012.015-.015.035-.023.05a7.41 7.41 0 0 0-.403.82l-.035.099a7.338 7.338 0 0 0-.308.98 7.854 7.854 0 0 0-.133.672l-.035.23a7.92 7.92 0 0 0-.055.875V467H22.5C10.094 467 0 477.094 0 489.5S10.094 512 22.5 512h467c12.406 0 22.5-10.094 22.5-22.5S501.906 467 489.5 467zM435 315.555h15V467h-15zm-54.559-15l32.059-55.957 32.059 55.957zm24.559 15h15V467h-15zM278.5 262h15v205h-15zm-54.559-15L256 191.04 288.059 247zm24.559 15h15v205h-15zM107 467H92v-94.844h15zm-7.5-165.805l32.059 55.961H67.44zM62 372.156h15V467H62zM489.5 497h-467c-4.137 0-7.5-3.363-7.5-7.5s3.363-7.5 7.5-7.5h467c4.137 0 7.5 3.363 7.5 7.5s-3.363 7.5-7.5 7.5zm0 0"/><path d="M99.5 206c20.68 0 37.5-16.82 37.5-37.5a37.27 37.27 0 0 0-4.516-17.828l100.172-83.856C239.066 71.934 247.18 75 256 75c11.234 0 21.328-4.973 28.203-12.828l92.656 52.683A37.415 37.415 0 0 0 375 126.5c0 20.68 16.82 37.5 37.5 37.5s37.5-16.82 37.5-37.5S433.18 89 412.5 89c-11.234 0-21.328 4.973-28.203 12.828L291.64 49.145A37.415 37.415 0 0 0 293.5 37.5C293.5 16.82 276.68 0 256 0s-37.5 16.82-37.5 37.5a37.27 37.27 0 0 0 4.516 17.828l-100.172 83.856C116.434 134.066 108.32 131 99.5 131 78.82 131 62 147.82 62 168.5S78.82 206 99.5 206zm313-102c12.406 0 22.5 10.094 22.5 22.5S424.906 149 412.5 149 390 138.906 390 126.5s10.094-22.5 22.5-22.5zM256 15c12.406 0 22.5 10.094 22.5 22.5S268.406 60 256 60s-22.5-10.094-22.5-22.5S243.594 15 256 15zM99.5 146c12.406 0 22.5 10.094 22.5 22.5S111.906 191 99.5 191 77 180.906 77 168.5 87.094 146 99.5 146zm0 0"/></svg>
														</i>
													</div>

													<h4 class="__title">Business Statistic</h4>

													<p>
														Blacksmelt, tripod fish grunt mackerel vendace surfperch carpsucker surgeonfish streamer fish boga deepwater stingray. Spaghetti eel crocodile icefish lake trout.
													</p>
												</div>
											</div>
											<!-- end item -->
										</div>
									</div>
								</div>
								<!-- end services -->

							</div>
						</div>
					</div>
				</section>

				<!-- start section -->
				<section id="features" class="section section--no-pt">
					<div class="container">
						<div class="row align-items-md-center">
							<div class="col-12 col-lg-6">
								<div class="section-heading">
									<h6 class="__subtitle">Features</h6>

									<h2 class="__title">Important Features<br><span>for Digital Marketing</span></h2>
								</div>

								<div class="spacer py-4"></div>

								<div>
									<p>
										<strong style="color: #555">Spaghetti eel crocodile icefish lake trout. Blacksmelt, tripod fish grunt mackerel vendace surfperch.</strong><br>
										Carpsucker surgeonfish streamer fish boga deepwater stingray. Minnow arrowtooth eel darter Atlantic herring southern sandfish.
									</p>

									<ul class="check-list my-md-6">
										<li><i class="ico-checked fontello-ok"></i>Web site Analysis</li>
										<li><i class="ico-checked fontello-ok"></i>Content Optimization</li>
										<li><i class="ico-checked fontello-ok"></i>Free Optimization</li>
									</ul>

									<p class="mt-9">
										<a class="custom-btn custom-btn--medium custom-btn--style-2" href="#">Read More</a>
									</p>
								</div>
							</div>

							<div class="spacer py-4 d-lg-none"></div>

							<div class="col-12 col-lg-6  text-center text-lg-right">

								<figure class="image-container js-tilt" data-tilt-speed="600" data-tilt-max="15" data-tilt-perspective="700">
									<img class="img-fluid lazy" width="520" height="507" src="https://res.cloudinary.com/vargatt/image/upload/v1570849061/oka6/img/blank.gif" data-src="https://res.cloudinary.com/vargatt/image/upload/v1570849061/oka6/img/img_4.png" alt="demo" />
								</figure>

							</div>
						</div>
					</div>
				</section>
				<!-- end section -->

				<!-- start section -->
				<section class="section section--no-pt">
					<div class="container">
						<div class="row flex-lg-row-reverse align-items-lg-center">
							<div class="col-12 col-lg-6">
								<div class="section-heading">
									<h6 class="__subtitle">Features</h6>

									<h2 class="__title">Take a New Look<br><span>in Your Website Today</span></h2>
								</div>

								<div class="spacer py-4"></div>

								<div>
									<p>
										Atlantic herring southern sandfish. Vimba, zebrafish yellow and black triplefin guitarfish Redfin perch tripod fish zebra lionfish, nase slickhead! Jewelfish angler Devario gray reef shark forehead brooder.
									</p>

									<!-- start counter -->
									<div class="counter counter--s2">
										<div class="__inner">
											<div class="row">
												<!-- start item -->
												<div class="col-12 col-sm-6 col-md-4 col-lg-auto">
													<div class="__item">
														<div class="d-table">
															<div class="d-table-cell align-middle">
																<i class="__ico">
																	<svg fill="#ffba33" width="65" height="65" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M53.5 24.5C41.094 24.5 31 34.594 31 47s10.094 22.5 22.5 22.5S76 59.406 76 47 65.906 24.5 53.5 24.5zm0 30c-4.137 0-7.5-3.363-7.5-7.5s3.363-7.5 7.5-7.5S61 42.863 61 47s-3.363 7.5-7.5 7.5zm60 15c12.406 0 22.5-10.094 22.5-22.5s-10.094-22.5-22.5-22.5S91 34.594 91 47s10.094 22.5 22.5 22.5zm0-30c4.137 0 7.5 3.363 7.5 7.5s-3.363 7.5-7.5 7.5-7.5-3.363-7.5-7.5 3.363-7.5 7.5-7.5zM196 47c0-12.406-10.094-22.5-22.5-22.5S151 34.594 151 47s10.094 22.5 22.5 22.5S196 59.406 196 47zm-30 0c0-4.137 3.363-7.5 7.5-7.5s7.5 3.363 7.5 7.5-3.363 7.5-7.5 7.5-7.5-3.363-7.5-7.5zm205.5 81.5a7.5 7.5 0 0 0-7.5 7.5v361H15v-17.25c0-4.14-3.355-7.5-7.5-7.5s-7.5 3.36-7.5 7.5v24.75a7.5 7.5 0 0 0 7.5 7.5h364a7.5 7.5 0 0 0 7.5-7.5V136a7.5 7.5 0 0 0-7.5-7.5zm0 0"/><path d="M371.5 0H7.5A7.5 7.5 0 0 0 0 7.5v440c0 4.14 3.355 7.5 7.5 7.5s7.5-3.36 7.5-7.5V95h46.5a7.5 7.5 0 1 0 0-15H15V15h349v65H93.562c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5H364v8.75c0 4.14 3.355 7.5 7.5 7.5s7.5-3.36 7.5-7.5V7.5a7.5 7.5 0 0 0-7.5-7.5zm0 0"/><path d="M46.145 170.32c-1.563 4.84-.258 10.043 3.406 13.582l12.047 11.645-2.844 16.422c-.863 4.992 1.148 9.953 5.246 12.945a13.274 13.274 0 0 0 14.047 1.059L93 218.18l14.953 7.793a13.386 13.386 0 0 0 6.184 1.523c2.77 0 5.515-.867 7.86-2.582 4.1-2.992 6.108-7.953 5.245-12.945l-2.84-16.422 12.047-11.645c3.664-3.539 4.965-8.746 3.403-13.582-1.57-4.86-5.696-8.332-10.766-9.062l-16.703-2.406-7.457-14.98C102.66 139.323 98.094 136.5 93 136.5s-9.664 2.824-11.926 7.367l-7.46 14.985-16.7 2.406c-5.07.73-9.195 4.203-10.77 9.062zm30.476 3.254a13.314 13.314 0 0 0 10.024-7.234L93 153.57l6.355 12.77a13.308 13.308 0 0 0 10.02 7.234l14.078 2.028-10.144 9.804a13.227 13.227 0 0 0-3.848 11.77l2.406 13.926-12.699-6.622a13.355 13.355 0 0 0-12.344 0l-12.699 6.622 2.41-13.926a13.22 13.22 0 0 0-3.851-11.77l-10.145-9.804zm256.234-3.254c-1.57-4.86-5.699-8.332-10.77-9.062l-16.698-2.406-7.461-14.98c-2.262-4.548-6.832-7.372-11.926-7.372s-9.664 2.824-11.926 7.371l-7.46 14.98-16.7 2.407c-5.07.73-9.195 4.203-10.77 9.062-1.562 4.84-.257 10.043 3.407 13.582l12.047 11.645-2.844 16.422c-.863 4.992 1.148 9.953 5.246 12.945a13.274 13.274 0 0 0 14.047 1.059L286 218.18l14.953 7.793a13.386 13.386 0 0 0 6.184 1.523c2.77 0 5.515-.867 7.86-2.582 4.1-2.992 6.108-7.953 5.245-12.945l-2.84-16.422 12.047-11.645c3.664-3.539 4.969-8.742 3.406-13.582zm-26.542 15.082a13.237 13.237 0 0 0-3.852 11.774l2.41 13.922-12.7-6.618a13.355 13.355 0 0 0-12.343 0l-12.7 6.622 2.411-13.926a13.227 13.227 0 0 0-3.851-11.774l-10.145-9.8 14.078-2.028a13.301 13.301 0 0 0 10.02-7.234l6.355-12.77 6.356 12.77a13.314 13.314 0 0 0 10.023 7.234l14.078 2.028zm-69.958-47.082c-1.57-4.86-5.699-8.332-10.77-9.062l-16.698-2.406-7.461-14.98c-2.262-4.548-6.832-7.372-11.926-7.372s-9.664 2.824-11.926 7.371l-7.46 14.98-16.7 2.407c-5.07.73-9.195 4.203-10.77 9.062-1.562 4.84-.257 10.043 3.407 13.582l12.047 11.645-2.844 16.422c-.863 4.992 1.148 9.953 5.246 12.945a13.274 13.274 0 0 0 14.047 1.059l14.953-7.793 14.953 7.793a13.394 13.394 0 0 0 6.188 1.527c2.765 0 5.511-.871 7.855-2.582 4.102-2.996 6.11-7.957 5.246-12.95l-2.84-16.421 12.047-11.645c3.664-3.539 4.969-8.742 3.406-13.582zm-26.542 15.082a13.237 13.237 0 0 0-3.852 11.774l2.41 13.922-12.7-6.618a13.355 13.355 0 0 0-12.343 0l-12.7 6.622 2.411-13.926a13.227 13.227 0 0 0-3.851-11.774l-10.145-9.8 14.078-2.028a13.301 13.301 0 0 0 10.02-7.234l6.359-12.77 6.355 12.77a13.314 13.314 0 0 0 10.02 7.234l14.078 2.028zM129.73 254.59v25.402c0 2.969-6.02 7.055-10.406 7.055l-34.812.066c-9.883 0-17.926 8.262-17.926 18.422 0 3.637 1.02 7.063 2.816 9.953-3.09 3.16-4.789 7.246-4.789 11.89 0 4.927 1.899 9.49 5.067 12.84-1.184 2.372-1.996 5.337-1.996 9.005 0 8.957 6.25 16.437 14.5 18.086a20.822 20.822 0 0 0-.098 2.046c0 4.235 1.418 8.079 4.105 11.125 3.137 3.551 7.77 5.59 12.704 5.59h79.328c2.195 0 4.289-.449 6.214-1.234a11.233 11.233 0 0 0 6.958 2.418h22.417c3.973 0 7.465-2.07 9.481-5.184h83.59c4.144 0 7.5-3.355 7.5-7.5v-70.008c0-4.144-3.356-7.5-7.5-7.5h-82.711c-1.738-4.003-5.727-6.808-10.36-6.808h-22.417c-2.208 0-4.262.644-6.004 1.742-2.66-7.332-7.29-18.652-13.461-28.219-2.77-4.289-4.235-9.422-4.235-14.847v-10.5c0-6.72-5.367-12.184-11.968-12.184h-4.868c-10.515 0-21.129 8.766-21.129 28.344zm169.657 112.484h-74.282v-55.012h74.282zm-104.282-61.82h15v67h-15zm-50.375-25.262V254.59c0-7.98 2.465-13.344 6.133-13.344h1.836v7.688c0 8.316 2.293 16.265 6.633 22.98 6.438 9.98 11.172 22.828 12.906 27.887a18.425 18.425 0 0 0 5.965 8.476c1.192.946 1.902 2.48 1.902 4.114v56.351c0 1.262-.859 2.328-1.882 2.328H98.895c-.606 0-1.18-.203-1.458-.515-.132-.153-.351-.403-.351-1.196 0-.941.187-1.66.55-2.125a8.947 8.947 0 0 0 .993-9.492 9.005 9.005 0 0 0-8.149-5.094h-4.87c-1.614 0-2.926-1.535-2.926-3.421 0-2.239.808-3.036 1.515-3.485a8.297 8.297 0 0 0 3.746-8.27 8.29 8.29 0 0 0-6.054-6.753c-1.13-.301-2.278-1.543-2.278-3.336 0-.551 0-2.016 3.848-3.09a8.009 8.009 0 0 0 5.89-7.598c.075-3.593-2.18-6.75-5.609-7.855-1.035-.332-2.152-1.512-2.152-3.305 0-1.887 1.312-3.422 2.937-3.422l34.813-.066c11.742 0 25.39-9.633 25.39-22.055zM307 425a7.5 7.5 0 0 0-7.5-7.5h-220a7.5 7.5 0 1 0 0 15h220a7.5 7.5 0 0 0 7.5-7.5zM79.5 450.832a7.5 7.5 0 0 0-7.5 7.5c0 4.145 3.355 7.5 7.5 7.5h56.078c4.145 0 7.5-3.355 7.5-7.5a7.5 7.5 0 0 0-7.5-7.5zm0 0"/></svg>
																</i>
															</div>

															<div class="d-table-cell align-middle">
																<div class="__content">
																	<div class="__count js-count" data-from="0" data-to="285">0</div>
																	<div class="__title">Created Projects</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<!-- end item -->

												<!-- start item -->
												<div class="col-12 col-sm-6 col-md-4 col-lg-auto">
													<div class="__item">
														<div class="d-table">
															<div class="d-table-cell align-middle">
																<i class="__ico  mr-3">
																	<svg fill="#ff5252" width="65" height="65" viewBox="-11 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M112.8 345.492c-.097.055-9.98 5.32-21.3 5.32-11.305 0-21.133-5.226-21.32-5.328a7.497 7.497 0 0 0-10.168 2.961 7.503 7.503 0 0 0 2.953 10.192c.531.293 13.219 7.18 28.535 7.18s28.004-6.887 28.535-7.18a7.508 7.508 0 0 0 2.957-10.192 7.509 7.509 0 0 0-10.191-2.953zm-28.116-25.019a7.5 7.5 0 1 1-15 0c0-4.145 3.355-7.5 7.5-7.5a7.5 7.5 0 0 1 7.5 7.5zm28.632 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 7.5-7.5c4.145 0 7.5 3.355 7.5 7.5zm0 0"></path><path d="M478.672 432.23a7.5 7.5 0 0 0-13.3 6.934C471.097 450.141 474 462.027 474 474.5v.121c0 12.34-10.04 22.379-22.383 22.379H343.38a22.37 22.37 0 0 1-12.375-3.742A37.132 37.132 0 0 0 336 474.62v-.121a90.979 90.979 0 0 0-6.773-34.535C342.19 414.37 368.64 398 397.5 398a76.474 76.474 0 0 1 49.902 18.512 7.5 7.5 0 0 0 10.578-.79 7.498 7.498 0 0 0-.785-10.574 91.318 91.318 0 0 0-27.304-16.214C447.93 377.96 460 358.114 460 335.5c0-34.465-28.04-62.5-62.5-62.5S335 301.035 335 335.5c0 22.621 12.078 42.473 30.129 53.445-17.926 6.801-33.469 19.137-44.149 35.387-10.527-15.996-25.93-28.508-44.082-35.402C294.934 377.953 307 358.11 307 335.5c0-34.465-28.035-62.5-62.5-62.5-34.46 0-62.5 28.035-62.5 62.5 0 22.61 12.07 42.453 30.105 53.43-18.156 6.894-33.558 19.41-44.09 35.406a91.32 91.32 0 0 0-11.812-14.54c-9.32-9.32-20.305-16.358-32.273-20.886C141.945 377.934 154 358.098 154 335.5c0-34.465-28.035-62.5-62.5-62.5-34.46 0-62.5 28.035-62.5 62.5 0 22.602 12.063 42.441 30.086 53.418-11.637 4.402-22.352 11.176-31.496 20.102a7.503 7.503 0 0 0-.13 10.609c2.895 2.96 7.645 3.02 10.606.125C52.438 405.727 71.414 398 91.5 398c20.438 0 39.648 7.957 54.098 22.402a76.367 76.367 0 0 1 14.175 19.559A90.999 90.999 0 0 0 153 474.5v.121a37.132 37.132 0 0 0 4.996 18.637A22.37 22.37 0 0 1 145.621 497H37.38C25.039 497 15 486.96 15 474.621v-.121c0-10.547 2.105-20.754 6.254-30.348A7.5 7.5 0 0 0 7.488 438.2C2.52 449.684 0 461.895 0 474.5v.121C0 495.231 16.77 512 37.379 512H145.62c8.133 0 15.973-2.66 22.383-7.457A37.18 37.18 0 0 0 190.379 512H298.62a37.154 37.154 0 0 0 22.375-7.457A37.366 37.366 0 0 0 343.38 512h108.24c20.61 0 37.379-16.77 37.379-37.379v-.121c0-14.703-3.57-29.32-10.328-42.27zM350 335.5c0-26.191 21.309-47.5 47.5-47.5s47.5 21.309 47.5 47.5-21.309 47.5-47.5 47.5-47.5-21.309-47.5-47.5zm-306 0c0-26.191 21.309-47.5 47.5-47.5s47.5 21.309 47.5 47.5S117.691 383 91.5 383 44 361.691 44 335.5zm153 0c0-26.191 21.309-47.5 47.5-47.5s47.5 21.309 47.5 47.5-21.309 47.5-47.5 47.5-47.5-21.309-47.5-47.5zM190.379 497C178.039 497 168 486.96 168 474.621v-.121c0-42.184 34.316-76.5 76.5-76.5s76.5 34.316 76.5 76.5v.121c0 12.34-10.04 22.379-22.379 22.379zm0 0"></path><path d="M418.8 345.492c-.097.055-9.98 5.32-21.3 5.32-11.305 0-21.133-5.226-21.32-5.328a7.497 7.497 0 0 0-10.168 2.961 7.503 7.503 0 0 0 2.953 10.192c.531.293 13.219 7.18 28.535 7.18s28.004-6.887 28.535-7.18a7.508 7.508 0 0 0 2.957-10.192 7.51 7.51 0 0 0-10.191-2.953zm-28.116-25.019a7.5 7.5 0 1 1-15 0c0-4.145 3.355-7.5 7.5-7.5a7.5 7.5 0 0 1 7.5 7.5zm28.632 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 7.5-7.5c4.145 0 7.5 3.355 7.5 7.5zM265.8 345.492c-.097.055-9.98 5.32-21.3 5.32-11.305 0-21.133-5.226-21.32-5.328a7.498 7.498 0 0 0-10.168 2.961 7.503 7.503 0 0 0 2.953 10.192c.531.293 13.219 7.18 28.535 7.18s28.004-6.887 28.535-7.18a7.508 7.508 0 0 0 2.957-10.192 7.509 7.509 0 0 0-10.191-2.953zm-28.116-25.019a7.5 7.5 0 1 1-15 0c0-4.145 3.355-7.5 7.5-7.5a7.5 7.5 0 0 1 7.5 7.5zm28.632 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 7.5-7.5c4.145 0 7.5 3.355 7.5 7.5zM294.5 105.258h106a7.5 7.5 0 1 0 0-15h-106a7.5 7.5 0 1 0 0 15zm0 30h106a7.5 7.5 0 1 0 0-15h-106a7.5 7.5 0 1 0 0 15zm0 30h106a7.5 7.5 0 1 0 0-15h-106a7.5 7.5 0 1 0 0 15zm0 0"></path><path d="M73.875 208.254h35.918c2.32 19.523 9.281 33.8 20.746 42.492 9.5 7.203 20.39 9.246 29.688 9.246 5.785 0 10.96-.793 14.793-1.625a8.648 8.648 0 0 0 6.804-8.59c-.07-4.109-3.062-7.62-7.113-8.347-4.563-.817-7.676-2.785-9.793-6.203-4.469-7.215-3.543-19.235-2.11-26.973h46.313a51.11 51.11 0 0 0 22.75-5.324c7.473 19.441 26.5 33.078 48.008 33.078h46.309c1.437 7.746 2.363 19.765-2.11 26.976-2.113 3.414-5.226 5.387-9.797 6.204-4.039.726-7.023 4.23-7.105 8.332-.082 4.164 2.707 7.703 6.804 8.609 3.832.832 9.004 1.625 14.79 1.625 9.3 0 20.195-2.047 29.699-9.254 11.46-8.695 18.418-22.969 20.734-42.492h35.918c28.328 0 51.379-23.031 51.379-51.34V79.102c0-28.313-23.05-51.34-51.379-51.34H279.88a51.615 51.615 0 0 0-22.75 5.312C249.742 13.762 231.016 0 209.125 0H116.5c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5h92.625c20.059 0 36.375 16.3 36.375 36.34v105.574c0 20.04-16.316 36.34-36.375 36.34h-52.266a7.498 7.498 0 0 0-7.191 5.375c-.828 2.8-7.785 27.844 2.477 44.46.277.45.566.891.867 1.321-4.602-.793-9.27-2.48-13.407-5.617-9.156-6.941-14.355-19.89-15.457-38.484a7.504 7.504 0 0 0-7.488-7.055H73.875c-20.059 0-36.375-16.3-36.375-36.34V51.34C37.5 31.3 53.816 15 73.875 15H84.5c4.14 0 7.5-3.355 7.5-7.5S88.64 0 84.5 0H73.875C45.547 0 22.5 23.031 22.5 51.34v105.574c0 28.309 23.047 51.34 51.375 51.34zm186.625-51.34V51.34c0-.988-.035-1.969-.09-2.942 5.8-3.695 12.457-5.636 19.469-5.636H415.12c20.059 0 36.379 16.3 36.379 36.34v105.57c0 20.035-16.32 36.34-36.379 36.34h-42.78a7.504 7.504 0 0 0-7.488 7.054c-1.102 18.594-6.297 31.543-15.45 38.485-4.14 3.14-8.812 4.828-13.418 5.62.301-.433.59-.87.868-1.323 10.265-16.618 3.308-41.66 2.48-44.461a7.498 7.498 0 0 0-7.191-5.375h-52.262c-16.563 0-31.043-11.41-35.184-27.106 9.73-9.347 15.805-22.468 15.805-36.992zm0 0"></path><path d="M72 89.398c0 15.75 8.184 46.5 62.984 75.489a13.932 13.932 0 0 0 13.032 0C202.816 135.898 211 105.148 211 89.398c0-24.054-16.91-42.898-38.5-42.898-14.863 0-25.297 7.008-31 12.223-5.7-5.211-16.133-12.223-31-12.223C88.91 46.5 72 65.344 72 89.398zM110.5 61.5c10.578 0 17.863 5.156 22.11 9.477 2.316 2.363 5.558 3.714 8.89 3.714s6.574-1.351 8.89-3.71c4.247-4.325 11.532-9.481 22.11-9.481 15.266 0 23.5 14.375 23.5 27.898 0 20.961-19.855 43.528-54.5 61.965C106.855 132.926 87 110.36 87 89.398 87 75.875 95.234 61.5 110.5 61.5zm0 0"></path></svg>
																</i>
															</div>

															<div class="d-table-cell align-middle">
																<div class="__content">
																	<div class="__count js-count" data-from="0" data-to="5650">0</div>
																	<div class="__title">Happy Clients</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<!-- end item -->
											</div>
										</div>
									</div>
									<!-- end counter -->

									<p class="mt-9">
										<a class="custom-btn custom-btn--medium custom-btn--style-2" href="#">Read More</a>
									</p>
								</div>
							</div>

							<div class="spacer py-4 d-lg-none"></div>

							<div class="col-12 col-lg-6  text-center text-lg-left">

								<figure class="image-container js-tilt" data-tilt-speed="600" data-tilt-max="15" data-tilt-perspective="700">
									<img class="img-fluid lazy" width="547" height="469" src="https://res.cloudinary.com/vargatt/image/upload/v1570849061/oka6/img/blank.gif" data-src="https://res.cloudinary.com/vargatt/image/upload/v1570849061/oka6/img/img_5.png" alt="demo" />
								</figure>

							</div>
						</div>
					</div>
				</section>
				<!-- end section -->

				<!-- start section -->
				<section id="infoblock" class="section section--bg-img jarallax" data-speed="0.3" data-img-position="50% 50%" style="background-image: url(https://res.cloudinary.com/vargatt/image/upload/v1570852014/oka6/img/base_bg.jpg);">
					<div class="container">
						<div class="row">
							<div class="col-12">

								<!-- start info block -->
								<div class="info-block info-block--s1">
									<div class="row align-items-md-center">
										<div class="col-12 col-md-6">
											<div class="section-heading section-heading--white">
												<h6 class="__subtitle">Infoblock</h6>

												<h2 class="__title">Kick Start your Strategic <span>Digital Marketing Campaing</span></h2>
											</div>

											<div class="spacer py-4"></div>

											<div>
												<p>
													<a class="custom-btn custom-btn--medium custom-btn--style-4" href="#">&nbsp;&nbsp;Discover&nbsp;&nbsp;</a>
												</p>
											</div>
										</div>

										<div class="spacer py-4 d-md-none"></div>

										<div class="col-12 col-md-6  text-center">
											<figure class="image-container">
												<img class="img-fluid lazy" width="409" height="440" src="https://res.cloudinary.com/vargatt/image/upload/v1570849061/oka6/img/blank.gif" data-src="https://res.cloudinary.com/vargatt/image/upload/v1570849061/oka6/img/img_14.png" data-srcset="https://res.cloudinary.com/vargatt/image/upload/v1570852014/oka6/img//img_14.png 1x, https://res.cloudinary.com/vargatt/image/upload/v1570852014/oka6/img//img_14@2x.png 2x" alt="demo" />
											</figure>
										</div>
									</div>
								</div>
								<!-- end info block -->

								<div class="spacer py-10 d-none d-md-block"></div>
								<div class="spacer py-4 d-none d-lg-block"></div>

							</div>
						</div>
					</div>

					<div class="shape">
						<svg xmlns="http://www.w3.org/2000/svg" width="1680" height="200" viewBox="0 0 1680 200" preserveAspectRatio="none" style="min-height: 200px">
							<path d="M0 3s561.937 57 842 55c286 0 484-18 839-58v450H-2z" style="mix-blend-mode:screen" fill="#fff" fill-rule="evenodd"/>
						</svg>
					</div>
				</section>
				<!-- end section -->

				<!-- end section -->
			</main>
			<!-- end main -->

			<!-- start footer -->
			<footer class="footer footer--s1 footer--color-light">
				<div class="footer__line footer__line--first">
					<div class="container">
						<div class="row">
							<div class="col-12 col-md-4 col-lg-4 col-xl-3">
								<div class="footer__item">
									<a class="footer__logo site-logo logo white" href="index.html">
										Hclinic
			<!--							<img class="img-fluid lazy" src="img/blank.gif" data-src="img/site_logo/logo_3.png" width="159" height="45" alt="demo" />-->
									</a>
								</div>

								<div class="footer__item">
									<span class="__copy">Copyrights 2019 © <a class="__dev" href="http://oka6.com.br" target="_blank">Oka6 - Software house desenvolvimento</a></span>
								</div>
							</div>

							<div class="col-12 col-md-5 col-lg-3 offset-xl-1">
								<div class="footer__item">
									<address class="footer__address footer__address--s1">
										Porto Alegre  - RS<br>
										<a href="mailto:youremail@yourdomain.com">contato@oka6.com.br</a> <br>
										<a href="#">51981972185</a>
									</address>
								</div>
							</div>

							<div class="col-12 col-md-3 col-lg-2">
								<div class="footer__item">
									<nav id="footer__navigation" class="footer__navigation">
										<ul>
											<!-- li class="active" -->
											<li><a href="#">Login</a></li>
											<li><a href="#">Cadastro</a></li>
											<li><a href="#">Termos de uso</a></li>
										</ul>
									</nav>
								</div>
							</div>

							<div class="col-12 col-lg-3">
								<div class="footer__item">
									<!-- start social buttons -->
									<div class="s-btns s-btns--md s-btns--colored s-btns--rounded">
										<ul class="d-flex flex-row flex-wrap align-items-center">
											<li><a class="f" href="#"><i class="fontello-facebook"></i></a></li>
											<li><a class="t" href="#"><i class="fontello-twitter"></i></a></li>
											<li><a class="y" href="#"><i class="fontello-youtube-play"></i></a></li>
											<li><a class="i" href="#"><i class="fontello-instagram"></i></a></li>
										</ul>
									</div>
									<!-- end social buttons -->
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="footer__waves-container">
					<svg class="footer__wave js-wave" data-wave=\'{"height": 40, "bones": 6, "amplitude": 70, "color": "rgba(78, 111, 136, 0.14)", "speed": 0.3}\' width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d=""/></svg>

					<svg class="footer__wave js-wave" data-wave=\'{"height": 60, "bones": 5, "amplitude": 90, "color": "rgba(243, 248, 249, 0.02)", "speed": 0.35}\' width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d=""/></svg>
				</div>
			</footer>

			<!-- end footer -->
		</div>

		<div id="btn-to-top-wrap">
			<a id="btn-to-top" class="circled" href="javascript:void(0);" data-visible-offset="800"></a>
		</div>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
		<script>window.jQuery || document.write(\'<script src="/vendor/oka6/templates/landings/js/jquery-2.2.4.min.js"><\/script>\')</script>

		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

		<script type="text/javascript" src="/vendor/oka6/templates/landings/js/main.min.js"></script>

	</body>
</html>',
                'active' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'id' => 3,
                'title' => 'Hclinic 3 Blue - Gerencie sua clinica com eficiencia',
                'slug' => 'landings',
                'active' => 0,
                'description' => 'Tenha mais produtividade na sua clinica usando Hclinic',
                'html' => '<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
    <title>Hclinic</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport" content="initial-scale=1.0, user-scalable=no"/>
    <meta name="viewport"
          content="user-scalable=no, width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, minimal-ui"/>

    <meta name="theme-color" content="#341880"/>
    <meta name="msapplication-navbutton-color" content="#341880"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="#341880"/>

    <!-- Favicons
    ================================================== -->
    <link rel="shortcut icon" href="img/favicon.ico">
    <link rel="apple-touch-icon" href="img/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png">

    <!-- Critical styles
    ================================================== -->
    <link rel="stylesheet" href="/vendor/oka6/templates/landings/css/critical.min.css" type="text/css">

    <!-- Load google font
    ================================================== -->
    <script type="text/javascript">
        WebFontConfig = {
            google: {families: [\'Nunito+Sans:400,400i,700,700i,800,800i,900,900i\', \'Quicksand:300,400,700\', \'Baloo+Bhaijaan:400\']}
        };
        (function () {
            var wf = document.createElement(\'script\');
            wf.src = (\'https:\' == document.location.protocol ? \'https\' : \'http\') + \'://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js\';
            wf.type = \'text/javascript\';
            wf.async = \'true\';
            var s = document.getElementsByTagName(\'script\')[0];
            s.parentNode.insertBefore(wf, s);
        })();
    </script>

    <!-- Load other scripts
    ================================================== -->
    <script type="text/javascript">
        var _html = document.documentElement,
            isTouch = ((\'ontouchstart\' in _html) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));

        _html.className = _html.className.replace("no-js", "js");
        _html.classList.add(isTouch ? "touch" : "no-touch");
    </script>
    <script type="text/javascript" src="/vendor/oka6/templates/landings/js/device.min.js"></script>
</head>

<body>
<div id="app">
    <!-- start header -->
    <header id="top-bar" class="top-bar top-bar--light" data-nav-anchor="true">
        <div class="top-bar__inner">
            <div class="container-fluid">
                <div class="row align-items-center no-gutters">

                    <a class="top-bar__logo site-logo logo white" href="index_5.html">
                        Hclinic
                    </a>

                    <a id="top-bar__navigation-toggler" class="top-bar__navigation-toggler" href="javascript:void(0);">
                        <span></span>
                    </a>

                    <div class="top-bar__collapse">
                        <nav id="top-bar__navigation" class="top-bar__navigation" role="navigation">
                            <ul>
                                <li>
                                    <a class="nav-link active" href="#start-screen">Home</a>
                                </li>

                                <li>
                                    <a class="nav-link" href="#services">Recursos</a>
                                </li>

  								<li>
                                    <a class="nav-link" href="#prices">Preços</a>
                                </li>


                            </ul>
                        </nav>

                        <div id="top-bar__action" class="top-bar__action">
                            <div class="d-xl-flex flex-xl-row flex-xl-wrap align-items-xl-center">
                                <div class="top-bar__auth-btns">
                                    <a href="sign_in.html">Entrar</a>

                                    <a class="custom-btn custom-btn--medium custom-btn--style-4" href="#">Cadastrar</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    <!-- end header -->


    <!-- end side menu -->

    <!-- start start screen -->
    <div id="start-screen" class="start-screen start-screen--full-height start-screen--style-5">
        <div class="start-screen__bg-container">
            <div class="start-screen__bg"
                 style="background-image: url(https://res.cloudinary.com/vargatt/oka6/img/start-screen_img/start-screen_5/bg_1.jpg);background-position: center bottom;"></div>
        </div>

        <div class="start-screen__content-container">
            <div class="start-screen__content__item align-items-end pb-0  text-center">
                <div class="container">
                    <div class="row justify-content-sm-center">
                        <div class="col-12 col-md-11 col-lg-8 col-xl-11">
                            <div class="d-none d-md-block"><br>

                            </div>

                            <h1 class="text-white">A Melhor <span>solução para sua clinica</span></h1>

                            <p class="text-white">
                                Vimba, zebrafish yellow and black triplefin guitarfish Redfin perch tripod fish zebra
                                lionfish, nase slickhead! Jewelfish angler Devario gray reef shark forehead brooder.
                                Pike conger alewife sand lance orange
                            </p>

                            <div class="spacer py-4"></div>

                            <img class="img-fluid"
                                 src="https://res.cloudinary.com/vargatt/image/upload/v1571613795/oka6/screen.jpg"
                                 alt="demo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end start screen -->

    <!-- start main -->
    <main role="main">
        <!-- Common styles
        ================================================== -->
        <link rel="stylesheet" href="/vendor/oka6/templates/landings/css/style.min.css" type="text/css">

        <!-- Theme styles
        ================================================== -->
        <link rel="stylesheet" href="/vendor/oka6/templates/landings/css/color-7.min.css" type="text/css">

        <!-- Load lazyLoad scripts
        ================================================== -->
        <script>
            (function (w, d) {
                var m = d.getElementsByTagName(\'main\')[0],
                    s = d.createElement("script"),
                    v = !("IntersectionObserver" in w) ? "8.17.0" : "12.0.0",
                    o = {
                        elements_selector: ".lazy",
                        threshold: 500,
                        callback_enter: function (element) {

                        },
                        callback_load: function (element) {

                        },
                        callback_set: function (element) {

                            oTimeout = setTimeout(function () {
                                clearTimeout(oTimeout);

                                AOS.refresh();
                            }, 1000);
                        },
                        callback_error: function (element) {
                            element.src = "https://placeholdit.imgix.net/~text?txtsize=21&txt=Image%20not%20load&w=200&h=200";
                        }
                    };
                s.type = \'text/javascript\';
                s.async = false; // This includes the script as async. See the "recipes" section for more information about async loading of LazyLoad.
                s.src = "https://cdn.jsdelivr.net/npm/vanilla-lazyload@" + v + "/dist/lazyload.min.js";
                m.appendChild(s);
                // m.insertBefore(s, m.firstChild);
                w.lazyLoadOptions = o;
            }(window, document));
        </script>

        <!-- start section -->
        <section class="section">
            <div class="container">
                <div class="row align-items-lg-center">
                    <div class="col-12 col-lg-6">
                        <div class="section-heading">
                            <h6 class="__subtitle">About us</h6>

                            <h2 class="__title">Awesome Things<br><span>About Hclinic</span></h2>
                        </div>

                        <div class="spacer py-4"></div>

                        <div>
                            <p>
                                Carpsucker surgeonfish streamer fish boga deepwater stingray. Minnow arrowtooth eel
                                darter Atlantic herring southern sandfish. Vimba, zebrafish yellow and black triplefin
                                guitarfish Redfin perch
                            </p>
                        </div>

                        <div class="spacer py-5"></div>

                        <!-- start brands list -->
                        <div class="brands-list">
                            <div class="__inner">
                                <div class="row justify-content-sm-around align-items-center">
                                    <!-- start item -->
                                    <div class="col-6 col-sm-auto">
                                        <div class="__item">
                                            <figure class="__image">
                                                <img class="img-fluid lazy" src="https://res.cloudinary.com/vargatt/oka6/img/blank.gif"
                                                     data-src="img/brands_img/5.png" width="126" height="64"
                                                     alt="demo"/>
                                            </figure>
                                        </div>
                                    </div>
                                    <!-- end item -->

                                    <!-- start item -->
                                    <div class="col-6 col-sm-auto">
                                        <div class="__item">
                                            <figure class="__image">
                                                <img class="img-fluid lazy" src="https://res.cloudinary.com/vargatt/oka6/img/blank.gif"
                                                     data-src="img/brands_img/3.png" width="127" height="60"
                                                     alt="demo"/>
                                            </figure>
                                        </div>
                                    </div>
                                    <!-- end item -->

                                    <!-- start item -->
                                    <div class="col-6 col-sm-auto">
                                        <div class="__item">
                                            <figure class="__image">
                                                <img class="img-fluid lazy" src="https://res.cloudinary.com/vargatt/oka6/img/blank.gif"
                                                     data-src="img/brands_img/2.png" width="132" height="47"
                                                     alt="demo"/>
                                            </figure>
                                        </div>
                                    </div>
                                    <!-- end item -->
                                </div>
                            </div>
                        </div>
                        <!-- end brands list -->
                    </div>

                    <div class="spacer py-5 d-lg-none"></div>

                    <div class="col-12 col-lg-6">
                        <!-- start video -->
                        <div class="video-box video-box--s2">
                            <figure class="__image __image--rounded">
                                <img class="lazy" width="602" height="401" src="https://res.cloudinary.com/vargatt/oka6/img/blank.gif"
                                     data-src="img/video_img/2.jpg" alt="demo"/>

                                <a class="btn-play-link" href="https://www.youtube.com/embed/1zG1iq9LZ2U"
                                   data-fancybox="video-1">
                                    <span class="btn-play"></span>
                                </a>
                            </figure>
                        </div>
                        <!-- end video -->
                    </div>
                </div>
            </div>
        </section>
        <!-- end section -->

        <!-- start section -->
        <!-- end section -->

        <!-- start section -->
        <!-- end section -->


        <div class="" id="services">
            <div class="container">
                <div class="spacer py-3 py-md-5 py-lg-6"></div>

                <div class="row">
                    <div class="col-12">

                        <!-- start services -->
                        <div class="services services--s3">
                            <div class="__inner">
                                <div class="row">
                                    <!-- start item -->
                                    <div class="col-12 col-md-9 col-lg-6">
                                        <div class="section-heading">
                                            <h6 class="__subtitle">Alguns recursos</h6>

                                            <h2 class="__title">Aprimore<span> seus processos </span></h2>

                                            <p>
                                                Como vamos melhorar todos os processos internos da sua clinica
                                            </p>
                                        </div>

                                        <div class="spacer py-4"></div>
                                    </div>
                                    <!-- end item -->

                                    <!-- start item -->
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div class="__item">
                                            <i class="__ico">
                                                <svg fill="#ff83d1" width="55" height="55"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424.038 424.038">
                                                    <path d="M330.07,264.085v-0.104h-50.08c-4.418,0-8-3.582-8-8v-12.72c47.418-14.189,79.927-57.785,80-107.28v-24    C352.033,50.178,301.966,0.042,240.163,0c-39.996-0.027-76.965,21.293-96.973,55.925l-1.224,0.32l0.312,1.176    c-9.372,16.657-14.293,35.448-14.288,54.56v24c0.073,49.495,32.582,93.091,80,107.28v12.72c0,4.418-3.582,8-8,8h-48    c-39.746,0.044-71.956,32.254-72,72v104c0.026,22.08,17.92,39.974,40,40h280v-144C399.95,297.055,368.98,265.209,330.07,264.085z     M294.326,279.981h15.56l-28.232,120h-15.56L294.326,279.981z M332.502,86.709L291.83,59.597l22.176-8.68    C322.639,61.402,328.944,73.602,332.502,86.709z M239.99,15.981c11.16,0.023,22.229,2.005,32.704,5.856L167.19,49.581    C185.374,28.271,211.977,15.992,239.99,15.981z M153.966,69.621l140.128-36.84c2.632,1.808,5.168,3.744,7.6,5.8L144.83,99.925    C146.162,89.384,149.25,79.141,153.966,69.621z M143.99,135.981v-18.536l129.664-50.736l62.144,41.424    c0.048,1.288,0.192,2.552,0.192,3.848v24c0,53.019-42.981,96-96,96S143.99,189,143.99,135.981z M136.846,415.981l-7.68,48h-9.176    c-13.255,0-24-10.745-24-24v-104c0.035-30.913,25.087-55.965,56-56h6.616l-19.2,120H127.99v16H136.846z M175.99,463.981h-30.616    l29.44-184h18.36l29.44,184H175.99z M209.078,278.165c9.01-3.686,14.9-12.449,14.912-22.184v-8h32v8    c0.04,12.424,9.572,22.755,21.952,23.792l-28.288,120.208h-21.08L209.078,278.165z M303.99,463.981h-65.176l-7.68-48h72.856    c13.255,0,24,10.745,24,24S317.245,463.981,303.99,463.981z M383.99,463.981h-48.208c5.293-6.884,8.177-15.317,8.208-24    c-0.026-22.08-17.92-39.974-40-40h-5.896l28.24-120h1.656c30.913,0.035,55.965,25.087,56,56V463.981z"></path>
                                                </svg>
                                            </i>

                                            <h4 class="__title">Cadastro ilimitado de pacientes</h4>
                                        </div>
                                    </div>
                                    <!-- end item -->

                                    <!-- start item -->
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div class="__item">
                                            <i class="__ico">
                                                <svg fill="#b45bc4" width="55" height="55" viewBox="0 0 512 512"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M482.726,485.783l-22.65-132.603c-2.441-14.287-12.576-25.764-26.453-29.95l-61.092-18.433    c-1.265-14.934-7.388-29.023-17.578-40.175c-8.151-8.92-18.403-15.415-29.704-18.999c1.934-2.146,3.727-4.285,5.372-6.377    c14.528-18.477,22.306-38.833,24.286-52.724h4.713c12.258,0,22.231-9.972,22.231-22.231v-11.396    c0-8.181-4.602-15.594-11.523-19.441V106.05c0-4.141-3.357-7.498-7.498-7.498s-7.497,3.356-7.497,7.498v30.764    c-2.92,0.507-6.404,1.383-9.968,2.884c-0.365,0.133-0.72,0.287-1.056,0.472c-0.805,0.367-1.611,0.754-2.414,1.19V80.938    c0-16.693-13.58-30.273-30.273-30.273h-20.695c-7.138,0-14.111,2.487-19.637,7.005l-2.031,1.66c-3.73,3.05-8.438,4.73-13.257,4.73    c-4.819,0-9.528-1.68-13.258-4.73l-2.03-1.66c-5.526-4.517-12.499-7.005-19.637-7.005H200.38    c-16.693,0-30.273,13.58-30.273,30.273v60.422c-0.803-0.436-1.609-0.823-2.414-1.19c-0.336-0.185-0.69-0.339-1.055-0.472    c-3.564-1.501-7.049-2.377-9.968-2.884V59.025c0-24.278,19.752-44.03,44.03-44.03h110.601c24.279,0,44.03,19.752,44.03,44.03    v11.786c0,4.141,3.357,7.498,7.497,7.498s7.498-3.356,7.498-7.498V59.025C370.326,26.479,343.847,0,311.301,0H200.7    c-32.547,0-59.025,26.479-59.025,59.025v74.43c-6.921,3.847-11.523,11.259-11.523,19.441v11.396    c0,12.259,9.973,22.231,22.231,22.231h4.713c1.979,13.891,9.758,34.247,24.286,52.724c1.643,2.09,3.435,4.227,5.367,6.371    c-25.98,8.252-44.926,31.61-47.277,59.179L78.378,323.23c-13.877,4.186-24.013,15.663-26.453,29.95l-9.198,53.849    c-0.697,4.082,2.047,7.955,6.128,8.652c4.08,0.699,7.955-2.046,8.653-6.128l9.198-53.849c1.476-8.644,7.608-15.586,16.003-18.118    l56.505-17.049v14.831c-12.952,2.384-23.973,11.281-28.512,23.608c-1.205,3.272-1.954,6.698-2.226,10.182l-5.461,70.095    c-0.412,5.28,1.415,10.538,5.01,14.423c3.595,3.886,8.694,6.116,13.989,6.116h9.348c4.141,0,7.498-3.356,7.498-7.498    c0-4.142-3.357-7.497-7.498-7.497h-9.348c-1.129,0-2.215-0.474-2.982-1.304c-0.766-0.828-1.155-1.948-1.067-3.073l5.461-70.096    c0.165-2.111,0.618-4.186,1.348-6.167c3.158-8.575,11.686-14.382,21.223-14.449l1.235-0.009c0.058-0.001,0.115-0.001,0.172-0.001    c9.269,0,17.474,5.256,20.935,13.427c0.971,2.291,1.561,4.713,1.755,7.199l5.463,70.097c0.087,1.124-0.302,2.244-1.068,3.073    c-0.766,0.828-1.853,1.303-2.982,1.303h-9.348c-4.141,0-7.498,3.356-7.498,7.497c0,4.141,3.357,7.498,7.498,7.498h9.348    c5.295,0,10.395-2.229,13.989-6.116c3.596-3.887,5.423-9.144,5.011-14.422l-5.463-70.096c-0.32-4.102-1.295-8.101-2.898-11.884    c-4.939-11.657-15.5-19.762-27.938-21.955v-19.306l25.774-7.777c2.345,4.939,6.992,15.612,16.197,38.619    c9.277,23.214,20.808,52.969,31.867,81.895c0.079,0.243,0.17,0.48,0.272,0.712c7.38,19.311,14.539,38.225,20.662,54.541    c1.098,2.926,3.895,4.864,7.02,4.864c3.125,0,5.922-1.938,7.02-4.864c6.122-16.316,13.281-35.23,20.662-54.541    c0.103-0.232,0.193-0.47,0.272-0.712c11.051-28.909,22.576-58.645,31.849-81.852c9.217-23.037,13.868-33.719,16.214-38.662    l25.774,7.777v44.285c-17.858,3.469-31.385,19.219-31.385,38.077c0,21.391,17.403,38.795,38.795,38.795    c21.392,0,38.795-17.403,38.795-38.795c0-18.796-13.438-34.508-31.21-38.045v-39.792l56.506,17.049    c8.395,2.532,14.526,9.474,16.003,18.118l22.65,132.603c0.376,2.199-0.209,4.349-1.648,6.054c-1.438,1.704-3.459,2.644-5.69,2.644    H51.393c-2.231,0-4.251-0.939-5.69-2.644c-1.438-1.705-2.024-3.854-1.648-6.054l7.475-43.762c0.697-4.082-2.047-7.955-6.128-8.652    c-4.08-0.7-7.955,2.047-8.653,6.128l-7.475,43.762c-1.115,6.532,0.696,13.183,4.968,18.248C38.516,509.096,44.767,512,51.393,512    h409.214c6.626,0,12.878-2.904,17.151-7.969C482.03,498.966,483.841,492.315,482.726,485.783z M355.421,152.089    c3.995-0.996,7.202-0.978,7.238-0.977c1.292,0.017,2.548-0.285,3.664-0.87c0.334,0.831,0.531,1.724,0.531,2.654v11.396    c0,3.99-3.246,7.236-7.236,7.236h-4.197V152.089z M156.579,171.528L156.579,171.528h-4.197c-3.99,0-7.236-3.246-7.236-7.236    v-11.396c0-0.93,0.198-1.823,0.531-2.653c1.115,0.585,2.371,0.887,3.664,0.869c0.057,0.01,3.255-0.008,7.238,0.981V171.528z     M171.574,179.935v-19.698c2.272,0.681,4.757,0.588,7.051-0.369c3.935-1.642,6.477-5.455,6.477-9.716V80.938    c0-8.424,6.854-15.278,15.278-15.278h20.695c3.688,0,7.291,1.285,10.146,3.619l2.03,1.66c6.401,5.234,14.48,8.115,22.749,8.115    c8.269,0,16.348-2.882,22.749-8.115l2.03-1.66c2.854-2.334,6.458-3.619,10.146-3.619h20.695c8.424,0,15.278,6.854,15.278,15.278    v69.215c0,4.26,2.542,8.074,6.477,9.716c1.314,0.548,2.69,0.814,4.054,0.814c1.017,0,2.026-0.149,2.997-0.439v19.691    c0,10.947-7.568,32.205-21.594,50.043c-4.646,5.909-10.618,12.257-17.971,17.805c-0.233,0.156-0.456,0.325-0.669,0.505    c-11.391,8.422-26.038,14.874-44.192,14.874s-32.801-6.452-44.193-14.875c-0.213-0.179-0.435-0.348-0.667-0.503    c-7.353-5.549-13.325-11.897-17.972-17.806C179.143,212.141,171.574,190.882,171.574,179.935z M305.12,301.07L256,337.784    l-49.12-36.714c4.871-6.191,7.6-14.138,7.6-21.23v-12.086c11.551,6.212,25.334,10.404,41.52,10.404s29.97-4.192,41.52-10.404    v12.086C297.52,286.932,300.249,294.879,305.12,301.07z M194.367,292.701c-4.004-1.525-8.443-1.775-12.642-0.636    c-0.184,0.043-0.364,0.092-0.539,0.144l-25.903,7.816c4.381-21.542,21.873-38.688,44.202-42.009v21.824    C199.485,284.544,197.385,289.407,194.367,292.701z M214.716,352.889c-0.014-0.035-0.028-0.07-0.041-0.104    c-0.38-0.961-0.755-1.909-1.127-2.846c-0.067-0.17-0.134-0.339-0.201-0.507c-0.364-0.917-0.725-1.827-1.081-2.722    c-0.025-0.063-0.05-0.125-0.075-0.189c-1.111-2.793-2.182-5.472-3.212-8.039c-0.075-0.186-0.15-0.375-0.225-0.56    c-0.296-0.736-0.587-1.461-0.876-2.177c-0.106-0.263-0.211-0.523-0.316-0.783c-0.28-0.694-0.558-1.384-0.832-2.059    c-0.082-0.202-0.162-0.398-0.243-0.599c-0.497-1.226-0.983-2.421-1.457-3.586c-0.128-0.315-0.259-0.636-0.386-0.947    c-0.186-0.454-0.367-0.896-0.549-1.341c-0.196-0.48-0.392-0.956-0.584-1.424c-0.072-0.175-0.147-0.36-0.219-0.534    c-0.058-0.14-0.111-0.269-0.168-0.408c-0.866-2.104-1.689-4.087-2.47-5.952c-0.006-0.015-0.013-0.03-0.019-0.045    c-0.416-0.993-0.823-1.963-1.214-2.887c-0.203-0.479-0.403-0.95-0.599-1.412l42.245,31.574l-17.652,7.499    c-0.031,0.013-0.063,0.026-0.094,0.04l-7.37,3.131C215.533,354.955,215.124,353.919,214.716,352.889z M232.606,398.797    c-1.481-3.843-2.973-7.708-4.468-11.569c-2.338-6.039-4.571-11.781-6.708-17.251l2.798-1.189l11.432,13.289L232.606,398.797z     M256.145,459.735c-0.215-0.446-0.471-0.867-0.767-1.259c-3.388-8.955-7.688-20.286-12.447-32.753l7-38.325h12.138l7,38.325    C264.082,438.784,259.603,450.594,256.145,459.735z M264.881,372.404h-17.762l-8.405-9.77L256,355.291l17.286,7.343    L264.881,372.404z M283.862,387.228c-1.495,3.861-2.987,7.726-4.468,11.569l-3.054-16.721l11.432-13.289l2.798,1.189    C288.433,375.446,286.2,381.189,283.862,387.228z M312.58,315.18c-0.371,0.876-0.757,1.795-1.15,2.733    c-0.051,0.122-0.103,0.245-0.154,0.368c-0.389,0.93-0.785,1.88-1.195,2.869c-0.027,0.065-0.055,0.134-0.082,0.2    c-0.354,0.853-0.717,1.733-1.086,2.63c-0.069,0.168-0.134,0.323-0.203,0.492c-0.082,0.201-0.17,0.414-0.253,0.617    c-0.164,0.4-0.331,0.808-0.499,1.216c-0.206,0.503-0.411,1.004-0.622,1.519c-0.067,0.164-0.136,0.335-0.204,0.5    c-0.522,1.279-1.058,2.597-1.606,3.951c-0.086,0.212-0.171,0.42-0.257,0.635c-0.271,0.669-0.547,1.352-0.824,2.039    c-0.108,0.269-0.217,0.537-0.326,0.809c-0.286,0.709-0.575,1.427-0.867,2.155c-0.082,0.203-0.165,0.411-0.247,0.615    c-1.017,2.532-2.072,5.173-3.167,7.925c-0.036,0.091-0.072,0.18-0.108,0.272c-0.354,0.889-0.712,1.793-1.074,2.704    c-0.067,0.17-0.135,0.34-0.203,0.511c-0.374,0.942-0.751,1.894-1.133,2.861c-0.007,0.018-0.014,0.036-0.021,0.053    c-0.412,1.042-0.826,2.09-1.248,3.16l-7.377-3.134c-0.026-0.011-0.052-0.022-0.077-0.033l-17.662-7.503l42.245-31.574    C312.982,314.23,312.782,314.7,312.58,315.18z M330.814,292.21c-0.001,0-0.003-0.001-0.004-0.001    c-0.006-0.002-0.013-0.003-0.019-0.006c-4.35-1.305-8.99-1.089-13.157,0.498c-3.019-3.294-5.118-8.157-5.118-12.861v-21.835    c22.469,3.312,39.908,20.297,44.232,42.029L330.814,292.21z M389.001,398.375c0,13.124-10.677,23.8-23.8,23.8    s-23.8-10.676-23.8-23.8c0-13.124,10.677-23.8,23.8-23.8S389.001,385.251,389.001,398.375z"></path>
                                                </svg>
                                            </i>

                                            <h4 class="__title">Cadastro ilimitado de médicos</h4>
                                        </div>
                                    </div>
                                    <!-- end item -->

                                    <!-- start item -->
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div class="__item">
                                            <i class="__ico">
                                                <svg fill="#1065b2" width="55" height="55" viewBox="0 0 512 512"
                                                     xmlns="http://www.w3.org/2000/svg">
													<path d="m7.5 364.832031c4.140625 0 7.5-3.355469 7.5-7.5v-218.441406h443.128906v82.441406c0 4.144531 3.359375 7.5 7.5 7.5 4.144532 0 7.5-3.355469 7.5-7.5v-148.222656c0-25.144531-20.457031-45.601563-45.597656-45.601563h-19.667969v-9.289062c0-10.046875-8.171875-18.21875-18.21875-18.21875h-13.933593c-10.042969 0-18.214844 8.171875-18.214844 18.21875v9.289062h-49.742188v-9.289062c0-10.046875-8.171875-18.21875-18.21875-18.21875h-13.933594c-10.042968 0-18.214843 8.171875-18.214843 18.21875v9.289062h-49.746094v-9.289062c0-10.046875-8.171875-18.21875-18.21875-18.21875h-13.929687c-10.046876 0-18.21875 8.171875-18.21875 18.21875v9.289062h-49.742188v-9.289062c0-10.046875-8.171875-18.21875-18.21875-18.21875h-13.929688c-10.046874 0-18.21875 8.171875-18.21875 18.21875v9.289062h-11.5625c-25.144531 0-45.601562 20.457032-45.601562 45.601563v284.222656c0 4.144531 3.359375 7.5 7.5 7.5zm364.996094-346.613281c0-1.773438 1.445312-3.21875 3.21875-3.21875h13.933594c1.773437 0 3.214843 1.445312 3.214843 3.21875v36.4375c0 1.773438-1.441406 3.21875-3.214843 3.21875h-13.933594c-1.773438 0-3.21875-1.441406-3.21875-3.21875zm-100.109375 0c0-1.773438 1.441406-3.21875 3.214843-3.21875h13.933594c1.773438 0 3.21875 1.445312 3.21875 3.21875v36.4375c0 1.773438-1.445312 3.21875-3.21875 3.21875h-13.933594c-1.773437 0-3.214843-1.441406-3.214843-3.21875zm-100.113281 0c0-1.773438 1.445312-3.21875 3.21875-3.21875h13.933593c1.773438 0 3.21875 1.445312 3.21875 3.21875v36.4375c0 1.773438-1.445312 3.21875-3.21875 3.21875h-13.933593c-1.773438 0-3.21875-1.441406-3.21875-3.21875zm-100.109376 0c0-1.773438 1.445313-3.21875 3.21875-3.21875h13.933594c1.773438 0 3.214844 1.445312 3.214844 3.21875v36.4375c0 1.773438-1.441406 3.21875-3.214844 3.21875h-13.933594c-1.773437 0-3.21875-1.441406-3.21875-3.21875zm-26.5625 24.289062h11.5625v12.148438c0 10.046875 8.171876 18.21875 18.21875 18.21875h13.933594c10.042969 0 18.214844-8.171875 18.214844-18.21875v-12.148438h49.746094v12.148438c0 10.046875 8.171875 18.21875 18.214844 18.21875h13.933593c10.046875 0 18.21875-8.171875 18.21875-18.21875v-12.148438h49.742188v12.148438c0 10.046875 8.171875 18.21875 18.21875 18.21875h13.933593c10.042969 0 18.214844-8.171875 18.214844-18.21875v-12.148438h49.742188v12.148438c0 10.046875 8.171875 18.21875 18.21875 18.21875h13.933594c10.042968 0 18.214843-8.171875 18.214843-18.21875v-12.148438h19.667969c16.875 0 30.601562 13.726563 30.601562 30.601563v50.78125h-443.132812v-50.78125c0-16.875 13.726562-30.601563 30.601562-30.601563zm0 0"></path><path d="m84.910156 434.582031h-65.398437c-2.488281 0-4.511719-2.023437-4.511719-4.511719v-38.558593c0-4.144531-3.359375-7.5-7.5-7.5s-7.5 3.355469-7.5 7.5v38.558593c0 10.757813 8.753906 19.511719 19.511719 19.511719h65.398437c4.140625 0 7.5-3.359375 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5zm0 0"></path><path d="m84.660156 160.761719h-26.070312c-4.140625 0-7.5 3.359375-7.5 7.5 0 4.144531 3.359375 7.5 7.5 7.5h26.070312c4.140625 0 7.5-3.355469 7.5-7.5 0-4.140625-3.359375-7.5-7.5-7.5zm0 0"></path><path d="m138.707031 175.761719h26.070313c4.140625 0 7.5-3.355469 7.5-7.5 0-4.140625-3.359375-7.5-7.5-7.5h-26.070313c-4.140625 0-7.5 3.359375-7.5 7.5 0 4.144531 3.359375 7.5 7.5 7.5zm0 0"></path><path d="m218.824219 175.761719h26.066406c4.140625 0 7.5-3.355469 7.5-7.5 0-4.140625-3.359375-7.5-7.5-7.5h-26.066406c-4.144531 0-7.5 3.359375-7.5 7.5 0 4.144531 3.355469 7.5 7.5 7.5zm0 0"></path><path d="m298.9375 175.761719h26.070312c4.140626 0 7.5-3.355469 7.5-7.5 0-4.140625-3.359374-7.5-7.5-7.5h-26.070312c-4.140625 0-7.5 3.359375-7.5 7.5 0 4.144531 3.359375 7.5 7.5 7.5zm0 0"></path><path d="m405.121094 160.761719h-26.066406c-4.144532 0-7.5 3.359375-7.5 7.5 0 4.144531 3.355468 7.5 7.5 7.5h26.066406c4.140625 0 7.5-3.355469 7.5-7.5 0-4.140625-3.359375-7.5-7.5-7.5zm0 0"></path><path d="m84.660156 198.476562h-26.070312c-4.140625 0-7.5 3.355469-7.5 7.5 0 4.144532 3.359375 7.5 7.5 7.5h26.070312c4.140625 0 7.5-3.355468 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5zm0 0"></path><path d="m138.707031 213.476562h26.070313c4.140625 0 7.5-3.355468 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5h-26.070313c-4.140625 0-7.5 3.355469-7.5 7.5 0 4.144532 3.359375 7.5 7.5 7.5zm0 0"></path><path d="m218.824219 213.476562h26.066406c4.140625 0 7.5-3.355468 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5h-26.066406c-4.144531 0-7.5 3.355469-7.5 7.5 0 4.144532 3.355469 7.5 7.5 7.5zm0 0"></path><path d="m298.9375 213.476562h26.070312c4.140626 0 7.5-3.355468 7.5-7.5 0-4.144531-3.359374-7.5-7.5-7.5h-26.070312c-4.140625 0-7.5 3.355469-7.5 7.5 0 4.144532 3.359375 7.5 7.5 7.5zm0 0"></path><path d="m405.121094 198.476562h-26.066406c-4.144532 0-7.5 3.355469-7.5 7.5 0 4.144532 3.355468 7.5 7.5 7.5h26.066406c4.140625 0 7.5-3.355468 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5zm0 0"></path><path d="m138.890625 360.714844 38.5625 38.5625c5.578125 5.578125 12.992187 8.648437 20.882813 8.648437 7.890624 0 15.308593-3.070312 20.882812-8.648437l105.605469-105.605469c11.515625-11.515625 11.515625-30.253906 0-41.769531s-30.253907-11.515625-41.769531 0l-84.71875 84.71875-17.679688-17.675782c-11.511719-11.515624-30.25-11.515624-41.769531 0-11.511719 11.515626-11.511719 30.253907.003906 41.769532zm10.605469-31.164063c2.832031-2.832031 6.554687-4.25 10.277344-4.25 3.722656 0 7.445312 1.417969 10.277343 4.25l22.980469 22.980469c2.929688 2.929688 7.675781 2.929688 10.605469 0l90.023437-90.019531c5.671875-5.667969 14.890625-5.667969 20.554688-.003907 5.667968 5.667969 5.667968 14.890626 0 20.558594l-105.601563 105.601563c-2.746093 2.746093-6.394531 4.257812-10.277343 4.257812-3.882813 0-7.53125-1.511719-10.277344-4.257812l-38.5625-38.5625c-5.667969-5.667969-5.667969-14.886719 0-20.554688zm0 0"></path><path d="m473.128906 315.359375v-59.847656c0-4.144531-3.355468-7.5-7.5-7.5-4.140625 0-7.5 3.355469-7.5 7.5v50.28125c-13.675781-7.089844-29.195312-11.101563-45.632812-11.101563-54.867188 0-99.503906 44.636719-99.503906 99.503906 0 14.371094 3.066406 28.035157 8.570312 40.386719h-202.476562c-4.140626 0-7.5 3.355469-7.5 7.5 0 4.140625 3.359374 7.5 7.5 7.5h210.785156c17.878906 26.589844 48.242187 44.117188 82.625 44.117188 54.867187 0 99.503906-44.636719 99.503906-99.503907 0-32.0625-15.25-60.628906-38.871094-78.835937zm-60.632812 163.339844c-46.597656 0-84.503906-37.90625-84.503906-84.503907 0-46.597656 37.910156-84.503906 84.503906-84.503906s84.503906 37.90625 84.503906 84.503906c0 46.597657-37.910156 84.503907-84.503906 84.503907zm0 0"></path><path d="m412.496094 320.527344c-40.621094 0-73.667969 33.050781-73.667969 73.667968 0 40.621094 33.046875 73.667969 73.667969 73.667969s73.664062-33.046875 73.664062-73.667969c0-40.617187-33.046875-73.667968-73.664062-73.667968zm6.714844 131.9375c.496093-1.003906.785156-2.128906.785156-3.324219v-9.136719c0-4.140625-3.359375-7.5-7.5-7.5s-7.5 3.359375-7.5 7.5v9.136719c0 1.195313.285156 2.320313.785156 3.324219-26.992188-3.089844-48.464844-24.5625-51.554688-51.554688 1 .5 2.128907.785156 3.324219.785156h9.132813c4.144531 0 7.5-3.355468 7.5-7.5 0-4.144531-3.355469-7.5-7.5-7.5h-9.132813c-1.195312 0-2.324219.289063-3.324219.785157 3.089844-26.992188 24.5625-48.464844 51.554688-51.554688-.5 1.003907-.785156 2.128907-.785156 3.324219v9.136719c0 4.144531 3.359375 7.5 7.5 7.5s7.5-3.355469 7.5-7.5v-9.136719c0-1.195312-.289063-2.320312-.785156-3.324219 26.992187 3.089844 48.464843 24.5625 51.554687 51.554688-1.003906-.496094-2.128906-.785157-3.324219-.785157h-9.136718c-4.140626 0-7.5 3.355469-7.5 7.5 0 4.144532 3.359374 7.5 7.5 7.5h9.136718c1.195313 0 2.320313-.285156 3.324219-.785156-3.09375 26.992188-24.5625 48.464844-51.554687 51.554688zm0 0"></path><path d="m429.027344 386.695312h-9.03125v-7.691406c0-4.140625-3.359375-7.5-7.5-7.5-4.144532 0-7.5 3.359375-7.5 7.5v15.191406c0 4.144532 3.355468 7.5 7.5 7.5h16.53125c4.140625 0 7.5-3.355468 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5zm0 0"></path>
												</svg>
                                            </i>
                                            <h4 class="__title">Agendamentos online integrado a agenda pessoal do profissional</h4>
                                        </div>
                                    </div>
                                    <!-- end item -->

                                    <!-- start item -->
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div class="__item">
                                            <i class="__ico">
                                                <svg fill="#3aba86" width="55" height="55" viewBox="0 0 512 512"
                                                     xmlns="http://www.w3.org/2000/svg">
													<path d="M489.112,344.041l-30.975-8.85c-1.337-0.382-2.271-1.62-2.271-3.011v-10.339c2.52-1.746,4.924-3.7,7.171-5.881    c10.89-10.568,16.887-24.743,16.887-39.915v-14.267l2.995-5.989c3.287-6.575,5.024-13.936,5.024-21.286v-38.65    c0-4.142-3.358-7.5-7.5-7.5H408.27c-26.244,0-47.596,21.352-47.596,47.596v0.447c0,6.112,1.445,12.233,4.178,17.699l3.841,7.682    v12.25c0,19.414,9.567,36.833,24.058,47.315l0.002,10.836c0,1.671,0,2.363-6.193,4.133l-15.114,4.318l-43.721-15.898    c0.157-2.063-0.539-4.161-2.044-5.742l-13.971-14.678v-24.64c1.477-1.217,2.933-2.467,4.344-3.789    c17.625-16.52,27.733-39.844,27.733-63.991v-19.678c5.322-11.581,8.019-23.836,8.019-36.457v-80.19c0-4.142-3.358-7.5-7.5-7.5    H232.037c-39.51,0-71.653,32.144-71.653,71.653v16.039c0,12.621,2.697,24.876,8.019,36.457v16.931    c0,28.036,12.466,53.294,32.077,69.946v25.22l-13.971,14.678c-1.505,1.581-2.201,3.679-2.044,5.742l-46.145,16.779    c-3.344,1.216-6.451,2.863-9.272,4.858l-7.246-3.623c21.57-9.389,28.403-22.594,28.731-23.25c1.056-2.111,1.056-4.597,0-6.708    c-5.407-10.814-6.062-30.635-6.588-46.561c-0.175-5.302-0.341-10.311-0.658-14.771c-2.557-35.974-29.905-63.103-63.615-63.103    s-61.059,27.128-63.615,63.103c-0.317,4.461-0.483,9.47-0.658,14.773c-0.526,15.925-1.182,35.744-6.588,46.558    c-1.056,2.111-1.056,4.597,0,6.708c0.328,0.656,7.147,13.834,28.76,23.234l-20.127,10.063C6.684,358.176,0,368.991,0,381.02    v55.409c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V381.02c0-6.312,3.507-11.987,9.152-14.81l25.063-12.531l8.718,8.285    c6.096,5.793,13.916,8.688,21.739,8.688c7.821,0,15.645-2.897,21.739-8.688l8.717-8.284l8.172,4.086    c-3.848,6.157-6.032,13.377-6.032,20.94v57.725c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-57.725    c0-10.296,6.501-19.578,16.178-23.097l48.652-17.691l20.253,30.381c2.589,3.884,6.738,6.375,11.383,6.835    c0.518,0.051,1.033,0.076,1.547,0.076c4.098,0,8.023-1.613,10.957-4.546l12.356-12.356v78.124c0,4.142,3.358,7.5,7.5,7.5    c4.142,0,7.5-3.358,7.5-7.5v-78.124l12.356,12.356c2.933,2.934,6.858,4.547,10.957,4.547c0.513,0,1.029-0.025,1.546-0.076    c4.646-0.46,8.795-2.951,11.384-6.835l20.254-30.38l48.651,17.691c9.676,3.519,16.178,12.801,16.178,23.097v57.725    c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-57.725c0-10.428-4.143-20.208-11.093-27.441l1.853-0.529    c1.869-0.534,4.419-1.265,6.979-2.52l19.149,19.149v69.066c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-69.066    l19.016-19.016c1.011,0.514,2.073,0.948,3.191,1.267l30.976,8.85c7.07,2.02,12.009,8.567,12.009,15.921v62.044    c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-62.044C512,360.371,502.588,347.892,489.112,344.041z M48.115,330.794    c-14.029-5.048-21.066-11.778-24.07-15.453c2.048-5.354,3.376-11.486,4.275-17.959c4.136,9.917,11.063,18.383,19.795,24.423    V330.794z M91.08,351.092c-6.397,6.078-16.418,6.077-22.813-0.001l-6.975-6.628c1.177-2.205,1.824-4.705,1.824-7.324v-7.994    c5.232,1.635,10.794,2.517,16.558,2.517c5.757,0,11.316-0.886,16.557-2.512l-0.001,7.988c0,2.62,0.646,5.121,1.824,7.327    L91.08,351.092z M79.676,316.662c-22.396,0-40.615-18.22-40.615-40.615c0-4.142-3.358-7.5-7.5-7.5c-0.42,0-0.83,0.043-1.231,0.11    c0.022-0.645,0.043-1.291,0.065-1.93c0.167-5.157,0.328-10.028,0.625-14.206c0.958-13.476,6.343-25.894,15.163-34.968    c8.899-9.156,20.793-14.198,33.491-14.198s24.591,5.042,33.491,14.198c8.82,9.074,14.205,21.492,15.163,34.968    c0.296,4.177,0.458,9.047,0.628,14.203c0.015,0.443,0.03,0.892,0.045,1.338c-8.16-12.572-20.762-21.837-37.045-27.069    c-15.043-4.833-27.981-4.534-28.527-4.52c-1.964,0.055-3.828,0.877-5.191,2.291l-13.532,14.034    c-2.875,2.982-2.789,7.73,0.193,10.605s7.73,2.788,10.605-0.193l11.26-11.677c9.697,0.474,40.894,4.102,53.027,30.819    C116.738,302.04,99.816,316.662,79.676,316.662z M111.229,330.819l0.001-8.945c8.725-6.007,15.662-14.457,19.801-24.449    c0.899,6.458,2.226,12.576,4.27,17.918C132.314,318.983,125.244,325.773,111.229,330.819z M183.403,209.145v-18.608    c0-1.129-0.255-2.244-0.746-3.261c-4.826-9.994-7.273-20.598-7.273-31.518V139.72c0-31.239,25.415-56.653,56.653-56.653h104.769    v72.692c0,10.92-2.447,21.524-7.273,31.518c-0.491,1.017-0.746,2.132-0.746,3.261v21.355c0,20.311-8.165,39.15-22.991,53.047    c-1.851,1.734-3.772,3.36-5.758,4.875c-0.044,0.03-0.086,0.063-0.129,0.094c-13.889,10.545-30.901,15.67-48.667,14.519    C213.201,281.965,183.403,248.897,183.403,209.145z M225.632,360.056c-0.052,0.052-0.173,0.175-0.418,0.149    c-0.244-0.024-0.34-0.167-0.381-0.229l-23.325-34.988l7.506-7.887l35.385,24.187L225.632,360.056z M256.095,331.113    l-40.615-27.762v-14c10.509,5.681,22.276,9.234,34.791,10.044c1.977,0.128,3.942,0.191,5.901,0.191    c14.341,0,28.143-3.428,40.538-9.935v13.7L256.095,331.113z M287.357,359.978c-0.041,0.062-0.137,0.205-0.381,0.229    c-0.245,0.031-0.365-0.098-0.418-0.149l-18.767-18.767l35.385-24.188l7.507,7.887L287.357,359.978z M424.308,353.65l-17.02-17.019    c0.297-1.349,0.465-2.826,0.464-4.455l-0.001-3.165c4.723,1.55,9.701,2.47,14.852,2.624c0.578,0.018,1.151,0.026,1.727,0.026    c5.692,0,11.248-0.86,16.536-2.501v3.02c0,1.496,0.188,2.962,0.542,4.371L424.308,353.65z M452.591,305.196    c-7.949,7.714-18.45,11.788-29.537,11.446c-21.704-0.651-39.361-19.768-39.361-42.613v-14.021c0-1.165-0.271-2.313-0.792-3.354    l-4.633-9.266c-1.697-3.395-2.594-7.195-2.594-10.991v-0.447c0-17.974,14.623-32.596,32.596-32.596h64.673v31.15    c0,5.034-1.19,10.075-3.441,14.578l-3.786,7.572c-0.521,1.042-0.792,2.189-0.792,3.354v16.038    C464.924,287.126,460.544,297.478,452.591,305.196z"></path>
												</svg>
                                            </i>

                                            <h4 class="__title">Cadastre e gerencie os membros da sua Clinica.</h4>
                                        </div>
                                    </div>
                                    <!-- end item -->

                                    <!-- start item -->
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div class="__item">
                                            <i class="__ico">
                                                <svg fill="#f2ae3b" width="55" height="55" viewBox="0 0 512 512"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M31 47c0 12.406 10.094 22.5 22.5 22.5S76 59.406 76 47 65.906 24.5 53.5 24.5 31 34.594 31 47zm30 0c0 4.137-3.363 7.5-7.5 7.5S46 51.137 46 47s3.363-7.5 7.5-7.5S61 42.863 61 47zm30 0c0 12.406 10.094 22.5 22.5 22.5S136 59.406 136 47s-10.094-22.5-22.5-22.5S91 34.594 91 47zm30 0c0 4.137-3.363 7.5-7.5 7.5S106 51.137 106 47s3.363-7.5 7.5-7.5 7.5 3.363 7.5 7.5zm30 0c0 12.406 10.094 22.5 22.5 22.5S196 59.406 196 47s-10.094-22.5-22.5-22.5S151 34.594 151 47zm30 0c0 4.137-3.363 7.5-7.5 7.5S166 51.137 166 47s3.363-7.5 7.5-7.5 7.5 3.363 7.5 7.5zm0 0"></path>
                                                    <path d="M371.5 0H7.5A7.5 7.5 0 0 0 0 7.5v440.168c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5V95h302.25c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5H15V15h349v65h-14.5c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5H364v402H15v-16.5a7.5 7.5 0 1 0-15 0v24a7.5 7.5 0 0 0 7.5 7.5h364a7.5 7.5 0 0 0 7.5-7.5V7.5a7.5 7.5 0 0 0-7.5-7.5zm0 0"></path>
                                                    <path d="M189.5 326c49.352 0 89.5-40.148 89.5-89.5S238.852 147 189.5 147 100 187.148 100 236.5s40.148 89.5 89.5 89.5zm0-164c41.078 0 74.5 33.422 74.5 74.5S230.578 311 189.5 311 115 277.578 115 236.5s33.422-74.5 74.5-74.5zm0 0"></path>
                                                    <path d="M65.61 215.004C61.573 221.133 57 228.078 57 236.5s4.574 15.367 8.61 21.496c2.43 3.691 4.722 7.176 5.535 10.219.875 3.277.636 7.586.382 12.148-.402 7.207-.855 15.375 3.211 22.403 4.125 7.129 11.485 10.828 17.98 14.093 4.028 2.024 7.837 3.938 10.16 6.262 2.325 2.32 4.235 6.129 6.263 10.16 3.261 6.492 6.96 13.856 14.09 17.98a23.159 23.159 0 0 0 3.769 1.731V480.5a7.502 7.502 0 0 0 11.387 6.414L189.5 455.93l51.11 30.984A7.517 7.517 0 0 0 244.5 488a7.502 7.502 0 0 0 7.5-7.5v-88.375a7.5 7.5 0 1 0-15 0v75.059l-15-9.094V354.684c3.168-.657 7.152-.446 11.363-.211 1.192.066 2.407.132 3.637.18v5.097a7.5 7.5 0 1 0 15 0v-6.758a22.981 22.981 0 0 0 3.77-1.73c7.128-4.125 10.828-11.485 14.09-17.98 2.023-4.028 3.937-7.837 6.261-10.16 2.32-2.321 6.129-4.235 10.16-6.263 6.496-3.261 13.856-6.96 17.98-14.09 4.067-7.03 3.614-15.199 3.212-22.406-.254-4.562-.493-8.87.382-12.148.813-3.043 3.106-6.528 5.536-10.215 4.035-6.133 8.609-13.078 8.609-21.5s-4.574-15.367-8.61-21.496c-2.43-3.692-4.722-7.176-5.535-10.215-.875-3.277-.636-7.59-.382-12.152.402-7.203.855-15.371-3.211-22.403-4.125-7.129-11.485-10.828-17.98-14.09-4.028-2.027-7.837-3.94-10.16-6.265-2.325-2.32-4.235-6.129-6.263-10.16-3.261-6.492-6.96-13.856-14.09-17.98-7.03-4.067-15.199-3.61-22.406-3.212-4.562.254-8.87.496-12.148-.382-3.043-.813-6.528-3.106-10.219-5.536-6.129-4.035-13.074-8.609-21.496-8.609s-15.367 4.574-21.496 8.61c-3.692 2.43-7.176 4.722-10.219 5.535-3.277.875-7.59.636-12.148.382-7.207-.402-15.375-.855-22.407 3.211-7.128 4.125-10.828 11.485-14.09 17.98-2.023 4.028-3.937 7.837-6.261 10.16-2.32 2.321-6.129 4.235-10.16 6.263-6.496 3.261-13.856 6.96-17.98 14.09-4.067 7.03-3.614 15.199-3.212 22.406.254 4.562.493 8.87-.382 12.148-.813 3.043-3.106 6.527-5.536 10.219zM142 354.652c1.23-.047 2.445-.113 3.637-.18 4.21-.234 8.195-.445 11.363.212V458.09l-15 9.094zm43.613 86.094L172 448.996V362.97c5.133 3.183 10.855 6.031 17.5 6.031s12.367-2.848 17.5-6.031v86.027l-13.613-8.25a7.51 7.51 0 0 0-7.774 0zM78.137 223.25c2.98-4.523 6.058-9.2 7.5-14.59 1.496-5.594 1.175-11.32.867-16.855-.313-5.61-.606-10.907 1.219-14.063 1.882-3.25 6.668-5.652 11.73-8.199 4.918-2.469 10-5.023 14.031-9.059 4.036-4.03 6.59-9.117 9.059-14.03 2.547-5.067 4.95-9.852 8.2-11.731 3.155-1.825 8.452-1.528 14.058-1.22 5.539.31 11.265.63 16.86-.866 5.386-1.442 10.066-4.52 14.589-7.5 4.797-3.157 9.324-6.137 13.25-6.137s8.453 2.98 13.25 6.137c4.523 2.98 9.2 6.058 14.59 7.5 5.594 1.496 11.32 1.175 16.855.867 5.61-.309 10.907-.606 14.059 1.219 3.25 1.879 5.656 6.664 8.2 11.73 2.472 4.914 5.026 10 9.058 14.031 4.035 4.036 9.12 6.59 14.035 9.063 5.066 2.543 9.851 4.945 11.73 8.195 1.825 3.156 1.532 8.453 1.22 14.059-.31 5.539-.63 11.265.866 16.86 1.442 5.39 4.52 10.066 7.5 14.589 3.157 4.797 6.137 9.324 6.137 13.25s-2.98 8.453-6.137 13.25c-2.98 4.523-6.058 9.2-7.5 14.59-1.496 5.594-1.176 11.32-.867 16.855.313 5.61.606 10.907-1.219 14.063-1.882 3.25-6.668 5.652-11.73 8.199-4.918 2.469-10 5.023-14.031 9.059-4.036 4.03-6.59 9.117-9.059 14.03-2.547 5.067-4.95 9.852-8.2 11.731-3.155 1.828-8.452 1.532-14.058 1.22-5.539-.31-11.265-.63-16.86.866-2.222.594-4.316 1.477-6.331 2.504l-.117.059c-2.836 1.457-5.52 3.21-8.141 4.937-4.797 3.157-9.324 6.137-13.25 6.137s-8.453-2.98-13.25-6.137c-2.621-1.726-5.305-3.48-8.137-4.937l-.117-.059c-2.02-1.031-4.113-1.91-6.336-2.504-3.262-.87-6.566-1.125-9.855-1.125-2.352 0-4.692.13-7 .258-5.61.313-10.907.61-14.059-1.219-3.25-1.879-5.656-6.664-8.2-11.73-2.472-4.914-5.026-10-9.058-14.031-4.035-4.036-9.12-6.59-14.035-9.063-5.066-2.543-9.851-4.945-11.73-8.195-1.825-3.156-1.532-8.453-1.22-14.059.31-5.539.63-11.265-.866-16.86-1.442-5.39-4.52-10.066-7.5-14.589C74.98 244.953 72 240.426 72 236.5s2.98-8.453 6.137-13.25zm0 0"></path>
                                                    <path d="M141.73 241.29l35.633 28.487a7.48 7.48 0 0 0 4.68 1.641c2.07 0 4.129-.852 5.605-2.512l48.82-54.84a7.497 7.497 0 0 0-.613-10.586 7.502 7.502 0 0 0-10.59.614l-44.09 49.523-30.081-24.047a7.499 7.499 0 0 0-10.54 1.176 7.5 7.5 0 0 0 1.176 10.543zm0 0"></path>
                                                </svg>
                                            </i>

                                            <h4 class="__title">100% Online e Seguro</h4>
                                        </div>
                                    </div>
                                    <!-- end item -->

                                    <!-- start item -->
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div class="__item">
                                            <i class="__ico">
                                                <svg fill="#ff478e" width="55" height="55" viewBox="0 0 512 512"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M489.5 467H465V308.054c0-.296-.023-.585-.055-.874l-.035-.23a7.566 7.566 0 0 0-.133-.673l-.058-.23a6.752 6.752 0 0 0-.25-.75l-.035-.098a7.245 7.245 0 0 0-.403-.82l-.023-.05-42.613-74.388a1.491 1.491 0 0 1-.063-.105c-1.969-3.305-5.27-5.281-8.832-5.281s-6.863 1.976-8.832 5.28a1.64 1.64 0 0 1-.063.106l-42.613 74.387c-.012.016-.015.035-.023.05-.153.267-.285.54-.403.821l-.035.098a6.752 6.752 0 0 0-.308.98 7.566 7.566 0 0 0-.133.672l-.035.23c-.032.29-.055.579-.055.876v72.113c0 4.14 3.355 7.5 7.5 7.5s7.5-3.36 7.5-7.5v-64.61h15V467h-15v-54.832c0-4.145-3.355-7.5-7.5-7.5s-7.5 3.355-7.5 7.5V467h-51.5V254.5c0-.297-.023-.59-.055-.879l-.035-.226a7.298 7.298 0 0 0-.133-.672 7.1 7.1 0 0 0-.309-.984l-.034-.094a7.245 7.245 0 0 0-.403-.82l-.023-.055-42.613-74.383a1.492 1.492 0 0 1-.063-.106c-1.969-3.308-5.27-5.281-8.832-5.281s-6.863 1.973-8.832 5.281c-.02.035-.04.07-.063.106l-42.613 74.383c-.012.02-.015.035-.023.054a6.936 6.936 0 0 0-.403.82l-.035.098c-.097.242-.18.492-.25.75a2.21 2.21 0 0 0-.058.23 7.298 7.298 0 0 0-.133.673l-.035.226c-.032.29-.055.582-.055.879v13.668c0 4.14 3.355 7.5 7.5 7.5s7.5-3.36 7.5-7.5V262h15v205h-15V300.168c0-4.145-3.355-7.5-7.5-7.5s-7.5 3.355-7.5 7.5V467H152v-22.832c0-4.145-3.355-7.5-7.5-7.5s-7.5 3.355-7.5 7.5V467h-15v-94.844h15v40.176c0 4.145 3.355 7.5 7.5 7.5s7.5-3.355 7.5-7.5v-47.68c0-.297-.023-.586-.055-.875l-.035-.23a7.854 7.854 0 0 0-.441-1.652l-.035-.094a6.99 6.99 0 0 0-.403-.824c-.008-.016-.015-.036-.023-.051l-42.613-74.387a1.491 1.491 0 0 1-.063-.105c-1.969-3.305-5.27-5.282-8.832-5.282s-6.863 1.977-8.832 5.282c-.02.035-.04.07-.063.105l-42.613 74.387c-.012.015-.015.035-.023.05a7.41 7.41 0 0 0-.403.82l-.035.099a7.338 7.338 0 0 0-.308.98 7.854 7.854 0 0 0-.133.672l-.035.23a7.92 7.92 0 0 0-.055.875V467H22.5C10.094 467 0 477.094 0 489.5S10.094 512 22.5 512h467c12.406 0 22.5-10.094 22.5-22.5S501.906 467 489.5 467zM435 315.555h15V467h-15zm-54.559-15l32.059-55.957 32.059 55.957zm24.559 15h15V467h-15zM278.5 262h15v205h-15zm-54.559-15L256 191.04 288.059 247zm24.559 15h15v205h-15zM107 467H92v-94.844h15zm-7.5-165.805l32.059 55.961H67.44zM62 372.156h15V467H62zM489.5 497h-467c-4.137 0-7.5-3.363-7.5-7.5s3.363-7.5 7.5-7.5h467c4.137 0 7.5 3.363 7.5 7.5s-3.363 7.5-7.5 7.5zm0 0"></path>
                                                    <path d="M99.5 206c20.68 0 37.5-16.82 37.5-37.5a37.27 37.27 0 0 0-4.516-17.828l100.172-83.856C239.066 71.934 247.18 75 256 75c11.234 0 21.328-4.973 28.203-12.828l92.656 52.683A37.415 37.415 0 0 0 375 126.5c0 20.68 16.82 37.5 37.5 37.5s37.5-16.82 37.5-37.5S433.18 89 412.5 89c-11.234 0-21.328 4.973-28.203 12.828L291.64 49.145A37.415 37.415 0 0 0 293.5 37.5C293.5 16.82 276.68 0 256 0s-37.5 16.82-37.5 37.5a37.27 37.27 0 0 0 4.516 17.828l-100.172 83.856C116.434 134.066 108.32 131 99.5 131 78.82 131 62 147.82 62 168.5S78.82 206 99.5 206zm313-102c12.406 0 22.5 10.094 22.5 22.5S424.906 149 412.5 149 390 138.906 390 126.5s10.094-22.5 22.5-22.5zM256 15c12.406 0 22.5 10.094 22.5 22.5S268.406 60 256 60s-22.5-10.094-22.5-22.5S243.594 15 256 15zM99.5 146c12.406 0 22.5 10.094 22.5 22.5S111.906 191 99.5 191 77 180.906 77 168.5 87.094 146 99.5 146zm0 0"></path>
                                                </svg>
                                            </i>

                                            <h4 class="__title">Acompanhe os rendimentos da sua clinica atravpes de relatórios

											</h4>
                                        </div>
                                    </div>
                                    <!-- end item -->
                                </div>
                            </div>
                        </div>
                        <!-- end services -->

                    </div>
                </div>
            </div>
        </div>

        <!-- start section -->
        <section class="section">
            <div class="container">
                <div class="row align-items-md-center">
                    <div class="col-12 col-lg-6">
                        <div class="section-heading">
                            <h6 class="__subtitle">Recursos</h6>

                            <h2 class="__title">Múltiplas Agendas
                                <br><span>Mais organização para sua clínica</span></h2>
                        </div>

                        <div class="spacer py-4"></div>

                        <div>
                            <p>
                                Organize seu dia a dia facilmente, tenha múltiplas e ilimitadas agendas para todos os
                                profissionais cadastrados.
                            </p>

                            <ul class="check-list my-md-6">
                                <li><i class="ico-checked fontello-ok"></i>Cadastro ilimitado de pacientes</li>
                                <li><i class="ico-checked fontello-ok"></i>Cadastro ilimitado de médicos</li>
                                <li><i class="ico-checked fontello-ok"></i>Agendamentos integrados a agenda de cada
                                    profissional
                                </li>
                            </ul>

                            <!--							<p class="mt-9">-->
                            <!--								<a class="custom-btn custom-btn&#45;&#45;medium custom-btn&#45;&#45;style-2" href="#">Read More</a>-->
                            <!--							</p>-->
                        </div>
                    </div>

                    <div class="spacer py-4 d-lg-none"></div>

                    <div class="col-12 col-lg-6  text-center text-lg-right">

                        <figure class="image-container js-tilt" data-tilt-speed="600" data-tilt-max="15"
                                data-tilt-perspective="700">
                            <img class="img-fluid lazy" width="520" height="507" src="https://res.cloudinary.com/vargatt/oka6/img/blank.gif"
                                 data-src="https://res.cloudinary.com/vargatt/image/upload/v1571614842/oka6/agendas-multiplas.png"
                                 alt="demo"/>
                        </figure>

                    </div>
                </div>
            </div>
        </section>
        <!-- end section -->

        <!-- start section -->
        <section class="section section--no-pt">
            <div class="container">
                <div class="row flex-lg-row-reverse align-items-lg-center">
                    <div class="col-12 col-lg-6">
                        <div class="section-heading">
                            <h6 class="__subtitle">Recursos</h6>

                            <h2 class="__title">Controle total
                                <br><span>Cadastro personalizável</span></h2>
                        </div>

                        <div class="spacer py-4"></div>

                        <div>
                            <p>
                                Cadastro completo do profissional permitindo maior controle e precisão dos agendamentos.
                            </p>

                            <!-- start counter -->
                            <div class="counter counter--s2">
                                <div class="__inner">
                                    <div class="row">
                                        <!-- start item -->
                                        <!-- end item -->
                                    </div>
                                </div>
                            </div>
                            <!-- end counter -->
                        </div>
                    </div>

                    <div class="spacer py-4 d-lg-none"></div>

                    <div class="col-12 col-lg-6  text-center text-lg-left">

                        <figure class="image-container js-tilt" data-tilt-speed="600" data-tilt-max="15"
                                data-tilt-perspective="700">
                            <img class="img-fluid lazy" width="547" height="469" src="https://res.cloudinary.com/vargatt/oka6/img/blank.gif"
                                 data-src="https://res.cloudinary.com/vargatt/image/upload/v1571614842/oka6/controle-total-agenda.png"
                                 alt="demo"/>
                        </figure>

                    </div>
                </div>
            </div>
        </section>
        <!-- end section -->


		<section class="section--light-blue-bg" id="prices">
			<div class="container"><br>
				<div class="section-heading section-heading--center">

					<h2 class="__title">Planos<br><span>para sua clinica</span></h2>
				</div>

				<div class="spacer py-6"></div>

				<div class="row">
					<div class="col-12">

						<div class="content-container">
							<!-- start pricing table -->
							<div class="pricing-table pricing-table--s1">
								<div class="__inner">
									<div class="row justify-content-sm-center">
										<!-- start item -->
										<div class="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-3 d-sm-flex">
											<div class="__item __item--rounded __item--shadow">
												<div class="__header">
													<div class="__title h4">Optimal</div>


													<div class="__price"><sup>R$</sup>79.90<sub>/m</sub></div>
												</div>

												<div class="__body  pt-8 pb-9">
													<ul class="__desc-list">
														<li>Increase traffic 100%</li>
														<li>Web site Analysis</li>
														<li>Content Optimization</li>
														<li>10 Free Optimization</li>
														<li>Online 24/7 support</li>
														<li class="disabled">Free Simple Website</li>
														<li class="disabled">Monthly Gifts</li>
													</ul>
												</div>

												<div class="__footer">
													<a class="custom-btn custom-btn--medium custom-btn--style-2" href="#">&nbsp;&nbsp;Get Started&nbsp;&nbsp;</a>
												</div>
											</div>
										</div>
										<!-- end item -->

										<!-- start item -->
										<div class="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-3 d-sm-flex">
											<div class="__item __item--rounded __item--shadow __item--active">
												<div class="__header">
													<span class="__label">Melhor escolha</span>

													<div class="__title h4">Standart</div>


													<div class="__price"><sup>R$</sup>129.9<sub>/m</sub></div>
												</div>

												<div class="__body  pt-8 pb-9">
													<ul class="__desc-list">
														<li>Increase traffic 100%</li>
														<li>Web site Analysis</li>
														<li>Content Optimization</li>
														<li>10 Free Optimization</li>
														<li>Online 24/7 support</li>
														<li>Free Simple Website</li>
														<li class="disabled">Monthly Gifts</li>
													</ul>
												</div>

												<div class="__footer">
													<a class="custom-btn custom-btn--medium custom-btn--style-4" href="#">&nbsp;&nbsp;Get Started&nbsp;&nbsp;</a>
												</div>
											</div>
										</div>
										<!-- end item -->

										<!-- start item -->
										<div class="col-12 col-sm-9 col-md-6 col-lg-5 col-xl-3 d-sm-flex">
											<div class="__item __item--rounded __item--shadow">
												<div class="__header">
													<div class="__title h4">Premium</div>

													<div class="__price"><sup>R$</sup>179<sub>/m</sub></div>
												</div>

												<div class="__body  pt-8 pb-9">
													<ul class="__desc-list">
														<li>Increase traffic 100%</li>
														<li>Web site Analysis</li>
														<li>Content Optimization</li>
														<li>10 Free Optimization</li>
														<li>Online 24/7 support</li>
														<li>Free Simple Website</li>
														<li>Monthly Gifts</li>
													</ul>
												</div>

												<div class="__footer">
													<a class="custom-btn custom-btn--medium custom-btn--style-2" href="#">&nbsp;&nbsp;Get Started&nbsp;&nbsp;</a>
												</div>
											</div>
										</div>
										<!-- end item -->
									</div>
								</div>
							</div>
							<!-- end pricing table -->
						</div>

					</div>
				</div>
			</div>
		</section>
		<br>
		<br>

    </main>
    <!-- end main -->

    <!-- start footer -->
    <footer class="footer footer--s1 footer--color-light">
    	<div class="footer__line footer__line--first">
    		<div class="container">
    			<div class="row">
    				<div class="col-12 col-md-4 col-lg-4 col-xl-3">
    					<div class="footer__item">
    						<a class="footer__logo site-logo logo white" href="index.html">
    							Hclinic
    <!--							<img class="img-fluid lazy" src="img/blank.gif" data-src="img/site_logo/logo_3.png" width="159" height="45" alt="demo" />-->
    						</a>
    					</div>

    					<div class="footer__item">
    						<span class="__copy">Copyrights 2019 © <a class="__dev" href="http://oka6.com.br" target="_blank">Oka6 - Software house desenvolvimento</a></span>
    					</div>
    				</div>

    				<div class="col-12 col-md-5 col-lg-3 offset-xl-1">
    					<div class="footer__item">
    						<address class="footer__address footer__address--s1">
    							Porto Alegre  - RS<br>
    							<a href="mailto:youremail@yourdomain.com">contato@oka6.com.br</a> <br>
    							<a href="#">51981972185</a>
    						</address>
    					</div>
    				</div>

    				<div class="col-12 col-md-3 col-lg-2">
    					<div class="footer__item">
    						<nav id="footer__navigation" class="footer__navigation">
    							<ul>
    								<!-- li class="active" -->
    								<li><a href="#">Login</a></li>
    								<li><a href="#">Cadastro</a></li>
    								<li><a href="#">Termos de uso</a></li>
    							</ul>
    						</nav>
    					</div>
    				</div>

    				<div class="col-12 col-lg-3">
    					<div class="footer__item">
    						<!-- start social buttons -->
    						<div class="s-btns s-btns--md s-btns--colored s-btns--rounded">
    							<ul class="d-flex flex-row flex-wrap align-items-center">
    								<li><a class="f" href="#"><i class="fontello-facebook"></i></a></li>
    								<li><a class="t" href="#"><i class="fontello-twitter"></i></a></li>
    								<li><a class="y" href="#"><i class="fontello-youtube-play"></i></a></li>
    								<li><a class="i" href="#"><i class="fontello-instagram"></i></a></li>
    							</ul>
    						</div>
    						<!-- end social buttons -->
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>

    	<div class="footer__waves-container">
    		<svg class="footer__wave js-wave" data-wave=\'{"height": 40, "bones": 6, "amplitude": 70, "color": "rgba(78, 111, 136, 0.14)", "speed": 0.3}\' width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d=""/></svg>

    		<svg class="footer__wave js-wave" data-wave=\'{"height": 60, "bones": 5, "amplitude": 90, "color": "rgba(243, 248, 249, 0.02)", "speed": 0.35}\' width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d=""/></svg>
    	</div>
    </footer>



    <!-- end footer -->
</div>

<div id="btn-to-top-wrap">
    <a id="btn-to-top" class="circled" href="javascript:void(0);" data-visible-offset="800"></a>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script>window.jQuery || document.write(\'<script src="/vendor/oka6/templates/landings/js/jquery-2.2.4.min.js"><\/script>\')</script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

<script type="text/javascript" src="/vendor/oka6/templates/landings/js/main.min.js"></script>

<!-- Code injected by live-server -->
<script type="text/javascript">
	// <![CDATA[  <-- For SVG support
	if (\'WebSocket\' in window) {
		(function() {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					head.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, \'\');
						elem.href = url + (url.indexOf(\'?\') >= 0 ? \'&\' : \'?\') + \'_cacheOverride=\' + (new Date().valueOf());
					}
					head.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === \'http:\' ? \'ws://\' : \'wss://\';
			var address = protocol + window.location.host + window.location.pathname + \'/ws\';
			var socket = new WebSocket(address);
			socket.onmessage = function(msg) {
				if (msg.data == \'reload\') window.location.reload();
				else if (msg.data == \'refreshcss\') refreshCSS();
			};
			console.log(\'Live reload enabled.\');
		})();
	}
	// ]]>
</script>
</body>
</html>',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]
        ]);
        $profile = Profile::where('id', User::PROFILE_ID_ROOT)->first();
        if (!count($profile->resources_allow)) {
            $profile->resources_allow = [$id];
            $profile->save();
        }

    }


}
