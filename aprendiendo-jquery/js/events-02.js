$(document).ready(function() {
    
    //mouseOver y mouseOut
    var caja = $("#caja");

/*
    caja.mouseover(function(){
        $(this).css('background', 'red');
    });

    caja.mouseout(function(){
        $(this).css('background', 'green');
    });
    */

    //HOVER hace lo mismo que mouseover y mouseOut pero mas corto
    
    function cambiaROjo(){
        $(this).css('background', 'red');
    }
    function cambiaVerde(){
        $(this).css('background', 'green');
    }
    
    caja.hover(cambiaROjo, cambiaVerde);


    //Click, double click
    caja.click(function(){
        $(this).css('background', 'blue')
               .css('color', 'white');
    });

    caja.dblclick(function(){
        $(this).css('background', 'pink')
               .css('color', 'yellow');
    });

    
 });