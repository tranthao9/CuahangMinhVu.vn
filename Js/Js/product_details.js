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
