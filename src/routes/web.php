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
    Route::get('/dashboard', 'Negotiate\Admin\Http\Controllers\ConsoleController@dashboard')->name('admin.dashboard')->where(['iconAdmin'=>'fas fa-bullseye', 'menuAdmin'=> "Dashboard", 'nameAdmin'=>'Dashboard', 'isDefaultAdmin'=>'1']);

    Route::get('/users','Negotiate\Admin\Http\Controllers\UserController@index')->name('admin.users.index')->where(['iconAdmin'=>'fa-users', 'menuAdmin'=> "Users", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'User Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/users/create','Negotiate\Admin\Http\Controllers\UserController@create')->name('admin.users.create')->where(['iconAdmin'=>'fa-plus-square', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'User Create']);
    Route::post('/users','Negotiate\Admin\Http\Controllers\UserController@store')->name('admin.users.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save User']);
    Route::get('/users/{user}','Negotiate\Admin\Http\Controllers\UserController@edit')->name('admin.users.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'User Edit']);
    Route::post('/users/{id}','Negotiate\Admin\Http\Controllers\UserController@update')->name('admin.users.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'User Update']);

    Route::get('/profiles','Negotiate\Admin\Http\Controllers\ProfilesController@index')->name('admin.profiles.index')->where(['iconAdmin'=>'fa-book', 'menuAdmin'=> "Profiles", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Profile Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/profiles/create','Negotiate\Admin\Http\Controllers\ProfilesController@create')->name('admin.profiles.create')->where(['iconAdmin'=>'fa-plus-square',  'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Create',]);
    Route::post('/profiles','Negotiate\Admin\Http\Controllers\ProfilesController@store')->name('admin.profiles.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save Profile']);
    Route::get('/profiles/{profile}','Negotiate\Admin\Http\Controllers\ProfilesController@edit')->name('admin.profiles.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Edit']);
    Route::post('/profiles/{id}','Negotiate\Admin\Http\Controllers\ProfilesController@update')->name('admin.profiles.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Update']);

    Route::get('/plans','Negotiate\Admin\Http\Controllers\PlansController@index')->name('admin.plans.index')->where(['iconAdmin'=>'fas fa-bookmark', 'menuAdmin'=> "Planos", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Plans Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/plans/create','Negotiate\Admin\Http\Controllers\PlansController@create')->name('admin.plans.create')->where(['iconAdmin'=>'fa-plus-square',  'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Create',]);
    Route::post('/plans','Negotiate\Admin\Http\Controllers\PlansController@store')->name('admin.plans.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save Profile']);
    Route::get('/plans/{id}','Negotiate\Admin\Http\Controllers\PlansController@edit')->name('admin.plans.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Edit']);
    Route::post('/plans/{id}','Negotiate\Admin\Http\Controllers\PlansController@update')->name('admin.plans.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Update']);

    Route::get('/resources','Negotiate\Admin\Http\Controllers\ResourcesController@index')->name('admin.resources.index')->where(['iconAdmin'=>'fa-key', 'menuAdmin'=> "Resources", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Resource Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/resources/create','Negotiate\Admin\Http\Controllers\ResourcesController@create')->name('admin.resources.create')->where(['iconAdmin'=>'fa-plus-square','parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Resource Create',]);
    Route::post('/resources','Negotiate\Admin\Http\Controllers\ResourcesController@store')->name('admin.resources.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save Resource']);
    Route::get('/resources/{profile}','Negotiate\Admin\Http\Controllers\ResourcesController@edit')->name('admin.resources.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.resources.index', 'nameAdmin'=>'Resource Edit']);
    Route::post('/resources/{id}','Negotiate\Admin\Http\Controllers\ResourcesController@update')->name('admin.resources.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.resources.index', 'nameAdmin'=>'Resource Update']);


    Route::get('/log-view','Negotiate\Admin\Http\Controllers\LogViewController@index')->name('admin.logview.index')->where(['iconAdmin'=>'fas fa-clipboard-list ', 'parentRouteNameAdmin' => 'System Admin', 'menuAdmin'=> "Logs", 'nameAdmin'=>'Logs', 'isDefaultAdmin'=>'1']);


    //Negotiate Client
    Route::get('/clients', 'Negotiate\Admin\Http\Controllers\ClientController@index')->name('admin.client.index')->where(['iconAdmin'=>'fa-user', 'menuAdmin'=> "Clientes", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Clientes', 'isDefaultAdmin'=>'1']);
    Route::get('/clients/create', 'Negotiate\Admin\Http\Controllers\ClientController@create')->name('admin.client.create')->where(['iconAdmin'=>'fa-plus-square',  'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Create']);
    Route::post('/clients', 'Negotiate\Admin\Http\Controllers\ClientController@store')->name('admin.client.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save Client']);
    Route::post('/clients/search-user', 'Negotiate\Admin\Http\Controllers\ClientController@searchUser')->name('admin.client.search.user')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client search user']);
    Route::get('/clients/{id}', 'Negotiate\Admin\Http\Controllers\ClientController@edit')->name('admin.client.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Edit']);
    Route::post('/clients/{id}', 'Negotiate\Admin\Http\Controllers\ClientController@update')->name('admin.client.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Update']);
    Route::get('/clients/{id}/user/get', 'Negotiate\Admin\Http\Controllers\ClientController@userGet')->name('admin.client.user.get')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client user get']);
    Route::post('/clients/{id}/user/save/{idUser?}', 'Negotiate\Admin\Http\Controllers\ClientController@userSave')->name('admin.client.user.save')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client user save']);
    Route::get('/clients/{id}/payment-request/get', 'Negotiate\Admin\Http\Controllers\ClientController@paymentRequest')->name('admin.client.payment.request.get')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Payment request']);
    Route::get('/clients/{id}/payment-current/get', 'Negotiate\Admin\Http\Controllers\ClientController@paymentCurrent')->name('admin.client.payment.current.get')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Payment Current']);
    Route::get('/clients/{id}/wallet-transactions/get', 'Negotiate\Admin\Http\Controllers\ClientController@walletTransaction')->name('admin.client.wallet.transaction.get')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Wallet Transaction']);

    //Negotiate wallet Transactions
    Route::get('/transactions','Negotiate\Admin\Http\Controllers\TransactionsController@index')->name('admin.transactions.index')->where(['iconAdmin'=>'fas money-bill-alt', 'menuAdmin'=> "Transações", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Transaction Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/transactions/{id}','Negotiate\Admin\Http\Controllers\TransactionsController@get')->name('admin.transactions.get')->where(['iconAdmin'=>'fas money-bill-alt',  'parentRouteNameAdmin' => 'admin.transactions.index', 'nameAdmin'=>'Transaction update',]);
    Route::post('/transactions/update/{id}','Negotiate\Admin\Http\Controllers\TransactionsController@update')->name('admin.transactions.update')->where(['iconAdmin'=>'fas money-bill-alt', 'nameAdmin'=>'Update Transaction']);
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

    Route::get('/profile','Negotiate\Admin\Http\Controllers\UserController@viewUserProfile')->name('admin.users.form-profile')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'Profile Edit user']);
    Route::post('/profile','Negotiate\Admin\Http\Controllers\UserController@updateUserProfile')->name('admin.users.update-profile')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'Profile Edit user']);

    Route::get('/newtheme','Negotiate\Admin\Http\Controllers\ConsoleController@newTheme')->name('admin.new.theme')->where(['iconAdmin'=>'fas fa-warehouse', 'parentRouteNameAdmin' => 'System Admin', 'menuAdmin'=> "Theme NiceAdmin", 'nameAdmin'=>'Theme NiceAdmin']);

    //Route::get('/{page?}', 'Negotiate\Admin\Http\Controllers\ConsoleController@pageNotFound')->name('ironorge.page404get')->where('page','.*');
    //Route::post('/{page?}', 'Negotiate\Admin\Http\Controllers\ConsoleController@pageNotFound')->name('ironorge.page404post')->where('page','.*');

});