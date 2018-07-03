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

Route::group(['prefix' => $prefix_url,  'middleware' => ['web','auth']], function() {

//    /** Public Resources but logged */
    Route::get('/users/resources/{profileId}','Aggrega\Ironforge\Http\Controllers\PublicMethods@getResourcesDefault')->name('users.resourcesDefault');
//
//    /** End Public Resources  */
//
//    /** Private Resources  */
    Route::get('/dashboard', 'Aggrega\Ironforge\Http\Controllers\ConsoleController@dashboard')->name('dashboard');
    Route::resource('/users','Aggrega\Ironforge\Http\Controllers\UserController');
    Route::resource('/profiles','Aggrega\Ironforge\Http\Controllers\ProfilesController');
    Route::resource('/owners','Aggrega\Ironforge\Http\Controllers\OwnerController');
    Route::resource('/resources','Aggrega\Ironforge\Http\Controllers\ResourcesController');
//    /** End Private Resources  */

});
//
Route::group(['middleware' => ['web']], function () {
    Route::get('/', 'Aggrega\Ironforge\Http\Controllers\HomeController@index')->name('index');
//
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

