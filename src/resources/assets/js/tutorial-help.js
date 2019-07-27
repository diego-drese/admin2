$(document).on('click', '.help-btn', function (event) {
    event.preventDefault();
    $('.popup-help').toggleClass('is-visible');
    $("i", this).toggleClass(" fa-times");
    $('.append-index-tutorial-help').empty();
    if($(this).children().hasClass('fa-times')) {
        fetchDataJsonAndSave();
    }
});

$(document).on('click','.btn-accordion-help', function () {
    setTimeout(() => {
        this.scrollIntoView({behavior: 'smooth'});
    },250)
});

function eachInBoxHelp(data){
    $('.append-index-tutorial-help').empty();
    setTimeout(function () {
        $.each(data, function (i, json) {
            var tpl =
                `<div id="t${i}">
                <h5 class="mb-0">
                    <button class="btn btn-link btn-accordion-help collapsed" data-toggle="collapse" data-target="#tc${i}" aria-expanded="true" aria-controls="collapse${i}">
                       ${json.title}
                        <i class="fa" aria-hidden="true"></i>
                    </button>
                </h5>
                </div>
                <div id="tc${i}" class="collapse" aria-labelledby="t${i}" data-parent="#accordion">
                    <div class="collapse-content">
                       ${json.description}
                    </div>
            </div>`;
            $('.append-index-tutorial-help').append(tpl);
        });
    },350)
}

function fetchDataJsonAndSave(){
    if(window.sessionStorage.getItem('hub_clinic_help_data')){
        var data = JSON.parse(window.sessionStorage.getItem('hub_clinic_help_data'));
        eachInBoxHelp(data)
    }else{
        fetchApiData();
    }
}

function saveSessionStorage(data){
    window.sessionStorage.setItem('hub_clinic_help_data', JSON.stringify(data))
}

function fetchApiData(){
    $.ajax({
        url: "/adm/tutorial-help-data",
        type: 'get',
        beforeSend: function () {
            $('.load-tutorial').fadeIn()
        }
    })
        .done(function (response) {
            $('.load-tutorial').fadeOut();
            if(response.data.length > 2) {
                saveSessionStorage(response.data);
            }
            setTimeout(function () {
                eachInBoxHelp(response.data)
            }, 500)
        })
        .fail(function (msg) {
            console.log(msg);
            $('.load-tutorial').fadeOut();
        });
}


$(document).mouseup(function (e){
    var el = $('.popup-help-container');
    if (!e.target.classList.contains('help-btn') && !e.target.classList.contains('fa') && !el.is(e.target) && el.has(e.target).length === 0) {
        $('.popup-help').removeClass('is-visible');
        $('a.help-btn > i').removeClass("fa-times");
    }
});


$(document).on('click', '.show-img', function () {
    var link =  $(this).data('link');
    $('img', this).attr('src', link);
    $('span', this).text('');
});