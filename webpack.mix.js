let mix = require('laravel-mix');

mix.setPublicPath('./')

mix.babel([
    'src/resources/assets/theme/quillpro/js/jquery-3.1.1.min.js',
    'src/resources/assets/theme/quillpro/js/popper.min.js',
    'src/resources/assets/theme/quillpro/js/bootstrap.min.js',
    'src/resources/assets/theme/quillpro/js/mdb.min.js',
    'src/resources/assets/theme/quillpro/js/velocity.min.js',
	'src/resources/assets/theme/quillpro/js/velocity.ui.min.js',
    'src/resources/assets/theme/quillpro/js/jquery.mCustomScrollbar.concat.min.js',
	'src/resources/assets/theme/quillpro/js/jquery.visible.min.js',
	'src/resources/assets/theme/quillpro/js/ie10-viewport-bug-workaround.js',
	'src/resources/assets/theme/quillpro/js/holder.min.js',
	'src/resources/assets/theme/quillpro/js/toastr.js',
	'src/resources/assets/theme/quillpro/js/scripts.js',
],'src/public/quillpro/js/app.js').version();


mix.styles([
    'src/resources/assets/theme/quillpro/css/batch-icons.css',
    'src/resources/assets/theme/quillpro/css/bootstrap.min.css',
    'src/resources/assets/theme/quillpro/css/mdb.min.css',
    'src/resources/assets/theme/quillpro/css/jquery.mCustomScrollbar.min.css',
    'src/resources/assets/theme/quillpro/css/hamburgers.css',
    'src/resources/assets/theme/quillpro/css/font-awesome.min.css',
    'src/resources/assets/theme/quillpro/css/quillpro.css',
],'src/public/quillpro/css/app.css').version();

mix.styles([
	'src/resources/assets/theme/backend/css/default.css',
],'src/public/backend/theme/css/app.css').version();

mix.copyDirectory('src/resources/assets/theme/quillpro/fonts', 'src/public/quillpro/fonts');
mix.copyDirectory('src/resources/assets/theme/quillpro/img', 'src/public/quillpro/img');

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