<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$prefix_url = config('ironforge.prefix_url');

Route::group(['prefix' => $prefix_url,  'middleware' => ['web', 'auth','Aggrega\Ironforge\Http\Middleware\MiddlewareIronForge']], function() {

    /** Private Resources  */
    Route::get('/dashboard', 'Aggrega\Ironforge\Http\Controllers\ConsoleController@dashboard')->name('ironforge.dashboard')->where(['iconIronforge'=>'fa-dashboard', 'menuIronforge'=> "Dashboard", 'nameIronforge'=>'Dashboard', 'isDefaultIronforge'=>'1']);

    Route::get('/users','Aggrega\Ironforge\Http\Controllers\UserController@index')->name('ironforge.users.index')->where(['iconIronforge'=>'fa-users', 'menuIronforge'=> "Usuários", 'parentRouteNameIronforge' => 'Sistema Ironforge', 'nameIronforge'=>'Listagem de usuários', 'isDefaultIronforge'=>'1']);
    Route::get('/users/create','Aggrega\Ironforge\Http\Controllers\UserController@create')->name('ironforge.users.create')->where(['iconIronforge'=>'fa-plus-square', 'parentRouteNameIronforge' => 'ironforge.users.index', 'nameIronforge'=>'Criação de usuários', 'isDefaultIronforge'=>'1']);
    Route::post('/users','Aggrega\Ironforge\Http\Controllers\UserController@store')->name('ironforge.users.store')->where(['iconIronforge'=>'fa-floppy-o', 'nameIronforge'=>'Salvar usuário']);
    Route::get('/users/{user}','Aggrega\Ironforge\Http\Controllers\UserController@edit')->name('ironforge.users.edit')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.users.index', 'nameIronforge'=>'Edição de usuários']);
    Route::post('/users/{id}','Aggrega\Ironforge\Http\Controllers\UserController@update')->name('ironforge.users.update')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.users.index', 'nameIronforge'=>'Atualização de usuários']);


    Route::get('/profiles','Aggrega\Ironforge\Http\Controllers\ProfilesController@index')->name('ironforge.profiles.index')->where(['iconIronforge'=>'fa-book', 'menuIronforge'=> "Perfis", 'parentRouteNameIronforge' => 'Sistema Ironforge', 'nameIronforge'=>'Listagem de Perfis', 'isDefaultIronforge'=>'1']);
    Route::get('/profiles/create','Aggrega\Ironforge\Http\Controllers\ProfilesController@create')->name('ironforge.profiles.create')->where(['iconIronforge'=>'fa-plus-square', 'parentRouteNameIronforge' => 'ironforge.profiles.index', 'nameIronforge'=>'Criação de Perfil', 'isDefaultIronforge'=>'1']);
    Route::post('/profiles','Aggrega\Ironforge\Http\Controllers\ProfilesController@store')->name('ironforge.profiles.store')->where(['iconIronforge'=>'fa-floppy-o', 'nameIronforge'=>'Salvar Perfil']);
    Route::get('/profiles/{profile}','Aggrega\Ironforge\Http\Controllers\ProfilesController@edit')->name('ironforge.profiles.edit')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.profiles.index', 'nameIronforge'=>'Edição de Perfil']);
    Route::post('/profiles/{id}','Aggrega\Ironforge\Http\Controllers\ProfilesController@update')->name('ironforge.profiles.update')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.profiles.index', 'nameIronforge'=>'Atualização de Perfil']);

    Route::get('/resources','Aggrega\Ironforge\Http\Controllers\ResourcesController@index')->name('ironforge.resources.index')->where(['iconIronforge'=>'fa-key', 'menuIronforge'=> "Recursos", 'parentRouteNameIronforge' => 'Sistema Ironforge', 'nameIronforge'=>'Listagem de Recursos', 'isDefaultIronforge'=>'1']);
    Route::get('/resources/create','Aggrega\Ironforge\Http\Controllers\ResourcesController@create')->name('ironforge.resources.create')->where(['iconIronforge'=>'fa-plus-square', 'parentRouteNameIronforge' => 'ironforge.profiles.index', 'nameIronforge'=>'Criação de Recursos', 'isDefaultIronforge'=>'1']);
    Route::post('/resources','Aggrega\Ironforge\Http\Controllers\ResourcesController@store')->name('ironforge.resources.store')->where(['iconIronforge'=>'fa-floppy-o', 'nameIronforge'=>'Salvar Recursos']);
    Route::get('/resources/{profile}','Aggrega\Ironforge\Http\Controllers\ResourcesController@edit')->name('ironforge.resources.edit')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.resources.index', 'nameIronforge'=>'Edição de Recursos']);
    Route::post('/resources/{id}','Aggrega\Ironforge\Http\Controllers\ResourcesController@update')->name('ironforge.resources.update')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.resources.index', 'nameIronforge'=>'Atualização de Recursos']);


    Route::get('/owners','Aggrega\Ironforge\Http\Controllers\OwnerController@index')->name('ironforge.owner.index')->where(['iconIronforge'=>'fa-registered', 'menuIronforge'=> "Proprietário", 'parentRouteNameIronforge' => 'Sistema Ironforge', 'nameIronforge'=>'Listagem de Proprietários', 'isDefaultIronforge'=>'1']);
    Route::get('/owners/create','Aggrega\Ironforge\Http\Controllers\OwnerController@create')->name('ironforge.owner.create')->where(['iconIronforge'=>'fa-plus-square', 'parentRouteNameIronforge' => 'ironforge.profiles.index', 'nameIronforge'=>'Criação de Proprietários', 'isDefaultIronforge'=>'1']);
    Route::post('/owners','Aggrega\Ironforge\Http\Controllers\OwnerController@store')->name('ironforge.owner.store')->where(['iconIronforge'=>'fa-floppy-o', 'nameIronforge'=>'Salvar Proprietário']);
    Route::get('/owners/{profile}','Aggrega\Ironforge\Http\Controllers\OwnerController@edit')->name('ironforge.owner.edit')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.owner.index', 'nameIronforge'=>'Edição de Proprietário']);
    Route::post('/owners/{id}','Aggrega\Ironforge\Http\Controllers\OwnerController@update')->name('ironforge.owner.update')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.owner.index', 'nameIronforge'=>'Atualização de Proprietário']);



    // Route::resource('/users','Aggrega\Ironforge\Http\Controllers\UserController');
    //Route::resource('/profiles','Aggrega\Ironforge\Http\Controllers\ProfilesController');
    //Route::resource('/owners','Aggrega\Ironforge\Http\Controllers\OwnerController');
    //Route::resource('/resources','Aggrega\Ironforge\Http\Controllers\ResourcesController');

});


Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'Aggrega\Ironforge\Http\Controllers\HomeController@index')->name('index');
    ///** Authentication Routes...  */
    Route::get('login', 'Aggrega\Ironforge\Http\Controllers\Auth\LoginController@showLoginForm')->name('login');
    Route::post('login', 'Aggrega\Ironforge\Http\Controllers\Auth\LoginController@login');
    Route::post('logout', 'Aggrega\Ironforge\Http\Controllers\Auth\LoginController@logout')->name('logout');

