$(function() {
    $('#gotop').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    $('#gotop').fadeOut("fast");

    var $page = $('#second_page').offset(),
        $header_fix = $('#header').offset(),
        $gotop = $('#gotop');

    $('.little_logo').hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $gotop.fadeIn();
        } else {
            $gotop.stop().fadeOut();
        }
        var _header = $('#header').outerHeight(true);
        var header_fix = $('#header').hasClass('fix_header');
        if ($(this).scrollTop() > $header_fix.top) {

            if (!header_fix) {
                $('#header').addClass('fix_header');
                $('.little_logo').stop(true, true).fadeIn();
                $('#contect').css({
                    marginTop: _header
                });
                console.log("可以執行");
            }

        } else {

            if (header_fix) {
                $('#header').removeClass('fix_header');
                $('.little_logo').stop(true, true).hide();
                $('#contect').css({
                    marginTop:_header*-1
                });

                console.log("部可以執行");
            }
        }
    });





    $('.arrow_click').on('click', function() {

        $("html,body").animate({
            scrollTop: $page.top
        }, 400, "easeInOutCubic");
    });
    $('.alert_click').on('click', function() {
        swal("Oops...", "目前還在整修中", "error");
        console.log("hi");
        return false;
    });


});


$(window).load(function() {
    $(window).resize(function() {
        var logo_height = $('#logo').outerHeight(true),
            h1_height = $("h1").outerHeight(true),
            h3_height = $("#first_page_box h3").outerHeight(true),
            circle_w = $("#circle").outerWidth(true),
            contect_height = $("#contect").outerHeight(true),
            w_height = $(window).innerHeight();

        // $('#first_page_box').css({
        //     height: logo_height + h1_height + h3_height
        // });
        // // $('#first_page').css({height:w_height});

        // if (circle_w > 770) {
        //     $('#circle').css({
        //         paddingBottom: 600
        //     });
        // } else {
        //     $('#circle').css({
        //         paddingBottom:600
        //     });
        // }

        if (contect_height < w_height) {
            console.log('小餘視窗');
            $('#footer').addClass('footer_fix');
        } else {
            console.log('大於視窗');
            $('#footer').removeClass('footer_fix');

        }

    }).resize();

    

    // nav_click

    var $share = $('#share li');

    $share.eq(0).click(function() {
        window.open('https://www.facebook.com/libeenya', "_blank");
    });

    $share.eq(1).click(function() {
        alert("電腦使用者請直接加入我的id brain00021");
        window.open('http://line.me/ti/p/u5n5geY_hL', "_blank");
    });

    $share.eq(2).click(function() {
        window.open('https://au.linkedin.com/in/bingyeli', "_blank");
    });

});
// jquery fin
