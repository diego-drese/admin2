<?php

namespace Oka6\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;
use Jenssegers\Mongodb\Eloquent\Model;

class Oka6Client extends Model {
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
                            'logo',
                            'domain',
                            'cpf',
                            'cnpj',
                            'profile_id',
                            'social_reason',
                            'fantasy_name',
                            'state_register',
                            'address_street',
                            'address_number',
                            'address_neighborhood',
                            'address_city',
                            'address_state',
                            'last_payment_value',
                            'current_plan',
                            'total_scheduling_remaining',
                            'next_charging_attempt',
                            'total_charging',
                            'api_key',
                            'type_send_sms',
                            'automatic_remember_sms',
                            'automatic_remember_email',
                            'template_sms',
                            'template_email',
                            'template_whats',


                            ];
    protected $dates        =['next_charging_attempt'];
    protected $connection   = 'oka6_admin';
    protected $table        = 'oka6_client';
    const TABLE             = 'oka6_client';

    public $rules = [
        'name'              => 'required',
        'email'             => 'required|email',
        'type'              => 'required',
        'cpf'               => 'required_if:type,==,1',
        'cnpj'              => 'required_if:type,==,2',
        'fantasy_name'      => 'required_if:type,==,2',
        'social_reason'     => 'required_if:type,==,2',
        'cellphone'         => 'required',
        'address_street'         => 'required',
        'address_number'         => 'required',
        'address_neighborhood'   => 'required',
        'address_city'           => 'required',
        'address_state'          => 'required',
    ];

    public static function makeDataSave($dataForm, Request $request){

        $dataForm['name']                           = $request->get('name');
        $dataForm['email']                          = $request->get('email');
        $dataForm['phone']                          = $request->get('phone');
        if($request->exists('plan')){
            $dataForm['plan_id']                    = (int)$request->get('plan');
        }

        if($request->exists('active')){
            $dataForm['active']                     = $request->get('active')=="1" ? 1 : 0;
        }
        $dataForm['cellphone']                      = $request->get('cellphone');
        $dataForm['type']                           = $request->get('type');
        $dataForm['cpf']                            = $request->get('cpf');
        $dataForm['cnpj']                           = $request->get('cnpj');
        $dataForm['social_reason']                  = $request->get('social_reason');
        $dataForm['fantasy_name']                   = $request->get('fantasy_name');
        $dataForm['state_register']                 = $request->get('state_register');
        $dataForm['user_id']                        = (int)$request->get('user_id');
        $dataForm['user_name']                      = $request->get('user_name');
        $dataForm['domain']                         = $request->get('domain');
        $dataForm['address_street']                 = $request->get('address_street');
        $dataForm['address_number']                 = $request->get('address_number');
        $dataForm['address_complement']             = $request->get('address_complement');
        $dataForm['address_neighborhood']           = $request->get('address_neighborhood');
        $dataForm['address_city']                   = $request->get('address_city');
        $dataForm['address_state']                  = $request->get('address_state');
        $dataForm['type_send_sms']                  = $request->get('type_send_sms');
        $dataForm['automatic_remember_sms']         = $request->get('automatic_remember_sms') ? 1 : 0;
        $dataForm['automatic_remember_email']       = $request->get('automatic_remember_email') ? 1 : 0;
        $dataForm['last_payment_value']             = null;
        $dataForm['current_plan']                   = null;
        $dataForm['total_scheduling_remaining']     = 0;
        $dataForm['next_charging_attempt']          = null;
        $dataForm['total_charging']                 = 0;
        $dataForm['template_sms']                   = $request->get('template_sms');
        $dataForm['template_email']                 = $request->get('template_email');
        $dataForm['template_whats']                 = $request->get('template_whats');

        if( $request->get('api_key')==""){
            $dataForm['api_key']                        = Crypt::encrypt($dataForm['id']);
        }

        if( $request->hasFile('logo')){
            $image              = $request->file('logo');
            $input['logo']      = time().'.'.$image->getClientOriginalExtension();
            $destinationPath    = storage_path('/app/public/thumbnail');

            if(!File::isDirectory($destinationPath)){
                File::makeDirectory($destinationPath, 0777);
            }
            $img = Image::make($image->getRealPath());
            $img->resize(400, 400, function ($constraint) {
                $constraint->aspectRatio();
            })->save($destinationPath.'/'.$input['logo']);

            $base64 = 'data:image/' . $image->getClientOriginalExtension() . ';base64,' . base64_encode($img);
            $dataForm['logo'] = $base64;
        }

        foreach (Config::get('admin.plan_fields_update') as $value){
            $dataForm[$value['name']] = $request->get($value['name']);
        }
        return $dataForm;
    }
    public static function saveClient($dataForm){
        $client = Oka6Client::firstOrNew(['id'=>(int)$dataForm['id']]);
        foreach ($dataForm as $key=>$value){
            $client->{$key} = $value;
        }
        $client->save();
    }

    public static function createClient(Request $request){
        $dataCreate = [
            'id'            => Sequence::getSequence(Oka6Client::TABLE),
            'template_sms'  => 'Olá {NOME_CLIENTE}, seu horário com {NOME_PROFISSIONAL} agendado para {DIA} às {HORARIO} está confirmado? Para confirmar acesse o link: {LINK_CONFIRMACAO}',
            'template_email'=> 'Olá {NOME_CLIENTE}, seu horário com {NOME_PROFISSIONAL} agendado para {DIA} às {HORARIO} está confirmado? Para confirmar acesse o link: {LINK_CONFIRMACAO}',
            'template_whats'=> 'Olá {NOME_CLIENTE}, seu horário com {NOME_PROFISSIONAL} agendado para {DIA} às {HORARIO} está confirmado? Para confirmar acesse o link: {LINK_CONFIRMACAO}',
        ];
        $dataForm = self::makeDataSave($dataCreate, $request);
        self::saveClient($dataForm);
        return $dataForm;
    }
    public static function updateClient(Request $request, $id){
        $dataForm = self::makeDataSave(['id'=>(int)$id], $request);
        self::saveClient($dataForm);
        return $dataForm;
    }
    public static function getById($id){
      return self::where('id', (int)$id)->first();
    }

    public static function generatedHashFireBase($id){
        return $id.'#'.Config::get('app.clinic_domain');
    }
}

