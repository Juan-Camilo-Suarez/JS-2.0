'use strict'

//PAAREMTROS REST Y SPREAD

//rest para no especificar parametros y meterlos ne array ...otros

function listadoFrutas(fruta1, fruta2, ...otros){

    console.log("fruta1", fruta1);
    console.log("fruta2", fruta2);
    console.log("otros", otros);
}
listadoFrutas("naranja", "pera", "papaya","kiwi")


//Spread  toma una lista y cada uno de los elementos que contiene
//los itera y los mete en los parametros ...mascotas
var mascotas = ["perro", "gato"];
listadoFrutas(...mascotas, "manzana", "papaya","kiwi" )