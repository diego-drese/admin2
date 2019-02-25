<?php
/**
 * Created by PhpStorm.
 * User: diego
 * Date: 15/08/18
 * Time: 15:10
 */
return [
    'negotiate_admin' => [
        'driver' => 'mongodb',
        'host' => env('NEGOTIATE_ADMIN_DB_HOST', '127.0.0.1'),
        'port' => env('NEGOTIATE_ADMIN_DB_PORT', '27017'),
        'database' => env('NEGOTIATE_ADMIN_DB_NAME', 'negotiate_admin'),
        'username' => env('NEGOTIATE_ADMIN_DB_USERNAME', ''),
        'password' => env('NEGOTIATE_ADMIN_DB_PASSWORD', ''),
        'charset' => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix' => '',
        'strict' => false,
        'engine' => null
    ]
];
