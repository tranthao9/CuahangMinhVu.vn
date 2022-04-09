var listpage=document.getElementsByClassName("PLLaptopP");
var index=0;
var listD=document.getElementsByClassName("pageg")
function Init()
{
    if (listpage && listpage.length > 0) {
        for (let x of listpage) {
            x.style.display = 'none';
        }
        listpage[index].style.display = 'block';
        listD[1].style.display='none';
        listD[2].className += " active3";
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
            listpage[index].style.display='block';
        listD[0].style.display='none';
        listD[1].style.display='none';
       listD[5].style.display='block';
       listD[6].style.display='block';
       listD[2].className = listD[2].className.replace(" active3","");
        listD[3].className = listD[2].className.replace(" active3","");
        listD[4].className = listD[2].className.replace(" active3","");
        listD[2].className += " active3";
      
    }
    if(a==1)
    {
        if(index==1)
        {
            for (let x of listpage) {
                x.style.display = 'none';
                }
                listpage[0].style.display = 'block';
                listD[5].style.display='block';
                listD[6].style.display='block';
                listD[0].style.display='none';
                listD[1].style.display='none';
                index=0;
                listD[2].className = listD[2].className.replace(" active3","");
                listD[3].className = listD[2].className.replace(" active3","");
                listD[4].className = listD[2].className.replace(" active3","");
                listD[2].className += " active3";
        }
        if(index==2)
        {
            for (let x of listpage) {
                x.style.display = 'none';
                }
                listpage[1].style.display = 'block';
                listD[5].style.display='block';
                listD[6].style.display='block';
                listD[0].style.display='block';
                listD[1].style.display='block';
                index=1;
                listD[2].className = listD[2].className.replace(" active3","");
                listD[3].className = listD[2].className.replace(" active3","");
                listD[4].className = listD[2].className.replace(" active3","");
                listD[3].className += " active3";
        }
    }
    if(a==2)
    {
        listD[0].style.display='none';
        listD[1].style.display='none';
       for (let x of listpage) {
        x.style.display = 'none';
        }
        listpage[0].style.display = 'block';
        index=0;
        listD[6].style.display='block';
        listD[5].style.display='block';
        index=0;
        listD[2].className = listD[2].className.replace(" active3","");
        listD[3].className = listD[2].className.replace(" active3","");
        listD[4].className = listD[2].className.replace(" active3","");
        listD[2].className += " active3";
    }
    if(a==3)
    {
        listD[0].style.display='block';
       listD[1].style.display='block';
       listD[5].style.display='block';
       for (let x of listpage) {
        x.style.display = 'none';
        }
        listpage[1].style.display = 'block';
        index=1;
        listD[6].style.display='block';
        index=1;
        listD[2].className = listD[2].className.replace(" active3","");
        listD[3].className = listD[2].className.replace(" active3","");
        listD[4].className = listD[2].className.replace(" active3","");
        listD[3].className += " active3";
       
    }
    if(a==4)
    {
        listD[0].style.display='block';
       listD[1].style.display='block';
       listD[5].style.display='none';
       listD[6].style.display='none';
       for (let x of listpage) {
            x.style.display = 'none';
        }
        listpage[2].style.display = 'block';
        index=2;
        listD[2].className = listD[2].className.replace(" active3","");
        listD[3].className = listD[2].className.replace(" active3","");
        listD[4].className = listD[2].className.replace(" active3","");
        listD[4].className += " active3";
    }
    if(a==5)
    {
        if(index==0)
        {
            for (let x of listpage) {
                x.style.display = 'none';
                }
                listpage[1].style.display = 'block';
                listD[5].style.display='block';
                listD[6].style.display='block';
                listD[0].style.display='block';
                listD[1].style.display='block';
                index=1;
                listD[2].className = listD[2].className.replace(" active3","");
                listD[3].className = listD[2].className.replace(" active3","");
                listD[4].className = listD[2].className.replace(" active3","");
                listD[3].className += " active3";
                
        }
        if(index==1)
        {
            for (let x of listpage) {
                x.style.display = 'none';
                }
                listpage[2].style.display='block';
                listD[1].style.display='block';
                listD[1].style.display='block';
                listD[6].style.display='none';
                listD[5].style.display='none';
                index=2;
                listD[2].className = listD[2].className.replace(" active3","");
                listD[3].className = listD[2].className.replace(" active3","");
                listD[4].className = listD[2].className.replace(" active3","");
                listD[4].className += " active3";
                
        }
    }
    if(a==6)
    {
        for (let x of listpage) {
            x.style.display = 'none';
            }
            listpage[2].style.display='block';
        listD[1].style.display='block';
        listD[0].style.display='block'
       listD[5].style.display='none';
       listD[6].style.display='none';
       index=2;
       listD[3].className = listD[3].className.replace(" active3","");
       listD[2].className = listD[2].className.replace(" active3","");
       listD[4].className = listD[2].className.replace(" active3","");
       listD[4].className += " active3";
    }
    window.scroll(0,0);
    
    
}
Init()