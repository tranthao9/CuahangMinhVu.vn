var listpage= document.getElementsByClassName("Page");
var listperson=JSON.parse(localStorage.getItem('register')) || [];
var listuser=JSON.parse(localStorage.getItem('user')) || [];
var listsale=document.getElementsByClassName("sales");
var listsalew=document.getElementsByClassName("sales_week");
$(document).ready(function(){
    $('.hello').click(function(e){
        $('.Dangxuat').slideToggle();
    })
    listpage[0].style.display='block'
    DoanhThu();
})

function Thongke()
{
    if($('#txt_over').val()=="tuan")
    {
        for(x of listsale)
        {
            x.style.display='none';
        }
        for(y of listsalew)
        {
            y.style.display='none';
        }
        listsale[0].style.display='block'
        listsalew[0].style.display='grid'
    }
    if($('#txt_over').val()=="thang")
    {
        for(x of listsale)
        {
            x.style.display='none';
        }
        for(y of listsalew)
        {
            y.style.display='none';
        }
        listsale[1].style.display='block'
        listsalew[1].style.display='grid'
    }
    if($('#txt_over').val()=="nam")
    {
        for(x of listsale)
        {
            x.style.display='none';
        }
        for(y of listsalew)
        {
            y.style.display='none';
        }
        listsale[2].style.display='block'
        listsalew[2].style.display='grid'
    }
}
Thongke();
var listbill=JSON.parse(localStorage.getItem('bill')) || [];
// function DoanhThu()
// {
//     var t=0;
//     var d = new Date();
//     var a=0;
//     var b=0;
//     for(x of listbill)
//     {
        
//         for(z of x)
//         {
//             if(z.day==d.getDate() && z.thang==d.getMonth()+1 && z.nam==d.getFullYear())
//             {
                
//                 b=b+1;
//             }
//             if(z.tensp != undefined)
//             {
                
                
//             }
         
//             if(z.thanhtoan != undefined)
//             {

//                 if(z.day==d.getDate() && z.thang==d.getMonth()+1 && z.nam==d.getFullYear())
//                 {
//                     t=t+z.thanhtoan;
//                 }
                
//             }
//             e
            
//         }
//     }
//     $('.all>.Details>.overview>.overview1>.Bieudo>.bieudo1>span>span').text(t+"đ");
//     $('.all>.Details>.overview>.overview1>.Bieudo>.bieudo2>span>span').text(a);
//     $('.all>.Details>.overview>.overview1>.Bieudo>.bieudo3>span>span').text(b);
// }
//DoanhThu();
function Chucvu(a){
    if(a=="Nhân viên")
    {
        return "NV"
    }
    else if(a=="Quản lý")
    {
        return "QL"
    }
    else
    {
        return "KH"
    }
}
$(document).ready(function(){
    var d=0;
    for(x of listperson)
    {
        d=d+1;
        if(listuser.tailkhoan==x.username)
        {
            $('.homehello').text("Welcome, "+listuser.tailkhoan )
            $('#mahome').text( Chucvu(x.chucvu) + d);
            $('#tenhome').text(x.name);
            $('#emailhome').text(x.email);
            $('#sdthome').text(x.phone);
            $('#diachihome').text(x.address + " - tỉnh "+x.tinh );
            $('#nhanvienhome').text(x.chucvu)
            $('#chao').text("Xin chào, "+listuser.tailkhoan )
        }
    }
})
$(document).ready(function(){
    $('.all>.selection>.generalinf>dl>dt').click(function (e) { 
        $('.all>.selection>.generalinf>dl>dd').slideToggle(function(){
        });

    });
   
})
$(document).ready(function(){
    $('.all>.selection>.counting>dl>dt').click(function (e) { 
        $('.all>.selection>.counting>dl>dd').slideToggle();
    });
})
$(document).ready(function(){
    $('.all>.selection>.user>dl>dt').click(function (e) { 
        $('.all>.selection>.user>dl>dd').slideToggle();
    });
})
function Home()
{
    for(let x of listpage)
    {
        x.style.display='none'
    }
    listpage[0].style.display='block'
}
function OVERVIEW()
{
    for(let x of listpage)
    {
        x.style.display='none'
    }
    listpage[1].style.display='block'
}
function HangMT()
{
    for(let x of listpage)
    {
        x.style.display='none'
    }
    listpage[2].style.display='block'
}
function DongMT()
{
    for(let x of listpage)
    {
        x.style.display='none'
    }
    listpage[3].style.display='block'
}
function COMPUTER()
{
    for(let x of listpage)
    {
        x.style.display='none'
    }
    listpage[4].style.display='block'
}
function PROVIDER()
{
    for(let x of listpage)
    {
        x.style.display='none'
    }
    listpage[5].style.display='block'
}
function OpenAddcompany(){
    Refresh();
    $('.display').css({'transform':'scaleY(1)'});
    $('.Addcompany').css({'transform':'scaleY(1)'});
    
    
}

