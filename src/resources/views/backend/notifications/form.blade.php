<div class="row">
<div class="col-md-12 form-group">
<label>Clique para adicionar todas as permissões:</label><br>

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
@endsection
@section('script_footer_end')
    <script type="text/javascript" src={{mix('/vendor/negotiate/admin/js/select2.js')}}></script>
    <script type="text/javascript" src={{mix('/vendor/negotiate/admin/js/form.js')}}></script>
    <script>
        $(document).ready(function () {

        });
    </script>
@endsection