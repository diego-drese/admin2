<?php

namespace Negotiate\Admin\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class RefreshRoutes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'Negotiate:AdminRoutes';

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
            $middleware = isset($action['middleware'])?$action['middleware']:null;

            if(null!=$middleware && !is_array($middleware)){
                $middleware = [$middleware];
            }
            if (array_key_exists('controller', $action) && !is_null($middleware) && in_array('auth', $middleware))
            {
                $nameManeu      = ucfirst(str_replace('.', ' ', $routeLaravel->getName()));
                $nameAdmin  = isset($routeLaravel->wheres['nameAdmin']) ? $routeLaravel->wheres['nameAdmin'] : $nameManeu;

                $routes[] = [
                    'controllerMethod'          => $action['controller'],
                    "routeName"                 => $routeLaravel->getName(),
                    "nameAdmin"             => $nameAdmin,
                    "isDefaultAdmin"        => isset($routeLaravel->wheres['isDefaultAdmin'])       ? $routeLaravel->wheres['isDefaultAdmin']      : 0,
                    "iconAdmin"             => isset($routeLaravel->wheres['iconAdmin'])            ? $routeLaravel->wheres['iconAdmin']           : '',
                    "menuAdmin"             => isset($routeLaravel->wheres['menuAdmin'])            ? $routeLaravel->wheres['menuAdmin']           : '',
                    "parentRouteNameAdmin"  => isset($routeLaravel->wheres['parentRouteNameAdmin']) ? $routeLaravel->wheres['parentRouteNameAdmin']: false
                ];
            }
        }
        foreach ($routes as $key => $route) {

            $res = \Negotiate\Admin\Resource::where('route_name', $route['routeName'])->first();

            if (!$res) {
                    $res = new \Negotiate\Admin\Resource();
                    $res->name              = $route['nameAdmin'];
                    $res->menu              = $route['menuAdmin'] ;
                    $res->is_menu           = $route['menuAdmin'] ? 1 : 0;
                    $res->route_name        = $route['routeName'];
                    $res->icon              = $route['iconAdmin'];
                    $res->controller_method = $route['controllerMethod'];
                    $res->can_be_default    = $route['isDefaultAdmin'];
                    $res->order             = 0;

                    /** Busca o id do parent $res */
                    if($route['parentRouteNameAdmin']){
                        $resParent = \Negotiate\Admin\Resource::getResourceIdByRouteName($route['parentRouteNameAdmin']);
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
