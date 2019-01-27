@extends('Admin::layouts.quillpro.main')
@section('title', 'Owners')
@section('content')
    <div class="content-wrapper">
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="pull-left">
                                @if($hasAdd)
                                    <a href="{{route('admin.owner.create')}}">
                                        <a href="{{route('admin.owner.create')}}" class="btn btn-success">
                                            Add New <span class="fa fa-plus"></span>
                                        </a>
                                    </a>
                                @endif
                            </div>
                        </div>
                        <div class="box-body ">
                            <div class="table-responsive">
                                <table id="table_owners" class="table table-bordered table-striped dataTable table-hover"
                                       role="grid">
                                    <thead>
                                    <tr class="center">
                                        <td role="row">#</td>
                                        <td>Name</td>
                                        <td>Type</td>
                                        <td>Origins</td>
                                        <td>Actived Origins</td>
                                        <td>Description</td>
                                        <td>Users</td>
                                        <td>Actions</td>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    <div class="modal fade bs-modal-lg" id="modalActivedOrigins" tabindex="-1" role="basic" aria-hidden="true">
		<div class="modal-dialog modal-lg" style="width: 90%">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">List Details</h4>
				</div>
				<div class="modal-body"  id="agg-popup-data-table-div" style="height: 650px;overflow: auto;">
					<table class="table_pop table table-striped table-bordered table-hover dataTable no-footer" id="agg-main-data-table-popup-actived-origin">
						<thead>
							<tr>
								<th>ID</th>
								<th>NAME</th>
							</tr>
						</thead>
						<tbody></tbody>
					</table>
				{{--    <ul id="idList"></ul>--}}
				</div>
				<div class="modal-footer">
					<button type="button" class="btn dark btn-outline" data-dismiss="modal">Close</button>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal-dialog -->
	</div>
    
    
@endsection

@section('style_head_end')
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.16/datatables.min.css"/>
@endsection

@section('script_footer_end')
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.18/js/jquery.dataTables.min.js"></script>
    <script>
        var hasEdit = '{{$hasEdit}}';
        $(document).ready(function () {
            $('#table_owners').DataTable({
                serverSide: true,
                processing: true,
                autoWidth:false,
                ajax: '{{ route('admin.owner.index') }}',
                columns: [
                    {data: "id", 'name': 'id', searchable: false},
                    {data: "name", 'name': 'name'},
                    {data: "type", 'name': 'type'},
                    {
                        data: null, searchable: false, orderable: false, render: function (data) {
                        	if (data.origin_excluding_ids == true || data.origin_excluding_ids == 1){
                            	colors = 'style="background-color:#E00000 !important; color:white !important;"';
                            	text = 'title =\"Excluding\"';
                            } else {
                            	colors = '';
                            	text = '';
                            }
                            if (data !== null) {
                                var span = "";
                                var count = 1;
                                $.each(data.origin_id, function(k, v) {
                                    span += "<span "+colors+" "+text+" class=\"label label-info\">" + v.name + "</span>";
                                    if (count %4 == 0) {
                                        span += '<br/>';
                                    }
                                    count++;
                                });
                                return span;
                            } else {
                                return "";
                            }
                        }
                    },
                    { "data": "", "name": "btnViewOrigin", "searchable": false, "orderable": false,
    					"render": function(data, type, row) {
    						if (row.origin_excluding_ids == true || row.origin_excluding_ids == 1) {
    							return '<td><a style="cursor: pointer;" class="edit" data-toggle="modalActivedOrigins" onclick="viewActivedOrigins(\''+row.id+'\')"> Show Actived Origins </a></td>';
							} else {
								return '<td>Irrelevant</td>';
							}
    						
    					}
    				},
                    {data: "desc", 'name': 'desc'},
                    {
                        data: null, searchable: false, orderable: false, render: function (data) {

                        	if (data !== null) {
                                var span = "";
                                var count = 1;
                                $.each(data.user, function(k, v){
                                    span += "<span class=\"label label-info\">" + v.name + "</span>";

                                    if(count%4==0){
                                        span += '<br/>';
                                    }
                                    count++;
                                });
                                return span;
                            }else{
                                return "";
                            }
                        }
                    },
                    {
                        data: null, searchable: false, orderable: false, render: function (data) {
                            var edit_button = "";
                            if(hasEdit=='1'){
                                edit_button = '<a href="' + data.edit_url + '" class="btn btn-xs btn-default" role="button" aria-pressed="true">Edit</a>';
                            }
                            return edit_button
                        }
                    }
                ]
            });
        });

        /* START :: SHOW ACTIVED ORIGINS */
    	function viewActivedOrigins(id) {

			table_popup_actived.clear();
			table_popup_actived.draw();

			$.ajax({
    			url: 'show-actived-origin',
    			type: 'POST',
    			dataType: 'json',
    			async: false,
    			data: {
    				'_token': $("input[name='_token']").val(),
    				'id'    : id,
    			},
    			success: function (data) {
    				table_popup_actived.clear();
    				if (data[0]) {
    					var rowActived = [];
						for (i = 0; data.length > i; i++) {
							var obj = {
								id:   data[i]['id'],
								name: data[i]['name']
							};
							rowActived[i] = obj;
						}
						table_popup_actived.rows.add(rowActived).draw();
						$('#modal').modal('hide');
    					$('#modalActivedOrigins').modal('show');
    				} else {
    					alert('Nenhum encontrado')
    				}
    			},
    			error: function () {
    				alert("Erro ao carregar");
    			}
    		});
        }
    	/* START :: SHOW ACTIVED ORIGINS */
    	
    	/* INI :: POPUP DE URL RESPONSE */
    	var table_popup_actived = $('#agg-main-data-table-popup-actived-origin').DataTable({
    		searching: false,
    		paging:    false,
    		order: [[0, "asc"]],
    		columns: [
    			{ "data": "id",   "name" : "id",   "searchable": false, "orderable": false},
    			{ "data": "name", "name" : "name", "searchable": false, "orderable": false},
    		],
    		autoWidth: false,
    		buttons: [
    			{extend: 'print', className: 'btn dark btn-outline mr-2 dt-button'},
    			{extend: 'csv', className: 'btn purple btn-outline '},
    			{extend: 'excel', className: 'btn blue  mr-2 btn-outline ', exportOptions: {
    				columns: ':visible',
    				format: {
    					body: function (data, row, column, node) {
    						data = $('<p>' + data + '</p>').text();
    						var dataNew = data.replace(/\./g,"").replace(",",".").trim();
    						return $.isNumeric(dataNew) ? dataNew : data;
    					}
    				}
    			}},
    		],
    		fnDrawCallback: function() {
                loadingData = false;
            },
    		"dom": "<'row' <'col-md-12'B>> <'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r> <'table-scrollable't> <'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
    	});
    	/* END :: POPUP URL RESPONSE */

    </script>
@endsection