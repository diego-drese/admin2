<?php

namespace Aggrega\Ironforge\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class ConsoleController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function dashboard(){
        return view('Ironforge::backend.index');
    }
    public function pageNotFound(){
        return view('Ironforge::errors.404');
    }

    public function pageNotAllowed(){
        return view('Ironforge::errors.403');
    }

}
