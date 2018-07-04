<div class="form-group {{$errors->has('name') ? 'has-error' : ''}} ">
    <label for="title">Nome</label>
    <input type="text" class="form-control" value="{{old('name',$profile->exists() ? $profile->name : '')}}" name="name"
           id="name" placeholder="Nome">
    @if($errors->has('name'))
        <span class="help-block">{{$errors->first('name')}}</span>
    @endif
</div>

<div class="form-group {{$errors->has('resources') ? 'has-error' : ''}} ">
    <label for="title">Recursos</label>
    <select class="form-control " id="selectResource" name="resources[]" multiple="multiple">
        @foreach($resources as $resource)
            @php $nameRoute = explode('.', $resource->route_name) @endphp
            <option class="profilesSelect" data-route="{{$nameRoute[0]}}" {{$profile->exists && in_array($resource->id,$profilesResources) ? 'selected="selected"' : '' }} value="{{$resource->id}}" >{{$resource->name}}</option>
        @endforeach
    </select>
</div>

<label>Clique para conceder todas as permissões:</label><br>
@foreach($resourcesMenu as $resource)
    @php $nameRoute = explode('.', $resource->route_name) @endphp
    <span class="btn btn-xs btn-primary margin-top-small btnFullPermissions" id="{{$nameRoute[0]}}">
            {{ucfirst($nameRoute[0])}}
        </span>
@endforeach
<br><br>
<button type="submit" class="btn btn-success ">Salvar</button>

@section('script')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#selectResource').select2();
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