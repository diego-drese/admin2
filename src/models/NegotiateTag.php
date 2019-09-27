<?php

namespace Oka6\Admin;
use Jenssegers\Mongodb\Eloquent\Model;


class Oka6Tag extends Model {

    protected $fillable     = ['tag', 'type', 'client_id', 'group', 'id'];
    protected $table        = 'oka6_tag';
    const TABLE             = 'oka6_tag';
    protected $connection   = 'oka6_admin';


    public static function saveTag($dataForm){
        foreach ($dataForm['tags'] as $tag){
            $tag                    = ucfirst(strtolower($tag));
            $id                     = strtolower($tag.$dataForm['type'].$dataForm['group'].$dataForm['client_id']);
            $tagModel               = self::firstOrNew(['id'=> $id]);
            $tagModel->tag          = $tag;
            $tagModel->type         = $dataForm['type'];
            $tagModel->client_id    = $dataForm['client_id'];
            $tagModel->group        = $dataForm['group'];
            $tagModel->id           = $id;
            $tagModel->save();
        }

    }
    protected static function ajustString($tags){
        if(is_array($tags)){

        }else{
            return ucfirst(strtolower($tags));
        }
    }
    public static function createTag($clientId, $tags, $type, $group){
        $dataForm['tags']           = [];
        if(is_array($tags)){
            foreach ($tags as $key=>$tag){
                $dataForm['tags'][] = ucfirst(strtolower($tag));
                $tags[$key]         = ucfirst(strtolower($tag));
            }
        }else{
            $dataForm['tags'][] = ucfirst(strtolower($tags));
            $tags = ucfirst(strtolower($tags));
        }

        $dataForm['type']           = $type;
        $dataForm['group']          = $group;
        $dataForm['client_id']      = (int)$clientId;
        self::saveTag($dataForm);
        return $tags;
    }

    static function scopeClient($query, $clientId){
        return $query->where('client_id', (int)$clientId);
    }

    public static function getTagsByType($clientId, $type) {
        return self::client($clientId)->where('type', $type)->get();
    }

    public static function getTagsByTypeAndGroup($clientId,$type, $group) {
        return self::client($clientId)->where('group', $group)->where('type', $type)->get();
    }

    public static function searchTagsByType($clientId, $type, $search) {
        return self::client($clientId)->where('type', $type)
            ->where('tag', 'like', '%'.$search.'%')
            ->get();
    }
    public static function deleteTagOld($tags, $type, $field, $model, $clientId=null) {
        $tagsArray = is_array($tags) ? $tags : [$tags];

        $model->whereIn($field, $tagsArray);
        if($clientId){
            $result= $model->where('client_id', (int)$clientId)->whereIn($field, $tagsArray)->first();
        }else{
            $result= $model->whereIn($field, $tagsArray)->first();
        }
        if(!$result){
            if($clientId){
                self::where('client_id', (int)$clientId)->whereIn('tag', $tagsArray)->where('type', $type)->delete();
            }else{
                self::whereIn('tag', $tagsArray)->where('type', $type)->delete();
            }

        }

    }


}
