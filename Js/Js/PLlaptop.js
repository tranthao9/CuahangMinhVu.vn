var list=document.getElementsByClassName("PLLaptop1");
var a = document.getElementsByClassName("ac");
var index=0;
function Init()
{
    if (list && list.length > 0) {
        for (let x of list) {
            x.style.display = 'none';
        }
        list[index].style.display = 'block';
    }
}
function Click0() {
    if (list && list.length > 0) {
        for (let x of list) {
            x.style.display = 'none';
        }
        list[index].style.display = 'block';
        for (let z of a) {
            z.className = z.className.replace(" active2", "");
        }
        a[0].className += " active2";
    }
}
function Click1() {
    if (list && list.length > 0) {
        for (let x of list) {
            x.style.display = 'none';
        }
        list[index+1].style.display = 'block';
        for (let z of a) {
            z.className = z.className.replace(" active2", "");
        }
        a[index+1].className += " active2";
    }
}
function Click2() {
    if (list && list.length > 0) {
        for (let x of list) {
            x.style.display = 'none';
        }
        list[2].style.display = 'block';
        for (let z of a) {
            z.className = z.className.replace(" active2", "");
        }
        a[2].className += " active2";
    }
}
function Click3() {
    for (let x of list) {
        x.style.display = 'none';
    }
    list[3].style.display = 'block';
    for (let z of a) {
        z.className = z.className.replace(" active2", "");
    }
    a[3].className += " active2";
}
Init();

//Display video
var listVD=document.getElementsByClassName("video");
function InitVD(){
    for(let x of listVD)
    {
        x.style.display='none';
    }
    listVD[0].style.display='block'
}
InitVD();
function ClickVD(a){
    if(a==1)
    {
        for(let x of listVD)
        {
            x.style.display='none';
        }
        listVD[1].style.display='block'
    }
    if(a==2)
    {
        for(let x of listVD)
        {
            x.style.display='none';
        }
        listVD[2].style.display='block'
    }
    if(a==3)
    {
        
        for(let x of listVD)
        {
            x.style.display='none';
        }
        listVD[3].style.display='block'
    }
    if(a==4)
    {
        for(let x of listVD)
        {
            x.style.display='none';
        }
        listVD[4].style.display='block'
    }
}