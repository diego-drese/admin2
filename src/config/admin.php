<?php

return [
    'prefix_url'            => env('NEGOTIATE_ADMIN_PREFIX_URL', 'adm'),
    'favicon'               => env('NEGOTIATE_ADMIN_FAVICON', '/vendor/oka6/admin/img/favicon.png'),
    'logo_label'            => env('NEGOTIATE_ADMIN_LOGO_LABEL', 'Oka6'),
    "cache_prefix"          => 'oka6',
    'profile_type'          => ['admin' => 'Admin'],
    'plan_fields_update'    => [],
    'template_theme'        => env('TEMPLATE_THEME', 'clinic')
];
