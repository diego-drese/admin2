<?php

namespace Negotiate\Admin\Http\Controllers;
//use Negotiate\Admin\Http\Controllers\AuthIronForge;
use Negotiate\Admin\Resource;
use Negotiate\Admin\User;

class LogViewController extends Controller
{
    public function index()
    {
        return view('Admin::backend.logview.index');

    }

}
