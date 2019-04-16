<?php

namespace Negotiate\Admin;

use Jenssegers\Mongodb\Eloquent\Model;

class NegotiatePlans extends Model {
    protected $fillable     = [
        'id',
        'name',
        'desc',
        'value',
        'active',
        'recurrence_days',
        'total_retry',
        'retry_after_day',
        'fields_update_client',
        'type',
    ];
    protected $connection   = 'negotiate_admin';
    protected $table        = 'negotiate_plans';
    const TABLE             = 'negotiate_plans';
}
