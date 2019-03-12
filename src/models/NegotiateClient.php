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
                            'profile_id',
                            'social_reason',
                            'fantasy_name',
                            'state_register',
                            ];

    protected $connection   = 'negotiate_admin';
    protected $table        = 'negotiate_client';
    const TABLE             = 'negotiate_client';

    public $rules = [
        'name'              => 'required',
        'email'             => 'required|email',
        'type'              => 'required',
        'cpf'               => 'required_if:type,==,1',
        'cnpj'              => 'required_if:type,==,2',
        'fantasy_name'      => 'required_if:type,==,2',
        'social_reason'     => 'required_if:type,==,2',
        'cellphone'         => 'required',
    ];
}
