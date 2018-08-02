<?php

namespace Aggrega\Ironforge;

use Aggrega\Ironforge\Http\ViewComposers;
use Aggrega\Ironforge\Console\Commands\RefreshRoutes;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
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
            __DIR__.'/config/ironforge.php', 'ironforge'
        );
        $this->mergeConfigFrom(
            __DIR__.'/config/auth.php', 'auth'
        );

        $this->mergeViewComposer();

        Schema::defaultStringLength(191);

        if(php_sapi_name()!='cli'){
            $this->setObservers();
        }

    }
    protected function setObservers(){

        Owner::observe("Aggrega\\Ironforge\\Observers\\OwnerObserver");
        Profile::observe("Aggrega\\Ironforge\\Observers\\ProfileObserver");
        Resource::observe("Aggrega\\Ironforge\\Observers\\ResourcesObserver");
        UserIronForge::observe("Aggrega\\Ironforge\\Observers\\UserIronForgeObserver");

        Event::listen('log.createdRequest', function ($obj) {

            $data = json_encode($obj->request,true);

            $log_ = "Creating {$obj->model->getTable()} RequestData {$data} register #{$obj->model->id} for User {$obj->auth->id}#{$obj->auth->name}";

            Log::info($log_);

        });

        Event::listen('log.updatedRequest', function ($obj) {

            $data = json_encode($obj->request,true);

            $log_ = "Updating {$obj->model->getTable()} RequestData {$data} register #{$obj->model->id} for User {$obj->auth->id}#{$obj->auth->name}";

            Log::info($log_);

        });


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

        if($key=='auth'  || empty($config)){
            $this->app['config']->set($key, array_merge($config, require $path));
        }

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
