<div class="col-md-12">
    <div class="card">
        <div class="card-body wizard-content">
            <h6 class="card-subtitle"></h6>
                <div id="formWizard" class="tab-wizard wizard-circle">
                    <!-- Step 1 -->
                    <h6>Tipo</h6>
                    <section>
                        <div class="form-group">
                            <label for="type"> Tipo de mensagem : <span class="danger">*</span> </label>
                            <select class="custom-select form-control required" id="type" name="location" aria-invalid="true">
                                <option value="">Selecione</option>
                                <option value="sms">SMS</option>
                                <option value="email">Email</option>
                                <option value="system">System</option>
                            </select>
                            <label id="type-error" class="text-danger" for="type" style="display: none">Esse campo é obrigátório.</label>
                        </div>
                    </section>
                    <!-- Step 2 -->
                    <h6>Destinos</h6>
                    <section>
                        <div class="form-group">
                            <label for="clients"> Clientes: <span class="danger">*</span> </label>
                            <select class="custom-select form-control required" id="clients" name="clients" aria-invalid="true" multiple>
                                <option value="all">Todos</option>
                                @foreach($clients as $client)
                                    <option value="{{$client->id}}">{{$client->name}}</option>
                                @endforeach
                            </select>
                            <label id="clients-error" class="text-danger" for="type" style="display: none">Esse campo é obrigátório.</label>
                        </div>

                        <div class="form-group">
                            <label for="users"> Usuários: <span class="danger">*</span> </label>
                            <select class="custom-select form-control required" id="users" name="users" aria-invalid="true" disabled multiple>
                                <option value="all">Todos</option>
                            </select>
                            <label id="users-error" class="text-danger" for="type" style="display: none">Esse campo é obrigátório.</label>
                        </div>




                    </section>
                    <!-- Step 3 -->
                    <h6>Mensagem</h6>
                    <section>
                        <textarea id="summernote" name="editordata"></textarea>
                    </section>
                    <!-- Step 4 -->
                    <h6>Finalizar</h6>
                    <section>

                    </section>
                </div>
        </div>
    </div>




</div>
@section('style_head_start')

@endsection
@section('style_head')
    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/form.css')}}">
    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/select2.css')}}">
    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/jquerysteps.css')}}">

@endsection
@section('script_footer_end')
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/select2.js')}}></script>
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/jquerysteps.js')}}></script>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote-bs4.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote-bs4.js"></script>
    <script>
        var urlSearchUser       = '{{route('admin.client.search.user')}}';
        $(document).ready(function () {

            //$('.note-popover').hide();

            $("#formWizard").steps({
                headerTag: "h6",
                bodyTag: "section",
                transitionEffect: "fade",
                titleTemplate: '<span class="step">#index#</span> #title#',
                labels: {
                    @if($hasSave)
                        finish: "Salvar"
                    @endif

                },  onStepChanging: function(event, currentIndex, newIndex) {
                    console.log('Mudando', event, currentIndex, newIndex);
                    if(currentIndex===0 && newIndex===1){
                        /** Valida se o tipo esta seleciondo*/
                        if(!$('#type').val()){
                            $('#type-error').show();
                            return false;
                        }
                        $('#type-error').hide();
                    }

                    if(currentIndex===1 && newIndex===2){
                        /** Valida se o cliente esta selecionado*/
                        var error = null;
                        if(!$('#clients').val()){
                            $('#clients-error').show();
                            error= true;
                        }
                        if(!$('#users').val()){
                            $('#users-error').show();
                            error= true;
                        }
                        if(error){ return false }

                        $('#type-error').hide();

                        $('#summernote').summernote({
                            height: 350, // set editor height
                            minHeight: null, // set minimum height of editor
                            maxHeight: null, // set maximum height of editor
                            focus: true // set focus to editable area after initializing summernote
                        });
                    }
                    return true
                },
                onFinishing: function(event, currentIndex) {
                    console.log('Finalizando', event, currentIndex);
                    return true
                },
                onFinished: function(event, currentIndex) {
                    swal("Form Submitted!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.");
                }

            });

            $("#clients").select2({
                width: '100%',
            });

            $("select#users").select2({
                allowClear: true,
                width: '100%',
                ajax: {
                    url: urlSearchUser,
                    type:'post',
                    dataType: 'json',
                    delay: 250,
                    data: function (params) {
                        return {
                            query: params.term,
                            clients: $("#clients").val()
                        };
                    },
                    processResults: function (data) {
                        return {
                            results: data.options
                        };
                    },
                    error:function(){
                        toastr.error(erro.responseJSON.message, 'Erro', { timeOut: 3000 });
                    },
                    cache: true
                },
                placeholder: 'Busca de usuários',
                escapeMarkup: function (markup) { return markup; },
                minimumInputLength: 3,
                templateResult: formatUser,
                templateSelection: formatUserSelection
            });
            function formatUser (user) {
                if (user.loading) {
                    return user.name;
                }
                var markup = '<div class="select2-result-repository clearfix ">' +
                    '<div class="select2-result-repository__avatar float-left mr-2"><span class="round">UserImage</span></div>';
                markup += '<div class="select2-result-repository__statistics float-left  mr-2">' +
                    '<div class="select2-result-repository__forks"><i class="fa fa-info-circle"></i> ' + user.name + '</div>' +
                    '<div class="select2-result-repository__forks"><i class="fa fa-hourglass-start"></i> ' + user.email + '</div>' +
                    '</div>';
                markup +='</div>'
                return markup;
            }

            function formatUserSelection (user) {
                $('#user_name').val(user.text ? user.text : user.name);
                return user.text ? user.text : user.name;
            }
            
            $("#clients").change(function () {
                console.log($("#clients").val());
                if(this.value.length>0){
                    $("#users").prop('disabled', false)
                }else{
                    $("#users").prop('disabled', true)
                }
                $("#users").html('');
            });
        });
    </script>
@endsection