<?php

namespace Aggrega\Ironforge\Providers;

use Aggrega\Ironforge\Http\ViewComposers;
use Illuminate\Support\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('*',ViewComposers\NavigationComposer::class);
        //view()->composer('layouts.backend.menu',NavigationComposer::class);
    }


    public function register()
    {
        //
    }
}
