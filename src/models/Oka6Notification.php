<?php

namespace Oka6\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Jenssegers\Mongodb\Eloquent\Model;

class Oka6Notification extends Model {
    protected $fillable = [
                            'alias', // - Identificador que relaciona mensagens
                            'subject', // - Titulo da mensagem
                            'body', // - Corpo da mensagem
                            'status', // - schedule, sent, cancel, error - Status da mensagem
                            'date_schedule_at', // - Data que deve ser disparada
                            'date_sent_at', // - Data que foi disparada
                            'origin', // - Pacote que originou a mensagem
                            'user_id', // - Id do usuário que criou, em alguns casos não se aplica
                            'schedule_id', // - Id do agendamento, em alguns casos não se aplica
                            'client_id', // - Id do cliente que criou, em alguns casos não se aplica
                            'from', // - Quem enviou
                            'to',// - Quem receberá
                            'status_read', // - received, read, answered - Status da leitura da mensagem, em alguns casos não se aplica
                            'filed', // true, false -  Controla se exibe ou não a mensagem
                            'type', // sms, email, push, system, watss - Tipos de notificação
                            'priority', // 0,1,2,3,4,5 - será usado para ordenar, quando maior será carregado primeiro
                            'ui', // icones, ou qualquer coisa de layout
                            ];

    protected $connection   = 'oka6_notification';
    protected $table        = 'oka6_notification';
    const TABLE             = 'oka6_notification';

    public $rules = [

    ];

    static function scopeClient($query, $clientId){
        return $query->where('client_id', (int)$clientId);
    }
    static function createByJob($data){
       return self::create($data);
    }

    public static function makeDataSave($dataForm, Request $request){
        $dataForm['name'] = $request->get('name');
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

    static function loadEmailSchedulingToNotify($whoIsIt, $limit){
        $now        = new \DateTime();
        $limitDate  = new \DateTime();
        $now->sub(new \DateInterval('PT10M'));
        $limitDate->sub(new \DateInterval('P1D'));

        $schedules = self::where('status', 'schedule')
            ->where('who_is_it', 'exists', false)
            ->select('id')
            ->orderBy('created_at', 'asc')
            ->limit($limit)
            ->get();

        if($schedules){
            self::whereIn('id', $schedules->pluck('id'))
                ->where('who_is_it', 'exists', false)
                ->update([
                        'who_is_it'  => $whoIsIt,
                        'status'     =>'processing'
                    ]
                );
            return self::where('who_is_it', $whoIsIt)->get();
        }
        return null;
    }
}

