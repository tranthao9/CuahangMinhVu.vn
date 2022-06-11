function ExitD(){
    $('.display').css({'transform':'scaleY(0)'});
    $('.AddDongmaytinh').css({'transform':'scaleY(0)'});
    $('.note').text(' ')
}
listDMT= JSON.parse(localStorage.getItem("dongmt")) || []
function OpenAddDongMT(){
    RefreshD();
    $('.display').css({'transform':'scaleY(1)'});
    $('.AddDongmaytinh').css({'transform':'scaleY(1)'});
    
}

function ADDDongMT()
{
    var mad=0;
    var tend=$('#tendong').val();
    var motad=$('#motad').val();
    var file=$('#hinhanh').val();
    var number=$('#soluongDMT').val();
    var kt=true;
    var stt=0;
    if(listDMT == "")
    {
        mad=1;
        stt=1;
    }
    else
    {
        mad=listDMT[listDMT.length-1]['madong']+1;
        stt=listDMT.length+1;
    }
    if(tend==""  )
    {
        kt=false
        $('.note').text("* Tên dòng máy tính không được để trống")
    }
    if( motad=="" )
    {
        kt=false
        $('.note').text("* Mô tả không được để trống")
    }
    if( file=="" )
    {
        kt=false
        $('.note').text("* Bạn chưa chọn hình ảnh")
    }
    if(kt==true)
    {
        $('.note').text("*")
        var dong={
            'stt':stt,
            'madong':mad,
            "tendong":tend,
            "motad":motad,
            "hinhanh":file,
            "soluongDT":number
        }
        listDMT.push(dong)
        localStorage.setItem("dongmt",JSON.stringify(listDMT));
        LoadDongMT(listDMT)
       RefreshD();
        alert("Bạn đã thêm thành công") ; 
    }
}
function RefreshD(){
    if(listDMT =="")
    {
        $('#madong').val("D01");
    }
    else if(Number(listDMT[listDMT.length-1]['madong'])+1<10)
    {
        $('#madong').val("D0"+(Number(listDMT[listDMT.length-1]['madong'])+1));
    }
    else
        $('#madong').val("D"+(Number(listDMT[listDMT.length-1]['madong'])+1));
    $('#tendong').val("");
    $('#motad').val("");
    $('#soluongDMT').val("1")
    $('#hinhanh').val("");
}
function LoadDongMT(listDMT)
{
    
    var stt=0;
    var strrr=`<tr>
            <th><input type="checkbox" onclick="CheckAll()"></th>
            <th>STT</th>
            <th>Mã dòng máy tính</th>
            <th>Tên dòng máy tính</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Mô tả</th>
            <th>Tác vụ</th>
        </tr>`;
    var strr=""
    for(x of listDMT)
    {
        var a = x.hinhanh.lastIndexOf('\\');
        stt=stt+1;
        if(stt<10)
        {
            strr += `<tr>
            <td><input class="input2" type="checkbox" name="check_all"></td>
            <td>`+x.stt+`</td>
            <td> D0`+x.madong+`</td>
            <td>`+x.tendong+`</td>
            <td><img src="image/`+(x.hinhanh).slice(a+1,x.hinhanh.length)+`" width="80px"></img></td>
            <td>`+x.soluongDT+`</td>
            <td>`+x.motad+`</td>
            <td><i onclick="EditDongMT(`+ x.madong+ `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveDongMT(`+ x.madong+ `)" class="fa-solid fa-trash-can"></i></td>
            </tr>`;
        }
        else
        {
            strr += `<tr>
            <td><input class="input2" type="checkbox" name="check_all"></td>
            <td>`+x.stt+`</td>
            <td> D`+x.madong+`</td>
            <td>`+x.tendong+`</td>
            <td><img src="image/`+(x.hinhanh).slice(a+1,x.hinhanh.length)+`" width="80px"></img></td>
            <td>`+x.soluongDT+`</td>
            <td>`+x.motad+`</td>
            <td><i onclick="EditDongMT(`+ x.madong+ `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveDongMT(`+ x.madong+ `)" class="fa-solid fa-trash-can"></i></td>
            </tr>`;
        }
        
    }
    var str = strrr+ strr;
    $("#adddongMT").html(str);
}
LoadDongMT(listDMT)

