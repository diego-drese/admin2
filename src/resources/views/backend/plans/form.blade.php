<div class="row">
    <div class="col-md-4 form-group {{$errors->has('name') ? 'has-error' : ''}} ">
        <label for="title">Nome</label>
        <input type="text" class="form-control" value="{{old('name',$plan->exists() ? $plan->name : '')}}" name="name"
               id="name" placeholder="Name">
        @if($errors->has('name'))
            <span class="help-block">{{$errors->first('name')}}</span>
        @endif
    </div>

    <div class="col-md-4 form-group {{$errors->has('value') ? 'has-error' : ''}} ">
        <label for="title">Valor</label>
        <input type="text" class="form-control" value="{{old('recurrence_days',$plan->exists() ? $plan->value : '')}}" name="value" id="value" placeholder="Valor do plano">
        @if($errors->has('value'))
            <span class="help-block">{{$errors->first('value')}}</span>
        @endif
    </div>

    <div class="col-md-4 form-group {{$errors->has('recurrence_days') ? 'has-error' : ''}} ">
        <label for="title">Renova a cada</label>
        <select class="form-control " id="recurrence_days" name="recurrence_days[]">
            <option>Selecione</option>
            <option value="30">30 Dias</option>
            <option value="60">60 Dias</option>
            <option value="90">90 Dias</option>
            <option value="120">120 Dias</option>
            <option value="150">150 Dias</option>
            <option value="180">180 Dias</option>
        </select>
        @if($errors->has('recurrence_days'))
            <span class="help-block">{{$errors->first('recurrence_days')}}</span>
        @endif
    </div>

    <div class="col-md-3 form-group {{$errors->has('active') ? 'has-error' : ''}}">
        <label for="active">Status</label>
        <select type="text" name="active" class="form-control {{$errors->has('active') ? 'is-invalid' : ''}}" id="active" >
            <option value="1">Ativo</option>
            <option value="0" {{$plan->exists() && $plan->active == 0 ? 'selected' : ''}}>Desativado</option>
        </select>
        @if($errors->has('active'))
            <span class="help-block">{{$errors->first('active')}}</span>
        @endif
    </div>

    <div class="col-md-3 form-group {{$errors->has('total_retry') ? 'has-error' : ''}}">
        <label for="active">Total de retentativas</label>
        <select type="text" name="total_retry" class="form-control {{$errors->has('total_retry') ? 'is-invalid' : ''}}" id="total_retry" >
            <option value="1">1 X</option>
            <option value="2">2 X</option>
            <option value="3">3 X</option>
            <option value="6">6 X</option>
            <option value="10">10 X</option>
        </select>
        @if($errors->has('total_retry'))
            <span class="help-block">{{$errors->first('total_retry')}}</span>
        @endif
    </div>
    <div class="col-md-3 form-group {{$errors->has('retry_after_day') ? 'has-error' : ''}}">
        <label for="active">Retentar após</label>
        <select type="text" name="total_retry" class="form-control {{$errors->has('retry_after_day') ? 'is-invalid' : ''}}" id="total_retry" >
            <option value="1">1 dia</option>
            <option value="2">2 dias</option>
            <option value="3">3 dias</option>
            <option value="6">6 dias</option>
            <option value="10">10 dias</option>
        </select>
        @if($errors->has('retry_after_day'))
            <span class="help-block">{{$errors->first('retry_after_day')}}</span>
        @endif
    </div>

    <div class="col-md-3 form-group {{$errors->has('type') ? 'has-error' : ''}}">
        <label for="active">Tipo</label>
        <select type="text" name="total_retry" class="form-control {{$errors->has('type') ? 'is-invalid' : ''}}" id="total_retry" >
            <option value="manual">Manual</option>
        </select>
        @if($errors->has('type'))
            <span class="help-block">{{$errors->first('type')}}</span>
        @endif
    </div>
    @foreach($fieldsUpdate as $field)
        <div class="col-md-4 form-group ">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">{{$field['label']}}</span>
                </div>
                <input {{old($field['name'], $plan->exists() ? $plan->$field['name'] : '')}} type="text" class="form-control" name="{{$field['name']}}" />
            </div>
        </div>
    @endforeach
    <div class="col-md-12 form-group " style="">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Observações</span>
            </div>
            <textarea class="form-control" id="obs" maxlength="500"></textarea>
        </div>
    </div>
    <div class="col-md-12 form-group">
        @if($hasSave)
            <button type="submit" class="btn btn-primary ">Salvar</button>
        @endif
    </div>
</div>

@section('style_head')
    <link rel="stylesheet" href="/vendor/negotiate/admin/nice-admin/css/form.css">
    <link rel="stylesheet" href="/vendor/negotiate/admin/nice-admin/css/select2.css">
    <style>
        .select2-container--classic .select2-selection--single, .select2-container--default .select2-selection--multiple, .select2-container--default .select2-selection--single, .select2-container--default .select2-selection--single .select2-selection__arrow, .select2-container--default .select2-selection--single .select2-selection__rendered {
            height: auto;
        }
    </style>
@endsection
@section('script_footer_end')
    <script type="text/javascript" src="/vendor/negotiate/admin/nice-admin/js/select2.js"></script>

    <script>
        $(document).ready(function () {
            $('#selectResource').select2({ width: '100%'  });


        });
    </script>
@endsection