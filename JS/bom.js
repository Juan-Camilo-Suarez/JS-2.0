'use strict'

//BOM -BROWSER OBJECT MODEL
//ver elementos del navegador
//window propiedades que cambian
console.log(window.innerHeight);
console.log(window.innerWidth);

//screen propiedades del navegador staticas
console.log(screen.width);

//indormacion de del navegador
console.log(window.location);
//el url
console.log(window.location.href);

//si le pongo el url de otro lugar me envia alla
function redirect(url) {
    window.location.href = url;
}
//abrir una ventana nueva
function abrirventana(url){
    window.open(url)
}