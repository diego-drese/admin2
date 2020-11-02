<div class="form-group {{$errors->has('name') ? 'has-error' : ''}} ">
    <label for="name">Nome</label>
    <input type="text" class="form-control" value="{{old('name',$resource->exists() ? $resource->name : '')}}"
           name="name">
    @if($errors->has('name'))
        <span class="help-block">{{$errors->first('name')}}</span>
    @endif
</div>


<div class="form-group {{$errors->has('menu') ? 'has-error' : ''}} ">
    <label for="menu">Menu</label>
    <input type="text" class="form-control" value="{{old('menu',$resource->exists() ? $resource->menu : '')}}"
           name="menu">
    @if($errors->has('menu'))
        <span class="help-block">{{$errors->first('menu')}}</span>
    @endif
</div>

<div class="form-group {{$errors->has('controller_method') ? 'has-error' : ''}} ">
    <label for="controller_method">Controller</label>
    <input disabled type="text" class="form-control"
           value="{{old('menu',$resource->exists() ? $resource->controller_method : '')}}"
           name="controller_method" placeholder="">
    @if($errors->has('controller_method'))
        <span class="help-block">{{$errors->first('controller_method')}}</span>
    @endif
</div>

<div class="form-group {{$errors->has('parents') ? 'has-error' : ''}} ">
    <label for="controller_method">Filho de</label>
    <select class="form-control" name="parent_id" placeholder="">
        <option value="0">Menu Root</option>
        @foreach($parentsDefault as $parent)
            <option value="{{$parent->id}}" {{$resource->exists() && $resource->parent_id == $parent->id ? 'selected="selected"' : ''}}>
                {{$parent->name}}
            </option>
        @endforeach
    </select>
    @if($errors->has('parents'))
        <span class="help-block">{{$errors->first('parents')}}</span>
    @endif
</div>

<div class="form-group pos-relative">
    <label class="d-block">É um menu?</label>

    <div class="custom-control custom-radio mb-3 float-left mr-2">
        <input type="radio" class="custom-control-input" id="is_menu1" name="is_menu"
               value="1" {{$resource->is_menu == 1 ? 'checked' : ''}}>
        <label class="custom-control-label" for="is_menu1">Sim</label>
    </div>
    <div class="custom-control custom-radio mb-3 float-left">
        <input type="radio" class="custom-control-input" id="is_menu2" name="is_menu"
               value="0" {{$resource->is_menu == 0 ? 'checked' : ''}}>
        <label class="custom-control-label" for="is_menu2">Não</label>
    </div>
    <div class="clearfix"></div>
</div>

@if($resource->route_name)
    <div class="form-group pos-relative clearfix">
        <label class=" d-block">Redirecionar após o login?</label>
        <div class="custom-control custom-radio mb-3 float-left">
            <input type="radio" class="custom-control-input" id="can_be_default1" name="can_be_default"
                   value="1" {{$resource->can_be_default == 1 ? 'checked' : ''}}>
            <label class="custom-control-label" for="can_be_default1">Sim</label>
        </div>
        <div class="custom-control custom-radio mb-3 float-left">
            <input type="radio" class="custom-control-input" id="can_be_default2" name="can_be_default"
                   value="0" {{$resource->can_be_default == 0 ? 'checked' : ''}}>
            <label class="custom-control-label" for="can_be_default2">Não</label>
        </div>
        <div class="clearfix"></div>
    </div>
@endif

<div class="form-group {{$errors->has('icon') ? 'has-error' : ''}} ">
    <label for="title">Icone</label>
    <div class="input-group">
        <span class="input-group-addon input-group-text select-icon color-primary font-medium btn-secondary waves-effect waves-light "><i
                    class="{{'fa '.($resource->icon ? $resource->icon : ' fa-question-circle')}}"> </i></span>
        <input type="text" class="form-control" id="icon-select"
               value="{{old('route_name',$resource->exists() ? $resource->icon : 'fa-question-circle')}}" name="icon"
               placeholder="Selecione um Icone">
    </div>
    @if($errors->has('icon'))
        <span class="help-block">{{$errors->first('icon')}}</span>
    @endif
</div>


<div>
    <br>
    @if($hasSave)
        <button style="float: right;" type="submit" class="btn btn-success">Salvar</button>
    @endif
</div>


<!-- Large modal -->

<div class="modal fade bs-example-modal-lg" tabindex="-1" id="icons-modal" role="dialog"
     aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title"> Fontes <i>(click duplo)</i></h4>
            </div>
            <div class="modal-body">
                @include('Admin::backend.resources.icons')
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>


        </div>
    </div>
</div>
@section('style_head_end')
    <style>
        .radio label {
            padding: 0px 20px;
        }
    </style>
@endsection
@section('script_footer_end')
    <script>
        var modalBox = $('#icons-modal');
        var iconInput = $('.input-group-addon i');

        $(document).on('click', '.select-icon', function () {
            modalBox.modal('show');

        });

        $(document).on('click', '.fas, .mdi', function (e) {
            var classeFonte = $(this).attr('class');
            var inputText = $('#icon-select');

            iconInput.removeAttr('class', '');
            iconInput.attr('class', classeFonte.replace('fas btn btn-secondary waves-effect waves-light', ''));
            inputText.val('');
            inputText.val(classeFonte.replace('fas btn btn-secondary waves-effect waves-light', ''));

            modalBox.modal('hide');
        });

        $(document).on('keyup keypress blur change', '#icon-select', function () {
            var newinputIcon = $(this).val();

            iconInput.removeAttr('class', '');
            iconInput.attr('class', 'fas ' + newinputIcon);
        })
    </script>
@endsection