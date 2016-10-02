$(function() {
   
    var $win = $(window),
        $menu = $('#menu'),
        _menuHeight = $menu.outerHeight(true),
        _menuWidth = $menu.outerWidth(true),
        $page = $('#all'),
        $header = $('#header'),
        _pageHeight = $page.outerHeight(true);
        

    $win.resize(function() {
        $menu.css({
            height: Math.max($win.outerHeight(true), _menuHeight)
        });
    }).resize();

    $win.scroll(function(){
        $winheight = $win.scrollTop();
         $menu.css({
            height: Math.max($win.outerHeight(true), _menuHeight)
            // top:$winheight
        });
        // $("#header").css({
        //     top:$winheight
        // });

    });

    $('#menu_Control').click(function() {
        
        var isHide = $menu.hasClass('hideMenu');

        $header.stop().animate({
            left: isHide ? _menuWidth : 0
        });

        $menu.stop().animate({
            left: isHide ? 0 : -_menuWidth
        });
        // $page.stop().animate({
        //     left: isHide ? _menuWidth : 0
        // });

        

        $menu.toggleClass('hideMenu');
        return false;
    });
     var open = false;

     function swiperphone(){
        $(document).swiperight(function(){
        if($menu.hasClass('hideMenu')){

            $header.stop().animate({
                left:_menuWidth
            });
            $menu.stop().animate({
                left:0
            });
            // $page.stop().animate({
            //     left:_menuWidth
            // });
            

            $menu.removeClass('hideMenu');
            $('#menu_Control').addClass('close');
            open = true;
        }
    }).swipeleft(function(){
        if(!$menu.hasClass('hideMenu')){
            $menu.stop().animate({
                left:-_menuWidth
            });
            $header.stop().animate({
                left:0
            });
            // $page.stop().animate({
            //     left:0
            // });
            
            $menu.addClass('hideMenu');
            $('#menu_Control').removeClass('close');
            open = false;
        }
    });


     }

    

         var anchor = document.querySelectorAll('button');
            [].forEach.call(anchor, function(anchor) {
                // var open = open_date;
                anchor.onclick = function(event) {

                    event.preventDefault();
                    if (!open) {
                        this.classList.add('close');
                        console.log("打開開關");
                        open = true;
                    } else {
                        this.classList.remove('close');
                        console.log("關閉按鈕");
                        open = false;
                    }
                }
            });

    // 手機判斷
    var get_ua = navigator.userAgent,
        reg = /Mobile/,
        check_ua = get_ua.match(reg);
    if (check_ua === null) {
        console.log('電腦顯示');
    }else{     
    console.log('手機顯示');  
        // swiperphone();
    }


});


