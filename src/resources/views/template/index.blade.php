<!DOCTYPE html>
<html lang="pt-br" itemscope itemtype="https://schema.org/WebSite">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">
    <meta name="description" content="{{$description}}"/>
    <meta name="robots" content="index, follow"/>
    <link rel="stylesheet" href="tema/style/{{$slug}}">
    <link rel="shortcut icon" type="image/png" href="img/favicon.png">


    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WB6JZLH');</script>
    <!-- End Google Tag Manager -->

    <title>{{$title}}</title>
</head>

<body>
{!! $html !!}
<script src="tema/js/{{$slug}}"></script>
</body>
