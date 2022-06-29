'use strict'
// tabla de multiplicar

var numero1 = parseInt(prompt('escribe el numero 1', 1));

for (var i = 0; i <= 10; i++) {
    document.write(i + " x " + numero1 + " = " + (i*numero1) + "<br />");

}