$(document).ready(function () {


    /*$('.logo_box').click(function () {
        $('#pc_header_top, #m_header_top').css({
            display: 'none'
        });
        $('#pc_header_bottom, #m_header_bottom').css({
            display: 'block'
        })
    });*/


    /*-------------------------------------------------------------------- 첫화면 language 영역*/

    /*$('#language_select_box>div').click(function(){
       $('.language').css({
            display:'block'
        });
        $(this).next('ul').toggle();
        return false;
        
        $('.language').css({
            display:'block'
        });
        
    });
    
    $('.language').click(function(){
       $(this).parent().hide().parent('#language_select_box').children('div').text($(this).text());
        $(this).prependTo($(this).parent());
    });*/


    /*-------------------------------------------------------------------- */


    $('#pc_header_bottom').mouseenter(function () {
        $(this).stop().animate({
            opacity: 1
        });
        $('#pc_header_menu').stop().animate({
            height: 60 + 'px'
        });
        $('#pc_header_bot_icon').css({
            borderBottom: 1 + 'px solid rgba(30,30,30,0.5)'
        });
    }).mouseleave(function () {
        $(this).stop().animate({
            opacity: 0.9
        });
        $('#pc_header_menu').stop().animate({
            height: 0
        });
        $('#pc_header_bot_icon').css({
            borderBottom: 0
        });
    });

    $(window).resize(function(){
       var win_width = $(window).width();
        
        if(win_width<=759){
            
            $('#banner_in_box').css({
               width: win_width 
            });
            $('#banner_in_box_img').css({
                width: win_width*3
            });
            $('#banner_in_box_img>li').css({
               width: win_width 
            });
        }
    }).resize();

    setTimeout(function () {
        $('.banner_line:nth-child(1)').click();
    });
    
    $('.banner_text_in_box').each(function (index) {
        $(this).attr('data-index', index);
    });
    $('#banner_in_box_img>li').each(function (index) {
        $(this).attr('data-index', index);
    });
    $('.banner_line').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {

        var num = $(this).attr('data-index');
        
        /*setInterval(function(index){
           num++;
            banner_box();
            line_box();
            if(num>=2){
                num=-1
            }
            
        },1000);*/
        
        $(window).resize(function () {
            var win_width = $(window).width();

            if (win_width >= 1300) {

                $('#banner_in_box_img').stop().animate({
                    left: -1170 * num
                });
                
                $('#right').click(function () {
                    num++;
                    if (num > 2) {
                        num = 2;
                    }
                    $('#banner_in_box_img').stop().animate({
                        left: -1170 * num
                    });
                    banner_box();
                    line_box();
                    
                });
                
                $('#left').click(function () {
                    num--;
                    if (num <= 0) {
                        num = 0;
                    }
                    $('#banner_in_box_img').stop().animate({
                        left: -1170 * num
                    });
                    banner_box();
                    line_box();
                });

            } else if (win_width <= 1299) {

                $('#banner_in_box_img').stop().animate({
                    left: -965 * num
                });

                $('#right').click(function () {
                    num++;
                    if (num > 2) {
                        num = 2;
                    }
                    $('#banner_in_box_img').stop().animate({
                        left: -965 * num
                    });
                    banner_box();
                    line_box();
                });

                $('#left').click(function () {
                    num--;
                    if (num <= 0) {
                        num = 0;
                    }
                    $('#banner_in_box_img').stop().animate({
                        left: -965 * num
                    });
                    banner_box();
                    line_box();
                });
                
            } else if (win_width<=759){

                $('#banner_in_box_img').stop().animate({
                    left: -win_width * num
                });
                $('#right').click(function () {
                    num++;
                    if (num > 2) {
                        num = 2;
                    }
                    $('#banner_in_box_img').stop().animate({
                        left: -win_width * num
                    });
                    banner_box();
                    line_box();
                });

                $('#left').click(function () {
                    num--;
                    if (num <= 0) {
                        num = 0;
                    }
                    $('#banner_in_box_img').stop().animate({
                        left: -win_width * num
                    });
                    banner_box();
                    line_box();
                });
                
                
            }
            
        }).resize();


        function banner_box(index) {
            $('.banner_text_in_box[data-index=' + num + ']').addClass('banner_on');
            $('.banner_text_in_box[data-index!=' + num + ']').removeClass('banner_on');
        }
        banner_box();

        function line_box(index) {
            $('.banner_line[data-index=' + num + ']').addClass('line_on');
            $('.banner_line[data-index!=' + num + ']').removeClass('line_on');
        }
        line_box();

    });





    $(window).resize(function () {
        var win_width = $(window).width();

        if (win_width >= 760) {
            $('.sec_1_item').mouseenter(function () {
                $('.sec_1_shadow', this).stop().fadeIn(200);
                $('.sec_1_item_img', this).stop().animate({
                    scale: 1.1
                });
            }).mouseleave(function () {
                $('.sec_1_shadow', this).stop().fadeOut(200);
                $('.sec_1_item_img', this).stop().animate({
                    scale: 1
                });
            });
        } else {
            return false;
        }
    }).resize();




    $(window).resize(function () {
        var win_width = $(window).width();
        if (win_width >= 1300) {

            $('#footer_hover_box').mouseenter(function () {
                $('#sec_3_bg').stop().animate({
                    height: 1150 + 'px'
                });
                $('#sec_3_bottom_logo_box').stop().fadeOut(200);
                $('#footer_wrap').stop().fadeIn(500);
            }).mouseleave(function () {
                $('#sec_3_bg').stop().animate({
                    height: 100 + '%'
                });
                $('#sec_3_bottom_logo_box').stop().fadeIn(500);
                $('#footer_wrap').stop().fadeOut(200);
            });
        } else if (win_width <= 1299) {
            $('#footer_hover_box').mouseenter(function () {
                $('#sec_3_bg').stop().animate({
                    height: 850 + 'px'
                });
                $('#sec_3_bottom_logo_box').stop().fadeOut(200);
                $('#footer_wrap').stop().fadeIn(500);
            }).mouseleave(function () {
                $('#sec_3_bg').stop().animate({
                    height: 100 + '%'
                });
                $('#sec_3_bottom_logo_box').stop().fadeIn(500);
                $('#footer_wrap').stop().fadeOut(200);
            });
        }
    }).resize();
});
