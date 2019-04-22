<?php

namespace Negotiate\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Jenssegers\Mongodb\Eloquent\Model;

class NegotiateClient extends Model {
    protected $fillable = [
                            'id',
                            'active',
                            'name',
                            'email',
                            'cellphone',
                            'phone',
                            'type',
                            'user_id',
                            'user_name',
                            'cpf',
                            'cnpj',
                            'profile_id',
                            'social_reason',
                            'fantasy_name',
                            'state_register',
                            'last_payment_value',
                            'current_plan',
                            'total_scheduling_remaining',
                            'next_charging_attempt',
                            'total_charging',
                            ];
    protected $connection   = 'negotiate_admin';
    protected $table        = 'negotiate_client';
    const TABLE             = 'negotiate_client';

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
    public static function saveClient($dataForm){
        $client = NegotiateClient::firstOrNew(['id'=>(int)$dataForm['id']]);
        foreach ($dataForm as $key=>$value){
            $client->{$key} = $value;
        }
        $client->save();
    }

    public static function createClient(Request $request){
        $dataForm['id'] = Sequence::getSequence(NegotiateClient::TABLE);
        self::saveClient(self::makeDataSave($dataForm, $request));
    }
    public static function updateClient(Request $request, $id){
        $dataForm['id'] = (int)$id;
        self::saveClient(self::makeDataSave($dataForm, $request));
    }
    public static function getById( $id){
      return self::where('id', (int)$id)->first();
    }

}

