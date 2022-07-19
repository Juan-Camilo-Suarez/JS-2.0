$(document).ready(function() {
    
    //mouseOver y mouseOut
    var caja = $("#caja");


    caja.mouseover(function(){
        $(this).css('background', 'red');
    });

    caja.mouseout(function(){
        $(this).css('background', 'green');
    });

 });