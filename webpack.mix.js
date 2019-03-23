let mix = require('laravel-mix');

mix.setPublicPath('./')



mix.babel([
    'src/resources/assets/theme/nice-admin/libs/jquery/dist/jquery.min.js',
    'src/resources/assets/theme/nice-admin/libs/bootstrap/dist/js/bootstrap.min.js',
    'src/resources/assets/theme/nice-admin/libs/popper.js/dist/umd/popper.min.js',
    'src/resources/assets/theme/nice-admin/libs/toastr/build/toastr.min.js',

    'src/resources/assets/theme/nice-admin/dist/js/app.min.js',
    'src/resources/assets/theme/nice-admin/dist/js/app.init.js',
    'src/resources/assets/theme/nice-admin/dist/js/app-style-switcher.js',
    'src/resources/assets/theme/nice-admin/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/sparkline/sparkline.js',
    'src/resources/assets/theme/nice-admin/dist/js/waves.js',
    'src/resources/assets/theme/nice-admin/dist/js/sidebarmenu.js',
    'src/resources/assets/theme/nice-admin/dist/js/custom.min.js',
    'src/resources/assets/theme/nice-admin/libs/chartist/dist/chartist.min.js',
    'src/resources/assets/theme/nice-admin/libs/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/c3/d3.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/c3/c3.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/jvector/jquery-jvectormap-2.0.2.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/jvector/jquery-jvectormap-world-mill-en.js',
    'src/resources/assets/theme/nice-admin/dist/js/pages/dashboards/dashboard1.js',
],'src/public/nice-admin/js/app.js').version();


mix.styles([
    'src/resources/assets/theme/nice-admin/libs/chartist/dist/chartist.min.css',
    'src/resources/assets/theme/nice-admin/extra-libs/c3/c3.min.css',
    'src/resources/assets/theme/nice-admin/extra-libs/jvector/jquery-jvectormap-2.0.2.css',
    'src/resources/assets/theme/nice-admin/dist/css/style.min.css',
    'src/resources/assets/theme/nice-admin/libs/toastr/build/toastr.min.css',
],'src/public/nice-admin/css/app.css').version();

// mix.styles([
// 	'src/resources/assets/theme/nice-admin/css/default.css',
// ],'src/public/backend/theme/css/app.css').version();

mix.copyDirectory('src/resources/assets/theme/nice-admin/dist/css/icons', 'src/public/nice-admin/css/icons');
mix.copyDirectory('src/resources/assets/theme/nice-admin/images', 'src/public/nice-admin/assets/images');

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