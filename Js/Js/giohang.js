
function addCart(item){
  item.quantity =1;
  var list;
  if(localStorage.getItem('Cart')==null)
  {
    list=[item];
  }
  else
  {
    list=JSON.parse(localStorage.getItem('Cart')) || [];
    let ok=true;
    for(let x of list)
    {
      if(x.id == item.id)
      {
        x.quantity += 1;
        ok=false;
        break;
      }
    }
    if(ok)
    {
      list.push(item);
    }
  }
  localStorage.setItem("Cart",JSON.stringify(list));
  alert("Thêm vào giỏ hàng thành công");
  location.reload();
}
var listcart=JSON.parse(localStorage.getItem('Cart')) || []
function LoadData(){
  var str="";
  var n=0;
  var t=0;
  var d=0;
  for(x of listcart){
    n=n+x.quantity
    t += x.price * x.quantity;
    str += `<div class="Cart-product">
    <div class="cart-item cart-column">
        <img class="Cart-img" src="`+x.image+`">
        <span class="Cart-infor">`+x.name+`</span>
    </div>
    <span class="cart-price price-product cart-column">`+x.price+`đ</span>
    <div class="cart-quantity cart-quantity-ca cart-column">
        <input style="width:40% ;line-height: 30px;border-radius: 5px;
        border: 1px solid #56CCF2;background-color: #eee;color: #333;
        padding-left: 5px;" id="q_`+Number(x.id)+`" onchange="updateQuantity(`+ x.id + `)" type="number" value="`+ x.quantity + `">
        <button onclick="Remove(`+ x.id + `)" class="Cart-xoa" type="button">Xóa</button>
    </div>
</div>
    `;
  }
  $('.over-cart').html(str);
  $('.cart-total-price').text(t+" VNĐ");
  $('#Soluong').text("("+n+") sản phẩm");
}
LoadData();
function Paying(){
  window.location.href="Paying.html";
}
function RemoveCart(){
  localStorage.setItem('Cart',null);
  location.reload();
}
function Remove(id){
  var index=listcart.findIndex( x => x.id == id);
  if(index >=0 ){
    listcart.splice(index,1);
  }
  LoadData();
}
function UpdateCart(){
  localStorage.setItem('Cart',JSON.stringify(listcart));
  alert("Bạn đã cập nhập thành công giỏ hàng");
}
function updateQuantity(id) {
  var quantity = Number($('#q_'+id).val());
  var index = listcart.findIndex(x => x.id == id);
  if (index >= 0 && quantity >=1) {
    listcart[index].quantity = quantity; 
  }
  LoadData();
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function DatHang() {
  var hoten = $('#txt_hoten').val();
  if (hodem == null || hodem == '' || hodem.length > 50) {
      $('#s_hdem').html('Sai định dạng họ đệm');
  } else {
      $('#s_hdem').html('*');
  }
  var email = $('#txt_email').val();
  if (email != '' && !validateEmail(email)) {
      $('#s_email').html('Sai định dạng email');
  } else {
      $('#s_email').html('');
  }
  //Print
  var str = `
      <section style="text-align: center;">
          <h1>HÓA ĐƠN GIÁ TRỊ GIA TĂNG</h1>
      </section>
      <div style="font-style: italic;">
          05 tháng 05 năm 2021        
      </div>
      <div class="donvi">Tên đơn vị bán hàng: Công ty ABC</div>
      <div>Người mua hàng:`+hodem+`</div>
      <div>Email:`+email+`</span></div>
      <table style="width: 100%;">
          <tr>
              <th>Tên hàng</th>
              <th>Số lượng</th>
              <th>Thành tiên</th>
          </tr>            
  `;
  var n = 0;
  for (x of list) {
      str += `
      <tr>
          <td>`+(++n)+`</td>
          <td>`+x.name+`</td>
          <td>`+x.quantity+`</td>
          <td>`+ (x.price * x.quantity) +`</td>
       </tr>
      `;
  }
  str += `</table>
  <img src="image/product-02.png">
  `;
  printHtml(str);
  //printHtmlWithUrl('cart.html')
} 


