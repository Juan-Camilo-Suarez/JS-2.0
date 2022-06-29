'use strict'
/*
mostrar todos los numeros entre dos numeros introduciodos por el user

*/

var numero1 = parseInt(prompt('escribe el num 1'));
var numero2 = parseInt(prompt('escribe el num 2'));

//el document agrega texto en el body de la pg 
document.write("<h1>desde" + numero1 + " hasta " + numero2 + "Estan los numeros:</h1>");

for (var i = numero1; i <= numero2; i++) {
    document.write(i+ "<br/>");
}