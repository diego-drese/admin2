<?php

namespace Negotiate\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Jenssegers\Mongodb\Eloquent\Model;

class NegotiateNotification extends Model {
    protected $fillable = [
                            'client_id',
                            'type',
                            'send_to',
                            'id_to',
                            'status',
                            'active',
                            'delivery_at',
                            'sent_at',
                            'read_at',
                            'info'
                            ];




    protected $connection   = 'negotiate_notification';
    protected $table        = 'negotiate_notification';
    const TABLE             = 'negotiate_notification';

    public $rules = [

    ];

    static function scopeClient($query, $clientId){
        return $query->where('client_id', (int)$clientId);
    }

    public static function makeDataSave($dataForm, Request $request){
        $dataForm['name']                           = $request->get('name');
        $dataForm['email']                          = $request->get('email');
        $dataForm['phone']                          = $request->get('phone');
        $dataForm['plan_id']                        = (int)$request->get('plan');
        $dataForm['cellphone']                      = $request->get('cellphone');
        $dataForm['active']                         = $request->get('active')=="1" ? 1 : 0;
        $dataForm['type']                           = $request->get('type');
        $dataForm['cpf']                            = $request->get('cpf');
        $dataForm['cnpj']                           = $request->get('cnpj');
        $dataForm['social_reason']                  = $request->get('social_reason');
        $dataForm['state_register']                 = $request->get('state_register');
        $dataForm['user_id']                        = (int)$request->get('user_id');
        $dataForm['user_name']                      = $request->get('user_name');
        $dataForm['address_street']                 = $request->get('address_street');
        $dataForm['address_number']                 = $request->get('address_number');
        $dataForm['address_complement']             = $request->get('address_complement');
        $dataForm['address_neighborhood']           = $request->get('address_neighborhood');
        $dataForm['address_city']                   = $request->get('address_city');
        $dataForm['address_state']                  = $request->get('address_state');
        $dataForm['last_payment_value']             = null;
        $dataForm['current_plan']                   = null;
        $dataForm['total_scheduling_remaining']     = 0;
        $dataForm['next_charging_attempt']          = null;
        $dataForm['total_charging']                 = 0;
        foreach (Config::get('admin.plan_fields_update') as $value){
            $dataForm[$value['name']] = $request->get($value['name']);
        }
        return $dataForm;
    }
    public static function saveItem($dataForm){
        $client = self::firstOrNew(['_id'=> $dataForm['_id']]);
        foreach ($dataForm as $key=>$value){
            $client->{$key} = $value;
        }
        $client->save();
    }

    public static function createItem(Request $request){
        /** Para criar um novo ID new \MongoDB\BSON\ObjectId() */
        $dataForm = self::makeDataSave(['_id'=> new \MongoDB\BSON\ObjectId()], $request);
        self::saveItem($dataForm);
        return $dataForm;
    }
    public static function updateItem(Request $request, $id){
        $dataForm = self::makeDataSave(['_id'=> new \MongoDB\BSON\ObjectId($id)], $request);
        self::saveItem($dataForm);
        return $dataForm;
    }
    public static function getById($id){
      return self::where('_id', new \MongoDB\BSON\ObjectId($id))->first();
    }
}

