<div class="row ">
    @if ($post->exists() && $post->image)
        <div class="col-md-12 image_post">
            <img src="{{$post->image}}" alt="">
        </div>
        @else
        <div class="_form col-md-12"></div>
    @endif



    <div class="col-md-4 form-group {{$errors->has('title') ? 'has-error' : ''}} ">
        <label for="title">Titulo</label>
        <input type="text" class="form-control" value="{{old('title',$post->exists() ? $post->title : '')}}"
               name="title"
               id="title" placeholder="Titulo">
        @if($errors->has('title'))
            <span class="help-block">{{$errors->first('title')}}</span>
        @endif
    </div>

    <div class="col-md-4 form-group {{$errors->has('slug') ? 'has-error' : ''}}">
        <label for="slug">Url</label>
        <input type="text" value="{{old('slug',$post->exists() ? $post->slug : '')}}" name="slug" class="form-control" id="slug" placeholder="Url">
        @if($errors->has('slug'))
            <span class="help-block">{{$errors->first('slug')}}</span>
        @endif
    </div>


    <div class="col-md-4 form-group {{$errors->has('slug') ? 'has-error' : ''}}">
        <label for="category">Categoria</label>
        <select class="category-select form-control" name="category">
            @foreach($category as $cat)
                <option value="{{$cat}}" {{$post->exists() ? $post->category['slug'] == $cat->slug ? 'selected' : '' : null}}>{{$cat->title}}</option>
            @endforeach
        </select>
        @if($errors->has('category'))
            <span class="help-block">{{$errors->first('category')}}</span>
        @endif
    </div>

    <div class="col-md-7 form-group {{$errors->has('tags') ? 'has-error' : ''}}">
        <label for="slug">tags</label>
        <select class="form-control tags" name="tags[]"  data-tags="true" multiple="multiple" data-width="100%">
            @if ($post->exists() && $post->tags)
                @foreach( $post->tags as $tag)
                    <option selected value="{{$tag}}">{{$tag}}</option>
                @endforeach
            @endif
        </select>
        @if($errors->has('tags'))
            <span class="help-block">{{$errors->first('tags')}}</span>
        @endif
    </div>

    <div class="col-md-3 form-group {{$errors->has('image') ? 'has-error' : ''}}">
        <label for="image">Imagem</label>
        <input type="text" value="{{old('image',$post->exists() ? $post->image : '')}}" name="image" class="form-control" id="image" placeholder="image">
        @if($errors->has('image'))
            <span class="help-block">{{$errors->first('image')}}</span>
        @endif
    </div>

    <div class="col-md-2 form-group {{$errors->has('status') ? 'has-error' : ''}}">
        <label for="status">Status do Post</label>
        <select class="form-control" name="status">
                <option value="0" {{$post->exists() ? $post->status == 0 ? 'selected' : '' : null}}>Rascunho</option>
                <option value="1" {{$post->exists() ? $post->status == 1 ? 'selected' : '' : null}}>Ativo</option>
        </select>
        @if($errors->has('status'))
            <span class="help-block">{{$errors->first('status')}}</span>
        @endif
    </div>

    <div class="col-md-12 form-group {{$errors->has('resume') ? 'has-error' : ''}}">
        <label for="resume">Resumo do Post</label>
        <textarea class="form-control" name="resume" placeholder="Faça um resumo da história (ajuda no SEO)"
                  id="resume">{{old('resume',$post->exists() ? $post->resume : '')}}</textarea>
        @if($errors->has('resume'))
            <span class="help-block">{{$errors->first('resume')}}</span>
        @endif
    </div>




    <div class="col-md-12 form-group {{$errors->has('description') ? 'has-error' : ''}} ">
        <textarea class="form-control" name="description" placeholder="Descrição"
                  id="description">{{old('description',$post->exists() ? $post->description : '')}}
        </textarea>

        @if($errors->has('description'))
            <span class="help-block">{{$errors->first('description')}}</span>
        @endif
    </div>



    <div class="col-md-12 form-group">
        <button type="submit" class="btn btn-primary ">Salvar</button>
    </div>
</div>


