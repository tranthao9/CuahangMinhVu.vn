var listimg=document.getElementsByClassName("img-details");
var index=0;
for(let x of listimg) {
    x.style.opacity  = 0.5;
}
listimg[0].style.opacity=1;
function ShowImgDetails(e) {
    for(let x of listimg) {
        x.style.opacity  = 0.5;
    }
    document.getElementById("main-details").src=e.src;
    e.style.opacity  = 1;
    Zoom();
}
function NextPD(){
    for(let x of listimg) {
        x.style.opacity  = 0.5;
    }
    if(index<listimg.length-1)
        index=index+1;
    else
        index=0;
    document.getElementById("main-details").src=listimg[index].src
    listimg[index].style.opacity=1;
    Zoom();
}
function BackPD(){
    for(let x of listimg) {
        x.style.opacity  = 0.5;
    }
    if(index>0)
        index=index-1
    else
        index=listimg.length-1;
    document.getElementById("main-details").src=listimg[index].src
    
    listimg[index].style.opacity=1;
    Zoom();
}
//
var listcontent=document.getElementsByClassName("display_content");
var listDUI=document.getElementsByClassName("optionDUI");
function InitCT(){
    for(let s of listcontent)
    {
        s.style.display='none'
    }
    listcontent[0].style.display='block';
    listDUI[0].className += " active4";
}
function ClickCT(a){
    if(a==1)
    {
        for(let s of listcontent)
    {
        s.style.display='none'
    }
    listcontent[0].style.display='block';
    for(let x of listDUI)
    {
        x.className=x.className.replace(" active4","")
    }
    listDUI[0].className += " active4"
    }
    if(a==2)
    {
        for(let s of listcontent)
    {
        s.style.display='none'
    }
    listcontent[1].style.display='block';
    for(let x of listDUI)
    {
        x.className=x.className.replace(" active4","")
    }
    listDUI[1].className += " active4"
    }
    if(a==3)
    {
        for(let s of listcontent)
    {
        s.style.display='none'
    }
    listcontent[2].style.display='block';
    for(let x of listDUI)
    {
        x.className=x.className.replace(" active4","")
    }
    listDUI[2].className += " active4"
    }
}
InitCT();

function Zoom(){
    var a=(document.getElementById("main-details").src).lastIndexOf('image')

    var zoom = function(elm) {
      elm
        .on('mouseover', function() {
          $('.images22').children('.addzoom').css({'transform': 'scale(2)'
         });
         $('.images22').show();
        })
        .on('mouseout', function() {
          $('.images22').children('.addzoom').css({'transform': 'scale(1)'});
          $('.images22').hide();
        })
        .on('mousemove', function(e) {
          $('.images22').children('.addzoom').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
        })
    }
    $('#main-details ').each(function() {
        var x=document.getElementById("main-details").src ; 
        $('.images22')
          .html('<div class="addzoom"></div>')
          .children('.addzoom').css({'background-image': 'url("../'+ (document.getElementById("main-details").src).slice(a,(document.getElementById("main-details").src).length)  +'")'});
        zoom($(this));
      })
}
$(document).ready(function(){
    Zoom();
})

