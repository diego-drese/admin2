<!doctype html>
<html lang="pt_br">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>


    <meta name="theme-color" content="#9672de">

    <meta name="twitter:title" content="Hclinic Blog ">
    <meta name="og:title" content="Hclinic Blog ">
    <meta name="og:site_name" content="Hclinic Blog">
    <meta name="og:type" content="website">
    <meta name="og:locale" content="pt_BR">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/tema/style/clinic">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
    @yield('style_head')
    @yield('style_head_components')
</head>
<body class="bg-fl-oka">


@yield('content_blog')


<div class="container">
    <section class="footer-links">
        <div class="logo">
            <h1 class="logo">Hclinic</h1>
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
<script src="https://use.edgefonts.net/passion-one.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
</body>
</html>
