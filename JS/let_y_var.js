//codigo mas limpio 
'use strict'
alert("nuevo")

//var
//la var es global y puede cambiar ne cualquier lado
var numero = 40;
console.log(numero)

if(true){
    var numero = 50;
    console.log(numero);
}
console.log(numero);

//let solo actua a nivel de bloques 
var texto = "curso de js";
console.log(texto);

if(true){
    let texto = "curso"
    console.log(texto);
}
console.log(texto);