function Exit(){
    $('.display').css({'transform':'scaleY(0)'});
    $('.Addcompany').css({'transform':'scaleY(0)'});
}

listcompany=JSON.parse(localStorage.getItem('company')) || [] ;
function AddCompany(){
    var tenh=$('#tenhang').val();
    var motah=$('#mota').val();
    var mah=0;
    var kt=true;
    if(listcompany=="")
    {
        mah=1;
    }
    else
    {
        mah=Number(listcompany[listcompany.length-1]['mahang'])+1;
    }
    if (tenh == "" || motah=="")
    {
        kt=false;
    }
    if(kt==true)
    {
        var totalll = {
            "mahang": mah,
            "tenhang": tenh,
            "mota":motah
        };
        listcompany.push(totalll);
        localStorage.setItem("company",JSON.stringify(listcompany));
       LoadCompany();
       Refresh();
       alert("Bạn đã thêm thành công")
    }
   else
   {
       alert("Dữ liệu không được để trống")
   }
  
}

function Refresh()
{
    if(listcompany =="")
    {
        $('#mahang').val("MH01");
    }
    else if(Number(listcompany[listcompany.length-1]['mahang'])+1<10)
    {
        $('#mahang').val("MH0"+(Number(listcompany[listcompany.length-1]['mahang'])+1));
    }
    else
        $('#mahang').val("MH"+(Number(listcompany[listcompany.length-1]['mahang'])+1));
    $('#tenhang').val("")
    $('#mota').val("")
}
function LoadCompany()
{
    var stt=0;
    var strrr=`<tr>
            <th><input type="checkbox"></th>
            <th>STT</th>
            <th>Mã hãng máy tính</th>
            <th>Tên hãng máy tính</th>
            <th>Mô tả</th>
            <th>Tác vụ</th>
        </tr>`;
    var strr=""
    for(x of listcompany)
    {
        stt=stt+1;
        if(stt<10)
        {
            strr += `<tr>
            <td><input type="checkbox"></td>
            <td>`+stt+`</td>
            <td> MH0`+x.mahang+`</td>
            <td>`+x.tenhang+`</td>
            <td>`+x.mota+`</td>
            <td><i onclick="EditCompany(`+ x.mahang+ `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveCompany(`+ x.mahang+ `)" class="fa-solid fa-trash-can"></i></td>
            </tr>`;
        }
        else
        {
            strr += `<tr>
            <td><input type="checkbox"></td>
            <td>`+stt+`</td>
            <td> MH`+x.mahang+`</td>
            <td>`+x.tenhang+`</td>
            <td>`+x.mota+`</td>
            <td><i onclick="EditCompany(`+ x.mahang+ `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveCompany(`+ x.mahang+ `)" class="fa-solid fa-trash-can"></i></td>
            </tr>`;
        }
        
    }
    var str = strrr+ strr;
    $("#addapny").html(str);
}
LoadCompany();

function RemoveCompany(mahang){
    var index=listcompany.findIndex( x => x.mahang == mahang);
  if(index >=0 ){
    listcompany.splice(index,1);
  }
  LoadCompany();
}
function UpdateCompany()
{
    localStorage.setItem('company',JSON.stringify(listcompany));
    alert("Bạn đã cập nhập thành công");
    LoadCompany();
}
function EditCompany(mahang)
{
    var index=listcompany.findIndex( x => x.mahang == mahang);
    OpenAddcompany();
    $('#mahang').val(listcompany[index]['mahang']);
    $('#tenhang').val(listcompany[index]['tenhang']);
    $('#mota').val(listcompany[index]['mota'])
}
function UpdateCompanyA()
{
    var ten=$('#tenhang').val();
    var mota=$('#mota').val();
    var ok =true;
    if(ten == "" || mota =="")
    {
        ok=false;
       
    }
    if(ok==true)
    {
        for(x of listcompany)
        {
            if(x.mahang==$('#mahang').val())
            {
                x.tenhang=ten;
                x.mota=mota;
                UpdateCompany();
            }
        }
    }
    else
    {
        alert("Dữ liệu không được để trống !")
    }
    
}
