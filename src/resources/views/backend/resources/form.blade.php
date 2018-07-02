<div class="form-group {{$errors->has('name') ? 'has-error' : ''}} ">
    <label for="name">Nome</label>
    <input type="text" class="form-control" value="{{old('name',$resource->exists() ? $resource->name : '')}}"
           name="name" placeholder="Nome">
    @if($errors->has('name'))
        <span class="help-block">{{$errors->first('name')}}</span>
    @endif
</div>


<div class="form-group {{$errors->has('menu') ? 'has-error' : ''}} ">
    <label for="menu">Menu</label>
    <input type="text" class="form-control" value="{{old('menu',$resource->exists() ? $resource->menu : '')}}"
           name="menu" placeholder="Nome Menu">
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
        <option value="0">Menu Raiz</option>
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
    <label class="margin-right-small">É Menu ? </label>
    <input type="hidden" name="is_menu" value="0">
    <input type="checkbox" class="swit-box" name="is_menu" hidden="hidden"
           value="1" {{$resource->is_menu == 1 ? 'checked' : ''}} >
    <label class="switch" for="is_menu"></label>
</div>


@if($resource->route_name)
<div class="form-group pos-relative">
    <label class="margin-right-small">Pode ser redirecionado no login ?</label>
    <input type="hidden" name="can_be_default" value="0">
    <input type="checkbox" class="swit-box" name="can_be_default" hidden="hidden"
           value="1" {{$resource->can_be_default == 1 ? 'checked' : ''}} >
    <label class="switch" for="can_be_default"></label>
</div>
@endif

<div class="form-group {{$errors->has('icon') ? 'has-error' : ''}} ">
    <label for="title">Icone</label>
    <div class="input-group">
        <span class="input-group-addon select-icon color-primary font-medium"><i class="{{'fa '.$resource->icon}}"></i></span>
        <input type="text" class="form-control" id="icon-select"
               value="{{old('route_name',$resource->exists() ? $resource->icon : '')}}" name="icon"
               placeholder="Selecione um Icone">
    </div>
    @if($errors->has('icon'))
        <span class="help-block">{{$errors->first('icon')}}</span>
    @endif
</div>


<div>
    <br>
    <button type="submit" class="btn btn-success">Salvar</button>
</div>


<!-- Large modal -->

<div class="modal fade bs-example-modal-lg" tabindex="-1" id="icons-modal" role="dialog"
     aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title"> Fontes <i>(Duplo clique para selecionar)</i></h4>
            </div>
            <div class="modal-body">
                @include('Ironforge::backend.resources.icons')
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>


        </div>
    </div>
</div>

@section('script')
    <script>
        var modalBox = $('#icons-modal');
        var iconInput = $('.input-group-addon i');

        $(document).on('click', '.select-icon', function () {
            modalBox.modal('show');

        });

        $(document).on('dblclick', '.fa.fa-fw', function (e) {
            var classeFonte = $(this).attr('class');
            console.log(classeFonte)
            var inputText = $('#icon-select');

            iconInput.removeAttr('class', '');
            iconInput.attr('class', classeFonte);
            inputText.val('');
            inputText.val(classeFonte.replace('fa fa-fw', ''));

            modalBox.modal('hide');
        });

        $(document).on('keyup keypress blur change', '#icon-select', function () {
            var newinputIcon = $(this).val();

            iconInput.removeAttr('class', '');
            iconInput.attr('class', 'fa ' + newinputIcon);
        })
    </script>
@endsection