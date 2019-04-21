<?php

namespace Negotiate\Admin;

use Illuminate\Support\Facades\Config;
use Jenssegers\Mongodb\Eloquent\Model;
use Negotiate\Admin\Library\MongoUtils;

class NegotiateWalletTransaction extends Model {
    protected $fillable = [
        'id',
        'recurrence_days',
        'value',
        'status',
        'type',
        'total_retry',
        'retry_after_day',
        'client_id',
        'user_id',
        'token',
        'validate_at'
    ];
    protected $connection   = 'negotiate_admin';
    protected $table        = 'negotiate_wallet_transaction';
    const TABLE             = 'negotiate_wallet_transaction';
    const STATUS            = [
        'pending'   => 'Aguardando confirmação',
        'success'   => 'Processado e aceito.',
        'complete'  => 'Processado, aceito e finalizado.',
        'cancelled' => 'Cancelado',
        'rejected'  => 'Rejeitado.'
    ];

    public static function getLast($clientId){
        return self::where('client_id', (int)$clientId)->orderBy('created_at', 'desc')->first();
    }

    public static function insertPayment($plan , $clientId, $user=null){
        $dataInsert = [
            'id'                => Sequence::getSequence(self::TABLE),
            'client_id'         => (int)$clientId,
            'status'            => 'pending',
            'status_description'=> self::STATUS['pending'],
            'value'             => $plan->value,
            'plan_id'           => (int)$plan->id,
            'plan_name'         => $plan->name,
            'plan_type'         => $plan->type,
            'recurrence_days'   => $plan->recurrence_days,
            'total_retry'       => $plan->total_retry,
            'retry_after_day'   => $plan->retry_after_day,
            'historic'          => [
                ['user_id' =>($user ? $user->id : null),'user_name' =>($user ? $user->name : null), 'action'=>'create', 'status'=>'pending', 'date_at'=> MongoUtils::convertDatePhpToMongo(date('Y-m-d H:i:s'))]
            ]
        ];

        foreach (Config::get('admin.plan_fields_update') as $value){
            $dataInsert[$value['name']] = $plan->{$value['name']};
        }
        $transaction = self::firstOrNew(['id' => (int)$dataInsert['id']]);
        foreach ($dataInsert as $key=>$value){
            $transaction->{$key} = $value;
        }

        return $transaction->save();
    }
}
