'use strict'


// JSON 
window.addEventListener('load', function() {

    var pelicula = {
        titulo : 'superman',
        year : 2017,
        pais : 'estados unidos'
    }

    console.log(pelicula);
    //car una propiedad del json
    console.log(pelicula.titulo);

    //cambiar el valor de un atributo del json
    pelicula.titulo = 'rapido y furioso';
    console.log(pelicula.titulo);


    // arrays de objeros json
    var peliculas =[
        {
            titulo : 'superman',
            year : 2017,
            pais : 'estados unidos'
        },
        {
            titulo : 'stuar little',
            year : 2018,
            pais : 'estados unidos'
        }
    ]
     console.log(peliculas);

     var caja_pelicula = document.querySelector('#peliculas');

     for(var index in peliculas){
         var p = document.createElement('p');
         p.append(peliculas[index].titulo +  ' ' + peliculas[index].year);
         caja_pelicula.appendChild(p);

     }

});