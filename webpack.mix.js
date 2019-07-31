let mix = require('laravel-mix');

mix.setPublicPath('./')

mix.babel([
    'src/resources/assets/theme/nice-admin/libs/jquery/dist/jquery.min.js',
    'src/resources/assets/theme/nice-admin/libs/popper.js/dist/umd/popper.min.js',
    'src/resources/assets/theme/nice-admin/libs/bootstrap/dist/js/bootstrap.min.js',
    'src/resources/assets/theme/nice-admin/dist/js/app.min.js',
    'src/resources/assets/theme/nice-admin/dist/js/app.init.js',
    'src/resources/assets/theme/nice-admin/dist/js/custom.min.js',

    'src/resources/assets/theme/nice-admin/libs/toastr/build/toastr.min.js',
    'src/resources/assets/theme/nice-admin/libs/tooltip/tooltip.js',
    'src/resources/assets/theme/nice-admin/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/sparkline/sparkline.js',
    'src/resources/assets/theme/nice-admin/dist/js/sidebarmenu.js',
    'src/resources/assets/theme/nice-admin/libs/moment/moment.js',
    'src/resources/assets/theme/nice-admin/libs/moment/locale/pt-br.js',
    'src/resources/assets/js/tutorial-help.js',
],'vendor/negotiate/admin/js/basic.js').version();

mix.styles([
    'src/resources/assets/theme/nice-admin/dist/css/style.min.css',
    'src/resources/assets/theme/nice-admin/libs/tooltip/tooltip.css',
    'src/resources/assets/theme/nice-admin/libs/toastr/build/toastr.min.css',
    'src/resources/assets/theme/nice-admin/dist/css/negotiate.css',
],'vendor/negotiate/admin/css/basic.css').version();

mix.sass('src/resources/assets/theme/nice-admin/sass/theme-color.scss', 'vendor/negotiate/admin/css/themes.css').version();

/** DataTable*/
mix.babel([
    'src/resources/assets/theme/nice-admin/extra-libs/DataTables/datatables.js',
],'vendor/negotiate/admin/js/datatables.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/extra-libs/DataTables/datatables.css',
],'vendor/negotiate/admin/css/datatables.css').version();

/** Bootstrap Switch*/
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/bootstrap-switch/dist/js/bootstrap-switch.min.js',
],'vendor/negotiate/admin/js/bootstrap-switch.js').version();

mix.styles([
    'src/resources/assets/theme/nice-admin/libs/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css',
],'vendor/negotiate/admin/css/bootstrap-switch.css').version();

/** Select2*/
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/select2/dist/js/select2.min.js',
    'src/resources/assets/theme/nice-admin/libs/select2/dist/js/i18n/pt-BR.js',
],'vendor/negotiate/admin/js/select2.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/select2/dist/css/select2.min.css',
],'vendor/negotiate/admin/css/select2.css').version();

/** Material-datetimepicker.*/
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker-custom.js',
],'vendor/negotiate/admin/js/datetimepicker.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css',
],'vendor/negotiate/admin/css/datetimepicker.css').version();

/** DataeRangePicker */
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/daterangepicker/daterangepicker.js',
],'vendor/negotiate/admin/js/daterangepicker.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/daterangepicker/daterangepicker.css'
],'vendor/negotiate/admin/css/daterangepicker.css').version();

/** ColorSelector*/
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/bootstrap-colorselector/bootstrap-colorselector.min.js',
],'vendor/negotiate/admin/js/bootstrap-colorselector.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/bootstrap-colorselector/bootstrap-colorselector.min.css'
],'vendor/negotiate/admin/css/bootstrap-colorselector.css').version();

/** Sweet Alert 2.*/
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/sweetalert2/dist/sweetalert2.all.min.js',
],'vendor/negotiate/admin/js/sweetalert2.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/sweetalert2/dist/sweetalert2.min.css',
],'vendor/negotiate/admin/css/sweetalert2.css').version();

/** Forms*/
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/jquery-mask/jquery.mask.min.js',
    'src/resources/assets/theme/nice-admin/libs/bootstrap-toggle/dist/js/bootstrap-toggle.min.js',
],'vendor/negotiate/admin/js/forms.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/bootstrap-toggle/dist/css/bootstrap-toggle.min.css',
],'vendor/negotiate/admin/css/form.css').version();

/** C3*/
mix.babel([
    'src/resources/assets/theme/nice-admin/extra-libs/c3/c3.min.js',
    'src/resources/assets/theme/nice-admin/extra-libs/c3/d3.min.js',
],'vendor/negotiate/admin/js/c3.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/extra-libs/c3/c3.min.css',
],'vendor/negotiate/admin/css/c3.css').version();

/** DropZone*/
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/dropzone/dist/min/dropzone.min.js',
],'vendor/negotiate/admin/js/dropzone.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/dropzone/dist/min/dropzone.min.css',
],'vendor/negotiate/admin/css/dropzone.css').version();

/** wickedpicker */
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/wickedpicker/wickedpicker.js',
],'vendor/negotiate/admin/js/wickedpicker.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/wickedpicker/wickedpicker.css',
],'vendor/negotiate/admin/css/wickedpicker.css').version();

/** timepicker */
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/jquery-timepicker/jquery.timepicker.js',
],'vendor/negotiate/admin/js/timepicker.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/jquery-timepicker/jquery.timepicker.css',
],'vendor/negotiate/admin/css/timepicker.css').version();


mix.babel([
    'src/resources/assets/theme/nice-admin/libs/jquery-timepicker/jquery.datepair.min.js',
],'vendor/negotiate/admin/js/datepair.js').version();

/** SummerNote */
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/summernote/dist/summernote-bs4.min.js',
],'vendor/negotiate/admin/js/summernote.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/summernote/dist/summernote-bs4.css',
],'vendor/negotiate/admin/css/summernote.css').version();

/** JquerySteps */
mix.babel([
    'src/resources/assets/theme/nice-admin/libs/jquery-steps/build/jquery.steps.min.js',
],'vendor/negotiate/admin/js/jquerysteps.js').version();
mix.styles([
    'src/resources/assets/theme/nice-admin/libs/jquery-steps/jquery.steps.css',
    'src/resources/assets/theme/nice-admin/libs/jquery-steps/steps.css',
],'vendor/negotiate/admin/css/jquerysteps.css').version();


mix.copyDirectory('src/resources/assets/theme/nice-admin/dist/css/icons', 'vendor/negotiate/admin/css/icons');
mix.copyDirectory('src/resources/assets/theme/nice-admin/images', 'vendor/negotiate/admin/assets/images');
mix.copyDirectory('src/resources/assets/fonts', 'vendor/negotiate/admin/css/fonts');

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