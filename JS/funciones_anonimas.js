'use strict'


//FUNCIONES ANONIMAS y  callbacks

//funcion anonimas es la que no tiene nombre

//ANONIMAS

var pelicula = function (nombre){
    return "la pelicula es: " + nombre;
}



//callbacks ES METER FUNCIONES ANONIMAS DENTRO DE OTRAS FUNCIONES

function sumame(numero1, numero2 , SUMAYMUETSRA, SUMAPORDOS){
    var sumar = numero1 + numero2;
    SUMAYMUETSRA(sumar);
    SUMAPORDOS(sumar);

    return sumar;
}
sumame(5,5, function(dato){
    console.log("la suma es:", dato)
}, function(dato){
    console.log("la suma por dos: ", (dato*2))
})

//Funciones de flecha
//son funciones que hacen el callbacks pero mas limpio =>

sumame(2,3, dato=>{
    console.log("la suma es:", dato)
}, dato=>{
    console.log("la suma por dos: ", (dato*2))
})
