<?php

namespace Oka6\Admin\Models;

use Jenssegers\Mongodb\Eloquent\Model;


class Session extends Model {
	
	const TABLE = 'session';
	protected $table = 'session';
	protected $connection = 'oka6_admin';
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'id', 'user_id', 'ip_address', 'last_activity', 'created_at', 'updated_at'
	];
	
}




