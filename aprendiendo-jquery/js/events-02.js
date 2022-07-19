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

    //FOCUS Y BLUR
    //acciones dentro y fuera dentro de un elemnto html
    /*
    var nombre = $("#nombre");

    nombre.focus(function(){
    $(this).css("border", "5px solid green");
    });

    nombre.blur(function(){
        $(this).css("border", "5px solid blue");});
        //sacar los valores de un input
        $("#datos").text($(this).val()).show();
        */

    
    var nombre =  $("#nombre");
    var datos = $("#datos");
    
    nombre.on("focus", function () {
        $(this).css("border", "2px solid green");
    });
    
    nombre.on("blur", function () {
        $(this).css("border", "1px solid #ccc");
    
        datos.text($(this).val()).show();
    });

    //mousedown and mouseup
    //precionar y levantar

    datos.mousedown(function(){

    $(this).css("border-color", "gray")
    });
    
    datos.mouseup(function(){

        $(this).css("border-color", "black")
        });

        //MOUSEMOVE
        //captura el movimiento del mause
       $(document).mousemove(function(){
           console.log("en x " + event.clientX)
           console.log(" en y "  + event.clientY)
           $("#sigueme").css("left", event.clientX)
           $("#sigueme").css("top", event.clientY)
       })     
 });