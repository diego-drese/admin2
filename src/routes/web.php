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

Route::group(['prefix' => $prefix_url,  'middleware' => ['web', 'auth', 'Oka6\Admin\Http\Middleware\MiddlewareAdmin']], function() {
    /** Private Resources  */
    Route::get('/dashboard', 'Oka6\Admin\Http\Controllers\ConsoleController@dashboard')->name('admin.dashboard')->where(['iconAdmin'=>'fas fa-bullseye', 'menuAdmin'=> "Dashboard", 'nameAdmin'=>'Dashboard', 'isDefaultAdmin'=>'1']);

    Route::get('/users','Oka6\Admin\Http\Controllers\UserController@index')->name('admin.users.index')->where(['iconAdmin'=>'fa-users', 'menuAdmin'=> "Users", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'User Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/users/create','Oka6\Admin\Http\Controllers\UserController@create')->name('admin.users.create')->where(['iconAdmin'=>'fa-plus-square', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'User Create']);
    Route::post('/users','Oka6\Admin\Http\Controllers\UserController@store')->name('admin.users.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save User']);
    Route::get('/users/{user}','Oka6\Admin\Http\Controllers\UserController@edit')->name('admin.users.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'User Edit']);
    Route::post('/users/{id}','Oka6\Admin\Http\Controllers\UserController@update')->name('admin.users.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'User Update']);

    Route::get('/profiles','Oka6\Admin\Http\Controllers\ProfilesController@index')->name('admin.profiles.index')->where(['iconAdmin'=>'fa-book', 'menuAdmin'=> "Profiles", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Profile Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/profiles/create','Oka6\Admin\Http\Controllers\ProfilesController@create')->name('admin.profiles.create')->where(['iconAdmin'=>'fa-plus-square',  'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Create',]);
    Route::post('/profiles','Oka6\Admin\Http\Controllers\ProfilesController@store')->name('admin.profiles.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save Profile']);
    Route::get('/profiles/{profile}','Oka6\Admin\Http\Controllers\ProfilesController@edit')->name('admin.profiles.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Edit']);
    Route::post('/profiles/{id}','Oka6\Admin\Http\Controllers\ProfilesController@update')->name('admin.profiles.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Update']);

    Route::get('/plans','Oka6\Admin\Http\Controllers\PlansController@index')->name('admin.plans.index')->where(['iconAdmin'=>'fas fa-bookmark', 'menuAdmin'=> "Planos", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Plans Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/plans/create','Oka6\Admin\Http\Controllers\PlansController@create')->name('admin.plans.create')->where(['iconAdmin'=>'fa-plus-square',  'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Create',]);
    Route::post('/plans','Oka6\Admin\Http\Controllers\PlansController@store')->name('admin.plans.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save Profile']);
    Route::get('/plans/{id}','Oka6\Admin\Http\Controllers\PlansController@edit')->name('admin.plans.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Edit']);
    Route::post('/plans/{id}','Oka6\Admin\Http\Controllers\PlansController@update')->name('admin.plans.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Profile Update']);

    Route::get('/tutorial-help','Oka6\Admin\Http\Controllers\TutorialHelpController@index')->name('admin.tutorial-help.index')->where(['iconAdmin'=>'fas fa-bookmark', 'menuAdmin'=> "Tutorial Help", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Tutorial Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/tutorial-help/create','Oka6\Admin\Http\Controllers\TutorialHelpController@create')->name('admin.tutorial-help.create')->where(['iconAdmin'=>'fa-plus-square',  'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Tutorial Create',]);
    Route::post('/tutorial-help','Oka6\Admin\Http\Controllers\TutorialHelpController@store')->name('admin.tutorial-help.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save Tutorial']);
    Route::get('/tutorial-help/{id}','Oka6\Admin\Http\Controllers\TutorialHelpController@edit')->name('admin.tutorial-help.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Tutorial Edit']);
    Route::post('/tutorial-help/{id}','Oka6\Admin\Http\Controllers\TutorialHelpController@update')->name('admin.tutorial-help.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Tutorial Update']);
    Route::delete('/tutorial-help/{id}','Oka6\Admin\Http\Controllers\TutorialHelpController@destroy')->name('admin.tutorial-help.destroy')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Tutorial Delete']);


    /*BLOG ADMIN*/
//    Route::get('/blog','Oka6\Admin\Http\Controllers\BlogController@index')->name('admin.blog.index')->where(['iconAdmin'=>'fa fa-rss', 'menuAdmin'=> "Blog", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Blog', 'isDefaultAdmin'=>'1']);
//    Route::get('/blog/create','Oka6\Admin\Http\Controllers\BlogController@create')->name('admin.blog.create')->where(['iconAdmin'=>'fa-rss',  'parentRouteNameAdmin' => 'admin.blog.create', 'nameAdmin'=>'Blog Create',]);
//    Route::get('/blog/{id}/edit','Oka6\Admin\Http\Controllers\BlogController@editPost')->name('admin.blog.edit')->where(['iconAdmin'=>'fa-rss',  'parentRouteNameAdmin' => 'admin.blog.edit', 'nameAdmin'=>'Blog edit',]);
//    Route::DELETE('/blog/{id}/destroy','Oka6\Admin\Http\Controllers\BlogController@destroy')->name('admin.blog.destroy')->where(['iconAdmin'=>'fa-rss',  'parentRouteNameAdmin' => 'admin.blog.destroy', 'nameAdmin'=>'Blog destroy',]);
//    Route::post('/blog/{id}/update','Oka6\Admin\Http\Controllers\BlogController@update')->name('admin.blog.update')->where(['iconAdmin'=>'fa-rss',  'parentRouteNameAdmin' => 'admin.blog.update', 'nameAdmin'=>'Blog update',]);
//    Route::post('/blog/tags-blog','Oka6\Admin\Http\Controllers\BlogController@tagsBlogAjax')->name('admin.blog.tagsBlogAjax')->where(['iconAdmin'=>'fa-rss',  'parentRouteNameAdmin' => 'admin.blog.tagsBlogAjax', 'nameAdmin'=>'Blog tagsBlogAjax',]);
//    Route::post('/blog/store','Oka6\Admin\Http\Controllers\BlogController@store')->name('admin.blog.store')->where(['iconAdmin'=>'fa-rss',  'parentRouteNameAdmin' => 'admin.blog.store', 'nameAdmin'=>'Blog store',]);
//   /*BLOG CATEGORIES*/
//    Route::post('/blog/category-add','Oka6\Admin\Http\Controllers\BlogController@categoryNew')->name('admin.blog.categoryNew')->where(['iconAdmin'=>'fa-rss',  'parentRouteNameAdmin' => 'admin.blog.categoryNew', 'nameAdmin'=>'Blog categoryNew',]);
//    Route::get('/blog/categories','Oka6\Admin\Http\Controllers\BlogController@getCategories')->name('admin.blog.getCategories')->where(['iconAdmin'=>'fa-rss',  'parentRouteNameAdmin' => 'admin.blog.getCategories', 'nameAdmin'=>'Blog getCategories',]);
//    Route::post('/blog/update-or-destroy-category','Oka6\Admin\Http\Controllers\BlogController@updateOrDestroyCategory')->name('admin.blog.updateOrDestroyCategory')->where(['iconAdmin'=>'fa-rss',  'parentRouteNameAdmin' => 'admin.blog.updateOrDestroyCategory', 'nameAdmin'=>'Blog updateOrDestroyCategory',]);


    Route::get('/template-system','Oka6\Admin\Http\Controllers\TemplateSystemController@index')->name('admin.template-system.index')->where(['iconAdmin'=>'fas fa-code', 'menuAdmin'=> "Template", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Template System', 'isDefaultAdmin'=>'1']);
    Route::get('/template-system/create','Oka6\Admin\Http\Controllers\TemplateSystemController@create')->name('admin.template-system.create')->where(['iconAdmin'=>'fa-code',  'parentRouteNameAdmin' => 'admin.template-system.index', 'nameAdmin'=>'Template System Create',]);
    Route::get('/template-system/{id}','Oka6\Admin\Http\Controllers\TemplateSystemController@edit')->name('admin.template-system.edit')->where(['iconAdmin'=>'fa-code',  'nameAdmin'=>'Template System Edit',]);
    Route::post('/template-system/{id}/update','Oka6\Admin\Http\Controllers\TemplateSystemController@update')->name('admin.template-system.update')->where(['iconAdmin'=>'fa-code',  'nameAdmin'=>'Template System Update']);
    Route::post('/template-system/create','Oka6\Admin\Http\Controllers\TemplateSystemController@update')->name('admin.template-system.update')->where(['iconAdmin'=>'fa-code',  'nameAdmin'=>'Template System Update']);
    Route::post('/template-system/{id}/change-status','Oka6\Admin\Http\Controllers\TemplateSystemController@changeStatus')->name('admin.template-system.changestatus')->where(['iconAdmin'=>'fa-code',  'nameAdmin'=>'Template System Update']);
    Route::delete('/template-system/{id}','Oka6\Admin\Http\Controllers\TemplateSystemController@destroy')->name('admin.template-system.destroy')->where(['iconAdmin'=>'fa-pencil-square-o ', 'nameAdmin'=>'Template Delete']);

    Route::get('/resources','Oka6\Admin\Http\Controllers\ResourcesController@index')->name('admin.resources.index')->where(['iconAdmin'=>'fa-key', 'menuAdmin'=> "Resources", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Resource Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/resources/create','Oka6\Admin\Http\Controllers\ResourcesController@create')->name('admin.resources.create')->where(['iconAdmin'=>'fa-plus-square','parentRouteNameAdmin' => 'admin.profiles.index', 'nameAdmin'=>'Resource Create',]);
    Route::post('/resources','Oka6\Admin\Http\Controllers\ResourcesController@store')->name('admin.resources.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save Resource']);
    Route::get('/resources/{profile}','Oka6\Admin\Http\Controllers\ResourcesController@edit')->name('admin.resources.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.resources.index', 'nameAdmin'=>'Resource Edit']);
    Route::post('/resources/{id}','Oka6\Admin\Http\Controllers\ResourcesController@update')->name('admin.resources.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.resources.index', 'nameAdmin'=>'Resource Update']);

    Route::get('/log-view','Oka6\Admin\Http\Controllers\LogViewController@index')->name('admin.logview.index')->where(['iconAdmin'=>'fas fa-clipboard-list ', 'parentRouteNameAdmin' => 'System Admin', 'menuAdmin'=> "Logs", 'nameAdmin'=>'Logs', 'isDefaultAdmin'=>'1']);


    //Oka6 Client
    Route::get('/clients', 'Oka6\Admin\Http\Controllers\ClientController@index')->name('admin.client.index')->where(['iconAdmin'=>'fa-user', 'menuAdmin'=> "Clientes", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Clientes', 'isDefaultAdmin'=>'1']);
    Route::get('/clients/create', 'Oka6\Admin\Http\Controllers\ClientController@create')->name('admin.client.create')->where(['iconAdmin'=>'fas fa-plus-square',  'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Create']);
    Route::post('/clients', 'Oka6\Admin\Http\Controllers\ClientController@store')->name('admin.client.store')->where(['iconAdmin'=>'fa-floppy-o', 'nameAdmin'=>'Save Client']);
    Route::post('/clients/search-user', 'Oka6\Admin\Http\Controllers\ClientController@searchUser')->name('admin.client.search.user')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client search user']);
    Route::get('/clients/{id}', 'Oka6\Admin\Http\Controllers\ClientController@edit')->name('admin.client.edit')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Edit']);
    Route::post('/clients/{id}', 'Oka6\Admin\Http\Controllers\ClientController@update')->name('admin.client.update')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Update']);
    Route::get('/clients/{id}/user/get', 'Oka6\Admin\Http\Controllers\ClientController@userGet')->name('admin.client.user.get')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client user get']);
    Route::post('/clients/{id}/user/save/{idUser?}', 'Oka6\Admin\Http\Controllers\ClientController@userSave')->name('admin.client.user.save')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client user save']);
    Route::get('/clients/{id}/payment-request/get', 'Oka6\Admin\Http\Controllers\ClientController@paymentRequest')->name('admin.client.payment.request.get')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Payment request']);
    Route::get('/clients/{id}/payment-current/get', 'Oka6\Admin\Http\Controllers\ClientController@paymentCurrent')->name('admin.client.payment.current.get')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Payment Current']);
    Route::get('/clients/{id}/wallet-transactions/get', 'Oka6\Admin\Http\Controllers\ClientController@walletTransaction')->name('admin.client.wallet.transaction.get')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.client.index', 'nameAdmin'=>'Client Wallet Transaction']);

    //Oka6 wallet Transactions
    Route::get('/transactions','Oka6\Admin\Http\Controllers\TransactionsController@index')->name('admin.transactions.index')->where(['iconAdmin'=>'fas fa-money-bill-alt', 'menuAdmin'=> "Transações", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Transaction Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/transactions/{id}','Oka6\Admin\Http\Controllers\TransactionsController@get')->name('admin.transactions.get')->where(['iconAdmin'=>'fas fa-money-bill-alt',  'parentRouteNameAdmin' => 'admin.transactions.index', 'nameAdmin'=>'Transaction update',]);
    Route::post('/transactions/update/{id}','Oka6\Admin\Http\Controllers\TransactionsController@update')->name('admin.transactions.update')->where(['iconAdmin'=>'fas fa-money-bill-alt', 'nameAdmin'=>'Update Transaction']);

    //Oka6 notification
    Route::get('/notifications','Oka6\Admin\Http\Controllers\NotificationsController@index')->name('admin.notifications.index')->where(['iconAdmin'=>'fas fa-exclamation-circle', 'menuAdmin'=> "Notifications", 'parentRouteNameAdmin' => 'System Admin', 'nameAdmin'=>'Notification Listing', 'isDefaultAdmin'=>'1']);
    Route::get('/notifications/create','Oka6\Admin\Http\Controllers\NotificationsController@create')->name('admin.notifications.create')->where(['iconAdmin'=>'fas fa-plus-square',  'parentRouteNameAdmin' => 'admin.notifications.index', 'nameAdmin'=>'Notification Add form']);
    Route::get('/notifications/store','Oka6\Admin\Http\Controllers\NotificationsController@store')->name('admin.notifications.store')->where(['iconAdmin'=>'fas fa-plus-square',  'parentRouteNameAdmin' => 'admin.notifications.index', 'nameAdmin'=>'Notification save new']);
    Route::get('/notifications/{id}','Oka6\Admin\Http\Controllers\NotificationsController@edit')->name('admin.notifications.edit')->where(['iconAdmin'=>'fas fa-pencil-square-o',  'parentRouteNameAdmin' => 'admin.notifications.index', 'nameAdmin'=>'Notification edit form']);
    Route::post('/notifications/{id}','Oka6\Admin\Http\Controllers\NotificationsController@update')->name('admin.notifications.update')->where(['iconAdmin'=>'fas fa-pencil-square-o',  'parentRouteNameAdmin' => 'admin.notifications.index', 'nameAdmin'=>'Notification save edit']);
    Route::get('/notifications/show/{id}','Oka6\Admin\Http\Controllers\NotificationsController@show')->name('admin.notifications.show')->where(['iconAdmin'=>' fas fa-envelope-open',  'parentRouteNameAdmin' => 'admin.notifications.index', 'nameAdmin'=>'Notification show']);
});


Route::group(['prefix' => $prefix_url,  'middleware' => ['web', 'auth']], function() {


    Route::get('/users/resources/{profileId}','Oka6\Admin\Http\Controllers\PublicMethods@getResourcesDefault')->name('admin.users.resourcesDefault');
    Route::get('/page-not-found', 'Oka6\Admin\Http\Controllers\ConsoleController@pageNotFound')->name('admin.page404get');
    Route::post('/page-not-found', 'Oka6\Admin\Http\Controllers\ConsoleController@pageNotFound')->name('admin.page404post');
    Route::get('/page-not-allowed', 'Oka6\Admin\Http\Controllers\ConsoleController@pageNotAllowed')->name('admin.page403get');
    Route::post('/page-not-allowed', 'Oka6\Admin\Http\Controllers\ConsoleController@pageNotAllowed')->name('admin.page403post');

    Route::get('/profile','Oka6\Admin\Http\Controllers\UserController@viewUserProfile')->name('admin.users.form-profile')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'Profile Edit user']);
    Route::post('/profile','Oka6\Admin\Http\Controllers\UserController@updateUserProfile')->name('admin.users.update-profile')->where(['iconAdmin'=>'fa-pencil-square-o ', 'parentRouteNameAdmin' => 'admin.users.index', 'nameAdmin'=>'Profile Edit user']);

    Route::get('/newtheme','Oka6\Admin\Http\Controllers\ConsoleController@newTheme')->name('admin.new.theme')->where(['iconAdmin'=>'fas fa-warehouse', 'parentRouteNameAdmin' => 'System Admin', 'menuAdmin'=> "Theme NiceAdmin", 'nameAdmin'=>'Theme NiceAdmin']);
    Route::get('/tutorial-help-data','Oka6\Admin\Http\Controllers\TutorialHelpController@dataJson')->name('tutorial-help.datajson');

    //Route::get('/{page?}', 'Oka6\Admin\Http\Controllers\ConsoleController@pageNotFound')->name('ironorge.page404get')->where('page','.*');
    //Route::post('/{page?}', 'Oka6\Admin\Http\Controllers\ConsoleController@pageNotFound')->name('ironorge.page404post')->where('page','.*');

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
