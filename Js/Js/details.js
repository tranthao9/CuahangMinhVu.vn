$(document).ready(function(){
    $('.details1').click(function(){
        Details1()
    })
})
$(document).ready(function(){
    $('.details2').click(function(){
        Details2()
    })
})
$(document).ready(function(){
    $('.details3').click(function(){
        Details3()
    })
})
function Details1()
{
    var details = {
        main_details : "image/lenovothinkpadt460s_480_360.jpg",
        img1 : "image/lenovothinkpadt460s2banphim_480_360.jpg",
        img2 : "image/lenovothinkpadt460s2banphim_480_360.jpg",
        img3 : "image/lenovothinkpadt460s3canhtrai_480_360.jpg",
        img4 : "image/lenovothinkpadt460s4canhphai_480_360.jpg",
        Tieude : "Đánh giá Laptop Thinkpad T460s",
        tenmay : "Lenovo Thinkpad T460s",
        CauhinhChinh1 : " Core i5-6300U (i5-6200U) / RAM 8GB / SSD 128GB / Màn 14.0 inch FHD 1920x1080",
        gia1 : "11.090.000 đ",
        CauhinhChinh2 : " Core i5-6300U (i5-6200U) / RAM 8GB / SSD 256GB / Màn 14.0 inch FHD 1920x1080",
        gia2 : "11.500.000 đ",
        CauhinhChinh3 : " Core i7-6300U (i5-6200U) / RAM 8GB / SSD 256GB / Màn 14.0 inch FHD 1920x1080",
        gia3 : "15.500.000 đ",
        Danhgia : "Đánh giá Thinkpad T460S"
    }
    localStorage.setItem('details', JSON.stringify(details));
}
function Details2()
{
    var details = {
        main_details : "image/hpelitebook820g3_480_360.jpg",
        img1 : "image/hpelitebook820g3_480_360.jpg",
        img2 : "image/hpelitebook820g31_112_84.jpg",
        img3 : "image/hpelitebook820g32_112_84.jpg",
        img4 : "image/hpelitebook820g33_112_84.jpg",
        Tieude : "Đánh giá HP Elitebook 725 G3",
        tenmay : "HP Elitebook 725 G3",
        CauhinhChinh1 : " Core i5-6300U / RAM 8GB / SSD 128GB / Màn 12.5 inch FHD 1366x768",
        gia1 : "7.600.000 đ",
        CauhinhChinh2 : " Core i5-6300U / RAM 8GB / SSD 256GB / Màn 14.0 inch FHD 1366x768",
        gia2 : "8.300.000 đ",
        CauhinhChinh3 : " Core i7-6600U / RAM 8GB / SSD 256GB / Màn 12.5 inch FHD 1366x768",
        gia3 : "9.300.000 đ",
        Danhgia : "Đánh giá HP Elitebook 725 G3"
    }
    localStorage.setItem('details', JSON.stringify(details));
}
function Details3()
{
    var details = {
        main_details : "image/lenovothinkpade470_480_360.jpg",
        img1 : "image/lenovothinkpade470_112_84.jpg",
        img2 : "image/lenovothinkpade4701_112_84.jpg",
        img3 : "image/lenovothinkpade4702_112_84.jpg",
        img4 : "image/hpelitebook820g33_112_84.jpg",
        Tieude : "Đánh giá Lenovo Thinkpad E540",
        tenmay : "Lenovo Thinkpad E540",
        CauhinhChinh1 : " Core i5-6300U / RAM 8GB / SSD 128GB / Màn 12.5 inch FHD 1920x1080",
        gia1 : "8.600.000 đ",
        CauhinhChinh2 : " Core i5-6300U / RAM 8GB / SSD 256GB / Màn 14.0 inch FHD 1920x1080",
        gia2 : "9.300.000 đ",
        CauhinhChinh3 : " Core i7-6600U / RAM 8GB / SSD 256GB / Màn 12.5 inch FHD 1920x1080",
        gia3 : "12.300.000 đ",
        Danhgia : "Đánh giá Lenovo Thinkpad E540"
    }
    localStorage.setItem('details', JSON.stringify(details));
}
Details3()

detailsList = JSON.parse(localStorage.getItem('details'));
function LoadDetails()
{
   
    $('#Tieude').text(detailsList.Tieude);
    document.getElementById("main-details").src=detailsList.main_details
    document.getElementById("img1").src = detailsList.img1
    document.getElementById("img2").src = detailsList.img2
    document.getElementById("img3").src = detailsList.img3
    document.getElementById("img4").src = detailsList.img4
    $('#contentF').text(detailsList.tenmay)
    $('.contentF').text(detailsList.tenmay)
    $('#CauHinhChinh1').text(detailsList.CauhinhChinh1)
    $('#CauHinhChinh2').text(detailsList.CauhinhChinh2)
    $('#CauHinhChinh3').text(detailsList.CauhinhChinh3)
    $('.CauHinhChinh1').text(detailsList.CauhinhChinh1)
    $('.CauHinhChinh2').text(detailsList.CauhinhChinh2)
    $('.CauHinhChinh3').text(detailsList.CauhinhChinh3)
    $('#Gia1').text(detailsList.gia1)
    $('#Gia2').text(detailsList.gia2)
    $('#Gia3').text(detailsList.gia3)
    $('.Gia1').text(detailsList.gia1)
    $('.Gia2').text(detailsList.gia2)
    $('.Gia3').text(detailsList.gia3)
    $('#DanhGiaLapTop').text(detailsList.Danhgia)
}

LoadDetails();
$(document).ready(function(){
   LoadDetails();
})