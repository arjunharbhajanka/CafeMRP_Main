/*  ---------------------------------------------------
    Template Name: Ogani
    Description:  Ogani eCommerce  HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.featured__controls li').on('click', function () {
            $('.featured__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Humberger Menu
    $(".humberger__open").on('click', function () {
        $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").addClass("active");
        $("body").addClass("over_hid");
    });

    $(".humberger__menu__overlay").on('click', function () {
        $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").removeClass("active");
        $("body").removeClass("over_hid");
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            0: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 4,
            }
        }
    });


    $('.hero__categories__all').on('click', function(){
        $('.hero__categories ul').slideToggle(400);
    });

    /*--------------------------
        Latest Product Slider
    ----------------------------*/
    $(".latest-product__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------------
        Product Discount Slider
    -------------------------------*/
    $(".product__discount__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            320: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 2,
            },

            992: {
                items: 3,
            }
        }
    });

    /*---------------------------------
        Product Details Pic Slider
    ----------------------------------*/
    $(".product__details__pic__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------
		Price Range Slider
	------------------------ */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Single Product
	--------------------*/
    $('.product__details__pic__slider img').on('click', function () {

        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
            $('.product__details__pic__item--large').attr({
                src: imgurl
            });
        }
    });

    /*-------------------
		Quantity change
	--------------------- */

    var proQty = $('.pro-qty');
    //proQty.parent().parent().parent().find('.itemName').text();

    // var temp = "Cream of Mushroom"
    // console.log(temp);
    // $.ajax({
    //     type: 'post',
    //     url: 'manage.php',
    //     data: {name : "Cream of Mushroom"},
    //     success: function(data) {
    //         var t2 = temp + data;
    //         console.log(t2);
    //
    //         if (data != 1) {
    //             $('h6:contains("Cream of Mushroom")').parent().css('background-color', 'red');
    //         }
    //         else {
    //             $('h6:contains("Cream of Mushroom")').parent().css('background-color', 'green');
    //         }
    //
    //     }
    // });

    var proQty = $('.pro-qty');
    var itemName = proQty.parent().parent().parent().find('.itemName').each(function() {
        var price = $(this).parent().find('.price');

        //$(this).css('background-color', 'yellow');
        var itemName = $(this).text();
        console.log(itemName);
        //$("h6:contains("+ itemName +")").parent().css('background-color', 'blue');
        $.ajax({
            type: 'post',
            url: 'manage.php',
            data: {name : itemName},
            success: function(data) {
                console.log(itemName + " " + data);

                if (data != 1) {
                    $("h6:contains("+ itemName +")").parent().hide();
                }
                else {
                    // $("h6:contains("+ itemName +")").parent().css('background-color', 'green');
                }

            }
            });
        $.ajax({
            type: 'post',
            url: 'price.php',
            data: {name : itemName},
            success: function(data) {
                console.log("new price" + " " + data);

               price.html("₹ "+data);

            }
        });

    });

    // $.ajax({
    //     type: 'post',
    //     url: 'manage.php',
    //     data: {no : no},
    //     success: function(data) {
    //         if(data == 102) {
    //
    //
    //             window.alert("it is was 101");
    //         } else {
    //             //window.alert("removing veg hot and sour");
    //             var proQty = $('.pro-qty');
    //             var itemName = proQty.parent().parent().parent().find('.itemName').each(function() {
    //                 $(this).css('background-color', 'yellow');
    //                 var itemName = $(this).text();
    //                 $("h6:contains("+ itemName +")").parent().css('background-color', 'blue');
    //             });
    //             // var itemName = "Hot N Sour Soup (Vegetables)";
    //             // $("h6:contains("+ itemName +")").parent().css('background-color', 'yellow');
    //             //window.alert(itemName[0].text());
    //
    //             //$("h6:contains("+ itemName +")").parent().css('background-color', 'green');
    //             // $('h6:contains("Hot N Sour Soup (Vegetables)")')
    //             //     .filter(function() { return $(this).children().length === 0;})
    //             //     .parent().css('background-color', 'red');
    //
    //         }
    //     }
    // });



    var table = $('.table');
    var order = $('.order');
    var temp = $('.temp');

    temp.css({
        "color": "green",
        "border": "2px solid green"
    });


    order.css({
            "color": "green",
            "border": "2px solid green"
        });
    var no = 0;
    order.on('click', no, function () {

        var tableNO = table.val();
        var tab = $('.tab');
        tab.val(tableNO);
        //$(this).link("https://www.w3schools.com");
        no = tableNO;
        window.alert(no);


    });

    console.log(no);


    var tableNo = $('.tableNo');
    var logNo = $('.logNo');

    var no = tableNo.val();
    logNo.css({
            "color": "blue",
            "border": "2px solid red"
        });

    logNo.on('click', function () {
         no = tableNo.val();




        no = tableNo.val();
        sessionStorage.setItem("tableNumber", no);
        //window.alert(no);

    })


//    var value = proQty.parent().find('input').val();


//    if (value > 0) {
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    //proQty.append('<span class="inc qtybtn">+</span>');
//    } else {
//
//    }
    proQty.on('click', '.qtybtn', no, function () {
        //window.alert(no);
        var $button = $(this);

        var oldValue = $button.parent().find('input').val();
         // $button.parent().parent().parent().css({
         //     "color": "green",
         //     "border": "2px solid green"
         // });
        oldValue = $button.parent().find('input').val();
        var itemName =$button.parent().parent().parent().find('.itemName').text();
        // $button.parent().parent().parent().css({
        //         "color": "green",
        //         "border": "2px solid green"
        //     });
        // var price = $button.parent().parent().parent().find('.price').text();
        //      window.alert(price);



        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        var tableNumber = sessionStorage.getItem("tableNumber");

        $.ajax({
            type: 'POST',
            url: "test.php",
            data: {name: itemName, qty: newVal, tableNo: tableNumber},
            success: function(result) {
                console.log('the data was successfully 123 into sent to the server');
            }

        })
        $button.parent().find('input').val(newVal);
    });

})(jQuery);