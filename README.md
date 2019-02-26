# Admin #

Sistema de administração de sistemas com regras de permissões e acesso.

php artisan migrate --database=negotiate_admin

php artisan db:seed --class=Negotiate\\\Admin\\\DatabaseSeeder

php artisan vendor:publish --tag=public --force

php artisan Negotiate:AdminRoutes

