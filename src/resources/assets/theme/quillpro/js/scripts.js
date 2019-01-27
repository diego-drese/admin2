"use strict";
class NegotiateController {

    constructor(){
        this.loader(false);
    }
    loader(status) {
        let loaderAgg = $('#aggloader');
        if (status) {
            loaderAgg.css('opacity', '1');
            loaderAgg.css('transition', '1ms')
        } else {
            loaderAgg.css('opacity', '0');
            loaderAgg.css('transition', '1s')
        }
    }
};

$(document).ready(function() {


    /* Defaults */
    // Timing
    var dynamicDuration = 300;
    var dynamicDelay = 0;

    // Animate.css Class
    var animateCSSClass = 'fadeInUp';


    /* Window Resize Timer Function */
    var uniqueTimeStamp = new Date().getTime();

    var waitForFinalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = 'unique id';
            }
            if (timers[uniqueId]) {
                clearTimeout (timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();

    var openMenuActive = (function (){
        let activeMenuId = "#"+$('.activeMenu').prop('id');
        let count = 0;
        if(activeMenuId){
            while($(activeMenuId).parents('.treeview').length){
                let parent = $(activeMenuId).parents('.treeview');
                let ul = parent.find('ul:first');
                ul.css('display','block');
                let li = ul.closest(".treeview");
                li.addClass('open');

                activeMenuId = parent.prop('id');
                count++;
                console.log(count);
                if(count>50){
                    break;
                }
            }
        }
    })();

    /* Misc Chunks of Code */
    function qp_required_misc(){

        /* Dropdown Menu - Submenu */
        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }

            var subMenu = $(this).next(".dropdown-menu");
            subMenu.toggleClass('show');
            subMenu.prev().toggleClass('show');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show').removeClass("show");
            });

            return false;
        });

        /* Dropdown Menu - Prvent Close On Click */
        $('.dropdown-no-close').on('click', function(e){
            $(this).siblings('.dropdown-menu').toggleClass('show');
        });
        $('body').on('click', function (e){
            if (!$('.dropdown-no-close').is(e.target) && $('.dropdown-no-close').has(e.target).length === 0 && $('.show').has(e.target).length === 0){
                $('.dropdown-no-close').removeClass('show');
                $('.dropdown-no-close').siblings('.dropdown-menu').removeClass('show');
            }
        });

        /* Buttons */
        // Gradient Buttons
        $('.btn-gradient').each(function(){
            var thisBtn = $(this);
            var btnContent = thisBtn.html();
            var btnContentNew = '<span class="gradient">' + btnContent + '</span>';

            thisBtn.html(btnContentNew);
        });


        /* Cards */
        // Custom Scrollbar
        qp_add_scrollbar('.card-media-list', 'dark');
        // qp_add_scrollbar('.card-img-overlay', 'dark');

        // Create scroll where needed
        $('.has-scroll').each(function(){
            qp_add_scrollbar($(this), 'dark');
        });

        // Fix card-header button position when necessary
        $('.card-header').each(function(){
            var thisHeader = $(this);

            if(thisHeader.height() > 40){
                thisHeader.find('.header-btn-block').css({'top' : '31px'});
            }
        });


        /* Sidebar */
        // Menu Controls
        var parentLink = 'a.nav-parent';
        if($(parentLink).length){
            $('a.nav-parent').on('click', function(e){

                var clickedLink = $(this);

                if(clickedLink.closest('li').hasClass('open')){
                    clickedLink.closest('li').removeClass('open');
                    clickedLink.siblings('ul.nav').velocity('slideUp', {
                        easing: 'easeOutCubic',
                        duration: dynamicDuration,
                        delay: dynamicDelay,
                        complete:
                            function(elements){
                                // callback here
                                // Close all open children sub-menus
                                clickedLink.closest('li').find('li').removeClass('open');
                                clickedLink.closest('li').find('ul.nav').removeAttr('style');
                            }
                    });
                }else{
                    // Opens its sub-menu
                    clickedLink.closest('li').addClass('open');
                    clickedLink.siblings('ul.nav').velocity('slideDown', {
                        easing: 'easeOutCubic',
                        duration: dynamicDuration,
                        delay: dynamicDelay,
                        complete:
                            function(elements){
                                // callback here
                            }
                    });

                    // Closes the sub-menus' and children sub-menus of other menu items in the same ul parent
                    clickedLink.closest('li').siblings('li.nav-item.open').find('ul.nav').velocity('slideUp', {
                        easing: 'easeOutCubic',
                        duration: dynamicDuration,
                        delay: dynamicDelay,
                        complete:
                            function(elements){
                                // callback here
                                $(this).removeAttr('style');
                                $(this).closest('li').removeClass('open');
                            }
                    });

                    // Closes the sub-menus' and children sub-menus of other menu items in other ul parents
                    clickedLink.closest('ul').siblings('ul.nav').find('ul.nav').velocity('slideUp', {
                        easing: 'easeOutCubic',
                        duration: dynamicDuration,
                        delay: dynamicDelay,
                        complete:
                            function(elements){
                                // callback here
                                $(this).closest('li').removeClass('open');
                                $(this).closest('li').removeClass('open');
                            }
                    });
                }

                e.preventDefault();
            });
        }

        // Menu Scroll
        var sidebarNav = 'nav.sidebar';
        if($(sidebarNav).length){
            var windowHeight = $(window).height();

            // Set Height of the Left Column
            $(sidebarNav).height(windowHeight);

            // Destroy old scrollbar if present
            $(sidebarNav).mCustomScrollbar("destroy");

            qp_add_scrollbar('nav.sidebar', 'light');

            // Add Hamburger Menu to .sidebar
            $('.sidebar > .mCustomScrollBox').before('<button class="hamburger hamburger--slider" type="button" data-target=".sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle Sidebar"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button>');

            // On window resize
            $(window).resize(function () {
                waitForFinalEvent(function(){
                    var windowHeight = $(window).height();

                    // Set Height of the Left Column
                    $(sidebarNav).height(windowHeight);

                    // Destroy old scrollbar if present
                    $(sidebarNav).mCustomScrollbar("destroy");

                    // Destroy Hamburger
                    $('.sidebar .hamburger').remove();

                    // Add new scrollbar
                    qp_add_scrollbar('nav.sidebar', 'light');

                    // Add Hamburger Menu to .sidebar
                    $('.sidebar > .mCustomScrollBox').before('<button class="hamburger hamburger--slider" type="button" data-target=".sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle Sidebar"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button>');

                }, 500, 'RandomUniqueString');
            });
        }

        // Hamburger Menu Controls
        $(document).on('click', 'button.hamburger', function(e){
            var mainNavbarHeight = $('.navbar-sidebar-horizontal').outerHeight();

            $('.sidebar-horizontal.fixed-top').css({'top' : mainNavbarHeight + 'px'});
            qp_add_scrollbar('.sidebar-horizontal.fixed-top', 'light');

            if($('.hamburger').hasClass('is-active')){
                $('.hamburger').removeClass('is-active');
                $('#sidebar').removeClass('open');
                $('.sidebar-horizontal').slideUp().promise().always(function(){
                    $(this).removeAttr('style');
                });
            }else{
                $('.hamburger').addClass('is-active');
                $('#sidebar').addClass('open');
                $('.sidebar-horizontal').slideDown();
            }
            e.preventDefault();
        });


        /* Forms */
        // Input Group Highlight Color - Focus/Blur
        $('.input-group .form-control').focus(function(){
            $(this).closest('.input-group').addClass('focus');
        });

        $('.input-group .form-control').blur(function(){
            $(this).closest('.input-group').removeClass('focus');
        });


        /* Tabs & Accordions - Nav Links Dropdown */
        // Fix dropdown menu selection on tabs
        if($('.nav-pills').length || $('.nav-tabs').length){
            $('.nav-pills, .nav-tabs').each(function(){
                var navContainer = $(this);
                navContainer.find('.dropdown-menu .dropdown-item').on('click', function(){
                    $(this).siblings().removeClass('show').removeClass('active');
                });
            });
        }


        /* Popover */
        $('[data-toggle="popover"]').popover();


        /* Enable Tooltips */
        $('[data-toggle="tooltip"]').tooltip();


        /* Auto-Links */
        // Allows you to make any element clickable without the affecting the style of the page
        $('[data-qp-link]').on('click', function(e){
            window.location = $(this).data('qp-link');
            e.preventDefault();
        });


        /* Signin, Signup, Forgotten Password */
        // Auto-adjust page height
        var signInLeftColumn = '.signin-left-column';
        if($(signInLeftColumn).length){
            var windowHeight = $(window).height();

            if(windowHeight > 630){
                $(signInLeftColumn).css({'height' : windowHeight + 'px'});
            }

            // On window resize
            $(window).resize(function () {
                waitForFinalEvent(function(){

                    var windowHeight = $(window).height();

                    if(windowHeight > 630){
                        $(signInLeftColumn).css({'height' : windowHeight + 'px'});
                    }

                }, 500, 'randomStringForSignupPage');
            });
        }

        // Add background image to the Right column
        var signInRightColumn = '.signin-right-column';
        if($(signInRightColumn).length){

            // Background Image
            if((typeof($(signInRightColumn).data('qp-bg-image')) !== 'undefined') && ($(signInRightColumn).data('qp-bg-image') != '')){
                var backgroundImage = $(signInRightColumn).data('qp-bg-image');

                $(signInRightColumn).css({'background-image' : 'url(assets/img/' + backgroundImage + ')'});
            }
        }


        /* CKEditor */
        var placeholder = '.load-ckeditor';
        if($(placeholder).length){
            $(placeholder).ckeditor();
        }


        /* Prettify */
        if($('.prettyprint').length){
            prettyPrint();
        }


        /* Color Controls */
        // Radio Select
        var customColorControl = $('.custom-color-control.custom-control.custom-radio');
        if(customColorControl.length){

            var count = 1;

            customColorControl.each(function(){
                var thisObj = $(this);
                var color = thisObj.data('qp-color');

                thisObj.on('click', function(){
                    $(this).find('.custom-control-input').prop('checked', true);
                });

                // thisObj.find('.custom-control-label').css({'background-color' : color});
                thisObj.addClass('custom-color-control-' + count);

                $('<style>.custom-color-control.custom-radio.custom-color-control-' + count + ' .custom-control-label:before{background-color: ' + color + ';}</style>').appendTo('head');

                count++;
            });
        }


        /* Animate on load */
        qp_animate_css();

        /* Misc */
        // Dropdown Menu - Make full right-column width
        if($('.dropdown-menu-fullscreen').length){
            var rightColumnWidth = $('.right-column').width();

            console.log(rightColumnWidth);

            // Resize the .dropdown-menu-fullscreen
            $('.dropdown-menu-fullscreen').css({'width' : rightColumnWidth + 'px'});

            // Navbar Search - Works for all .nav-items for .dropdown-menu-fullscreen
            $('.dropdown-menu-fullscreen').closest('.nav-item').css({'position' : 'static'});

            // On window resize
            $(window).resize(function () {
                waitForFinalEvent(function(){
                    var rightColumnWidth = $('.right-column').width();

                    // Resize the .dropdown-menu-fullscreen
                    $('.dropdown-menu-fullscreen').css({'width' : rightColumnWidth + 'px'});

                }, 500, uniqueTimeStamp);
            });
        }


        // Add "Sub-menu" Indicator to supmenus of dropdowns (Helps with readability)
        $('.dropdown-menu .dropdown-menu').each(function(){
            var subMenu = $(this);

            subMenu.prepend('<li class="dropdown-header">SUBMENU</li>');
        });


        // Unknown
        $('[data-toggle=offcanvas]').click(function() {
            $('.row-offcanvas').toggleClass('active');
        });

        // Removes MDB Waves Effect from respective items
        $('.no-waves-effect').removeClass('waves-effect');

        // Add dark waves to navbar
        // $('.navbar-nav > .nav-item > .nav-link').removeClass('waves-light').addClass('waves-dark');

    }

    /* Animate.css - Animation/Transition */
    function qp_animate_css(){

        // If the body class does not prevent animation, then animation occurs.
        // This overrides all animation calls
        if(!$('body').hasClass('no-animation')){

            $('[data-qp-animate-type]').each(function(){

                var mainElement = $(this);

                if(mainElement.visible(true) || mainElement.closest('nav').hasClass('sidebar')){
                    load_animation(mainElement);
                }

                $(window).scroll(function() {
                    if(mainElement.visible(true)){
                        load_animation(mainElement);
                    }
                });

                function load_animation(mainElement){

                    var animationName = '';

                    if(typeof(mainElement.data('qp-animate-type')) === 'undefined'){
                        var animationName = 'fadeInDown';
                    }else{
                        var animationName = mainElement.data('qp-animate-type');
                    }

                    if(typeof(mainElement.data('qp-animate-delay')) === 'undefined'){
                        var timeoutDelay = 0;
                    }else{
                        var timeoutDelay = mainElement.data('qp-animate-delay');
                    }

                    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

                    if(mainElement.hasClass('invisible')){


                        setTimeout(function(){
                            mainElement.removeClass('invisible').addClass('animated ' + animationName).one(animationEnd, function(){
                                $(this).removeClass(animationName);
                                $(this).removeClass('animated');

                                // If the element has infinite animation
                                $(this).removeClass('infinite');
                            });
                        }, timeoutDelay);
                    }

                    if(mainElement.hasClass('invisible-children')){

                        mainElement.children().each(function(){

                            var thisElement = $(this);

                            setTimeout(function(){
                                thisElement.addClass('animated ' + animationName).one(animationEnd, function(){
                                    // Nothing to do after animation ends
                                });
                            }, timeoutDelay);

                            timeoutDelay += 75;
                        });
                    }

                    if(mainElement.hasClass('invisible-children-with-scrollbar')){

                        mainElement.children('.mCustomScrollBox').find('.mCSB_container').children().each(function(){

                            var thisElement = $(this);

                            setTimeout(function(){
                                thisElement.addClass('animated ' + animationName).one(animationEnd, function(){
                                    // Nothing to do after animation ends
                                });
                            }, timeoutDelay);

                            timeoutDelay += 75;
                        });
                    }
                }
            });
        }
    }

    /* Hex to RGBA */
    function qp_hexToRgbA(hex, alpha){
        var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if(alpha){
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        }else{
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }

    function qp_add_scrollbar(scrollContainer, scrollBarTheme){
        // Current Color Preset
        var colorPresetGlobal = $('body').data('color-preset');
        $(scrollContainer).mCustomScrollbar({
            autoHideScrollbar: true,
            scrollbarPosition: 'inside',
            theme: scrollBarTheme,
            autoExpandScrollbar: true,
            scrollInertia: 600,
            mouseWheelPixels: 110,
            mouseWheel: {
                preventDefault: true
            }
        });
    }


    /**
     * REQUIRED FUNCTIONS - START
     */

    // DO NOT REMOVE THIS!!!
    qp_required_misc();


    /* Resize certain elements on window resize */
    // Copy the functions loaded above and paste them below. Only works for certain functions
    // Line Charts functions should be copied here too
    $(window).resize(function () {
        waitForFinalEvent(function(){
            // functions here...

        }, 500, 'thisstringisunsdsaique');
    });

    /* REQUIRED FUNCTIONS - END */




});