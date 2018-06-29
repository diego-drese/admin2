<?php

namespace Aggrega\Ironforge;

use Aggrega\Ironforge\Http\ViewComposers;
use Illuminate\Support\ServiceProvider;


class IronforgeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {


        //view()->composer('*',ViewComposers\NavigationComposer::class);

        $this->loadViewsFrom(__DIR__ . '/resources/views', 'Ironforge');
        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');
        $this->loadRoutesFrom(__DIR__ . '/routes/web.php');
        $this->publishes([
            __DIR__ . '/public' => public_path('vendor/aggrega/ironforge/laravel-package-ironforge'),
        ], 'public');
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
