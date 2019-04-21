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
                            'address_street',
                            'address_number',
                            'address_neighborhood',
                            'address_city',
                            'address_state',
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
        'address_street'         => 'required',
        'address_number'         => 'required',
        'address_neighborhood'   => 'required',
        'address_city'           => 'required',
        'address_state'          => 'required',
    ];
}
