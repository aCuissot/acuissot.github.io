$(document).ready(function () {
    "use strict";

    let window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;


    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);

    //------- Active Nice Select --------//

    $('select').niceSelect();


    $('.navbar-nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Search Toggle
    $("#search_input_box").hide();
    $("#search").on("click", function () {
        $("#search_input_box").slideToggle();
        $("#search_input").focus();
    });
    $("#close_search").on("click", function () {
        $('#search_input_box').slideUp(500);
    });

    /*==========================
		javaScript for sticky header
		============================*/
    $(".sticky-header").sticky();

    /*=================================
    Javascript for banner area carousel
    ==================================*/
    $(".active-banner-slider").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        loop: true,
        nav: true,
        navText: ["<img src='../media/prev.png.webp' alt=''>", "<img src='../media/next.png.webp' alt=''>"],
        dots: false
    });

    /*=================================
    Javascript for product area carousel
    ==================================*/
    $(".active-product-area").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        loop: true,
        nav: true,
        navText: ["<img src='../media/prev.png.webp' alt=''>", "<img src='../media/next.png.webp' alt=''>"],
        dots: false
    });

    /*=================================
    Javascript for single product area carousel
    ==================================*/
    $(".s_Product_carousel").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        loop: true,
        nav: false,
        dots: true
    });

    /*=================================
    Javascript for exclusive area carousel
    ==================================*/
    $(".active-exclusive-product-slider").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        loop: true,
        nav: true,
        navText: ["<img src='../media/prev.png.webp' alt=''>", "<img src='../media/next.png.webp' alt=''>"],
        dots: false
    });

    //--------- Accordion Icon Change ---------//

    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".lnr-arrow-right").removeClass("lnr-arrow-right").addClass("lnr-arrow-left");
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".lnr-arrow-left").removeClass("lnr-arrow-left").addClass("lnr-arrow-right");
    });

    // Select all links with hashes
    $('.main-menubar a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                &&
                location.hostname === this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 70
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });


    // -------   Mail Send ajax

    $(document).ready(function () {
        let form = $('#booking'); // contact form
        let submit = $('.submit-btn'); // submit button
        let alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
        form.on('submit', function (e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'booking.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function () {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function (data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");
                     // reset submit button text
                },
                error: function (e) {
                    console.log(e)
                }
            });
        });
    });


    $(document).ready(function () {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });


    if (document.getElementById("js-countdown")) {

        let countdown = new Date("October 17, 2018");

        function getRemainingTime(endtime) {
            let milliseconds = Date.parse(endtime) - Date.parse(new Date());
            let seconds = Math.floor(milliseconds / 1000 % 60);
            let minutes = Math.floor(milliseconds / 1000 / 60 % 60);
            let hours = Math.floor(milliseconds / (1000 * 60 * 60) % 24);
            let days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

            return {
                'total': milliseconds,
                'seconds': seconds,
                'minutes': minutes,
                'hours': hours,
                'days': days
            };
        }

        function initClock(id, endtime) {
            let counter = document.getElementById(id);
            let daysItem = counter.querySelector('.js-countdown-days');
            let hoursItem = counter.querySelector('.js-countdown-hours');
            let minutesItem = counter.querySelector('.js-countdown-minutes');
            let secondsItem = counter.querySelector('.js-countdown-seconds');

            function updateClock() {
                let time = getRemainingTime(endtime);

                daysItem.innerHTML = time.days;
                hoursItem.innerHTML = ('0' + time.hours).slice(-2);
                minutesItem.innerHTML = ('0' + time.minutes).slice(-2);
                secondsItem.innerHTML = ('0' + time.seconds).slice(-2);

                if (time.total <= 0) {
                    clearInterval(timeinterval);
                }
            }

            updateClock();
            let timeinterval = setInterval(updateClock, 1000);
        }

        initClock('js-countdown', countdown);

    }



    $('.quick-view-carousel-details').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
    })


    //----- Active No ui slider --------//


    $(function () {

        if (document.getElementById("price-range")) {

            let nonLinearSlider = document.getElementById('price-range');

            noUiSlider.create(nonLinearSlider, {
                connect: true,
                behaviour: 'tap',
                start: [500, 4000],
                range: {
                    // Starting at 500, step the value by 500,
                    // until 4000 is reached. From there, step by 1000.
                    'min': [0],
                    '10%': [500, 500],
                    '50%': [4000, 1000],
                    'max': [10000]
                }
            });


            let nodes = [
                document.getElementById('lower-value'), // 0
                document.getElementById('upper-value')  // 1
            ];

            // Display the slider value and how far the handle moved
            // from the left edge of the slider.
            nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
                nodes[handle].innerHTML = values[handle];
            });

        }

    });


    //-------- Have Cupon Button Text Toggle Change -------//

    $('.have-btn').on('click', function (e) {
        e.preventDefault();
        $('.have-btn span').text(function (i, text) {
            return text === "Have a Coupon?" ? "Close Coupon" : "Have a Coupon?";
        })
        $('.cupon-code').fadeToggle("slow");
    });

    $('.load-more-btn').on('click', function (e) {
        e.preventDefault();
        $('.load-product').fadeIn('slow');
        $(this).fadeOut();
    });


    //------- Start Quantity Increase & Decrease Value --------//


    let value,
        quantity = document.getElementsByClassName('quantity-container');

    function createBindings(quantityContainer) {
        let quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
        let increase = quantityContainer.getElementsByClassName('increase')[0];
        let decrease = quantityContainer.getElementsByClassName('decrease')[0];
        increase.addEventListener('click', function () {
            increaseValue(quantityAmount);
        });
        decrease.addEventListener('click', function () {
            decreaseValue(quantityAmount);
        });
    }

    function init() {
        for (let i = 0; i < quantity.length; i++) {
            createBindings(quantity[i]);
        }
    }

    function increaseValue(quantityAmount) {
        value = parseInt(quantityAmount.value, 10);

        console.log(quantityAmount, quantityAmount.value);

        value = isNaN(value) ? 0 : value;
        value++;
        quantityAmount.value = value;
    }

    function decreaseValue(quantityAmount) {
        value = parseInt(quantityAmount.value, 10);

        value = isNaN(value) ? 0 : value;
        if (value > 0) value--;

        quantityAmount.value = value;
    }

    init();

