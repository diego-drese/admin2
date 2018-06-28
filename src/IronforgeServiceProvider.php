<?php

namespace Aggrega\Ironforge;

use Illuminate\Support\ServiceProvider;

class IronForgeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //

        //$this->loadViewsFrom(__DIR__.'/resources', 'ironforge');
        //$this->loadViewsFrom(__DIR__.'/resources/views/', 'Ironforge');
       $this->loadMigrationsFrom(__DIR__.'/database/migrations');
        //$this->mergeConfigFrom(__DIR__.'/config/laravel-logger.php', 'Ironforge');
        //$this->publishFiles();

        //$this->loadRoutesFrom(__DIR__.'/routes/web.php');
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
