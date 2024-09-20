<?php
/**
 * Created by PhpStorm.
 * User: diego
 * Date: 15/08/18
 * Time: 15:10
 */
return [
	'oka6_admin' => [
		'driver' => 'mongodb',
		'host' => env('OKA6_ADMIN_DB_HOST', '127.0.0.1'),
		'port' => env('OKA6_ADMIN_DB_PORT', 27017),
		'database' => env('OKA6_ADMIN_DB_NAME', 'oka6_admin'),
		'username' => env('OKA6_ADMIN_DB_USERNAME', ''),
		'password' => env('OKA6_ADMIN_DB_PASSWORD', ''),
		'charset' => 'utf8',
		'collation' => 'utf8_unicode_ci',
		'prefix' => '',
		'strict' => false,
		'engine' => null,
		'options' => [
			'database' => env('OKA6_ADMIN_DB_NAME', 'sulradio') // sets the authentication database required by mongo 3
		]
	], 'oka6_admin_session' => [
		'driver' => 'mongodb',
		'host' => env('OKA6_ADMIN_SESSION_DB_HOST', '127.0.0.1'),
		'port' => env('OKA6_ADMIN_SESSION_DB_PORT', 27017),
		'database' => env('OKA6_ADMIN_SESSION_DB_NAME', 'oka6_admin'),
		'username' => env('OKA6_ADMIN_SESSION_DB_USERNAME', ''),
		'password' => env('OKA6_ADMIN_SESSION_DB_PASSWORD', ''),
		'charset' => 'utf8',
		'collation' => 'utf8_unicode_ci',
		'prefix' => '',
		'strict' => false,
		'engine' => null,
		'options' => [
			'database' => env('OKA6_ADMIN_SESSION_DB_NAME', 'sulradio') // sets the authentication database required by mongo 3
		]
	], 'oka6_notification' => [
		'driver' => 'mongodb',
		'host' => env('OKA6_NOTIFICATION_DB_HOST', '127.0.0.1'),
		'port' => env('OKA6_NOTIFICATION_DB_PORT', 27017),
		'database' => env('OKA6_NOTIFICATION_DB_NAME', 'oka6_notification'),
		'username' => env('OKA6_NOTIFICATION_DB_USERNAME', ''),
		'password' => env('OKA6_NOTIFICATION_DB_PASSWORD', ''),
		'charset' => 'utf8',
		'collation' => 'utf8_unicode_ci',
		'prefix' => '',
		'strict' => false,
		'engine' => null,
		'options' => [
			'database' => env('OKA6_NOTIFICATION_DB_NAME', 'sulradio') // sets the authentication database required by mongo 3
		]
	]
];
