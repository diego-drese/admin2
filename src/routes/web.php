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

$prefix_url = \Config::get('ironforge.prefix_url');


Route::group(['prefix' => $prefix_url,  'middleware' => ['web', 'auth','Aggrega\Ironforge\Http\Middleware\MiddlewareIronForge']], function() {

    /** Private Resources  */
    Route::get('/dashboard', 'Aggrega\Ironforge\Http\Controllers\ConsoleController@dashboard')->name('ironforge.dashboard')->where(['iconIronforge'=>'fa-dashboard', 'menuIronforge'=> "Dashboard", 'nameIronforge'=>'Dashboard', 'isDefaultIronforge'=>'1']);

    Route::get('/users','Aggrega\Ironforge\Http\Controllers\UserController@index')->name('ironforge.users.index')->where(['iconIronforge'=>'fa-users', 'menuIronforge'=> "Users", 'parentRouteNameIronforge' => 'System Ironforge', 'nameIronforge'=>'User Listing', 'isDefaultIronforge'=>'1']);
    Route::get('/users/create','Aggrega\Ironforge\Http\Controllers\UserController@create')->name('ironforge.users.create')->where(['iconIronforge'=>'fa-plus-square', 'parentRouteNameIronforge' => 'ironforge.users.index', 'nameIronforge'=>'User Create', 'isDefaultIronforge'=>'1']);
    Route::post('/users','Aggrega\Ironforge\Http\Controllers\UserController@store')->name('ironforge.users.store')->where(['iconIronforge'=>'fa-floppy-o', 'nameIronforge'=>'Save User']);
    Route::get('/users/{user}','Aggrega\Ironforge\Http\Controllers\UserController@edit')->name('ironforge.users.edit')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.users.index', 'nameIronforge'=>'User Edit']);
    Route::post('/users/{id}','Aggrega\Ironforge\Http\Controllers\UserController@update')->name('ironforge.users.update')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.users.index', 'nameIronforge'=>'User Update']);

    Route::get('/profile','Aggrega\Ironforge\Http\Controllers\UserController@viewUserProfile')->name('ironforge.users.form-profile')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.users.index', 'nameIronforge'=>'Profile Edit']);
    Route::post('/profile','Aggrega\Ironforge\Http\Controllers\UserController@updateUserProfile')->name('ironforge.users.update-profile')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.users.index', 'nameIronforge'=>'Profile Edit']);

    Route::get('/profiles','Aggrega\Ironforge\Http\Controllers\ProfilesController@index')->name('ironforge.profiles.index')->where(['iconIronforge'=>'fa-book', 'menuIronforge'=> "Profiles", 'parentRouteNameIronforge' => 'System Ironforge', 'nameIronforge'=>'Profile Listing', 'isDefaultIronforge'=>'1']);
    Route::get('/profiles/create','Aggrega\Ironforge\Http\Controllers\ProfilesController@create')->name('ironforge.profiles.create')->where(['iconIronforge'=>'fa-plus-square', 'parentRouteNameIronforge' => 'ironforge.profiles.index', 'nameIronforge'=>'Profile Create', 'isDefaultIronforge'=>'1']);
    Route::post('/profiles','Aggrega\Ironforge\Http\Controllers\ProfilesController@store')->name('ironforge.profiles.store')->where(['iconIronforge'=>'fa-floppy-o', 'nameIronforge'=>'Save Profile']);
    Route::get('/profiles/{profile}','Aggrega\Ironforge\Http\Controllers\ProfilesController@edit')->name('ironforge.profiles.edit')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.profiles.index', 'nameIronforge'=>'Profile Edit']);
    Route::post('/profiles/{id}','Aggrega\Ironforge\Http\Controllers\ProfilesController@update')->name('ironforge.profiles.update')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.profiles.index', 'nameIronforge'=>'Profile Update']);

    Route::get('/resources','Aggrega\Ironforge\Http\Controllers\ResourcesController@index')->name('ironforge.resources.index')->where(['iconIronforge'=>'fa-key', 'menuIronforge'=> "Resources", 'parentRouteNameIronforge' => 'System Ironforge', 'nameIronforge'=>'Resource Listing', 'isDefaultIronforge'=>'1']);
    Route::get('/resources/create','Aggrega\Ironforge\Http\Controllers\ResourcesController@create')->name('ironforge.resources.create')->where(['iconIronforge'=>'fa-plus-square', 'parentRouteNameIronforge' => 'ironforge.profiles.index', 'nameIronforge'=>'Resource Create', 'isDefaultIronforge'=>'1']);
    Route::post('/resources','Aggrega\Ironforge\Http\Controllers\ResourcesController@store')->name('ironforge.resources.store')->where(['iconIronforge'=>'fa-floppy-o', 'nameIronforge'=>'Save Resource']);
    Route::get('/resources/{profile}','Aggrega\Ironforge\Http\Controllers\ResourcesController@edit')->name('ironforge.resources.edit')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.resources.index', 'nameIronforge'=>'Resource Edit']);
    Route::post('/resources/{id}','Aggrega\Ironforge\Http\Controllers\ResourcesController@update')->name('ironforge.resources.update')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.resources.index', 'nameIronforge'=>'Resource Update']);


    Route::get('/owners','Aggrega\Ironforge\Http\Controllers\OwnerController@index')->name('ironforge.owner.index')->where(['iconIronforge'=>'fa-registered', 'menuIronforge'=> "Owner", 'parentRouteNameIronforge' => 'System Ironforge', 'nameIronforge'=>'Owner Listing', 'isDefaultIronforge'=>'1']);
    Route::get('/owners/create','Aggrega\Ironforge\Http\Controllers\OwnerController@create')->name('ironforge.owner.create')->where(['iconIronforge'=>'fa-plus-square', 'parentRouteNameIronforge' => 'ironforge.profiles.index', 'nameIronforge'=>'Owner Create', 'isDefaultIronforge'=>'1']);
    Route::post('/owners','Aggrega\Ironforge\Http\Controllers\OwnerController@store')->name('ironforge.owner.store')->where(['iconIronforge'=>'fa-floppy-o', 'nameIronforge'=>'Save Owner']);
    Route::get('/owners/{profile}','Aggrega\Ironforge\Http\Controllers\OwnerController@edit')->name('ironforge.owner.edit')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.owner.index', 'nameIronforge'=>'Owner Edit']);
    Route::post('/owners/{id}','Aggrega\Ironforge\Http\Controllers\OwnerController@update')->name('ironforge.owner.update')->where(['iconIronforge'=>'fa-pencil-square-o ', 'parentRouteNameIronforge' => 'ironforge.owner.index', 'nameIronforge'=>'Owner Update']);


    Route::get('/log-view','Aggrega\Ironforge\Http\Controllers\LogViewController@index')->name('ironforge.logview.index');

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