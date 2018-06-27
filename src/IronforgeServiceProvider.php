<?php

namespace Aggrega\Ironforge;

use Illuminate\Support\ServiceProvider;


class IronforgeServiceProvider extends ServiceProvider
{

    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;



    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //$this->loadRoutesFrom(__DIR__.'/routes/web.php');
        //$this->loadViewsFrom(__DIR__.'/resources/views/', 'Ironforge');
        $this->loadMigrationsFrom(__DIR__.'/database/migrations');
        //$this->mergeConfigFrom(__DIR__.'/config/laravel-logger.php', 'Ironforge');
        //$this->publishFiles();
    }

}