<div class="row">
<div class="col-md-6 form-group {{$errors->has('name') ? 'has-error' : ''}} ">
    <label for="title">Nome</label>
    <input type="text" class="form-control" value="{{old('name',$profile->exists() ? $profile->name : '')}}" name="name"
           id="name" placeholder="Name">
    @if($errors->has('name'))
        <span class="help-block">{{$errors->first('name')}}</span>
    @endif
</div>

<div class="col-md-6 form-group {{$errors->has('type_user') ? 'has-error' : ''}} ">
    <label for="title">Tipo de pefil</label>
    <select class="form-control " id="selectTypeUser" name="type">
        <option>Selecione</option>
        @foreach($negotiateProfileTypes as $key=>$type_user)
            <option {{isset($profile->exists) && $type_user==$profile->type ? 'selected="selected"' : '' }} value="{{$type_user}}">{{$type_user}}</option>
        @endforeach
    </select>
</div>

<div class="col-md-12 form-group {{$errors->has('resources') ? 'has-error' : ''}} ">
    <label for="title">Recursos</label>
    <select class="form-control " id="selectResource" name="resources[]" multiple="multiple">
        <option>Selecione</option>
        @foreach($resources as $resource)
            @php $nameRoute = explode('.', $resource->route_name) @endphp
            <option class="profilesSelect" data-route="{{$nameRoute[0]}}" {{$profile->exists && in_array($resource->id,$profilesResources) ? 'selected="selected"' : '' }} value="{{$resource->id}}" >{{$resource->name}}</option>
        @endforeach
    </select>
    <br style="clear: both;float:left;width: 100%"/>
</div>
</div>
<div class="row">
<div class="col-md-12 form-group">
<label>Clique para adicionar todas as permissões:</label><br>
@foreach($resourcesMenu as $resource)
    @php $nameRoute = explode('.', $resource->route_name) @endphp
    @if(isset($nameRoute[1]))
        <span class="mt-5 btn btn-xs btn-primary btnFullPermissions" id="{{$nameRoute[0]}}">
                {{ucfirst($nameRoute[0])." ".ucfirst($nameRoute[1])}}
        </span>
    @endif
@endforeach
</div>
</div>
<div class="col-md-12 form-group">
    @if($hasSave)
    <button style="float: right;" type="submit" class="btn btn-success">Salvar</button>
@endif
</div>
@section('style_head')
    <link rel="stylesheet" href="{{mix('/vendor/negotiate/admin/css/form.css')}}">
    <link rel="stylesheet" href="{{mix('/vendor/negotiate/admin/css/select2.css')}}">
    <style>
        .select2-container--classic .select2-selection--single, .select2-container--default .select2-selection--multiple, .select2-container--default .select2-selection--single, .select2-container--default .select2-selection--single .select2-selection__arrow, .select2-container--default .select2-selection--single .select2-selection__rendered {
            height: auto;
        }
    </style>
@endsection
@section('script_footer_end')
    <script type="text/javascript" src={{mix('/vendor/negotiate/admin/js/select2.js')}}></script>
    <script>
        $(document).ready(function () {
            $('#selectResource').select2({ width: '100%'  });
            $(document).on('click', '.btnFullPermissions', function () {
                var id = $(this).attr("id");
                selectFullProfiles(id)
            });
            function selectFullProfiles(idMath) {
                var list = document.querySelectorAll('.profilesSelect');
                list.forEach(item => {
                    var route = item.dataset.route;
                    if(route == idMath){
                        item.selected = true;
                        $('#selectResource').trigger('change');
                    }
                });
            }
        });
    </script>
@endsection