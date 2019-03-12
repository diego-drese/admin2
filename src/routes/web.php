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

$prefix_url = \Config::get('admin.prefix_url');

Route::group(['prefix' => $prefix_url,  'middleware' => ['web', 'auth', 'Negotiate\Admin\Http\Middleware\MiddlewareAdmin']], function() {

    /** Private Resources  */
    Route::get('/dashboard', 'Negotiate\Admin\Http\Controllers\ConsoleController@dashboard')->name('admin.dashboard')->where(['iconAdmin'=>'fa-dashboard', 'menuAdmin'=> "Dashboard", 'nameAdmin'=>'Dashboard', 'isDefaultAdmin'=>'1']);

    Route::get('/users','Negotiate\Admin\Http\Controllers\UserController@index')->name('admin.users.index')->where(['iconAdmin'=>'fa-users', 'menuAdmin'=> "Users", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'User Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/users/create','Negotiate\Admin\Http\Controllers\UserController@create')->name('admin.users.create')->where(['iconAdmin'=>'fa-plus-square', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'User Create', 'isDefaultAdmin'=>'1']);
    Route::post('/users','Negotiate\Admin\Http\Controllers\UserController@store')->name('admin.users.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save User']);
    Route::get('/users/{user}','Negotiate\Admin\Http\Controllers\UserController@edit')->name('admin.users.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'User Edit']);
    Route::post('/users/{id}','Negotiate\Admin\Http\Controllers\UserController@update')->name('admin.users.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'User Update']);

    Route::get('/profiles','Negotiate\Admin\Http\Controllers\ProfilesController@index')->name('admin.profiles.index')->where(['iconAdmin'=>'fa-book', 'menuAdmin'=> "Profiles", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Profile Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/profiles/create','Negotiate\Admin\Http\Controllers\ProfilesController@create')->name('admin.profiles.create')->where(['iconAdmin'=>'fa-plus-square', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Create', 'isDefaultAdmin'=>'1']);
    Route::post('/profiles','Negotiate\Admin\Http\Controllers\ProfilesController@store')->name('admin.profiles.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save Profile']);
    Route::get('/profiles/{profile}','Negotiate\Admin\Http\Controllers\ProfilesController@edit')->name('admin.profiles.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Edit']);
    Route::post('/profiles/{id}','Negotiate\Admin\Http\Controllers\ProfilesController@update')->name('admin.profiles.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Update']);

    Route::get('/resources','Negotiate\Admin\Http\Controllers\ResourcesController@index')->name('admin.resources.index')->where(['iconAdmin'=>'fa-key', 'menuAdmin'=> "Resources", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Resource Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/resources/create','Negotiate\Admin\Http\Controllers\ResourcesController@create')->name('admin.resources.create')->where(['iconAdmin'=>'fa-plus-square', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Resource Create', 'isDefaultAdmin'=>'1']);
    Route::post('/resources','Negotiate\Admin\Http\Controllers\ResourcesController@store')->name('admin.resources.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save Resource']);
    Route::get('/resources/{profile}','Negotiate\Admin\Http\Controllers\ResourcesController@edit')->name('admin.resources.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.resources.index', 'nameAdmin'=>'Resource Edit']);
    Route::post('/resources/{id}','Negotiate\Admin\Http\Controllers\ResourcesController@update')->name('admin.resources.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.resources.index', 'nameAdmin'=>'Resource Update']);
    Route::get('/owners','Negotiate\Admin\Http\Controllers\OwnerController@index')->name('admin.owner.index')->where(['iconAdmin'=>'fa-registered', 'menuAdmin'=> "Owner", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Owner Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/owners/create','Negotiate\Admin\Http\Controllers\OwnerController@create')->name('admin.owner.create')->where(['iconAdmin'=>'fa-plus-square', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Owner Create', 'isDefaultAdmin'=>'1']);
    Route::post('/owners','Negotiate\Admin\Http\Controllers\OwnerController@store')->name('admin.owner.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save Owner']);
    Route::get('/owners/{profile}','Negotiate\Admin\Http\Controllers\OwnerController@edit')->name('admin.owner.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.owner.index', 'nameAdmin'=>'Owner Edit']);
    Route::post('/owners/{id}','Negotiate\Admin\Http\Controllers\OwnerController@update')->name('admin.owner.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.owner.index', 'nameAdmin'=>'Owner Update']);
    Route::post('/show-actived-origin', 'Negotiate\Admin\Http\Controllers\OwnerController@showActivedOrigin')->name('admin.owner.show-actived')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.owner.show-actived', 'nameAdmin'=>'Owner show actived']);
    Route::get('/log-view','Negotiate\Admin\Http\Controllers\LogViewController@index')->name('admin.logview.index');

    Route::get('/updade-owner-iron', 'Negotiate\Admin\Http\Controllers\OwnerController@updateFieldsToJson')->name('admin.updateowner.update');

    //Negotiate User
    Route::get('/clients', 'Negotiate\Admin\Http\Controllers\ClientController@index')->name('admin.client.index')->where(['iconAdmin'=>'fa-user', 'menuAdmin'=> "Clientes", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Clientes', 'isDefaultAdmin'=>'1']);
    Route::get('/clients/create', 'Negotiate\Admin\Http\Controllers\ClientController@create')->name('admin.client.create')->where(['iconAdmin'=>'fa-plus-square', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Create', 'isDefaultAdmin'=>'1']);
    Route::post('/clients', 'Negotiate\Admin\Http\Controllers\ClientController@store')->name('admin.client.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save Client']);
    Route::get('/clients/{id}', 'Negotiate\Admin\Http\Controllers\ClientController@edit')->name('admin.client.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Edit']);
    Route::post('/clients/{id}', 'Negotiate\Admin\Http\Controllers\ClientController@update')->name('admin.client.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Client Update']);

});


Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'Negotiate\Admin\Http\Controllers\HomeController@index')->name('index');
    ///** Authentication Routes...  */
    Route::get('login', 'Negotiate\Admin\Http\Controllers\Auth\LoginController@showLoginForm')->name('login');
    Route::post('login', 'Negotiate\Admin\Http\Controllers\Auth\LoginController@login');
    Route::post('logout', 'Negotiate\Admin\Http\Controllers\Auth\LoginController@logout')->name('logout');

