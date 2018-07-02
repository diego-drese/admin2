<?php

namespace Aggrega\Ironforge\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('Ironforge::welcome');
    }

    public function invalidPage(){
        return view('Ironforge::404');
    }
}

