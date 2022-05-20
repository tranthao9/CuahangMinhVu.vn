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
    if(listDMT == "")
    {
        mad=1;
    }
    else
    {
        mad=listDMT[listDMT.length-1]['madong']+1;
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
        var dong={
            'madong':mad,
            "tendong":tend,
            "motad":motad,
            "hinhanh":file,
            "soluongDT":number
        }
        listDMT.push(dong)
        localStorage.setItem("dongmt",JSON.stringify(listDMT));
        LoadDongMT();
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
    $('#soluongDT').val("1")
}
function LoadDongMT()
{
    
    var stt=0;
    var strrr=`<tr>
            <th><input type="checkbox"></th>
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
            <td><input type="checkbox"></td>
            <td>`+stt+`</td>
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
            <td><input type="checkbox"></td>
            <td>`+stt+`</td>
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
LoadDongMT();

function RemoveDongMT(ma){
    var index=listDMT.findIndex( x => x.madong == ma);
  if(index >=0 ){
    listDMT.splice(index,1);
  }
  LoadDongMT();
}
function UpdateDongMT()
{
    localStorage.setItem('dongmt',JSON.stringify(listDMT));
    alert("Bạn đã cập nhập thành công");
    LoadDongMT();
}
function EditDongMT(ma)
{
    var index=listDMT.findIndex( x => x.madong == ma);
    OpenAddDongMT();
    $('#madong').val(listDMT[index]['madong']);
    $('#tendong').val(listDMT[index]['tendong']);
    $('#motad').val(listDMT[index]['motad']);
    $('#hinhanh').val(listDMT[index]['hinhanh']);
    $('#soluongDMT').val(listDMT[index]['soluongDT']);
}
function UpdateDongMTT()
{
    var ten=$('#tendong').val();
    var mota=$('#motad').val();
    var file=$('#hinhanh').val();
    var soluong=$('#soluongDMT').val()
    var ok=true;
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
    else
    {
        alert("Dữ liệu không được để trống")
    }

    
   
}
