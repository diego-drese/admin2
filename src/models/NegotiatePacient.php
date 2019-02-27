<?php

namespace Negotiate\Admin;

use Jenssegers\Mongodb\Eloquent\Model;

class NegotiatePacient extends Model {
    protected $fillable = [
                            'id',
                            'active',
                            'name',
                            'birth_date',
                            'father_name',
                            'mother_name',
                            'cid',
                            'cpf',
                            'phone',
                            'cellphone',
                            'health_plan',
                            'number_health_plan',
                            'date_of_first_session',
                            'screening',//triagem
                            'professional',
                            'specialty',
                            ];

    protected $connection   = 'negotiate_admin';
    protected $table        = 'negotiate_pacient';
    const TABLE             = 'negotiate_pacient';

}
