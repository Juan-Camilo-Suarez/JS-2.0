'use strict'
/*
que nos diga si el numero es par o impar
si no es valido enotnces un num nuevo
*/
var numero1 = parseInt(prompt('escribe el numero ', 0));



while( isNaN(numero1)){

    numero1 = parseInt(prompt('escribe el numero 1'));
} 
if (numero1 %2  == 0){
    alert("par")
} 