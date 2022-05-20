listcomputer=JSON.parse(localStorage.getItem('computer')) || [] ;
function OpenAddcomputer(){
    RefreshMT();
    $('.display').css({'transform':'scaleY(1)'});
    $('.Addcomputer').css({'transform':'scaleY(1)'});
    $('.note').text("")
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
    var ok=true;
    if(soseri=="")
    {
        ok=false;
        $('.note').text("Số seri không được để trống !")
        
       
    }
    for(x of listcomputer)
    {
        if(x.mamaytinh==soseri)
        {
            ok=false;
            $('.note').text("Số seri không được trùng nhau !")
        
        }
    }
    if(tenh == "")
    {
        ok=false;
        {
            $('.note').text("Tên máy tính không được để trống !")
        }
    }
    if( motah =="")
    {
        ok=false;
        {
            $('.note').text("Mô tả máy tính không được để trống !")
        }
    }
    if( giaban =="")
    {
        ok=false;
        {
            $('.note').text("Giá bán máy tính không được để trống !")
        }
    }
    if(ok==true)
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
    if(seri=="")
    {
        ok=false;
        {
            $('.note').text("Số seri không được để trống !")
        }
       
    }
    if(ten == "")
    {
        ok=false;
        {
            $('.note').text("Tên máy tính không được để trống !")
        }
    }
    if( mota =="")
    {
        ok=false;
        {
            $('.note').text("Mô tả máy tính không được để trống !")
        }
    }
    if( giaban =="")
    {
        ok=false;
        {
            $('.note').text("Giá bán máy tính không được để trống !")
        }
    }
    if(validateGia(giaban)==false)
    {
        $('.note').text("Định dạng giá bán máy tính sai, giá bán phải là số!")
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