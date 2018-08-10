<?php


namespace Aggrega\Ironforge\Observers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;


class OwnerObserver
{
    public function creating($model){

        $userName = Auth::user()->name;
        $userId = Auth::user()->id;
        $log_ = '';
        $changes = $model->isDirty() ? $model->getDirty() : false;

        if($changes)
        {
            foreach($changes as $attr => $value)
            {
                $log_ .= "Ironforge Creating {$model->getTable()} register #{$model->id} field $attr from '{$model->getOriginal($attr)}' to '{$model->$attr}' for User {$userId}#{$userName} \r\n";
            }

            Log::info($log_);
        }

    }

    public function updated($model){

        $userName = Auth::user()->name;
        $userId = Auth::user()->id;
        $log_ = '';
        $changes = $model->isDirty() ? $model->getDirty() : false;

        if($changes)
        {
            foreach($changes as $attr => $value)
            {
                $log_ .= "Ironforge Updated {$model->getTable()} register #{$model->id} field $attr from '{$model->getOriginal($attr)}' to '{$model->$attr}' for User {$userId}#{$userName} \r\n";
            }

            Log::info($log_);
        }
    }
    public function saving($model){

    }
    public function saved($model){

    }
    public function updating($model){

    }
    public function restoring($model){

    }
    public function restored($model){

    }
    public function deleting($model){

    }
    public function deleted($model){

    }
    public function forceDeleted($model){

    }


}