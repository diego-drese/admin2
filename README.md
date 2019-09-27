# Admin #

Sistema de administração de sistemas com regras de permissões e acesso.

php artisan migrate --database=oka6_admin

php artisan db:seed --class=Oka6\\\Admin\\\DatabaseSeeder

php artisan vendor:publish --tag=public --force

php artisan Oka6:AdminRoutes

