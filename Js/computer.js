listcomputer=JSON.parse(localStorage.getItem('computer')) || [] ;
function OpenAddcomputer(){
    RefreshMT();
    $('.display').css({'transform':'scaleY(1)'});
    $('.Addcomputer').css({'transform':'scaleY(1)'});
    
}

function ExitMT(){
    $('.display').css({'transform':'scaleY(0)'});
    $('.Addcomputer').css({'transform':'scaleY(0)'});
}

function validateGia(Gia) {
    var filter = /^[0-9-+]+$/;
    if (filter.test(Gia)) {
        return true;
    }
    else {
        return false;
    }
}
function AddComputer(){
    var tenh=$('#tenmaytinh').val();
    var motah=$('#motamt').val();
    var giaban=$('#giaban').val();
    var soseri=$('#mamaytinh').val();
    var kt=true;
    if (soseri=="" || tenh == "" || motah=="" || giaban=="" || validateGia(giaban)==false )
    {
        kt=false;
    }
    if(kt==true)
    {
        var totalll = {
            "mamaytinh": soseri,
            "tenmaytinh": tenh,
            "motamt":motah,
            "giaban":giaban
        };
        listcomputer.push(totalll);
        localStorage.setItem("computer",JSON.stringify(listcomputer));
       LoadComputer();
       RefreshMT();
       alert("Bạn đã thêm thành công")
    }
   else
   {
       alert("Dữ liệu không được để trống và phải đúng định dạng với giá bán")
   }
  
}

function RefreshMT()
{
   
    $('#mamaytinh').val("");
    $('#tenmaytinh').val("")
    $('#motamt').val("")
    $('#giaban').val("")
}
function LoadComputer()
{
    var stt=0;
    var strrr=`<tr>
            <th><input type="checkbox"></th>
            <th>STT</th>
            <th>Số seri</th>
            <th>Tên máy tính</th>
            <th>Giá bán</th>
            <th>Mô tả</th>
            <th>Tác vụ</th>
        </tr>`;
    var strr=""
    for(x of listcomputer)
    {
        stt=stt+1;
        strr += `<tr>
        <td><input type="checkbox"></td>
        <td>`+stt+`</td>
        <td>`+x.mamaytinh+`</td>
        <td>`+x.tenmaytinh+`</td>
        <td>`+x.giaban+`đ</td>
        <td>`+x.motamt+`</td>
        <td><i onclick="EditComputer(`+ x.mamaytinh+ `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveComputer(`+ x.mamaytinh+ `)" class="fa-solid fa-trash-can"></i></td>
        </tr>`;
        
    }
    var str = strrr+ strr;
    $("#addcomputer").html(str);
}
LoadComputer();

function RemoveComputer(ma){
    var index=listcomputer.findIndex( x => x.mamaytinh == ma);
  if(index >=0 ){
    listcomputer.splice(index,1);
  }
  LoadComputer();
}
function UpdateComputer()
{
    localStorage.setItem('computer',JSON.stringify(listcomputer));
    alert("Bạn đã cập nhập thành công");
    LoadComputer();
}
function EditComputer(mahang)
{
    var index=listcomputer.findIndex( x => x.mamaytinh == mahang);
    OpenAddcomputer();
    $('#mamaytinh').val(listcomputer[index]['mamaytinh']);
    $('#tenmaytinh').val(listcomputer[index]['tenmaytinh']);
    $('#motamt').val(listcomputer[index]['motamt']);
    $('#giaban').val(listcomputer[index]['giaban'])
    $('#mamaytinh').prop('disabled', true);
}

function UpdateComputerA()
{
    var seri=$('#mamaytinh').val();
    var ten=$('#tenmaytinh').val();
    var mota=$('#motamt').val(); 
    var giaban=$('#giaban').val();

    var ok =true;
    if(seri==""|| ten == "" || mota =="" || giaban=="")
    {
        ok=false;
        {
            alert("Dữ liệu không được để trống !")
        }
       
    }
    if(ok==true)
    {
        for(x of listcomputer)
        {
            if(x.mamaytinh==$('#mamaytinh').val())
            {
                x.tenmaytinh=ten;
                x.motamt=mota;
                x.giaban=giaban
                UpdateComputer();
            }
        }
    }
  
}