<?php

return [
	'prefix_url' => env('OKA6_ADMIN_PREFIX_URL', 'adm'),
	'favicon' => env('OKA6_ADMIN_FAVICON', '/vendor/oka6/admin/assets/images/favicon.png'),
	'logo' => env('OKA6_ADMIN_LOGO', '/vendor/oka6/admin/assets/images/logo-icon.png'),
	'logo_label' => env('OKA6_ADMIN_LOGO_LABEL', 'Oka6'),
	'background_login' => env('OKA6_ADMIN_BACKGROUND_LOGIN', '#fff'),
	'hide_footer' => env('OKA6_ADMIN_HIDE_FOOTER', false),
	"cache_prefix" => 'oka6',
	'profile_type' => ['admin' => 'Admin'],
	'plan_fields_update' => [],
	'sendgrid_api_key' => env('SENDGRID_API_KEY', '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'),
];
