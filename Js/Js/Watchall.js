var listpage=document.getElementsByClassName("PLLaptopP");
var index=0;
var listD=document.getElementsByClassName("pageg")
function InitPG()
{
    if (listpage && listpage.length > 0) {
        for (let x of listpage) {
            x.style.display = 'none';
        }
        listpage[index].style.display = 'block';
        listD[2].className += " active3";
        listD[1].style.display='none';
    }
}

function ClickPage(a)
{
    if(a==0)
    {
        listD[2].className += " active3";
        for (let x of listpage) {
            x.style.display = 'none';
            }
            index=0;
        listpage[index].style.display='block';
        for( let z of listD){
            z.className=z.className.replace(" active3","")
        }
        listD[2].className += " active3";
        
    }
    if(a==2)
    {
       for (let x of listpage) {
        x.style.display = 'none';
        }
        index=0;
        listpage[index].style.display = 'block';
        for( let z of listD){
            z.className=z.className.replace(" active3","")
        }
        listD[2].className += " active3";
    }
    if(a==3)
    {
       for (let x of listpage) {
        x.style.display = 'none';
        }
        listpage[1].style.display = 'block';
        index=listpage.length-2;
        for( let z of listD){
            z.className=z.className.replace(" active3","")
        }
        listD[3].className += " active3";
       
    }
    if(a==4)
    {
       for (let x of listpage) {
            x.style.display = 'none';
        }
        listpage[2].style.display = 'block';
        index=listpage.length-1;
        for( let z of listD){
            z.className=z.className.replace(" active3","")
        }
        listD[4].className += " active3";
    }
    
    if(a==6)
    {
        for (let x of listpage) {
            x.style.display = 'none';
            }
       listpage[2].style.display='block';
       index=listpage.length-1;
       for( let z of listD){
        z.className=z.className.replace(" active3","");
      }
    listD[4].className += " active3";
    }
    window.scroll(0,0);
    if(index==0)
    {
        listD[1].style.display='none';
        listD[5].style.display='block';
    }
    else if(index ==2)
    {
        listD[1].style.display='block';
        listD[5].style.display='none';
    }
    else
    {
        listD[1].style.display='block';
        listD[5].style.display='block';
    }
}
function BackP()
{
    for (let x of listpage) {
        x.style.display = 'none';
        }
    for( let z of listD){
        z.className=z.className.replace(" active3","")}
    if(index > 0)
    {
        index=index-1;
    }
    else
    {
        index=0;
    }
    listpage[index].style.display='block';
    listD[index+2].className += " active3";
    window.scroll(0,0);
    if(index==0)
    {
        listD[1].style.display='none';
        listD[5].style.display='block';
    }
    else if(index ==listpage.length-1)
    {
        listD[1].style.display='block';
        listD[5].style.display='none';
    }
    else
    {
        listD[1].style.display='block';
        listD[5].style.display='block';
    }
}
function NextP(){
    for (let x of listpage) {
        x.style.display = 'none';
        }
    for( let z of listD){
        z.className=z.className.replace(" active3","")}
    if(index < listpage.length-1)
    {
        index=index+1;
    }
    else
    {
        index=listpage.length-1;;
    }
    listpage[index].style.display='block';
    listD[index+2].className += " active3";
    window.scroll(0,0);
    if(index==0)
    {
        listD[1].style.display='none';
        listD[5].style.display='block';
    }
    else if(index ==listpage.length-1)
    {
        listD[1].style.display='block';
        listD[5].style.display='none';
    }
    else
    {
        listD[1].style.display='block';
        listD[5].style.display='block';
    }

}
InitPG()
