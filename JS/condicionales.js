'use strict';

//CONDICIONAL IF

var edad = 1;
var edad2 = 2;

if(edad > edad2){
console.log("la edad 1 es mayor")
}else{
    console.log("la edad 1 es menor")
}

//SWITCH

var edad = 18;

var imprime = "";

switch(edad){
    case 18:
        imprime = "acabas de ser mayor de edad";
        break;
    case 75:
        imprime = "eres muy viejo"
        break;
    default:
        imprime = "ere neutro"
        break;    

}
console.log(imprime)