///** Password Reset Routes...  */
    Route::get('password/reset', 'Negotiate\Admin\Http\Controllers\Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
    Route::post('password/email', 'Negotiate\Admin\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    Route::get('password/reset/{token}', 'Negotiate\Admin\Http\Controllers\Auth\ResetPasswordController@showResetForm')->name('password.reset');
    Route::post('password/reset', 'Negotiate\Admin\Http\Controllers\Auth\ResetPasswordController@reset');
});


Route::group(['prefix' => $prefix_url,  'middleware' => ['web', 'auth']], function() {

    Route::get('/users/resources/{profileId}','Negotiate\Admin\Http\Controllers\PublicMethods@getResourcesDefault')->name('admin.users.resourcesDefault');
    Route::get('/page-not-found', 'Negotiate\Admin\Http\Controllers\ConsoleController@pageNotFound')->name('admin.page404get');
    Route::post('/page-not-found', 'Negotiate\Admin\Http\Controllers\ConsoleController@pageNotFound')->name('admin.page404post');
    Route::get('/page-not-allowed', 'Negotiate\Admin\Http\Controllers\ConsoleController@pageNotAllowed')->name('admin.page403get');
    Route::post('/page-not-allowed', 'Negotiate\Admin\Http\Controllers\ConsoleController@pageNotAllowed')->name('admin.page403post');

    Route::get('/profile','Negotiate\Admin\Http\Controllers\UserController@viewUserProfile')->name('admin.users.form-profile')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'Profile Edit']);
    Route::post('/profile','Negotiate\Admin\Http\Controllers\UserController@updateUserProfile')->name('admin.users.update-profile')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'Profile Edit']);

    //Route::get('/{page?}', 'Negotiate\Admin\Http\Controllers\ConsoleController@pageNotFound')->name('ironorge.page404get')->where('page','.*');
    //Route::post('/{page?}', 'Negotiate\Admin\Http\Controllers\ConsoleController@pageNotFound')->name('ironorge.page404post')->where('page','.*');

});