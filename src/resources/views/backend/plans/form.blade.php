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
        <input type="text" class="form-control" value="{{old('recurrence_days', $plan->exists() ? $plan->value : '')}}" name="value" id="value" placeholder="Valor do plano">
        @if($errors->has('value'))
            <span class="help-block">{{$errors->first('value')}}</span>
        @endif
    </div>

    <div class="col-md-4 form-group {{$errors->has('plan_duration') ? 'has-error' : ''}} ">
        <label for="title">Duração</label>
        <select class="form-control " id="plan_duration" name="plan_duration">
            <option value="">Selecione</option>
            <option value="30" {{$plan->exists() && $plan->plan_duration == 'infinity' ? 'selected' : ''}}>Infinita</option>
            <option value="90" {{$plan->exists() && $plan->plan_duration == 90 ? 'selected' : ''}}>Trimestral</option>
            <option value="180" {{$plan->exists() && $plan->plan_duration == 180 ? 'selected' : ''}}>Semestral</option>
            <option value="180" {{$plan->exists() && $plan->plan_duration == 360 ? 'selected' : ''}}>1 Ano</option>
        </select>
        @if($errors->has('recurrence_days'))
            <span class="help-block">{{$errors->first('recurrence_days')}}</span>
        @endif
    </div>
    <div class="col-md-4 form-group {{$errors->has('recurrence_days') ? 'has-error' : ''}} ">
        <label for="title">Renova a cada</label>
        <select class="form-control " id="recurrence_days" name="recurrence_days">
            <option value="">Selecione</option>
            <option value="30" {{$plan->exists() && $plan->recurrence_days == 0 ? 'selected' : ''}}>0 Dias</option>
            <option value="30" {{$plan->exists() && $plan->recurrence_days == 30 ? 'selected' : ''}}>30 Dias</option>
            <option value="90" {{$plan->exists() && $plan->recurrence_days == 90 ? 'selected' : ''}}>90 Dias</option>
            <option value="180" {{$plan->exists() && $plan->recurrence_days == 180 ? 'selected' : ''}}>180 Dias</option>
            <option value="180" {{$plan->exists() && $plan->recurrence_days == 360 ? 'selected' : ''}}>360 Dias</option>
        </select>
        @if($errors->has('recurrence_days'))
            <span class="help-block">{{$errors->first('recurrence_days')}}</span>
        @endif
    </div>

    <div class="col-md-3 form-group {{$errors->has('active') ? 'has-error' : ''}}">
        <label for="active">Status</label>
        <select type="text" name="active" class="form-control {{$errors->has('active') ? 'is-invalid' : ''}}" id="active" >
            <option value="0" {{$plan->exists() && $plan->active == 0 ? 'selected' : ''}}>Desativado</option>
            <option value="1" {{$plan->exists() && $plan->active == 1 ? 'selected' : ''}}>Ativo</option>
        </select>
        @if($errors->has('active'))
            <span class="help-block">{{$errors->first('active')}}</span>
        @endif
    </div>

    <div class="col-md-3 form-group {{$errors->has('total_retry') ? 'has-error' : ''}}">
        <label for="active">Total de retentativas</label>
        <select type="text" name="total_retry" class="form-control {{$errors->has('total_retry') ? 'is-invalid' : ''}}" id="total_retry" >
            <option value="">Selecione</option>
            <option value="1" {{$plan->exists() && $plan->total_retry == 1 ? 'selected' : ''}}>1 X</option>
            <option value="2" {{$plan->exists() && $plan->total_retry == 2 ? 'selected' : ''}}>2 X</option>
            <option value="3" {{$plan->exists() && $plan->total_retry == 3 ? 'selected' : ''}}>3 X</option>
            <option value="6" {{$plan->exists() && $plan->total_retry == 6 ? 'selected' : ''}}>6 X</option>
            <option value="10" {{$plan->exists() && $plan->total_retry == 10 ? 'selected' : ''}}>10 X</option>
        </select>
        @if($errors->has('total_retry'))
            <span class="help-block">{{$errors->first('total_retry')}}</span>
        @endif
    </div>
    <div class="col-md-3 form-group {{$errors->has('retry_after_day') ? 'has-error' : ''}}">
        <label for="active">Retentar após</label>
        <select type="text" name="retry_after_day" class="form-control {{$errors->has('retry_after_day') ? 'is-invalid' : ''}}" id="total_retry" >
            <option value="">Selecione</option>
            <option value="1" {{$plan->exists() && $plan->retry_after_day == 1 ? 'selected' : ''}}>1 dia</option>
            <option value="2" {{$plan->exists() && $plan->retry_after_day == 2 ? 'selected' : ''}}>2 dias</option>
            <option value="3" {{$plan->exists() && $plan->retry_after_day == 3 ? 'selected' : ''}}>3 dias</option>
            <option value="6" {{$plan->exists() && $plan->retry_after_day == 6 ? 'selected' : ''}}>6 dias</option>
            <option value="10" {{$plan->exists() && $plan->retry_after_day == 10 ? 'selected' : ''}}>10 dias</option>
        </select>
        @if($errors->has('retry_after_day'))
            <span class="help-block">{{$errors->first('retry_after_day')}}</span>
        @endif
    </div>

    <div class="col-md-3 form-group {{$errors->has('type') ? 'has-error' : ''}}">
        <label for="active">Tipo</label>
        <select type="text" name="type" class="form-control {{$errors->has('type') ? 'is-invalid' : ''}}" id="type" >
            <option value="">Selecione</option>
            <option value="manual" {{$plan->exists() && $plan->type == 'manual' ? 'selected' : ''}}>Manual</option>
            <option value="credit_card" {{$plan->exists() && $plan->type == 'credit_card' ? 'selected' : ''}}>Cartão</option>
            <option value="ticket" {{$plan->exists() && $plan->type == 'ticket' ? 'selected' : ''}}>Boleto</option>
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
                <input value="{{old($field['name'], $plan->exists()  ? $plan->{$field['name']} : '')}}" type="text" class="form-control" name="{{$field['name']}}" />
            </div>
        </div>
    @endforeach
    <div class="col-md-12 form-group " style="">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Observações</span>
            </div>
            <textarea name="description" class="form-control" id="description" maxlength="500">{{$plan->exists() && $plan->description  ? $plan->description : ''}}</textarea>
        </div>
    </div>
    <div class="col-md-12 form-group">
        @if($hasSave)
            <button type="submit" class="btn btn-primary ">Salvar</button>
        @endif
    </div>
</div>

@section('style_head')
    <link rel="stylesheet" href="{{mix('/vendor/negotiate/admin/css/form.css')}}">
    <link rel="stylesheet" href="{{mix('/vendor/negotiate/admin/css/select2.css')}}">
    <script type="text/javascript" src={{mix('/vendor/negotiate/admin/js/basic.js')}}></script>
    <style>
        .select2-container--classic .select2-selection--single, .select2-container--default .select2-selection--multiple, .select2-container--default .select2-selection--single, .select2-container--default .select2-selection--single .select2-selection__arrow, .select2-container--default .select2-selection--single .select2-selection__rendered {
            height: auto;
        }
    </style>
@endsection
@section('script_footer_end')
    <script type="text/javascript" src={{mix('/vendor/negotiate/admin/js/select2.js')}}></script>
    <script type="text/javascript" src={{mix('/vendor/negotiate/admin/js/forms.js')}}></script>

    <script>
        $(document).ready(function () {
            $('#value').mask('#.##0.00', {reverse: true});
            $('#active').change(function(){
                var classCss = $(this).find('option:selected').prop('class');
                $(this).removeClass('text-success text-danger').addClass(classCss);
            });

            $(".btn-group .active").click()

        });
    </script>
@endsection