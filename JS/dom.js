'use strict'

//DOM

// SELECCIONAR ELEMENTOS CON ID EN CONCRETO

function cambiaDeColor(color) {
    caja.style.background = color;
}
//obtener un elemento de html por id
var caja = document.getElementById("micaja");

//TAMBIEN SE PUEDE SELECT UN ELEMNTO CON queryselector
// # -seleciona por id  // . sleciona clases
var querySelector = caja.querySelector("#micaja");
//para captura el html usamos .innerHTML
console.log(caja);

//para cambiar el valor de html desde js
caja.innerHTML = 'TEXTO DESDE js';
//agregar style
caja.style.background = 'blue ';
caja.style.padding = '20px';
caja. style.color = 'white';

//se le puede poder una clase a un elemnto html
caja.className = "hoal";



//COMO CONSEGUIR ELEMENTO POR SU ETIQUETA
var totodslosdivs = document.getElementsByTagName("div");
console.log(totodslosdivs);
//accder a un solo div
var contenidoEnTexto = totodslosdivs[2].textContent;
console.log(contenidoEnTexto);

//crear un parrafor por cada valor de cada div
for (var valor in totodslosdivs) {
    
    //if para que meta solo valores de text
    if(typeof totodslosdivs[valor].textContent == 'string'){
    //para crear un elemnto de tipo etiqueda
    var parrafo = document.createElement("p");
    //para crear un texto
    var texto = document.createTextNode(totodslosdivs[valor].textContent);
    // agregar texto a un parrafo
    parrafo.appendChild(texto);
    //agregar a una section
    document.querySelector("#misection").appendChild(parrafo);
    }
}
    


//COMO CONSEGUIR ELEMENTO POR SU CLASE