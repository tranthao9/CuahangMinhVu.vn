function ExitInvoiceInput(){
    $('.display').css({'transform':'scaleY(0)'});
    $('.AddInvoiceInput').css({'transform':'scaleY(0)'});
    $('.note').text('')
}
listInvoiceInput = JSON.parse(localStorage.getItem("InvoiceInput")) || [];
function OpenInvoiceInput(){
    RefreshInvoiceInput();
    $('.display').css({'transform':'scaleY(1)'});
    $('.AddInvoiceInput').css({'transform':'scaleY(1)'});
    
}

function ADDInvoiceInput()
{
    var mahd=0;
    var mancc=$('#manhacungcapI').val();
    var manvn=$('#manhanvienI').val();
    var masp=$('#masanphamI').val();
    var ngaynhap=$('#ngaynhapI').val();
    var soluong=$('#soluongsanphamI').val();
    var gia=$('#giasanphamI').val();
    var ok=true;
    if(listInvoiceInput == "")
    {
        mahd=1;
    }
    else
    {
        mahd=listInvoiceInput[listInvoiceInput.length-1]['mahd']+1;
    }
    if(mancc==""  )
    {
        ok=false
        $('.note').text("* Mã nhà nhà cung cấp không được để trống")
    }
    if(manvn=="")
    {
        ok=false
        $('.note').text("* Mã nhân viên nhập không được để trống")
    }
    if(masp=="")
    {
        ok=false
        $('.note').text("* Mã sản phẩm không được để trống")
    }
    if(ngaynhap=="")
    {
        ok=false
        $('.note').text("* Ngày nhập không được để trống")
    }
    if(gia=="")
    {
        ok=false
        $('.note').text("* Giá sản phẩm không được để trống")
    }
    if(soluong=="")
    {
        ok=false
        $('.note').text("* Số lượng sản phẩm không được để trống")
    }
    if(ok==true)
    {
        var invoiceInput={
            "mahd":mahd,
            "manhacungcap":mancc,
            "manhanvien":manvn,
            "masanpham":masp,
            "ngaynhap":ngaynhap,
            "gianhap":gia,
            "soluong":soluong
        }
        listInvoiceInput.push(invoiceInput)
        localStorage.setItem("InvoiceInput",JSON.stringify(listInvoiceInput));
        LoadInvoiceInput();
       RefreshInvoiceInput();
        alert("Bạn đã thêm thành công") ; 
    }
}
function RefreshInvoiceInput(){
    if(listInvoiceInput == "")
    {
       $('#mahoadonnhap').val('HDN01')
    }
    else if(Number(listInvoiceInput[listInvoiceInput.length-1]['mahd'])+1<10)
    {
        $('#mahoadonnhap').val("HDN0"+(Number(listInvoiceInput[listInvoiceInput.length-1]['mahd'])+1));
    }
    else
        {$('#mahoadonnhap').val("HDN"+(Number(listInvoiceInput[listInvoiceInput.length-1]['mahd'])+1));
        }
    $('#manhacungcapI').val();
    $('#manhanvienI').val();
    $('#masanphamI').val();
    $('#ngaynhapI').val();
    $('#soluongsanphamI').val();
    $('#giasanphamI').val();
}
function LoadInvoiceInput()
{
    
    var stt=0;
    var strrr=`<tr style="font-size:13px">
            <th><input type="checkbox"></th>
            <th>STT</th>
            <th>Mã hóa đơn nhập</th>
            <th>Mã nhà cung cấp</th>
            <th>Mã nhân viên nhập</th>
            <th>Ngày nhập</th>
            <th>Mã sản phẩm</th>
            <th>Giá sản phẩm</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Tác vụ</th>
        </tr>`;
    var strr=""
    for(x of listInvoiceInput)
    {
        stt=stt+1;
        if(stt<10)
        {
            strr += `<tr>
            <td><input type="checkbox"></td>
            <td>`+stt+`</td>
            <td> HDN0`+x.mahd+`</td>
            <td>`+x.manhacungcap+`</td>
            <td>`+x.manhanvien+`</td>
            <td>`+x.ngaynhap+`</td>
            <td>`+x.masanpham+`</td>
            <td>`+x.gianhap+`</td>
            <td>`+x.soluong+`</td>
            <td>`+x.soluong * x.gianhap+`</td>
            <td><i onclick="EditInvoiceInput(`+ x.mahd+ `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveInvoiceInput(`+ x.mahd+ `)" class="fa-solid fa-trash-can"></i></td>
            </tr>`;
        }
        else
        {
            strr += `<tr>
            <td><input type="checkbox"></td>
            <td>`+stt+`</td>
            <td> HDN`+x.mahd+`</td>
            <td>`+x.manhacungcap+`</td>
            <td>`+x.manhanvien+`</td>
            <td>`+x.ngaynhap+`</td>
            <td>`+x.masanpham+`</td>
            <td>`+x.gianhap+`</td>
            <td>`+x.soluong+`</td>
            <td>`+x.soluong * x.gianhap+`</td>
            <td><i onclick="EditInvoiceInput(`+ x.mahd+ `)" class="fa-solid fa-pen-to-square"></i>   <i onclick="RemoveInvoiceInput(`+ x.mahd+ `)" class="fa-solid fa-trash-can"></i></td>
            </tr>`;
        }
        
    }
    var str = strrr+ strr;
    $("#invoice_input").html(str);
}
LoadInvoiceInput();

