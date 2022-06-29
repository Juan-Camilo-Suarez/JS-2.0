'use strict'
/*
mostrar todos los numeros impares del intervalor

 */

var numero1 = parseInt(prompt('escribe el num 1'));
var numero2 = parseInt(prompt('escribe el num 2'));

//el document agrega texto en el body de la pg 


while(numero1 < numero2) {
 numero1++;
 if(numero1%2 != 0) {   
    console.log('el es impar : ' + numero1)
 }

}