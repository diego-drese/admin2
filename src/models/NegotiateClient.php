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
                            'user_id',
                            'user_name',
                            'cpf',
                            'cnpj',
                            'profile_id',
                            'social_reason',
                            'fantasy_name',
                            'state_register',
                            'last_payment_value',
                            'current_plan',
                            'total_scheduling_remaining',
                            'next_charging_attempt',
                            'total_charging',
                            ];
    protected $connection   = 'negotiate_admin';
    protected $table        = 'negotiate_client';
    const TABLE             = 'negotiate_client';

    public static $rules = [
        'name'              => 'required',
        'email'             => 'required|email',
        'type'              => 'required',
        'user_id'           => 'required',
        'cpf'               => 'required_if:type,==,CPF',
        'cnpj'              => 'required_if:type,==,CNPJ',
        'fantasy_name'      => 'required_if:type,==,CNPJ',
        'social_reason'     => 'required_if:type,==,CNPJ',
        'cellphone'         => 'required',
    ];
}

