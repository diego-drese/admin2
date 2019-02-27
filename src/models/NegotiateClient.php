<?php

namespace Negotiate\Admin;

use Jenssegers\Mongodb\Eloquent\Model;

class NegotiateClient extends Model {
    protected $fillable = [
                            'id',
                            'active',
                            'name',
                            'email',
                            'cellphone',
                            'phone',
                            'type',
                            'cpf',
                            'cnpj',
                            'mother_name',
                            'father_name',
                            'health_plan',
                            'number_health_plan',
                            'profile_id',
                            'social_reason',
                            'fantasy_name',
                            'state_register',
                            'birth_date'
                            ];

    protected $connection   = 'negotiate_admin';
    protected $table        = 'negotiate_client';
    const TABLE             = 'negotiate_client';

}
