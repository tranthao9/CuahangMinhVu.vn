
 $(document).ready(function(){
    
    $('.background-112').click(function(event){
        
        var vi_tri_hien_tai = $('.active_nut').index()+1;
        var slide_next = $('.active').next();
        if(slide_next.length != 0)
        {
            $('.active').addClass('remove-left').one('webkitAnimationEnd',function(event){
                $('.remove-left').removeClass('remove-left').removeClass('active');
            });
            slide_next.addClass('active').addClass('to-right').one('webkitAnimationEnd',function(event){
                $('.to-right').removeClass('to-right');
            });
            $('.Nodeslide ul li').removeClass('active_nut');
	         $('.Nodeslide ul li:nth-child('+(vi_tri_hien_tai+1)+')').addClass('active_nut');
        }
        else
        {
            $('.active').addClass('remove-left').one('webkitAnimationEnd',function(event){
                $('.remove-left').removeClass('remove-left').removeClass('active');
            });
            $('.mysilde1:first-child').addClass('active').addClass('to-right').one('webkitAnimationEnd',function(event){
                $('.to-right').removeClass('to-right');
            });
            $('.Nodeslide ul li').removeClass('active_nut');
	         $('.Nodeslide ul li:nth-child(1)').addClass('active_nut');
        }
    });
    $('.background-111').click(function(event){
        clearInterval(auto);
        var vi_tri_hien_tai = $('.active_nut').index()+1;
        var slide_back = $('.active').prev();
        if(slide_back.length != 0)
        {
            $('.active').addClass('remove-right').one('webkitAnimationEnd',function(event){
                $('.remove-right').removeClass('remove-right').removeClass('active');
            });
            slide_back.addClass('active').addClass('to-left').one('webkitAnimationEnd',function(event){
                $('.to-left').removeClass('to-left');
            });
            $('.Nodeslide ul li').removeClass('active_nut');
            $('.Nodeslide ul li:nth-child('+(vi_tri_hien_tai-1)+')').addClass('active_nut');
        }
        else
        {
            $('.active').addClass('remove-right').one('webkitAnimationEnd',function(event){
                $('.remove-right').removeClass('remove-right').removeClass('active');
            });
            $('.mysilde1:last-child').addClass('active').addClass('to-left').one('webkitAnimationEnd',function(event){
                $('.to-left').removeClass('to-left');
            });
            $('.Nodeslide ul li').removeClass('active_nut');
            $('.Nodeslide ul li:last-child').addClass('active_nut');
        }
    });
    $('.Nodeslide ul li').click(function(event) {
        clearInterval(auto);
        var vi_tri_hien_tai = $('.active_nut').index()+1;
        var vi_tri_click = $(this).index()+1;
        $('.Nodeslide ul li').removeClass('active_nut');
        $(this).addClass('active_nut');
        if(vi_tri_click>vi_tri_hien_tai){
           $('.active').addClass('remove-left').one('webkitAnimationEnd', function(event) {
              $('.remove-left').removeClass('remove-left').removeClass('active');
           });
           $('.mysilde1:nth-child('+vi_tri_click+')').addClass('active').addClass('to-right').one('webkitAnimationEnd', function(event) {
              $('.to-right').removeClass('to-right');
           });
        }
        if(vi_tri_click<vi_tri_hien_tai){
           $('.active').addClass('remove-right').one('webkitAnimationEnd', function(event) {
              $('.remove-right').removeClass('remove-right').removeClass('active');
           });
           $('.mysilde1:nth-child('+vi_tri_click+')').addClass('active').addClass('to-left').one('webkitAnimationEnd', function(event) {
              $('.to-left').removeClass('to-left');
           });
        }
     });
    var auto= setInterval(function(){
        $('.background-112').trigger('click');
     },3000);
});



