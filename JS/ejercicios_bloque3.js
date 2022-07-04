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
        var edad = document.querySelector('#edad').value;


        box_dashed.style.display = 'block';

        var datos= [nombre, apellidos, edad];

        for(var index in datos){
            var parrafo = document.createElement("p");
            parrafo.append(datos[index]);
            box_dashed.append(parrafo);
        }
    

    });
});