@section('style_head')

    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/form.css')}}">
    <link rel="stylesheet" href="{{mix('/vendor/oka6/admin/css/select2.css')}}">
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/basic.js')}}></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.18.0/ui/trumbowyg.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.css">
    <style>
        .showSweetAlert  h2{
            font-size: 2em!important;
            padding: 8px;
        }
        .select2-link{
            cursor: pointer;
            padding: 10px;
            background: rgba(148, 143, 236, 0.05);
            font-weight: bold;
        }

        ._form{
            height: 0px;
            transition: height 0.3s;
        }

        .image_post{
            text-align: center;
            transition: height 2s;
        }

        .image_post img{
            width: 352px;
            margin-bottom: 25px;
            border-radius: 6px;
            max-height: 228px;
            object-fit: cover;
        }

    </style>
@endsection
@section('script_footer_end')
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/select2.js')}}></script>
    <script type="text/javascript" src={{mix('/vendor/oka6/admin/js/forms.js')}}></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.18.0/trumbowyg.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#description').trumbowyg();


            $('#title').on('keyup keypress blur change', function () {
                var title = this.value.toLowerCase().trim(),
                    slugInput = $('#slug'),
                    theSlug = title.replace(/&/g, '-e-')
                        .replace(/[^a-z0-9-]+/g, '-')
                        .replace(/\-\-+/g, '-')
                        .replace(/^-+|-+$/g, '')
                ;
                slugInput.val(theSlug);
            });

            $('#image').on('change', function () {
                $('._form').empty();
                var url = $('#image').val();
                if(url.length){
                    $('._form').append(`<div class="col-md-12 image_post">
                            <img src="${url}" alt="">
                        </div>`
                    ).css('height', '250')
                }else{
                    $('._form').empty().css('height', '0')
                }

            });

            //
            $('.tags').select2({
                tags: true,
                tokenSeparators: [','],
                createSearchChoice: function(term, data) {
                    if ($(data).filter(function() {
                        return this.text.localeCompare(term) === 0;
                    }).length === 0) {
                        return {
                            id: term,
                            text: term
                        };
                    }
                },
                multiple: true,
                ajax: {
                    url: '/adm/blog/tags-blog',
                    type: 'post',
                    dataType: "json",
                    data: function(term, page) {
                        console.log(term)
                        return {
                            term
                        };
                    },
                    processResults: function(data, page) {
                        console.log(data)
                        return {
                            results: $.map(data, function (item) {
                                console.log(item)
                                return {
                                    text: item.tag,
                                    id: item.tag
                                }
                            })
                            //results: data
                        };
                    }
                }
            });

            $('.category-select').select2().on('select2:open', function () {
                var a = $(this).data('select2');
                if (!$('.select2-link').length) {
                    a.$results.parents('.select2-results')
                        .append('<div class="select2-link" style="padding: 10px"><a>Adicionar Nova categoria</a></div>')
                        .on('click', function (b) {
                            a.trigger('close');
                            createCategory();
                        });
                }
            });


            function createCategory() {
                swal({
                    title: 'Nova Categoria',
                    text: "",
                    type: "input",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    inputPlaceholder: "Nome da categoria"
                }, function (inputValue) {
                   // if (inputValue === false) return false;
                    if (inputValue == "" || inputValue === false) {
                        swal.showInputError("You need to write something!");
                        return false
                    }else{
                        addCategoryFetch(inputValue)
                    }
                });
            }



            function addCategoryFetch(catName) {

                var slug = catName.toLowerCase().trim().replace(/&/g, '-e-')
                            .replace(/[^a-z0-9-]+/g, '-')
                            .replace(/\-\-+/g, '-')
                            .replace(/^-+|-+$/g, '');
                $.ajax({
                    url: "/adm/blog/category-add",
                    type: "POST",
                    beforeSend: function() {
                        $('.lead.text-muted').append(`<div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>`)
                    },
                    data: {
                        title: catName,
                        slug,
                    },
                    success: function(res) {
                        var data = res.data;
                        var select = $('.category-select');
                        if(select.find("option[value='" + data._id + "']").length) {
                            $('.category-select').val(data._id).trigger('change');
                        }else{
                            console.log(data)
                            var newOption = new Option(data.title, JSON.stringify(data), false, false);
                            select.append(newOption).trigger('change');
                            select.val(JSON.stringify(data)).trigger('change');
                        }

                        swal("Sucesso!", "Categoria criada com sucesso" , "success");
                    },
                    error: function(e) {
                        console.log(e)
                    }
                })
            }
        });
    </script>
@endsection
