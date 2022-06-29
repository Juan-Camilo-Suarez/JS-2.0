'use strict'
/*
utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
mientras que no metan un numero negativo
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("introduce numeros hasta meter uno negativo"));

    if(isNaN(numero)){
        numero = 0;
        }else if(numero >= 0){
            suma += numero;
            contador++;
        }
}while(numero >= 0)

alert("la suma de todos los numeros: "+suma);
alert("la media de todos los numeros: " + (suma / contador));