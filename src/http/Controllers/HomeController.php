<?php

namespace Negotiate\Admin\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('Admin::welcome');
    }

    public function invalidPage(){
        return view('Admin::404');
    }
}

