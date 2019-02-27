<?php

namespace Negotiate\Admin\Http\Controllers;

use Negotiate\Admin\Library\ResourceAdmin;
use Negotiate\Admin\NegotiatePacient;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Negotiate\Admin\Sequence;
use Yajra\Datatables\Datatables;

class PacientController extends BaseController {

    use ValidatesRequests;

    public function index(Request $request, DataTables $datatables ) {

        if($request->ajax()){

            $query = NegotiatePacient::all();

            return Datatables::of($query)
                ->addColumn('edit_url', function($row){
                    return route('admin.pacient.edit', [$row->id]);
                })
                ->setRowClass(function () {
                    return 'center';
                })
                ->make(true);
        }

        $hasAdd     = ResourceAdmin::hasResourceByRouteName('admin.pacient.create');
        $hasEdit    = ResourceAdmin::hasResourceByRouteName('admin.pacient.edit', [1]);
        return view('Admin::backend.pacients.index', compact('hasAdd', 'hasEdit'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(NegotiatePacient $negotiatePacient) {
        $hasSave    = ResourceAdmin::hasResourceByRouteName('admin.pacient.store');
        return view('Admin::backend.pacients.create', compact('negotiatePacient', 'hasSave'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {

        $dataForm = $request->all();

        $customMessages = [
            'required' => 'campo é obrigatório'
        ];
        $this->validate($request, [
            'name'                  => 'required',
            'email'                 => 'required|email',
            'active'                => 'required',
            'birth_date'            => 'required',
            'father_name'           => 'required',
            'mother_name'           => 'required',
            'cid'                   => 'required',
            'cpf'                   => 'required',
            //'phone'                 => 'required',
            'cellphone'             => 'required',
            'health_plan'           => 'required',
            'number_health_plan'    => 'required',
            //'date_of_first_session' => 'required',
            'screening'             => 'required',//triagem
            'professional'          => 'required',
            'specialty'             => 'required',
        ],$customMessages);

        if(NegotiatePacient::where('email', $dataForm['email'])->first()){
            toastr()->error('O email já está em uso!','Email duplicado');
            return back()->withInput();
        }

        $dataForm['id'] = Sequence::getSequence('pacients');

        if(NegotiatePacient::create($dataForm)){
            toastr()->success('Paciente Criado!','Sucesso');
        }

        return redirect(route('admin.pacient.index'));
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        $negotiatePacient= NegotiatePacient::firstOrNew(['id'=>(int)$id]);
        $hasSave        = ResourceAdmin::hasResourceByRouteName('admin.pacient.update', [1]);
        return view('Admin::backend.pacients.edit', compact('negotiatePacient', 'hasSave'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {

        $user       = NegotiatePacient::firstOrNew(['id'=>(int)$id]);
        $dataForm   = $request->all();
        $customMessages = [
            'required' => 'campo é obrigatório'
        ];
        $this->validate($request, [
            'name'                  => 'required',
            'email'                 => 'required|email',
            'active'                => 'required',
            'birth_date'            => 'required',
            'father_name'           => 'required',
            'mother_name'           => 'required',
            'cid'                   => 'required',
            'cpf'                   => 'required',
            //'phone'                 => 'required',
            'cellphone'             => 'required',
            'health_plan'           => 'required',
            'number_health_plan'    => 'required',
            //'date_of_first_session' => 'required',
            'screening'             => 'required',//triagem
            'professional'          => 'required',
            'specialty'             => 'required',
        ],$customMessages);

        if($user->update($dataForm)){
            toastr()->success('Paciente Atualizado com sucesso','Sucesso');
        };

        return redirect(route('admin.pacient.index'));
    }

}
