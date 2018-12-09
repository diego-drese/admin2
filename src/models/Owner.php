<?php

namespace Negotiate\Admin;

use Illuminate\Database\Eloquent\Model;
use function GuzzleHttp\json_encode;

class Owner extends Model
{
    protected $fillable = ['name', 'desc', 'origin_excluding_ids', 'type', 'origin_id', 'origin_name', 'remain_list_id', 'remain_list_name'];

    public function user()
    {
        return $this->belongsToMany('Negotiate\Admin\UserIronForge','user_has_owners','owner_id','user_id');
    }

    /**
     * Get the relationships for the entity.
     *
     * @return array
     */
    public function getQueueableRelations() {
        // TODO: Implement getQueueableRelations() method.
    }

    public static function getArrayOriginsIdByUserAndType($userId, $type) {
        $retval = [];

        $excluding = self::select('origin_excluding_ids')
                    ->join('user_has_owners', 'user_has_owners.owner_id', 'owners.id')
                    ->where('user_has_owners.user_id', $userId)
                    ->where('type', $type)
                    ->first();

        if (isset($excluding->origin_excluding_ids) && $excluding->origin_excluding_ids) {
            $owners = self::select('remain_list_id')
                        ->join('user_has_owners', 'user_has_owners.owner_id', 'owners.id')
                        ->where('user_has_owners.user_id', $userId)
                        ->where('type', $type)
                        ->pluck('remain_list_id');
        } else {
            $owners = self::select('origin_id')
                        ->join('user_has_owners', 'user_has_owners.owner_id', 'owners.id')
                        ->where('user_has_owners.user_id', $userId)
                        ->where('type', $type)
                        ->pluck('origin_id');
        }

        if ($owners) {
            $retval = $owners->toArray();
        }

        return $retval;
    }
    
    public static function getOriginsList($id = null) {
        $origins_ids   = [];
        $origins_names = [];
        $return        = [];
        $owners        =  self::select('origin_id', 'origin_name')->where('id', $id)->get()->toArray();

        if (!empty($owners)) {
            foreach ($owners as $value) {
                foreach (json_decode($value['origin_id']) as $v) {
                    $origins_ids[] = $v;
                }
            }
            
            foreach ($owners as $value) {
                foreach (json_decode($value['origin_name']) as $y) {
                    $origins_names[] = $y;
                }
            }
            
            $origins = array_combine($origins_ids, $origins_names);
            $i = 0;
            foreach ($origins as $k => $value) {
                if (isset($k) && isset($value)) {
                    $return[$i]['id']   = $k;
                    $return[$i]['name'] = $value;
                }
                $i++;
            }
        }

        return $return;
    }
    
    public static function getRemainList($id = null) {
        $origins_ids   = [];
        $origins_names = [];
        $return        = [];
        $owners        =  self::select('remain_list_id', 'remain_list_name')->where('id', $id)->get()->toArray();
        
        if (!empty($owners)) {
            foreach ($owners as $value) {
                foreach (json_decode($value['remain_list_id']) as $v) {
                    $origins_ids[] = $v;
                }
            }
            
            foreach ($owners as $value) {
                foreach (json_decode($value['remain_list_name']) as $y) {
                    $origins_names[] = $y;
                }
            }
            
            $origins = array_combine($origins_ids, $origins_names);
            $i = 0;
            foreach ($origins as $k => $value) {
                if (isset($k) && isset($value)) {
                    $return[$i]['id']   = $k;
                    $return[$i]['name'] = $value;
                }
                $i++;
            }
        }
        
        return $return;
    }
    
    public static function updateFieldsToJson($id = null) {
        $owers = self::select('id', 'origin_id', 'origin_name')->get()->toArray();

        foreach ($owers as &$var) {

            if (!empty($var['origin_id'])) {
                $ids = json_decode($var['origin_id']);
                if (is_array($ids) && count($ids) > 0) {
                    continue;
                } else {
                    /* single */
                    $var['origin_id']   = json_encode(array($var['origin_id']));
                    $var['origin_name'] = json_encode(array($var['origin_name']));
                }
            } else {
                /* empty */
                $var['origin_id']   = json_encode(array($var['origin_id']));
                $var['origin_name'] = json_encode(array($var['origin_name']));
            }
        }

        foreach ($owers as $value) {
            self::where('id', '=', $value['id'])->update([
                'origin_id' =>  $value['origin_id'],
                'origin_name' => $value['origin_name']
            ]);
        }
        
        die('users UPDATED');
    }
}
