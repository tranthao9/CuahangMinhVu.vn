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
function BlackSP(){
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