function RemoveDongMT(ma){
    var index=listDMT.findIndex( x => x.madong == ma);
  if(index >=0 ){
    listDMT.splice(index,1);
  }
  

  LoadDongMT(listDMT)
}
function RemoveSTT(ma)
{
    var index=listDMT.findIndex( x => x.stt== ma);
  if(index >=0 ){
    listDMT.splice(index,1);
  }
  for(var i=0;i<listDMT.length;i++)
    {
        listDMT[i].stt=i+1;
    }
  localStorage.setItem('dongmt',JSON.stringify(listDMT));
 
}
function UpdateDongMT()
{
    localStorage.setItem('dongmt',JSON.stringify(listDMT));
    alert("Bạn đã cập nhập thành công");
    RefreshD();
    LoadDongMT(listDMT)
}
function EditDongMT(ma)
{
    var index=listDMT.findIndex( x => x.madong == ma);
    OpenAddDongMT();
    $('#madong').val(listDMT[index]['madong']);
    $('#tendong').val(listDMT[index]['tendong']);
    $('#motad').val(listDMT[index]['motad']);
    $('#soluongDMT').val(listDMT[index]['soluongDT']);
}
function UpdateDongMTT()
{
    var ten=$('#tendong').val();
    var mota=$('#motad').val();
    var file=$('#hinhanh').val();
    var soluong=$('#soluongDMT').val()
    var ok=true;
    for(var i=0;i<listDMT.length;i++)
    {
        listDMT.stt=i+1;
    }
    if(ten==""  )
    {
        ok=false
        $('.note').text("* Tên dòng máy tính không được để trống")
    }
    if( mota=="" )
    {
        ok=false
        $('.note').text("* Mô tả không được để trống")
    }
    if(ok==true)
    {
        $('.note').text("*")
        for(x of listDMT)
        {
            if(x.madong==$('#madong').val())
            {
                x.tendong=ten;
                x.motad=mota;
                x.soluongDT=soluong
                if(file=="")
                {
                    x.hinhanh=x.hinhanh;
                    UpdateDongMT()
                }
                else
                {
                    x.hinhanh=file
                    UpdateDongMT()
                }
               
            }
        }
    }
}
function CheckAll() {
    var ids = document.getElementsByClassName("input2");
    if(ids[0].checked == true)
    {
        for (var i = 0; i < ids.length; i++) {
            if (ids[i].name == "check_all") {
                ids[i].checked = false;
            }
        }
    }
    else
    {
        for (var i = 0; i < ids.length; i++) {
            if (ids[i].name == "check_all") {
                ids[i].checked = true;
            }
        }
    }
    
}
function XoaAll()
{
    var ids = document.getElementsByClassName("input2");
    var i=0
    var x=ids.length;
    while(i < ids.length) {
        for(var z=0;z<x;z++)
        {
            if (ids[z].checked  == true ) {
                ids[z].className=ids[z].className.replace("input2","")
                RemoveSTT(z+1);
                x=x-1;
                break;
            }
        }
        i=i+1;
    }
    LoadDongMT(listDMT)
    
}
function Search()
{
    if($('#textDMTMa').val() != "" && $('#textDMTT').val()=="")
    {
        var listNew = []
        for(var i =0;i<listDMT.length;i++)
        {
            if( $('#textDMTMa').val().includes(String(listDMT[i].madong))==true)
            {
                listNew.push(listDMT[i])
                break;
            }
            
        }
        LoadDongMT(listNew)
    }
    else if($('#textDMTMa').val() == "" && $('#textDMTT').val() !="")
    {
        var listNew2 = [];
        for(var i =0;i<listDMT.length;i++)
        {
            if($('#textDMTT').val().includes(String(listDMT[i].tendong))==true)
            {
                
                listNew2.push(listDMT[i])
            }
            
        }
        LoadDongMT(listNew2)
    }
    else if($('#textDMTMa').val() != "" && $('#textDMTT').val() !="")
    {
        var listNew3 = [];
        for(var i =0;i<listDMT.length;i++)
        {
            if($('#textDMTT').val().includes(String(listDMT[i].tendong))==true && 
            $('#textDMTMa').val().includes(String(listDMT[i].madong))==true)
            {
               
                listNew3.push(listDMT[i])
                break;
            }
            
        }
        LoadDongMT(listNew3)
    }
    else
    {
        LoadDongMT(listDMT);
    }
}