//------- End Quantity Increase & Decrease Value --------//

    /*----------------------------------------------------*/
    /*  Google map js
      /*----------------------------------------------------*/

    if ($("#mapBox").length) {
        var $lat = $("#mapBox").data("lat");
        var $lon = $("#mapBox").data("lon");
        var $zoom = $("#mapBox").data("zoom");
        var $marker = $("#mapBox").data("marker");
        var $info = $("#mapBox").data("info");
        var $markerLat = $("#mapBox").data("mlat");
        var $markerLon = $("#mapBox").data("mlon");
        var map = new GMaps({
            el: "#mapBox",
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
            styles: [
                {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#dcdfe6"
                        }
                    ]
                },
                {
                    featureType: "transit",
                    stylers: [
                        {
                            color: "#808080"
                        },
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#dcdfe6"
                        }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ffffff"
                        }
                    ]
                },
                {
                    featureType: "road.local",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#ffffff"
                        },
                        {
                            weight: 1.8
                        }
                    ]
                },
                {
                    featureType: "road.local",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            color: "#d7d7d7"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#ebebeb"
                        }
                    ]
                },
                {
                    featureType: "administrative",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#a7a7a7"
                        }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ffffff"
                        }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ffffff"
                        }
                    ]
                },
                {
                    featureType: "landscape",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#efefef"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#696969"
                        }
                    ]
                },
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#737373"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "labels.icon",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            color: "#d6d6d6"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {},
                {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#dadada"
                        }
                    ]
                }
            ]
        });
    }


});

