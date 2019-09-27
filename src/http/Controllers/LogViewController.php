<?php

namespace Oka6\Admin\Http\Controllers;

class LogViewController extends Controller
{
    public function index()
    {
        return view('Admin::backend.logview.index');

    }

}
