'use strict'
//EVENTOS DE RATON
var boton = document.querySelector('#boton');

//DOS FORMAS DE PASAR ACTIONES ONCLICK
//1. ATRAVEZ EDEL ONCLICK EN EL HTML
function cambiarColor(){
    var bg = boton.style.backgroundColor;
    if(bg == "green"){
        boton.style.backgroundColor = "red";
    }else{
        boton.style.backgroundColor = "green";
    }
    return bg;

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";
    return true;
}
//2. ATRAVEZ DEL BOTON EN JS  
var boton = document.querySelector('#boton');

boton.addEventListener('click', function(){
    cambiarColor();
});

//MOUSE OVER  cuando pasa por encima de algo ocurre una accion

boton.addEventListener('mouseover', function(){
    boton.style.backgroundColor = "#ccc";
});

//MOUSE OUT ALGO PASA CUANDO SALE
boton.addEventListener('mouseout', function(){
    boton.style.backgroundColor = "blue";
});


    
