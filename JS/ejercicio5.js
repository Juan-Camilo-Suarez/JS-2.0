'use strict'

/*
todo los numeros numeros divisores de un numero
*/

var numero1 = parseInt(prompt('escribe el num', 1));

for (var i = 0; i <= numero1; i++) { 
    if (numero1 %i == 0) {
        console.log('divisor' +  i);
    }
}
