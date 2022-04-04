var Kichthuoc=document.getElementsByClassName("background-1")[0].clientWidth;
var Chuyensilde=document.getElementsByClassName("mysilde")[0];
var chuyen=0;
var Img=Chuyensilde.getElementsByClassName("mysilde1");
var Max=Kichthuoc * Img.length;
Max -= (Kichthuoc);
var dots = document.getElementsByClassName("dot");
var slideIndex=0;
function Next()
{
    if(chuyen<Max) 
        {
            chuyen += Kichthuoc;
            slideIndex +=1;
            dots[slideIndex].className += " active";
            dots[slideIndex-1].className = dots[slideIndex-1].className.replace(" active", "");
        }
    else 
    {
        chuyen=0;
        slideIndex=0;
        dots[3].className = dots[3].className.replace(" active", "");
        dots[slideIndex].className += " active";
    }
    Chuyensilde.style.marginLeft='-' + chuyen + 'px'; 
}
function Back()
{
    if(chuyen==0)
    {
        chuyen=Max;
        slideIndex =3;
        dots[0].className = dots[0].className.replace(" active", "");
        dots[slideIndex].className += " active";
    }
    else 
    {
        chuyen -= Kichthuoc;
        slideIndex -=1;
        dots[slideIndex].className += " active";
        dots[slideIndex+1].className = dots[slideIndex+1].className.replace(" active", "");
    }
    Chuyensilde.style.marginLeft='-'+chuyen+'px';
}
setInterval(function(){
    Next();
},5000)