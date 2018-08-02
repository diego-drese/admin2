<?php

namespace Aggrega\Ironforge\Http\Controllers;
//use Aggrega\Ironforge\Http\Controllers\AuthIronForge;
use Aggrega\Ironforge\Resource;
use Aggrega\Ironforge\UserIronForge;

class LogViewController extends Controller
{
    public function index()
    {
        return view('Ironforge::backend.logview.index');

    }

}
