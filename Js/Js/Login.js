
$("#target").submit(function (event) {
    var _tailkhoan = $('#username').val();
    var _matkhau = $('#pwd').val();  
    var d=0;
    for(let x of listregister)
    {
        if(_tailkhoan==x.username && _matkhau==x.password)
        {
            var user = { tailkhoan: _tailkhoan, matkhau: _matkhau };
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = "Adminpage.html";    
            d=d+1;
        }
        
    }
    event.preventDefault();
    if(d == 0)
    {
        alert("Tài khoản hoặc mật khẩu không đúng !")
    }
   
});   
    
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePhone(Phone) {
    var filter = /^[0-9-+]+$/;
    if (filter.test(Phone)) {
        return true;
    }
    else {
        return false;
    }
}
listregister= JSON.parse(localStorage.getItem("register")) || []
function ADDPeople()
{
    var name=$('#namedk').val();
    var add=$('#addressdk').val();
    var phone=$('#phonedk').val();
    var email=$('#emaildk').val();
    var user=$('#usernamedk').val();
    var pw=$('#pwddk').val();
    var chucvu=$('#txt_chucvudk').val();
    var tinh=$('#txt_tinhdk').val();
   var ok=true;
    if(name=="")
    {
        alert("Tên không được để trống");
        ok=false;
    }
    else
    {
        if(add=="")
        {
            alert("Địa chỉ không được để trống");
            ok=false;
        }
        else{ 
            if(phone.length != 10 || validatePhone(phone)==false)
            {
                alert("Số điện thoại chưa đúng")
                ok=false;
            }
            else
            {
                if( !(validateEmail(email)) )
                {
                    alert("Email chưa đúng")
                    ok=false;
                }
                
                else{
                    if(email =="")
                   {
                    alert("Email không được để trống");
                    ok=false;
                   }
                    
                    else
                    {
                        if(user =="")
                       {
                        alert("Username không được để trống");
                        ok=false;
                       }
                        else
                        {
                            if(pw.length != 8)
                            {
                                alert("Password phải có độ dài 8 ký tự !");
                                ok=false;
                            }
                            else
                            {
                                if(tinh == "" )
                                {
                                    alert("Bạn chưa chọn tỉnh");
                                    ok=false;
                                }
                                else
                                {
                                    if(chucvu=="")
                                    {
                                        alert("Bạn chưa chọn chức vụ")
                                        ok=false;
                                    }
                                    
                                }
                                
                            }
                            
                        }
                    }
                }
               
            }
        }
    }
    $("#targetdk").submit(function (event) { 
        if (ok==true) {
            var dangky = {
                "username":user,
                "password":pw,
                "name":name,
                "phone":phone,
                "email":email,
                "tinh":tinh,
                "chucvu":chucvu,
                "address":add};
                if(listregister==null)
                {
                    listregister=[dangky];
                }
                else{
                    listregister.push(dangky)
                }
           
            localStorage.setItem('register', JSON.stringify(listregister));
            window.location.href = "Đăng nhập.html"
            alert("Chúc mừng bạn đăng ký thành công")}
        else
        {
            
        }
        event.preventDefault();
    });  
}