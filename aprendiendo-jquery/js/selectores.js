'use strict'

// siempre $ para jquery
$(document).ready(function() { 
    // selector ID
    var rojo  = $("#rojo").css("background", "red")
                        .css("color", "white");
    
    var amarillo = $("#amarillo").css("background", "yellow")
    .css("color", "green"); 
    
    var verder = $("#verde").css("background", "green");

    //SELEctor BY Class

    var mi_clase = $(".zebra").css("padding", "10px");

    console.log(mi_clase);

//agregar la clase zebra a otra clase cuando se haga click

    $('.sin_borde').click(function() {
        console.log('Click dado');
        $(this).addClass('zebra');
    })


//SELECTOR BY ETIQUETA

//$ es para cargarel documento y elemntos del don

    var parrafos = $('p').css("cursor", "pointer")
    
    parrafos.click(function() {
        /*

        VARIANTE 1

        if($(this).hasClass('zebra')){
            $(this).addClass('grande');
        }
        */
        var that = $(this);
        
        if(!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }

        
    });

 });