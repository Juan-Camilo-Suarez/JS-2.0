'use strict'

//DOM

// sleccionar elemnto por id en html y editarlos

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