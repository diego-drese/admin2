let mix = require('laravel-mix');

mix.setPublicPath('./')

mix.babel([
    'src/resources/assets/theme/nice-admin/libs/jquery/dist/jquery.min.js',
    'src/resources/assets/theme/nice-admin/libs/popper.js/dist/umd/popper.min.js',
    'src/resources/assets/theme/nice-admin/libs/bootstrap/dist/js/bootstrap.min.js',
    'src/resources/assets/theme/nice-admin/libs/toastr/build/toastr.min.js',
    'src/resources/assets/theme/nice-admin/libs/sweetalert2/dist/sweetalert2.all.min.js',
    'src/resources/assets/theme/nice-admin/libs/bootstrap-switch/dist/js/bootstrap-switch.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/DataTables/datatables.min.js',
    'src/resources/assets/theme/nice-admin/libs/select2/dist/js/select2.min.js',
    'src/resources/assets/theme/nice-admin/libs/select2/dist/js/i18n/pt-BR.js',
    'src/resources/assets/theme/nice-admin/dist/js/app-style-switcher.js',
    'src/resources/assets/theme/nice-admin/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/sparkline/sparkline.js',
    'src/resources/assets/theme/nice-admin/dist/js/waves.js',
    'src/resources/assets/theme/nice-admin/dist/js/sidebarmenu.js',
    'src/resources/assets/theme/nice-admin/dist/js/custom.min.js',
    'src/resources/assets/theme/nice-admin/libs/chartist/dist/chartist.min.js',
    'src/resources/assets/theme/nice-admin/libs/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/c3/d3.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/jvector/jquery-jvectormap-2.0.2.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/jvector/jquery-jvectormap-world-mill-en.js',
    'src/resources/assets/theme/nice-admin/dist/js/pages/dashboards/dashboard1.js',
    'src/resources/assets/theme/nice-admin/dist/js/app.min.js',
    'src/resources/assets/theme/nice-admin/dist/js/app.init.js',
],'src/public/nice-admin/js/app.js').version();



mix.styles([
    'src/resources/assets/theme/nice-admin/libs/datatables.net-bs4/css/dataTables.bootstrap4.css',
    'src/resources/assets/theme/nice-admin/libs/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css',
    'src/resources/assets/theme/nice-admin/libs/chartist/dist/chartist.min.css',
    'src/resources/assets/theme/nice-admin/extra-libs/c3/c3.min.css',
    'src/resources/assets/theme/nice-admin/extra-libs/jvector/jquery-jvectormap-2.0.2.css',
    'src/resources/assets/theme/nice-admin/libs/select2/dist/css/select2.min.css',
    'src/resources/assets/theme/nice-admin/libs/sweetalert2/dist/sweetalert2.min.css',
    'src/resources/assets/theme/nice-admin/dist/css/style.min.css',
    'src/resources/assets/theme/nice-admin/libs/toastr/build/toastr.min.css',
],'src/public/nice-admin/css/app.css').version();

mix.babel([
    'src/resources/assets/theme/nice-admin/libs/jquery/dist/jquery.min.js',
    'src/resources/assets/theme/nice-admin/libs/popper.js/dist/umd/popper.min.js',
    'src/resources/assets/theme/nice-admin/libs/bootstrap/dist/js/bootstrap.min.js',
    'src/resources/assets/theme/nice-admin/libs/toastr/build/toastr.min.js',
    'src/resources/assets/theme/nice-admin/libs/tooltip/tooltip.js',
    'src/resources/assets/theme/nice-admin/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/sparkline/sparkline.js',
    'src/resources/assets/theme/nice-admin/dist/js/sidebarmenu.js',
    'src/resources/assets/theme/nice-admin/libs/moment/moment.js',
    'src/resources/assets/theme/nice-admin/libs/moment/locale/pt-br.js',
    'src/resources/assets/theme/nice-admin/dist/js/custom.min.js',
    'src/resources/assets/theme/nice-admin/dist/js/app.min.js',
    'src/resources/assets/theme/nice-admin/dist/js/app.init.js',
],'src/public/nice-admin/js/basic.js').version();

mix.styles([
    'src/resources/assets/theme/nice-admin/dist/css/style.min.css',
    'src/resources/assets/theme/nice-admin/libs/tooltip/tooltip.css',
    'src/resources/assets/theme/nice-admin/libs/toastr/build/toastr.min.css',
],'src/public/nice-admin/css/basic.css').version();

/** DataTable*/
mix.babel([
    'src/resources/assets/theme/nice-admin/extra-libs/DataTables/datatables.js',
],'src/public/nice-admin/js/datatables.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/extra-libs/DataTables/datatables.css',
],'src/public/nice-admin/css/datatables.css').version();

/** Bootstrap Switch*/
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/bootstrap-switch/dist/js/bootstrap-switch.min.js',
],'src/public/nice-admin/js/bootstrap-switch.js').version();

mix.styles([
    'src/resources/assets/theme/nice-admin/libs/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css',
],'src/public/nice-admin/css/bootstrap-switch.css').version();

/** Select2*/
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/select2/dist/js/select2.min.js',
    'src/resources/assets/theme/nice-admin/libs/select2/dist/js/i18n/pt-BR.js',
],'src/public/nice-admin/js/select2.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/select2/dist/css/select2.min.css',
],'src/public/nice-admin/css/select2.css').version();

/** Material-datetimepicker.*/
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker-custom.js',
],'src/public/nice-admin/js/datetimepicker.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css',
],'src/public/nice-admin/css/datetimepicker.css').version();

/** DataeRangePicker */
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/daterangepicker/daterangepicker.js',
],'src/public/nice-admin/js/daterangepicker.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/daterangepicker/daterangepicker.css'
],'src/public/nice-admin/css/daterangepicker.css').version();

/** Sweet Alert 2.*/
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/sweetalert2/dist/sweetalert2.all.min.js',
],'src/public/nice-admin/js/sweetalert2.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/sweetalert2/dist/sweetalert2.min.css',
],'src/public/nice-admin/css/sweetalert2.css').version();

/** Forms*/
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/jquery-mask/jquery.mask.min.js',
    'src/resources/assets/theme/nice-admin/libs/bootstrap-toggle/dist/js/bootstrap-toggle.min.js',
],'src/public/nice-admin/js/forms.js').version();

mix.babel([
    'src/resources/assets/theme/nice-admin/extra-libs/c3/c3.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/c3/d3.min.js',
],'src/public/nice-admin/js/c3.js').version();

mix.styles([
    'src/resources/assets/theme/nice-admin/extra-libs/c3/c3.min.css',
],'src/public/nice-admin/css/c3.css').version();

mix.styles([
    'src/resources/assets/theme/nice-admin/libs/bootstrap-toggle/dist/css/bootstrap-toggle.min.css',
],'src/public/nice-admin/css/form.css').version();

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