<?php

namespace Oka6\Admin\Models;

use Illuminate\Support\Facades\Cache;
use Jenssegers\Mongodb\Eloquent\Model;
use MongoDB\Operation\FindOneAndUpdate;

class Sequence extends Model {
	
	const TABLE = 'sequence';
	protected $connection = "oka6_admin";
	protected $table = 'sequence';
	protected $primaryKey = '_id';
	protected $fillable = [];
	
	
	public static function getSequence($sequenceName) {
		$cache_name = __CLASS__ . __FUNCTION__ . '-sequence-name-' . $sequenceName;
		Cache::remember($cache_name, 1440, function () use ($sequenceName) {
			if (!self::where('_id', $sequenceName)->first()) {
				self::where('_id', $sequenceName)->update(['_id' => $sequenceName, 'sequence' => 1], ['upsert' => true]);
			}
		});
		
		$cursor = self::raw(function ($collection) use ($sequenceName) {
			$query = ['_id' => $sequenceName];
			$update = ['$inc' => ['sequence' => 1]];
			
			return $collection->findOneAndUpdate(
				$query,
				$update,
				[
					$sequenceName
				],
				[
					'new' => true,
					'returnDocument' => FindOneAndUpdate::RETURN_DOCUMENT_AFTER
				]
			);
		});
		
		if ($cursor != null && isset($cursor->sequence)) {
			return $cursor->sequence;
		}
		return null;
	}
}

