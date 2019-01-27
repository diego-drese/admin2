<?php

namespace Negotiate\Admin;

use Illuminate\Database\Eloquent\Model;
use function GuzzleHttp\json_encode;

class NegotiateWalletTransaction extends Model {
    protected $fillable = ['id', 'value', 'type', 'status', 'reason_id', 'id_user_negotiate', 'token', 'validate_at'];

}
