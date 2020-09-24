<?php

namespace Oka6\Admin\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Oka6\Admin\Profile;
use Oka6\Admin\Sequence;
use Oka6\Admin\User;

class RefreshRoutes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'Oka6:AdminRoutes';

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
                    'controllerMethod'      => $action['controller'],
                    "routeName"             => $routeLaravel->getName(),
                    "nameAdmin"             => $nameAdmin,
                    "isDefaultAdmin"        => isset($routeLaravel->wheres['isDefaultAdmin'])       ? $routeLaravel->wheres['isDefaultAdmin']      : 0,
                    "iconAdmin"             => isset($routeLaravel->wheres['iconAdmin'])            ? $routeLaravel->wheres['iconAdmin']           : '',
                    "menuAdmin"             => isset($routeLaravel->wheres['menuAdmin'])            ? $routeLaravel->wheres['menuAdmin']           : '',
                    "parentRouteNameAdmin"  => isset($routeLaravel->wheres['parentRouteNameAdmin']) ? $routeLaravel->wheres['parentRouteNameAdmin']: false
                ];
            }
        }
        $resources = [];

        foreach ($routes as $key => $route) {

            $res = \Oka6\Admin\Resource::where('route_name', $route['routeName'])->first();

            if (!$res) {
                    $res = new \Oka6\Admin\Resource();
                    $res->id                = Sequence::getSequence('resource');
                    $res->name              = $route['nameAdmin'];
                    $res->menu              = $route['menuAdmin'] ;
                    $res->is_menu           = $route['menuAdmin'] ? 1 : 0;
                    $res->route_name        = $route['routeName'];
                    $res->icon              = $route['iconAdmin'];
                    $res->controller_method = $route['controllerMethod'];
                    $res->can_be_default    = (int)$route['isDefaultAdmin'];
                    $res->order             = 0;
                    $res->parent_id         = 0;

                    /** Busca o id do parent $res */
                    if($route['parentRouteNameAdmin']){
                        $resParent = \Oka6\Admin\Resource::getResourceIdByRouteName($route['parentRouteNameAdmin']);
                        if($resParent){
                            $res->parent_id         = $resParent->id;
                        }
                    }
                    $res->save();
                    $bar->advance();
                }
                $resources[] = $res->id;
            }
            $oldResorces    = [];
            $currentResorces= Profile::where('id', User::PROFILE_ID_ROOT)->first();
            if(isset($currentResorces->resources_allow) && count($currentResorces->resources_allow)>0){
                $oldResorces = $currentResorces->resources_allow;
            }
            $resourcesObj = array_unique(array_merge ($resources, $oldResorces));
            foreach ($resourcesObj as $req){
	            $newResources[] = $req;
            }
            Profile::where('id',User::PROFILE_ID_ROOT)->update(['resources_allow'=>array_map('intval', $newResources)]);
            $bar->finish();
    }

}
