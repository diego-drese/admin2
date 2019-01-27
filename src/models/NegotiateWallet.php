<?php

namespace Negotiate\Admin;

use Illuminate\Database\Eloquent\Model;
use function GuzzleHttp\json_encode;

class NegotiateWallet extends Model {
    protected $fillable = ['id', 'value', 'id_user_negotiate'];

}
