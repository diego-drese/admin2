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
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">
    <link rel="stylesheet" href="/tema/style/clinic">
    @yield('style_head')
</head>
<body>


@yield('content_blog')

<script src="https://use.edgefonts.net/passion-one.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
</body>
</html>
