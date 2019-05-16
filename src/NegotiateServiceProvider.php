<?php

namespace Negotiate\Admin;

use Illuminate\Support\Facades\App;
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
    public function boot() {

        $this->loadTranslationsFrom(__DIR__.'/resources/lang', 'admin');
        $this->loadViewsFrom(__DIR__ . '/resources/views', 'Admin');
        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');
        $this->loadRoutesFrom(__DIR__ . '/routes/web.php');

        $this->publishes([
            __DIR__.'/resources/lang' => resource_path('lang'),
        ]);

        $this->publishes([
            __DIR__ . '/../vendor' => public_path('vendor'),
        ], 'public');

        $this->mergeConfigFrom(
            __DIR__ . '/../mix-manifest.json', 'app.merge-mix-admin'
        );

        $this->mergeConfigFrom(
            __DIR__.'/config/admin.php', 'admin'
        );
        $this->mergeConfigFrom(
            __DIR__.'/config/database.php', 'database.connections'
        );

        $this->mergeConfigFrom(
            __DIR__ . '/config/auth_providers.php', 'auth.providers'
        );

        $this->mergeConfigFrom(
            __DIR__ . '/config/providers.php', 'app.providers'
        );
        $this->mergeConfigFrom(
            __DIR__ . '/config/session.php', 'session'
        );

        $this->mergeConfigFrom(
            __DIR__.'/config/profile_type.php', 'admin.profile_type'
        );

        $this->mergeViewComposer();

        if(php_sapi_name()!='cli'){
            $this->setObservers();
        }

    }
    protected function setObservers(){

        Profile::observe("Negotiate\\Admin\\Observers\\ProfileObserver");
        Resource::observe("Negotiate\\Admin\\Observers\\ResourcesObserver");
        User::observe("Negotiate\\Admin\\Observers\\UserAdminObserver");

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

        App::setLocale('pt-BR');


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

        if($key=='admin'  && !isset($config['owner_type'])){
            $rootArray=require $path;
            if(!empty($config['owner_type'])){
                $rootArray['owner_type'] = $config['owner_type'];
            }
            $this->app['config']->set($key, array_merge($config, $rootArray));
        }

        if($key=='admin'  && !isset($config['profile_type'])){
            $this->app['config']->set($key, array_merge($config, require $path));
        }

        if ($key == 'database.connections' && !isset($config['negotiate_admin'])) {
            $this->app['config']->set($key, array_merge($config, require $path));
        }

        if ($key == 'auth.providers') {
            $this->app['config']->set($key, array_merge($config, require $path));
        }

        if ($key == 'app.providers') {
            $this->app['config']->set($key, array_merge($config, require $path));
        }

        if ($key == 'session') {
            $this->app['config']->set($key, array_merge($config, require $path));
        }

        if ($key == 'admin.profile_type') {
            $this->app['config']->set($key, array_merge($config, require $path));
        }

        if($key=='app.merge-mix-admin' && empty($config)){
            try{
                $jsonMixProject = json_decode(file_get_contents(public_path('/mix-manifest.json')),true);
            }catch(\Exception $e){
                $jsonMixProject=[];
            }

            $jsonMix        = json_decode(file_get_contents($path), true);
            $jsonMerge      = array_merge(is_array($jsonMixProject) ? $jsonMixProject: [], $jsonMix);
            $file           = fopen(public_path('/mix-manifest.json'), 'w');
            fwrite($file, json_encode($jsonMerge,JSON_UNESCAPED_SLASHES));
            fclose($file);
            $this->app['config']->set($key, true);
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
