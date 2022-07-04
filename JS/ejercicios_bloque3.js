'use strict'

window.addEventListener('load', function(){
    console.log("dfdegeg");

    var formulario = document.querySelector('#formulario');

    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = 'none';

    formulario.addEventListener('submit', function(){
        console.log("evento submit capture");
        
        var nombre = document.querySelector('#name').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = parseInt(document.querySelector('#edad').value) ;

        if (nombre.trim() == null || nombre.trim().length == 0){
            
            alert("el nombre no es valido");
            return false;
            
        }
        if (apellidos.trim() == null || apellidos.trim().length == 0){
            
            alert("el apellidos no es valido");
            return false;
            
        }
        if (edad == null || edad <= 0 || isNaN(edad)){
            
            alert("el edad no es valido");
            return false;
            
        }




        box_dashed.style.display = 'block';

        var datos= [nombre, apellidos, edad];

        for(var index in datos){
            var parrafo = document.createElement("p");
            parrafo.append(datos[index]);
            box_dashed.append(parrafo);
        }
    

    });
});