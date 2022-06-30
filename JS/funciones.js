'use strict'

//Funciones

function calculadora(){
    return"hola soy una calculadora";
}
console.log(calculadora());

//funciones con parametros

function suma(a,b){
    console.log("suma " + a + " + " + b + " = " + (a+b));

}
suma(2,5);

//funciones con parametros opsionales
function resta(a,b=1){
    console.log("resta " + a + " + " + b + " = " + (a-b));

}
resta(5);
