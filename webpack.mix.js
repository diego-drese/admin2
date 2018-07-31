let mix = require('laravel-mix');

mix.setPublicPath('./')

mix.babel([
    'src/resources/assets/theme/backend/js/jquery-2.2.3.min.js',
    'src/resources/assets/theme/backend/js/bootstrap.min.js',
    'src/resources/assets/theme/backend/js/app.min.js',
    'src/resources/assets/theme/backend/js/script.js',
    'src/resources/assets/theme/backend/js/toastr.js',
    'src/resources/assets/theme/backend/plugins/iCheck/icheck.min.js',
    'src/resources/assets/js/Controller.js',
],'src/public/js/app.js').version();

mix.sass('src/resources/assets/theme/backend/css/sass/ironforge.scss', 'src/public/css/ironforge.css');

mix.styles([
    'src/resources/assets/theme/backend/css/bootstrap.min.css',
    'src/resources/assets/theme/backend/plugins/font-awesome/css/font-awesome.min.css',
    'src/resources/assets/theme/backend/css/lte.min.css',
    'src/resources/assets/theme/backend/css/custom.css',
    'src/public/css/ironforge.css',
    'src/resources/assets/theme/backend/css/ironforge-login.css',
    'src/resources/assets/theme/backend/plugins/iCheck/square/blue.css',
],'src/public/css/app.css').version();


mix.copy('src/resources/assets/theme/backend/plugins/iCheck/square/blue.png', 'src/public/css');
mix.copy('src/resources/assets/theme/backend/img/login.jpg', 'src/public/img');
mix.copy('src/resources/assets/js/pt-br.json', 'src/public/js');

mix.copy('src/resources/assets/theme/backend/img/favicon.ico', 'src/public/img');

mix.copyDirectory('src/resources/assets/theme/backend/css/fonts', 'src/public/fonts');

mix.autoload({
    'jquery': ['jQuery', '$','jquery'],
});

mix.webpackConfig({
    resolve: {
        alias: {
            jquery: "jquery/src/jquery/jQuery/$"
        }
    }
});