<?php
/**
 * Created by PhpStorm.
 * User: luan
 * Date: 02/07/18
 * Time: 10:30
 */


return [
    'prefix_url' => env('IRONFORGE_PREFIX', 'console'),
    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => Aggrega\Ironforge\UserIronForge::class
        ]

    ]
];
