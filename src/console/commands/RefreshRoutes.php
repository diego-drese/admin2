<?php

namespace Aggrega\Ironforge\Console\Commands;

use Illuminate\Console\Command;

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
        $resources = \Aggrega\Ironforge\Resource::all()->toArray();

        $routeCollection = \Route::getRoutes();
        $controllers= [];
        $bar = $this->output->createProgressBar(count($routeCollection));

        foreach ($routeCollection as $route){
            $ctrl = $route->getAction();
            if (array_key_exists('controller', $ctrl))
            {
                $controllers[] = [
                    'controllerMethod'  => str_replace("Aggrega\Ironforge\Http\Controllers\\",'', $ctrl['controller']),
                    "routeName"         => $route->getName()
                ];
            }
        }
        foreach ($controllers as $key => $controller) {
            $res = \Aggrega\Ironforge\Resource::where([
                'controller_method' => $controller['controllerMethod'],
                'route_name' => $controller['routeName'],
            ])
                ->first();

            $name = explode('@', $controller['controllerMethod'])[0];

            if (!$res &&  !in_array($name, array('PublicMethods','Auth\LoginController','Auth\ForgotPasswordController','Auth\ResetPasswordController')) ) {

                    $res = new \Aggrega\Ironforge\Resource();
                    $res->name = $name;
                    $res->menu = '';
                    $res->is_menu = 0;
                    $res->route_name = $controller['routeName'];
                    $res->icon = '';
                    $res->controller_method = $controller['controllerMethod'];
                    $res->can_be_default = 0;
                    $res->parent_id = 0;
                    $res->order = 0;
                    $res->save();
                    $bar->advance();
                }
            }
            $bar->finish();
    }

}
