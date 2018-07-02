<div class="form-group {{$errors->has('name') ? 'has-error' : ''}} ">
    <label for="title">Nome</label>
    <input type="text" class="form-control" value="{{old('name',$owner->exists() ? $owner->name : '')}}" name="name"
           id="name" placeholder="Nome">
    @if($errors->has('name'))
        <span class="help-block">{{$errors->first('name')}}</span>
    @endif
</div>

<div class="form-group {{$errors->has('desc') ? 'has-error' : ''}} ">
    <label for="title">Usuários</label><br>
    <select id="selectUsers" class="form-control" multiple="multiple"  name="users[]" placeholder="Usuário">
        @php $users =  Aggrega\Ironforge\UserIronForge::all('id','name') ;@endphp
        @foreach($users as $user)
            <option {{$owner->exists() && in_array($user->id,$userOwners) ? 'selected="selected"' : '' }} value="{{$user->id}}">{{$user->name}}</option>
        @endforeach
    </select>
</div>

<div class="form-group {{$errors->has('desc') ? 'has-error' : ''}} ">
    <label for="title">Descrição</label>
    <textarea class="form-control" id="editor" value="" name="desc" placeholder="Texto">{{old('desc',$owner->exists() ? $owner->desc : '')}}</textarea>

    @if($errors->has('desc'))
        <span class="help-block">{{$errors->first('desc')}}</span>
    @endif
</div>



<button type="submit" class="btn btn-success">Salvar</button>


@section('style')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css">
    <link rel="stylesheet" href="https://cdn.rawgit.com/Alex-D/Trumbowyg/v2.10.0/dist/ui/trumbowyg.min.css">
    <link rel="stylesheet" href="https://cdn.rawgit.com/Alex-D/Trumbowyg/v2.10.0/dist/plugins/colors/ui/trumbowyg.colors.css">
@endsection

@section('script')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js"></script>
    <script src="https://cdn.rawgit.com/Alex-D/Trumbowyg/v2.10.0/dist/trumbowyg.min.js"></script>
    <script src="https://cdn.rawgit.com/Alex-D/Trumbowyg/v2.10.0/dist/plugins/colors/trumbowyg.colors.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#selectUsers').select2();

            $('#editor').trumbowyg({
                semantic: true,
                btns: [
                    ['viewHTML'],
                    ['undo', 'redo'], // Only supported in Blink browsers
                    ['formatting'],
                    ['strong'],
                    ['superscript', 'subscript'],
                    ['foreColor'],
                    ['link'],
                    ['insertImage'],
                    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                    ['unorderedList', 'orderedList'],
                    ['removeformat'],
                    ['fullscreen']
                ]
            });

        });
    </script>
@endsection

