'use strict'
//EVENTOS DE RATON


///el load permite que la pagina se carge primero el html 
// con eso podemos poder el script al inicio del html sin problema
window.addEventListener('load', () =>{
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
    
    
    // _-----------------------EVENTOS del teclado _-------
    //Focus
    //cada vez que una persona se pare en el elemnto que yo le diga
    var input = document.querySelector('#a');
    
    input.addEventListener('focus', function(){
        console.log("estas dentro del input");
    
    });
    //BLUR
    //cada vez que la persona salga del input
    input.addEventListener('blur', function(){
        console.log("estas fuera del input");
    
    });
    //KEYDOWN
    // saca todas las letras que estan pulsando dentro del input
    
    input.addEventListener('keydown', function(event){
        console.log("pulsando la teclado del input", String.fromCharCode(event.keyCode));
    
    });
    
    
    //KEYPRESS
    //teclas presionadas
    input.addEventListener('keypress', function(event){
        console.log("presiona la teclado del input", String.fromCharCode(event.keyCode));
    
    });
    
    //KEYUP
    
    //capturar la letra soltada
    input.addEventListener('keyup', function(event){
        console.log("soltada la teclado del input", String.fromCharCode(event.keyCode));
    
    });

    
});

    
