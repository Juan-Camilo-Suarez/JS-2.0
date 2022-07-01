'use strict'

/*
1. pida 6 numero por pantalla y los meta en un array
2. mostrar el array entero en la pagina y la consola
3. ordenar el array y mostrarlo
4. invertir su orden y mostrarlo
5. cuantos elementos tiene el arra
6. busque de un valor introducido en el array 


*/

function mostrarArrays(array, texto =""){
    //mostrar en la pagina

document.write("<h1>esto es un array:" + texto + "</h1>");

array.forEach((numero)=>{

    document.write("<p><b>"+numero+"</b></p>");

});
}
var numeros = [];
for (var i = 0; i <= 5; i++) {
    numeros[i] = parseInt(prompt("introduce un numero", 0));  
    
}
// mostrar en la consola
mostrarArrays(numeros, "numeros ingresados")

console.log(numeros);
console.log(numeros.length);


//organizar en orden desendente


numeros.sort( function(a, b) {return a-b;});
console.log(numeros)
mostrarArrays(numeros, "ordenados");


//invertir y mostrar

numeros.reverse()
mostrarArrays(numeros, "alreves"); 

// cartidad de elements

console.log(numeros.length);

//find numero
var busqueda = parseInt(prompt("buscar numero", 0));

var Posicion = numeros.findIndex( numero => numero == busqueda);

if(Posicion&& Posicion != -1) {
    document.write('<h1>encontrado</h1>');
    document.write('<h1>Posicion : '+ Posicion + '</h1>');
}else{
    document.write('<h1> no encontrado</h1>');
}


