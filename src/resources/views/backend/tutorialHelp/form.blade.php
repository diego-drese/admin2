<div class="row">
    <div class="col-md-6 form-group {{$errors->has('title') ? 'has-error' : ''}} ">
        <label for="title">Titulo</label>
        <input type="text" class="form-control" value="{{old('title',$tutorial->exists() ? $tutorial->title : '')}}" name="title"
               id="title" placeholder="Titulo">
        @if($errors->has('title'))
            <span class="help-block">{{$errors->first('title')}}</span>
        @endif
    </div>

    <div class="col-md-12 form-group {{$errors->has('description') ? 'has-error' : ''}} ">
        <label for="title">Descrição</label>

        <textarea class="form-control" name="description" placeholder="Descrição" id="description">{{$tutorial->exists() ? $tutorial->description : ''}}</textarea>

        @if($errors->has('description'))
            <span class="help-block">{{$errors->first('description')}}</span>
        @endif
    </div>

    <div class="col-md-12 form-group">
            <button type="submit" class="btn btn-primary ">Salvar</button>
    </div>
</div>

@section('style_head')
    <link rel="stylesheet" href="{{mix('/vendor/negotiate/admin/css/form.css')}}">
    <link rel="stylesheet" href="{{mix('/vendor/negotiate/admin/css/select2.css')}}">
    <script type="text/javascript" src={{mix('/vendor/negotiate/admin/js/basic.js')}}></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.18.0/ui/trumbowyg.min.css">

@endsection
@section('script_footer_end')
    <script type="text/javascript" src={{mix('/vendor/negotiate/admin/js/select2.js')}}></script>
    <script type="text/javascript" src={{mix('/vendor/negotiate/admin/js/forms.js')}}></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.18.0/trumbowyg.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#description').trumbowyg();
            window.sessionStorage.removeItem('hub_clinic_help_data')
        });
    </script>
@endsection