///** Password Reset Routes...  */
    Route::get('password/reset', 'Aggrega\Ironforge\Http\Controllers\Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
    Route::post('password/email', 'Aggrega\Ironforge\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    Route::get('password/reset/{token}', 'Aggrega\Ironforge\Http\Controllers\Auth\ResetPasswordController@showResetForm')->name('password.reset');
    Route::post('password/reset', 'Aggrega\Ironforge\Http\Controllers\Auth\ResetPasswordController@reset');
});


Route::group(['prefix' => $prefix_url,  'middleware' => ['web', 'auth']], function() {

    Route::get('/users/resources/{profileId}','Aggrega\Ironforge\Http\Controllers\PublicMethods@getResourcesDefault')->name('ironforge.users.resourcesDefault');
    Route::get('/page-not-found', 'Aggrega\Ironforge\Http\Controllers\ConsoleController@pageNotFound')->name('ironforge.page404get');
    Route::post('/page-not-found', 'Aggrega\Ironforge\Http\Controllers\ConsoleController@pageNotFound')->name('ironforge.page404post');
    Route::get('/page-not-allowed', 'Aggrega\Ironforge\Http\Controllers\ConsoleController@pageNotAllowed')->name('ironforge.page403get');
    Route::post('/page-not-allowed', 'Aggrega\Ironforge\Http\Controllers\ConsoleController@pageNotAllowed')->name('ironforge.page403post');


    Route::get('/{page?}', 'Aggrega\Ironforge\Http\Controllers\ConsoleController@pageNotFound')->name('ironorge.page404get')->where('page','.*');
    Route::post('/{page?}', 'Aggrega\Ironforge\Http\Controllers\ConsoleController@pageNotFound')->name('ironorge.page404post')->where('page','.*');

});
