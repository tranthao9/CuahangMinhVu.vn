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