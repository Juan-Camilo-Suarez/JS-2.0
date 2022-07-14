'use strict'
// link to call variables in a string
// https://www.digitalocean.com/community/tutorials/how-to-work-with-strings-in-javascript
window.addEventListener('load', function(){
    //informacion de la fecha actual y la hora 
    var fecha = new Date();

    console.log(fecha)

    var year = new Date().getFullYear();
    //la del mes empieza a contar en 0
    var mes = new Date().getMonth()

    var dia = new Date().getDay();

    var hora = new Date().getHours();

    //  backticks ` `  AltGr |  keyboard - us

    var textohora  =  ` 
    el año es: ${year}
    la hora es: ${mes}
    el dia es: ${dia}
    el la hora es: ${hora}
    `;
    console.log(textohora);

})