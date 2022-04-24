//menu
$(document).ready(function()
{
    $("#menu-icon").click(function(){
        $('#main-menu').slideToggle()

    });
    });

//open alot of supports
var y=document.getElementsByClassName("open3");
function ClickH(){
    y[0].style.display='block'
}
function ClickK(){
    y[0].style.display='none'
}
//Liên hệ cửa hàng
var sa=document.getElementsByClassName("Lienhe");
function Hien()
{
    sa[0].style.display = 'block';
    
}
function An()
{
    sa[0].style.display = 'none';
    document.getElementById("UD").style.display='block';
    document.getElementById("Call").style.display='block'
}
//Javascript -- up down
var upz=$(document).height();
var upp=document.body.clientWidth;
$(document).ready(function(){
   $(window).scroll(function(){
       if($(this).scrollTop())
       {$('.upa').fadeIn();}
       else{
           $('.upa').fadeOut();
       }
   });
   $('.upa').click(function(){
       $('html,body').animate({
           scrollTop:0
       },500);
   });
   $('.downa').click(function(){
       $('html,body').animate({
           scrollTop:upz
       },500);
       $('.downa').fadeOut(2000);
       $('.downa').fadeIn(2000);
   });
});
//NextBack product
var listsp=document.getElementsByClassName("SPWatched");
var index=0;
function InitSP(){
        if (listsp && listsp.length > 0) {
            for (let x of listsp) {
                x.style.display = 'none';
            }
            listsp[index].style.display = 'block';
}
}
function NextSP(){
    for (let x of listsp)
    {
        x.style.display='none';
    }
    if (index  < listsp.length - 1)
        {
            index = index + 1;
        }

    else index = 0;
    listsp[index].style.display='block';
}
function BackSP(){
    for (let x of listsp)
    {
        x.style.display='none';
    }
    if (index > 0)
        index = index - 1;
    else index = listsp.length - 1;
    listsp[index].style.display='block';
}
setInterval(function(){
    NextSP();
},5000);
InitSP();
//gio hang
// var cart=document.getElementsByClassName("Cart");
//             function ShowCart(){
//                 cart[0].style.display='block';
//             }
//             function HideCart(){
//                 cart[0].style.display='none';
//             }
$(document).ready(function () {
    $('.Cartbutom').click(function(){
        $('.Cart-content').css({
            'transform': 'scale(1)',
            'opacity': '1'
        })
        
    })
    $('#HideCart').click(function()
    {
        $('.Cart-content').css({
            'transform': 'scale(0)',
            'opacity': '0.5'
        })
    })
});
$(document).ready(function () {
    $(window).scroll(function () { 
      if($(this).scrollTop()){
          $('.style').addClass('scrollscreen');
          $('.style').removeClass('style1');
      }
      else
      {
        $('.style').addClass('style1');
        $('.style').removeClass('scrollscreen');
      }
    });
});