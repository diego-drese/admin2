<?php

namespace Negotiate\Admin;

use Jenssegers\Mongodb\Eloquent\Model;

class NegotiateWalletTransaction extends Model {
    protected $fillable = [
        'id',
        'recurrence_days',
        'value',
        'status',
        'type',
        'total_retry',
        'retry_after_day',
        'client_id',
        'user_id',
        'token',
        'validate_at'
    ];
    protected $connection   = 'negotiate_admin';
    protected $table        = 'negotiate_transaction';
    const TABLE             = 'negotiate_transaction';
}
