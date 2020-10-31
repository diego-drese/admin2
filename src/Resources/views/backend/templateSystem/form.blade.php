<ul class="nav nav-tabs" role="tablist" id="tabs-list-tpl">

    <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#tpl" role="tab"><span class="hidden-sm-up"><i
                        class="fa fa-code"></i></span> <span class="hidden-xs-down">Template</span></a></li>

    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#html" role="tab"><span class="hidden-sm-up"><i
                        class="fab fa-html5"></i></span> <span class="hidden-xs-down ">HTML</span></a></li>

    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#css" role="tab"><span
                    class="hidden-sm-up"><i class="fab fa-css3-alt"></i></span> <span class="hidden-xs-down ">CSS</span></a>
    </li>

    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#js" role="tab"><span
                    class="hidden-sm-up"><i class="fab fa-js"></i></span> <span
                    class="hidden-xs-down ">JS</span></a></li>
    @if($template->exists() && $template->active == 1)
        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#preview" role="tab"><span
                        class="hidden-sm-up"><i class="fab fa-site"></i></span> <span
                        class="hidden-xs-down ">Preview</span></a></li>
    @endif

    @if($template->exists() && $template->id)
        <div>
            <button type="button" id="submitForm" class="btn btn-primary ">Salvar</button>
        </div>
    @endif
    @if(!$template->id)
        <div>
            <button type="button" id="submitCreateTpl" class="btn btn-primary ">Criar Template</button>
        </div>
    @endif
</ul>
<div class="card">
    <div class="card-body ">

        <div class="tab-content tabcontent-border">
            <div class="tab-pane active" id="tpl" role="tabpanel">
                <div class="row">
                    <div class="col-md-6 form-group {{$errors->has('title') ? 'has-error' : ''}} ">
                        <label for="title">Titulo</label>
                        <input type="text" class="form-control"
                               value="{{old('title',$template->exists() ? $template->title : '')}}"
                               name="title"
                               id="title" placeholder="Titulo">
                        @if($errors->has('title'))
                            <span class="help-block">{{$errors->first('title')}}</span>
                        @endif
                    </div>

                    <div class="col-md-6 form-group {{$errors->has('slug') ? 'has-error' : ''}} ">
                        <label for="title">Slug (Path) Para assets/js/css</label>
                        <input class="form-control" name="slug" placeholder="Slug"
                               id="slug" value="{{$template->exists() ? $template->slug : ''}}"/>
                        @if($errors->has('slug'))
                            <span class="help-block">{{$errors->first('slug')}}</span>
                        @endif
                    </div>

                    <div class="col-md-12 form-group {{$errors->has('slug') ? 'has-error' : ''}} ">
                        <label for="title">Meta Description</label>
                        <input class="form-control" name="description" placeholder="Slug"
                               id="slug" value="{{$template->exists() ? $template->description : ''}}"/>
                        @if($errors->has('description'))
                            <span class="help-block">{{$errors->first('description')}}</span>
                        @endif
                    </div>

                    @if($template->exists() && $template->id)
                        <div class="col-md-12 form-group" id="updateStatus">
                            @if($template->active == 1)
                                <label class="text-success">Tema ativo</label> <br>
                                <button class="btn btn-danger" type="button" id="changeStatusBtn" data-status="0">
                                    Desativar
                                    tema
                                </button>
                            @endif
                            @if($template->active != 1)
                                <label class="text-danger">Tema Desativado</label> <br>
                                <button class="btn btn-success" type="button" id="changeStatusBtn" data-status="1">
                                    Ativar
                                    tema
                                </button>
                            @endif
                        </div>
                    @endif
                </div>
            </div>


            <div class="tab-pane" id="html" role="tabpanel" style="position: relative">
                <div class="row">
                    <div class="editor" id="htmledit">{{$template->exists() ? $template->html : ''}}</div>
                </div>
            </div>

            <div class="tab-pane" id="css" role="tabpanel" style="position: relative">
                <div class="row">
                    <div class="editor" id="cssedit">{{$template->exists() ? $template->style : ''}}</div>
                </div>
            </div>

            <div class="tab-pane" id="js" role="tabpanel" style="position: relative">
                <div class="row">
                    <div class="editor" id="jsedit">{{$template->exists() ? $template->js : ''}}</div>
                </div>
            </div>
            @if($template->exists() && $template->active == 1)
                <div class="tab-pane" id="preview" role="tabpanel" style="position: relative">
                    <div class="row">
                        <iframe id="previewframe" src="../../../" frameborder="0"></iframe>
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>
@section('style_head')
    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/form.css')}}">
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/basic.js')}}></script>
    <style>
        .editor {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            min-height: 65vh;
        }

        .card-body {
            min-height: 65vh;
        }

        .nav-tabs {
            display: flex;
            justify-content: flex-start;
        }

        .nav-tabs a {
            color: #a9a8b5;
            font-size: 1.3em;
        }

        .nav-tabs div {
            display: flex;
            flex: 1 1 auto;
            align-items: center;
            justify-content: flex-end;
        }

        iframe {
            width: 100%;
            min-height: 100vh;
        }
    </style>
