<?php

namespace Negotiate\Admin;

use Illuminate\Notifications\Notifiable;
use Jenssegers\Mongodb\Eloquent\Model;


class Session extends Model {

    protected $table        = 'session';
    const TABLE             = 'session';
    protected $connection   = 'negotiate_admin';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'user_id', 'ip_address', 'last_activity','created_at','updated_at'
    ];

}




