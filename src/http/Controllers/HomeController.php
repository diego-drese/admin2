<?php

namespace Aggrega\Ironforge\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('welcome');
    }

    public function invalidPage(){
        return view('404');
    }
}

