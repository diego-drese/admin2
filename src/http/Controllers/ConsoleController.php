<?php

namespace Oka6\Admin\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class ConsoleController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function dashboard(){
        return view('Admin::backend.index');
    }
    public function quillpro(){
        return view('Admin::backend.quillpro');
    }
    public function newTheme(){
        return view('Admin::backend.new_theme');
    }
    public function pageNotFound(){
        return view('Admin::errors.404');
    }

    public function pageNotAllowed(){
        return view('Admin::errors.403');
    }

}
