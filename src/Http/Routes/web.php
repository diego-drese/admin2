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

$prefix_url = \Illuminate\Support\Facades\Config::get('admin.prefix_url');

Route::group(['prefix' => $prefix_url, 'middleware' => ['web', 'auth', 'Oka6\Admin\Http\Middleware\MiddlewareAdmin']], function () {
	/** Private Resources  */
	Route::get('/dashboard', 'Oka6\Admin\Http\Controllers\ConsoleController@dashboard')->name('admin.dashboard')->where(['iconAdmin' => 'fas fas fa-bullseye', 'menuAdmin' => "Dashboard", 'nameAdmin' => 'Dashboard', 'isDefaultAdmin' => '1']);
	
	Route::get('/users', 'Oka6\Admin\Http\Controllers\UserController@index')->name('admin.users.index')->where(['iconAdmin' => 'fas fa-users', 'menuAdmin' => "Users", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin' => 'User Listing', 'isDefaultAdmin' => '1']);
	Route::get('/users/create', 'Oka6\Admin\Http\Controllers\UserController@create')->name('admin.users.create')->where(['iconAdmin' => 'fas fa-plus-square', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin' => 'User Create']);
	Route::post('/users', 'Oka6\Admin\Http\Controllers\UserController@store')->name('admin.users.store')->where(['iconAdmin' => 'fas fa-floppy-o', 'nameAdmin' => 'Save User']);
	Route::get('/users/{user}', 'Oka6\Admin\Http\Controllers\UserController@edit')->name('admin.users.edit')->where(['iconAdmin' => 'fas fa-edit', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin' => 'User Edit']);
	Route::post('/users/{id}', 'Oka6\Admin\Http\Controllers\UserController@update')->name('admin.users.update')->where(['iconAdmin' => 'fas fa-edit', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin' => 'User Update']);
	
	Route::get('/profiles', 'Oka6\Admin\Http\Controllers\ProfilesController@index')->name('admin.profiles.index')->where(['iconAdmin' => 'fas fa-book', 'menuAdmin' => "Profiles", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin' => 'Profile Listing', 'isDefaultAdmin' => '1']);
	Route::get('/profiles/create', 'Oka6\Admin\Http\Controllers\ProfilesController@create')->name('admin.profiles.create')->where(['iconAdmin' => 'fas fa-plus-square', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin' => 'Profile Create',]);
	Route::post('/profiles', 'Oka6\Admin\Http\Controllers\ProfilesController@store')->name('admin.profiles.store')->where(['iconAdmin' => 'fas fa-floppy-o', 'nameAdmin' => 'Save Profile']);
	Route::get('/profiles/{profile}', 'Oka6\Admin\Http\Controllers\ProfilesController@edit')->name('admin.profiles.edit')->where(['iconAdmin' => 'fas fa-edit', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin' => 'Profile Edit']);
	Route::post('/profiles/{id}', 'Oka6\Admin\Http\Controllers\ProfilesController@update')->name('admin.profiles.update')->where(['iconAdmin' => 'fas fa-edit', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin' => 'Profile Update']);
	
	
	
	
	Route::get('/resources', 'Oka6\Admin\Http\Controllers\ResourcesController@index')->name('admin.resources.index')->where(['iconAdmin' => 'fas fa-key', 'menuAdmin' => "Resources", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin' => 'Resource Listing', 'isDefaultAdmin' => '1']);
	Route::get('/resources/create', 'Oka6\Admin\Http\Controllers\ResourcesController@create')->name('admin.resources.create')->where(['iconAdmin' => 'fas fa-plus-square', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin' => 'Resource Create',]);
	Route::post('/resources', 'Oka6\Admin\Http\Controllers\ResourcesController@store')->name('admin.resources.store')->where(['iconAdmin' => 'fas fa-floppy-o', 'nameAdmin' => 'Save Resource']);
	Route::get('/resources/{profile}', 'Oka6\Admin\Http\Controllers\ResourcesController@edit')->name('admin.resources.edit')->where(['iconAdmin' => 'fas fa-edit', 'parentRouteNameAdmin' => 'admin.resources.index', 'nameAdmin' => 'Resource Edit']);
	Route::post('/resources/{id}', 'Oka6\Admin\Http\Controllers\ResourcesController@update')->name('admin.resources.update')->where(['iconAdmin' => 'fas fa-edit', 'parentRouteNameAdmin' => 'admin.resources.index', 'nameAdmin' => 'Resource Update']);
	
	Route::fallback(function () {
		die('Nao encontrou');
	});
});


Route::group(['prefix' => $prefix_url, 'middleware' => ['web', 'auth']], function () {
	
	Route::get('/users/resources/{profileId}', 'Oka6\Admin\Http\Controllers\PublicMethods@getResourcesDefault')->name('admin.users.resourcesDefault');
	Route::get('/page-not-found', 'Oka6\Admin\Http\Controllers\ConsoleController@pageNotFound')->name('admin.page404get');
	Route::post('/page-not-found', 'Oka6\Admin\Http\Controllers\ConsoleController@pageNotFound')->name('admin.page404post');
	Route::get('/page-not-allowed', 'Oka6\Admin\Http\Controllers\ConsoleController@pageNotAllowed')->name('admin.page403get');
	Route::post('/page-not-allowed', 'Oka6\Admin\Http\Controllers\ConsoleController@pageNotAllowed')->name('admin.page403post');
	
	Route::get('/profile', 'Oka6\Admin\Http\Controllers\UserController@viewUserProfile')->name('admin.users.form-profile')->where(['iconAdmin' => 'fas fa-edit', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin' => 'Profile Edit user']);
	Route::post('/profile', 'Oka6\Admin\Http\Controllers\UserController@updateUserProfile')->name('admin.users.update-profile')->where(['iconAdmin' => 'fas fa-edit', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin' => 'Profile Edit user']);
	
	
});


Route::group(['middleware' => ['web']], function () {
	
	// Route::get('/', 'Oka6\Admin\Http\Controllers\HomeController@index')->name('index');

//    /*Blog*/
//    Route::get('/blog', 'Oka6\Admin\Http\Controllers\BlogController@blogFront')->name('blog');
//    Route::get('/blog/post/{slug}', 'Oka6\Admin\Http\Controllers\BlogController@blogPost')->name('blogPost');
//    Route::get('/blog/tag/{tag}', 'Oka6\Admin\Http\Controllers\BlogController@blogTag')->name('blogTag');
//    Route::get('/blog/ultimos-posts', 'Oka6\Admin\Http\Controllers\BlogController@getLatestPosts')->name('blogLatestPost');
//    Route::get('/blog/categoria/{cat}', 'Oka6\Admin\Http\Controllers\BlogController@blogCategory')->name('blogCategory');
	
	Route::get('/tema/{template}', 'Oka6\Admin\Http\Controllers\HomeController@returnLandingDefault')->name('template');
	Route::get('/tema/style/{template}', 'Oka6\Admin\Http\Controllers\HomeController@getCssFile')->name('templateStyle');
	Route::get('/tema/js/{template}', 'Oka6\Admin\Http\Controllers\HomeController@getJsFile')->name('templateJs');
	///** Authentication Routes...  */
	Route::get('login', 'Oka6\Admin\Http\Controllers\Auth\LoginController@showLoginForm')->name('login');
	Route::post('login', 'Oka6\Admin\Http\Controllers\Auth\LoginController@login');
	Route::post('logout', 'Oka6\Admin\Http\Controllers\Auth\LoginController@logout')->name('logout');
///** Password Reset Routes...  */
	Route::post('password/reset', 'Oka6\Admin\Http\Controllers\Auth\ResetPasswordController@reset')->name('passwords.reset');
	Route::get('password/reset', 'Oka6\Admin\Http\Controllers\Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
	Route::post('password/email', 'Oka6\Admin\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
	Route::get('password/reset/{token}', 'Oka6\Admin\Http\Controllers\Auth\ResetPasswordController@showResetForm')->name('password.reset');
	
	
});
