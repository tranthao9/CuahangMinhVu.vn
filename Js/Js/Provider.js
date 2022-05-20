function ExitProvider(){
    $('.display').css({'transform':'scaleY(0)'});
    $('.AddProvider').css({'transform':'scaleY(0)'});
    $('.note').text('')
}
listprovider = JSON.parse(localStorage.getItem("provider")) || [];
function OpenAddProvider(){
    RefreshProvider();
    $('.display').css({'transform':'scaleY(1)'});
    $('.AddProvider').css({'transform':'scaleY(1)'});
    
}

function ADDProvider()
{
    var mancc=0;
    var tennhacungcap=$('#tennhacungcap').val();
    var dcnhacungcap=$('#dcnhacungcap').val();
    var emailnhacungcap=$('#emailnhacungcap').val();
    var sdtnhacungcap=$('#sdtnhacungcap').val();
    var ok=true;
    if(listprovider == "")
    {
        mancc=1;
    }
    else
    {
        mancc=listprovider[listprovider.length-1]['manhacungcap']+1;
    }
    if(tennhacungcap==""  )
    {
        ok=false
        $('.note').text("* Tên nhà cung cấp không được để trống")
    }
    if(dcnhacungcap=="")
    {
        ok=false
        $('.note').text("* Địa chỉ nhà cung cấp không được để trống")
    }
    if(emailnhacungcap=="")
    {
        ok=false
        $('.note').text("* Email nhà cung cấp không được để trống")
    }
    if(sdtnhacungcap=="")
    {
        ok=false
        $('.note').text("* Số điện thoại nhà cung cấp không được để trống")
    }
    if(ok==true)
    {
        var Provider={
            "manhacungcap":mancc,
            "tennhacungcap":tennhacungcap,
            "dcnhacungcap":dcnhacungcap,
            "emailnhacungcap":emailnhacungcap,
            "sdtnhacungcap":sdtnhacungcap
        }
        listprovider.push(Provider)
        localStorage.setItem("provider",JSON.stringify(listprovider));
        LoadProvider();
       RefreshProvider();
        alert("Bạn đã thêm thành công") ; 
    }
}
function RefreshProvider(){
    if(listprovider =="")
    {
        $('#manhacungcap').val("NCC01");
    }
    else if(Number(listprovider[listprovider.length-1]['manhacungcap'])+1<10)
    {
        $('#manhacungcap').val("NCC0"+(Number(listprovider[listprovider.length-1]['manhacungcap'])+1));
    }
    else
        $('#manhacungcap').val("NCC"+(Number(listDMT[listDMT.length-1]['manhacungcap'])+1));
    $('#tennhacungcap').val("");
    $('#dcnhacungcap').val("");
    $('#emailnhacungcap').val("")
    $('#sdtnhacungcap').val("")
}
function LoadProvider()
{
    
    var stt=0;
    var strrr=`<tr>
            <th><input type="checkbox"></th>
            <th>STT</th>
            <th>Mã nhà cung cấp</th>
            <th>Tên nhà cung cấp</th>
            <th>Địa chỉ </th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Tác vụ</th>
        </tr>`;
    var strr=""
    for(x of listprovider)
    {
        stt=stt+1;
        if(stt<10)
        {
            strr += `<tr>
            <td><input type="checkbox"></td>
            <td>`+stt+`</td>
            <td> NCC0`+x.manhacungcap+`</td>
            <td>`+x.tennhacungcap+`</td>
            <td>`+x.dcnhacungcap+`</td>
            <td>`+x.emailnhacungcap+`</td>
            <td>`+x.sdtnhacungcap+`</td>
            <td><i onclick="EditProvider(`+ x.manhacungcap+ `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveProvider(`+ x.manhacungcap+ `)" class="fa-solid fa-trash-can"></i></td>
            </tr>`;
        }
        else
        {
            strr += `<tr>
            <td><input type="checkbox"></td>
            <td>`+stt+`</td>
            <td> NCC`+x.manhacungcap+`</td>
            <td>`+x.tennhacungcap+`</td>
            <td>`+x.dcnhacungcap+`</td>
            <td>`+x.emailnhacungcap+`</td>
            <td>`+x.sdtnhacungcap+`</td>
            <td><i onclick="EditProvider(`+ x.manhacungcap+ `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveProvider(`+ x.manhacungcap+ `)" class="fa-solid fa-trash-can"></i></td>
            </tr>`;
        }
        
    }
    var str = strrr+ strr;
    $("#addprovider").html(str);
}
LoadProvider();

function RemoveProvider(ma){
    var index=listprovider.findIndex( x => x.manhacungcap == ma);
  if(index >=0 ){
    listprovider.splice(index,1);
  }
  LoadProvider();
}
function UpdateProvider()
{
    localStorage.setItem('provider',JSON.stringify(listprovider));
    alert("Bạn đã cập nhập thành công");
    LoadProvider();
}
function EditProvider(ma)
{
    var index=listprovider.findIndex( x => x.manhacungcap == ma);
    OpenAddProvider();
    $('#manhacungcap').val(listprovider[index]['manhacungcap']);
    $('#tennhacungcap').val(listprovider[index]['tennhacungcap']);
    $('#dcnhacungcap').val(listprovider[index]['dcnhacungcap']);
    $('#emailnhacungcap').val(listprovider[index]['emailnhacungcap']);
    $('#sdtnhacungcap').val(listprovider[index]['sdtnhacungcap']);
}
function UpdateProviderA()
{
    var ten=$('#tennhacungcap').val();
    var dc=$('#dcnhacungcap').val();
    var email=$('#emailnhacungcap').val();
    var sdt=$('#sdtnhacungcap').val()
    var ok=true;
    if(ten==""  )
    {
        ok=false
        $('.note').text("* Tên nhà cung cấp không được để trống")
    }
    if(dc=="")
    {
        ok=false
        $('.note').text("* Địa chỉ nhà cung cấp không được để trống")
    }
    if(email=="")
    {
        ok=false
        $('.note').text("* Email nhà cung cấp không được để trống")
    }
    if(sdt=="")
    {
        ok=false
        $('.note').text("* Số điện thoại nhà cung cấp không được để trống")
    }
    if(ok==true)
    {
        for(x of listprovider)
        {
            if(x.manhacungcap==$('#manhacungcap').val())
            {
                x.tennhacungcap=ten;
                x.dcnhacungcap=dc;
                x.emailnhacungcap=email
                x.sdtnhacungcap=sdt
                UpdateProvider()
            }
        }
    }
}
