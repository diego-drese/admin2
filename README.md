# Admin #

Sistema de administração de sistemas com regras de permissões e acesso.

php artisan migrate --database=oka6_admin

php artisan db:seed --class=Oka6\\\Admin\\\DatabaseSeeder

php artisan db:seed --class=Oka6\\\Clinic\\\DatabaseSeeder

php artisan db:seed --class=Oka6\\\Blog\\\DatabaseSeeder

php artisan vendor:publish --tag=0 --force

php artisan Oka6:AdminRoutes

php artisan db:seed --class=Oka6\\\Admin\\\UserDefaultPage


