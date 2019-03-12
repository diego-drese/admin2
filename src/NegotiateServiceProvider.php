<?php

namespace Negotiate\Admin;

use Negotiate\Admin\Http\ViewComposers;
use Negotiate\Admin\Console\Commands\RefreshRoutes;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;


class NegotiateServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {

        $this->loadViewsFrom(__DIR__ . '/resources/views', 'Admin');
        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');
        $this->loadRoutesFrom(__DIR__ . '/routes/web.php');

        $this->publishes([
            __DIR__ . '/public' => public_path('vendor/negotiate/admin'),
        ], 'public');


        $this->mergeConfigFrom(
            __DIR__.'/config/admin.php', 'admin'
        );
        $this->mergeConfigFrom(
            __DIR__.'/config/database.php', 'database.connections'
        );

        $this->mergeConfigFrom(
            __DIR__ . '/config/providers.php', 'auth.providers'
        );

        $this->mergeViewComposer();

        Schema::defaultStringLength(191);

        if(php_sapi_name()!='cli'){
            $this->setObservers();
        }

    }
    protected function setObservers(){

        Owner::observe("Negotiate\\Admin\\Observers\\OwnerObserver");
        Profile::observe("Negotiate\\Admin\\Observers\\ProfileObserver");
        Resource::observe("Negotiate\\Admin\\Observers\\ResourcesObserver");
        User::observe("Negotiate\\Admin\\Observers\\UserIronForgeObserver");

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

        if($key=='auth'  && !isset($config['owner_type'])){
            $rootArray=require $path;
            if(!empty($config['owner_type'])){
                $rootArray['owner_type'] = $config['owner_type'];
            }
            $this->app['config']->set($key, array_merge($config, $rootArray));
        }

        if ($key == 'database.connections' && !isset($config['negotiate_admin'])) {
            $this->app['config']->set($key, array_merge($config, require $path));
        }


        if ($key == 'auth.providers') {
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
