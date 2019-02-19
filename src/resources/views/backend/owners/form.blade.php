<div class="col-md-6 form-group {{$errors->has('name') ? 'has-error' : ''}} ">
    <label for="title">Name</label>
    <input type="text" class="form-control" value="{{old('name',$owner->exists() ? $owner->name : '')}}" name="name" id="name" placeholder="Name">
    @if($errors->has('name'))
        <span class="help-block">{{$errors->first('name')}}</span>
    @endif
</div>

<div class="col-md-6 form-group {{$errors->has('type') ? 'has-error' : ''}} ">
    <label for="title">Type</label>
    <select id="selectTypes" class="form-control"  name="type" placeholder="Users">
        <option value="">Select</option>
        @php $types =  \Illuminate\Support\Facades\Config::get('admin.owner_type') ;@endphp
        @foreach($types as $key=>$type)
            <option {{$owner->exists() && $owner->type==$key ? 'selected="selected"' : '' }} value="{{$key}}">{{$key}}</option>
        @endforeach
    </select>
    @if($errors->has('type'))
        <span class="help-block">{{$errors->first('type')}}</span>
    @endif
</div>

<div class="col-md-6 form-group {{$errors->has('origin_id') ? 'has-error' : ''}} ">
    <label for="title">Origin Id</label>
    <select multiple id="selectOrigin" name="origin_id[]" placeholder="Origin" class=" form-control  select2" data-style="btn-primary">
		@php if (count($origin_ids)) { @endphp
        	 @foreach($origin_ids as $ko => $origin)
        		<option {{ !empty($origin) ? 'selected="selected"' : '' }} value="{{$ko}}">{{$origin}}</option>		
        	 @endforeach
        @php } @endphp
    </select>
    <label class="mt-checkbox tooltips" data-toggle="tooltip" title="Check here to exclude your search options." data-container="body">
        <input type="checkbox" id="cbxCselectOriginNot" name="origin_excluding_ids" value="1"  {{ ($owner->origin_excluding_ids == true) ? 'checked' : '' }}>
        <span></span>
    </label>
    @if($errors->has('origin_id'))
        <span class="help-block">{{$errors->first('origin_id')}}</span>
    @endif
</div>

<div class="col-md-6 form-group {{$errors->has('desc') ? 'has-error' : ''}} ">
    <label for="title">Users</label><br>
    <select id="selectUsers" class="form-control" multiple="multiple"  name="users[]" placeholder="Users">
        @php $users =  Negotiate\Admin\User::all('id','name') ;@endphp
        @foreach($users as $user)
            <option {{$owner->exists() && in_array($user->id,$userOwners) ? 'selected="selected"' : '' }} value="{{$user->id}}">{{$user->name}}</option>
        @endforeach
    </select>
</div>

<div class="col-md-12 form-group {{$errors->has('desc') ? 'has-error' : ''}} ">
    <label for="title">Description</label>
    <textarea class="form-control" id="editor" value="" name="desc" placeholder="Description">{{old('desc',$owner->exists() ? $owner->desc : '')}}</textarea>

    @if($errors->has('desc'))
        <span class="help-block">{{$errors->first('desc')}}</span>
    @endif
</div>

<div class="col-md-12 form-group">
    <button type="submit" class="btn btn-success btn-save">Save</button>
</div>

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
        	var id = '{{$id}}';
            $("form").submit(function() {
                if ($("#selectOrigin").val() == "all") {
                   if(confirm("Are you sure you want to allow access to all records?")){
                       return true;
                   }
                   return false;
                }
            });

            $('#selectUsers, #selectTypes, #selectOrigin').select2();

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

            var selectTypes = $("#selectTypes").val();
            if ("" != selectTypes) {
                //console.warn(id);
            	$(window).bind("load", function() { 
                    url = '{{ route('admin.owner.create') }}';
                    $.ajax({
                        url: url,
                        type: 'GET',
                        data: {'owner_type':$("#selectTypes").val(), 'owner_edit': id},
                        dataType: 'json',
                        success: function (json) {
                            $('#selectOrigin').append($('<option>').text('All').attr('value', 'all'));
                            $.each(json, function (i, obj) {
                                $('#selectOrigin').append($('<option>').text(obj.name).attr('value', obj.id+'#'+obj.name));
                            });
                        }
                    });
               });
            }
            
            $("#selectTypes").change(function () {
            	if ("" != $("#selectTypes").val()) {
            		url = '{{ route('admin.owner.create') }}';
                    $.ajax({
                        url: url,
                        type: 'GET',
                        data: {'owner_type':this.value},
                        dataType: 'json',
                        success: function (json) {
                            $('#selectOrigin').empty();
                            $('#selectOrigin').append($('<option>').text('All').attr('value', 'all'));
                            $.each(json, function (i, obj) {
                                $('#selectOrigin').append($('<option>').text(obj.name).attr('value', obj.id+'#'+obj.name));
                            });
                        }
                    });
                } else {
                	$('#selectOrigin').empty();
                }
            });

        });
    </script>
@endsection