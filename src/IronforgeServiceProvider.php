<?php

namespace Aggrega\Ironforge;

use Aggrega\Ironforge\Http\ViewComposers;
use Aggrega\Ironforge\Console\Commands\RefreshRoutes;
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

        $this->loadViewsFrom(__DIR__ . '/resources/views', 'Ironforge');
        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');
        $this->loadRoutesFrom(__DIR__ . '/routes/web.php');

        $this->publishes([
            __DIR__ . '/public' => public_path('vendor/aggrega/ironforge/laravel-package-ironforge'),
        ], 'public');

        $this->mergeConfigFrom(
            __DIR__.'/config/auth.php', 'auth'
        );

        $this->mergeConfigFrom(
            __DIR__.'/config/ironforge.php', 'ironforge'
        );

        $this->mergeViewComposer();
    }

    /**
     * Merge the given configuration with the existing configuration.
     *
     * @param  string  $path
     * @param  string  $key
     * @return void
     */
    protected function mergeConfigFrom($path, $key)
    {

        $config = $this->app['config']->get($key, []);
        $this->app['config']->set($key, array_merge($config, require $path));
    }



    /**
     * Merge View Navigation Composer
     *
     * @return void
     */
    protected function mergeViewComposer()
    {

        view()->composer('*',ViewComposers\NavigationComposer::class);
    }
    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {

        $this->commands([
            RefreshRoutes::class
        ]);
    }
}
