<?php

namespace Oka6\Admin;

use Illuminate\Support\Facades\Config;
use Illuminate\Http\Request;
use Jenssegers\Mongodb\Eloquent\Model;

class Oka6Plans extends Model {
    protected $fillable     = [
        'id',
        'name',
        'value',
        'recurrence_days',
        'plan_duration',
        'active',
        'total_retry',
        'retry_after_day',
        'type',
        'description',
    ];
    protected $connection   = 'oka6_admin';
    protected $table        = 'oka6_plans';
    const TABLE             = 'oka6_plans';

    public static function makeDataSave($dataForm, Request $request){

        $dataForm['name']                   = $request->get('name');
        $dataForm['value']                  = (double)$request->get('value');
        $dataForm['recurrence_days']        = (int)$request->get('recurrence_days');
        $dataForm['plan_duration']          = (int)$request->get('plan_duration');
        $dataForm['active']                 = (int)$request->get('active');
        $dataForm['total_retry']            = (int)$request->get('total_retry');
        $dataForm['retry_after_day']        = (int)$request->get('retry_after_day');
        $dataForm['type']                   = $request->get('type');
        $dataForm['description']            = $request->get('description');
        foreach (Config::get('admin.plan_fields_update') as $value){
            $dataForm[$value['name']] = $request->get($value['name']);
        }

        return $dataForm;
    }

    public static function savePlan($dataForm){
        $plan = Oka6Plans::firstOrNew(['id'=>(int)$dataForm['id']]);
        foreach ($dataForm as $key=>$value){
            $plan->{$key} = $value;
        }
        $plan->save();
    }

    public static function createPlan(Request $request){
        $dataForm['id'] = Sequence::getSequence(Oka6Plans::TABLE);
        self::savePlan(self::makeDataSave($dataForm, $request));
    }

    public static function updatePlan(Request $request, $id){
        $dataForm['id'] = (int)$id;
        self::savePlan(self::makeDataSave($dataForm, $request));
    }

    public static function getAllActives(){
        return self::where('active', 1)->orderby('name')->get();
    }
    public static function getPlanById($id){
        return  self::where('id',(int)$id)->orderby('name')->first();
    }
}
