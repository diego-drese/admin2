<?php

namespace Oka6\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;
use Oka6\Admin\Mails\SendContactFormSite;
use Oka6\Admin\TemplateSystem;

class HomeController extends Controller {
	public function index() {
		$theme = TemplateSystem::where('active', (int)1)->first();
		if (!$theme) {
			return abort(403, 'Não a tema definido');
		}
		$html = $theme->html;
		$slug = $theme->slug;
		$title = $theme->title;
		$description = $theme->description;
		return view('Admin::template.index', compact('html', 'slug', 'title', 'description'));
	}
	
	public function sendMail(Request $request) {
		
		if (!$request->name || !$request->email || !$request->phone || !$request->msg) {
			return response()->json([
				'status' => 500,
				'message' => 'Favor preencher todos os campos'
			]);
		}
		
		Mail::to('contato@hclinic.com.br')
			->cc(['pvargatt@gmail.com', 'diego.neumann.drese@gmail.com', 'luan.garcia@aggregando.com.br'])
			->send(new SendContactFormSite($request->name, $request->email, $request->phone, $request->msg));
		
		return response()->json([
			'status' => 200,
			'message' => 'Mensagem enviada com sucesso!'
		]);
	}
	
	public function getCssFile($slug) {
		$tpl = TemplateSystem::where('slug', $slug)->first();
		$response = Response::create($tpl->style);
		$response->header('Content-Type', 'text/css');
		return $response;
	}
	
	public function getJsFile($slug) {
		$tpl = TemplateSystem::where('slug', $slug)->first();
		$response = Response::create($tpl->js);
		$response->header('Content-Type', 'application/javascript');
		return $response;
	}
	
	
	public function invalidPage() {
		return view('Admin::404');
	}
}