function RemoveInvoiceInput(ma){
    var index=listInvoiceInput.findIndex( x => x.mahd == ma);
  if(index >=0 ){
    listInvoiceInput.splice(index,1);
  }
  LoadInvoiceInput();
}
function UpdateInvoiceInput()
{
    localStorage.setItem('InvoiceInput',JSON.stringify(listInvoiceInput));
    alert("Bạn đã cập nhập thành công");
    LoadInvoiceInput();
}
function EditInvoiceInput(ma)
{
    var index=listInvoiceInput.findIndex( x => x.mahd == ma);
    OpenInvoiceInput()
    $('#mahoadonnhap').val(listInvoiceInput[index]['mahd']);
    $('#manhacungcapI').val(listInvoiceInput[index]['manhacungcap']);
    $('#manhanvienI').val(listInvoiceInput[index]['manhanvien']);
    $('#masanphamI').val(listInvoiceInput[index]['masanpham']);
    $('#ngaynhapI').val(listInvoiceInput[index]['ngaynhap']);
    $('#soluongsanphamI').val(listInvoiceInput[index]['soluong']);
    $('#giasanphamI').val(listInvoiceInput[index]['gianhap']);
}
function UpdateInvoiceInputA()
{
    var mancc=$('#manhacungcapI').val();
    var manvn=$('#manhanvienI').val();
    var masp=$('#masanphamI').val();
    var ngaynhap=$('#ngaynhapI').val();
    var soluong=$('#soluongsanphamI').val();
    var gia=$('#giasanphamI').val();
    var ok=true;
    if(mancc==""  )
    {
        ok=false
        $('.note').text("* Mã nhà nhà cung cấp không được để trống")
    }
    if(manvn=="")
    {
        ok=false
        $('.note').text("* Mã nhân viên nhập không được để trống")
    }
    if(masp=="")
    {
        ok=false
        $('.note').text("* Mã sản phẩm không được để trống")
    }
    if(ngaynhap=="")
    {
        ok=false
        $('.note').text("* Ngày nhập không được để trống")
    }
    if(gia=="")
    {
        ok=false
        $('.note').text("* Giá sản phẩm không được để trống")
    }
    if(soluong=="")
    {
        ok=false
        $('.note').text("* Số lượng sản phẩm không được để trống")
    }
    if(ok==true)
    {
        for(x of listInvoiceInput)
        {
            if(x.mahoadonnhap==$('#manhacungcap').val())
            {
               x.manhacungcap=mancc;
               x.manhanvien=manvn;
               x.ngaynhap=ngaynhap;
               x.masanpham=masp;
               x.gianhap=gia;
               x.soluong=soluong
                UpdateInvoiceInput()
            }
        }
    }
}
