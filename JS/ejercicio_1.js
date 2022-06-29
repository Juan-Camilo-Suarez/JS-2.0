'use strict';

/*
pograma que pide dos numeros y nos diga cual es mayor y cual es menor y cual es igual
Plus: si los numeros nos un numero o si soon iguales a cero nos vuelva a pedir todo
*/

var numero1 = parseInt(prompt('escribe el numero 1'));
var numero2 = parseInt(prompt('escribe el numero 2'));


while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){

    numero1 = parseInt(prompt('escribe el numero 1'));
    numero2 = parseInt(prompt('escribe el numero 2'));
}
if(numero1 == numero2){
    alert("numero son iguales");
}else if(numero1> numero2){
    alert("el numero mayor es : " + numero1);
    alert("el numero menor es : " + numero2);
}else if(numero2> numero1){
    alert("el numero mayor es : " + numero2);
    alert("el numero menor es : " + numero1);
}else{
    alert("numeros incorrectos");
}

