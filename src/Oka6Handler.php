<?php

namespace Oka6\Admin;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Oka6Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception){
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception) {
        return parent::render($request, $exception);
    }

    protected function unauthenticated($request, AuthenticationException $exception) {
        $isJson = $request->wantsJson();
        $ajax   = $request->ajax();
        if($isJson || $ajax){
            return response()->json([
                'status' => 401,
                'error' => 'Não autenticado'
            ], 401);
        }
        return redirect(route('login', ['path'=>$request->fullUrl()]));
    }

}
