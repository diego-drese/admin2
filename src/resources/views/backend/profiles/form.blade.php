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
            <option {{$profile->exists && in_array($resource->id,$profilesResources) ? 'selected="selected"' : '' }} value="{{$resource->id}}" >{{$resource->name}}</option>
        @endforeach
    </select>
</div>

<button type="submit" class="btn btn-success">Salvar</button>



@section('script')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#selectResource').select2();
        });
    </script>
@endsection