@endsection
@section('script_footer_end')
    <script type="text/javascript" src=https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.5/ace.js></script>
    <script>
        var csrf_token = $('#form-template input[name="_token"]').val();

        $(document).ready(function () {
            setTimeout(() => {
                var editorHtml = ace.edit("htmledit");
                editorHtml.setTheme("ace/theme/monokai");
                editorHtml.session.setMode("ace/mode/html");

                var editorCss = ace.edit("cssedit");
                editorCss.setTheme("ace/theme/monokai");
                editorCss.session.setMode("ace/mode/css");

                var editorJs = ace.edit("jsedit");
                editorJs.setTheme("ace/theme/monokai");
                editorJs.session.setMode("ace/mode/javascript");
            }, 250);


            $(document).on("click", "#submitForm", function () {
                let h = ace.edit('htmledit');
                let c = ace.edit('cssedit');
                let j = ace.edit('jsedit');
                $.ajax({
                    url: {{$template->id}} +'/update',
                    type: "POST",
                    data: {
                        "_token": "{{ csrf_token() }}",
                        'title': $('#title').val(),
                        'slug': $('#slug').val(),
                        'html': h.getSession().getValue(),
                        'style': c.getSession().getValue(),
                        'js': j.getSession().getValue(),
                    },
                    success: function (e) {
                        var iframe = document.getElementById('previewframe');
                        if (iframe) {
                            var src = iframe.src;
                            iframe.src = src;
                        }
                        toastr.success('Template atualizado com sucesso', 'Sucesso!', {timeOut: 3000});
                    },
                    error: function (e) {
                        toastr.error(e.message, 'Erro', {timeOut: 3000});
                    }
                })
            });

            $(document).on("click", "#submitCreateTpl", function () {
                let h = ace.edit('htmledit');
                let c = ace.edit('cssedit');
                let j = ace.edit('jsedit');
                $.ajax({
                    url: 'create',
                    type: "POST",
                    data: {
                        "_token": "{{ csrf_token() }}",
                        'title': $('#title').val(),
                        'slug': $('#slug').val(),
                        'status': 0,
                        'html': h.getSession().getValue(),
                        'style': c.getSession().getValue(),
                        'js': j.getSession().getValue(),
                    },
                    success: function (data) {
                        toastr.success('Template Criado com sucesso', 'Sucesso!', {timeOut: 3000});
                        window.location.replace('/adm/template-system/' + data.tpl_id)
                    },
                    error: function (e) {
                        toastr.error(e.message, 'Erro', {timeOut: 3000});
                    }
                })
            });


            $(document).on('click', '#changeStatusBtn', function () {
                var status = $(this).data('status');

                $.ajax({
                    url: {{$template->id}} +'/change-status',
                    type: "POST",
                    data: {
                        'status': status,
                    },
                    success: function (e) {
                        toastr.success('Status atualizado com sucesso', 'Sucesso!', {timeOut: 3000});
                        return window.location.reload()
                        //$("#updateStatus").load(location.href + "#updateStatus");
                    },
                    error: function (e) {
                        toastr.error(e.message, 'Erro', {timeOut: 3000});
                    }
                })
            })
        });

    </script>
    {{--    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/forms.js')}}></script>--}}
    {{--    <script src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.18.0/trumbowyg.min.js"></script>--}}
    {{--    <script>--}}
    {{--        $(document).ready(function () {--}}
    {{--            $('#description').trumbowyg();--}}
    {{--            window.sessionStorage.removeItem('hub_clinic_help_data')--}}
    {{--        });--}}
    {{--    </script>--}}
@endsection
