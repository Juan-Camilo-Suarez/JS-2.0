$(document).ready(function() {
    console.log('hola');
    //mover elemento en la pg
    $(".elemento").draggable();

    //redimencionar elemntos  hacerlos mas grande y pequeños 
    $(".elemento").resizable();

    //seleccionar elemntos
    $(".lista-seleccionable").selectable();
});