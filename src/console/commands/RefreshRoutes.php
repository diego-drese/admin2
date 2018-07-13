<?php

namespace Aggrega\Ironforge\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class RefreshRoutes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ironforge:routes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Refresh Routes by Resources';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $routeCollection= \Route::getRoutes();
        $routes         = [];
        $bar            = $this->output->createProgressBar(count($routeCollection));
        
        foreach ($routeCollection as $routeLaravel){
            $action     = $routeLaravel->getAction();
            $middleware = $action['middleware'];

            if (array_key_exists('controller', $action) && in_array('auth', $middleware))
            {
                $nameManeu      = ucfirst(str_replace('.', ' ', $routeLaravel->getName()));
                $nameIronforge  = isset($routeLaravel->wheres['nameIronforge']) ? $routeLaravel->wheres['nameIronforge'] : $nameManeu;

                $routes[] = [
                    'controllerMethod'          => $action['controller'],
                    "routeName"                 => $routeLaravel->getName(),
                    "nameIronforge"             => $nameIronforge,
                    "isDefaultIronforge"        => isset($routeLaravel->wheres['isDefaultIronforge'])       ? $routeLaravel->wheres['isDefaultIronforge']      : 0,
                    "iconIronforge"             => isset($routeLaravel->wheres['iconIronforge'])            ? $routeLaravel->wheres['iconIronforge']           : '',
                    "menuIronforge"             => isset($routeLaravel->wheres['menuIronforge'])            ? $routeLaravel->wheres['menuIronforge']           : '',
                    "parentRouteNameIronforge"  => isset($routeLaravel->wheres['parentRouteNameIronforge']) ? $routeLaravel->wheres['parentRouteNameIronforge']: false
                ];
            }
        }
        foreach ($routes as $key => $route) {

            $res = \Aggrega\Ironforge\Resource::where('route_name', $route['routeName'])->first();

            if (!$res) {
                    $res = new \Aggrega\Ironforge\Resource();
                    $res->name              = $route['nameIronforge'];
                    $res->menu              = $route['menuIronforge'] ;
                    $res->is_menu           = $route['menuIronforge'] ? 1 : 0;
                    $res->route_name        = $route['routeName'];
                    $res->icon              = $route['iconIronforge'];
                    $res->controller_method = $route['controllerMethod'];
                    $res->can_be_default    = $route['isDefaultIronforge'];
                    $res->order             = 0;

                    /** Busca o id do parent $res */
                    if($route['parentRouteNameIronforge']){
                        $resParent = \Aggrega\Ironforge\Resource::getResourceIdByRouteName($route['parentRouteNameIronforge']);
                        if($resParent){
                            $res->parent_id         = $resParent->id;
                        }
                    }



                    $res->save();
                    /** Adiciona esse recurso ao perfil admin */

                    DB::table('profile_has_resources')->insert([
                        'profile_id'    => 1,
                        'resource_id'   => $res->id,
                    ]);

                    $bar->advance();
                }
            }
            $bar->finish();


    }

}
