<?php


namespace Aggrega\Ironforge;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ResourceTableSeed extends Seeder
{

    public function run()
    {
        $this->startResources();
        $this->usersResources();
        $this->profileResources();
        $this->resourcesMethods();

    }
    private function startResources()
    {
        DB::table('resources')->insert([
            [
                'name' => "Sistema",
                'menu' => 'Sistema',
                'is_menu' => 1,
                'route_name' => null,
                'icon' => 'fa-folder',
                'controller_method' => '',
                'can_be_default' => 0,
                'parent_id' => 0,
                'order' => 1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => "Dashboard",
                'menu' => 'Dashboard',
                'is_menu' => 1,
                'route_name' => 'dashboard',
                'icon' => 'fa-dashboard',
                'controller_method' => 'ConsoleController@dashboard',
                'can_be_default' => 1,
                'parent_id' => 0,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]
        ]);
    }
    private function usersResources()
    {
        DB::table('resources')->insert([
            [
                'name' => "Usuários",
                'menu' => 'Usuários',
                'is_menu' => 1,
                'route_name' => 'users.index',
                'icon' => 'fa-users',
                'controller_method' => 'UserController@index',
                'can_be_default' => 1,
                'parent_id' => 1,
                'order' => 1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => "Criar Usuário",
                'menu' => 'Criar Usuário',
                'is_menu' => 0,
                'route_name' => 'users.create',
                'icon' => 'fa-user-plus',
                'controller_method' => 'UserController@create',
                'can_be_default' => 1,
                'parent_id' => 3,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => "Permissão Criar Usuário",
                'menu' => '',
                'is_menu' => 0,
                'route_name' => 'users.store',
                'icon' => 'save',
                'controller_method' => 'UserController@store',
                'can_be_default' => 0,
                'parent_id' => 3,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Editar Usuário',
                'menu' => 'Editar Usuário',
                'is_menu' => 0,
                'route_name' => 'users.edit',
                'icon' => 'fa-edit',
                'controller_method' => 'UserController@edit',
                'can_be_default' => 0,
                'parent_id' => 3,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => "Permissão Atualizar Usuários",
                'menu' => '',
                'is_menu' => 0,
                'route_name' => 'users.update',
                'icon' => 'fa-save',
                'controller_method' => 'UserController@update',
                'can_be_default' => 0,
                'parent_id' => 3,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
        ]);
    }
    private function profileResources()
    {
        DB::table('resources')->insert([
            [
                'name' => "Perfis",
                'menu' => 'Perfis',
                'is_menu' => 1,
                'route_name' => 'profiles.index',
                'icon' => 'fa-book',
                'controller_method' => 'ProfilesController@index',
                'can_be_default' => 1,
                'parent_id' => 1,
                'order' => 1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => "Criar Perfil",
                'menu' => 'Criar Perfil',
                'is_menu' => 0,
                'route_name' => 'profiles.create',
                'icon' => 'fa-add',
                'controller_method' => 'ProfilesController@create',
                'can_be_default' => 1,
                'parent_id' => 8,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Permissão Criar Perfil',
                'menu' => '',
                'is_menu' => 0,
                'route_name' => 'profiles.store',
                'icon' => 'save',
                'controller_method' => 'ProfilesController@store',
                'can_be_default' => 0,
                'parent_id' => 8,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => "Editar Perfil",
                'menu' => 'Editar Perfil',
                'is_menu' => 0,
                'route_name' => 'profiles.edit',
                'icon' => 'save',
                'controller_method' => 'ProfilesController@edit',
                'can_be_default' => 0,
                'parent_id' => 8,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => "Permissão Atualizar Perfil",
                'menu' => '',
                'is_menu' => 0,
                'route_name' => 'profiles.update',
                'icon' => 'fa-save',
                'controller_method' => 'ProfilesController@update',
                'can_be_default' => 0,
                'parent_id' => 8,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]
        ]);
    }
    private function resourcesMethods()
    {
        DB::table('resources')->insert([
            [
                'name' => "Recursos",
                'menu' => 'Recursos',
                'is_menu' => 1,
                'route_name' => 'resources.index',
                'icon' => 'fa-key',
                'controller_method' => 'ResourcesController@index',
                'can_be_default' => 1,
                'parent_id' => 1,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => "Criar Recurso",
                'menu' => 'Criar Recurso',
                'is_menu' => 0,
                'route_name' => 'resources.create',
                'icon' => 'fa-system',
                'controller_method' => 'ResourcesController@create',
                'can_be_default' => 1,
                'parent_id' => 13,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => "Permissão Criar Recurso",
                'menu' => '',
                'is_menu' => 0,
                'route_name' => 'resources.store',
                'icon' => 'fa-system',
                'controller_method' => 'ResourcesController@store',
                'can_be_default' => 0,
                'parent_id' => 13,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => "Editar Recurso",
                'menu' => 'Editar Recurso',
                'is_menu' => 0,
                'route_name' => 'resources.edit',
                'icon' => 'fa-edit',
                'controller_method' => 'ResourcesController@edit',
                'can_be_default' => 0,
                'parent_id' => 13,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
            [
                'name' => "Permissão Atualizar Recurso",
                'menu' => 'resources.update',
                'is_menu' => 0,
                'route_name' => 'resources.update',
                'icon' => 'fa-edit',
                'controller_method' => 'ResourcesController@update',
                'can_be_default' => 0,
                'parent_id' => 13,
                'order' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ],
        ]);
    }

}



/*Get de CONTROLLERS E Methods Presentes na aplicação A Ver...{
        $controllers = [];
        foreach (\Illuminate\Support\Facades\Route::getRoutes()->getRoutes() as $route)
        {
            $action = $route->getAction();
            if (array_key_exists('controller', $action))
            {
                $controllers[] = str_replace("App\Http\Controllers\\",'',$action['controller']);

            }
        }
$recursos = [];
        for ($i = 1;$i < count($controllers); $i++){
            $recursos[] = [
                'name' => $controllers[$i],
                'alias' => $controllers[$i],
                'Menu' => $controllers[$i],
                'is_menu' => 0,
                'route_name' => '',
                'icon' => '',
                'controller_method' => $controllers[$i],
                'can_be_default' => 0,
                'parent_id' => 0,
                'order' => 0,
            ];
        }
        DB::table('resources')->insert($recursos);
*/
