<?php

namespace Negotiate\Admin;

use Illuminate\Database\Eloquent\Model;
use function GuzzleHttp\json_encode;

class NegotiateWalletReason extends Model {
    protected $fillable = ['id', 'desc'];

}
