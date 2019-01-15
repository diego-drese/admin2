<?php

namespace Negotiate\Admin;

use Illuminate\Database\Eloquent\Model;
use function GuzzleHttp\json_encode;

class NegotiateUser extends Model {
    protected $fillable = ['id', 'name', 'type', 'type', 'id_user_system', 'cpf', 'cnpj', 'social_reason', 'fantasy_name', 'state_register', 'birth_date'];

}
