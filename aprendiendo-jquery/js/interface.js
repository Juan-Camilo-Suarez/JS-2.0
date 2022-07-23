$(document).ready(function() {
    console.log('hola');
    //mover elemento en la pg
    $(".elemento").draggable();

    //redimencionar elemntos  hacerlos mas grande y pequeños 
    $(".elemento").resizable();

    //seleccionar elemntos

    //SI USO selectable no puedo usar sortable
    //$(".lista-seleccionable").selectable();

    //ordenar element
    $(".lista-seleccionable").sortable(
        {
            update:function(event, ul) {
                console.log('ha cambiado la lista');
            },
        }
    );

    //drop
    $('#elemento-movido').draggable();
    $('#area').droppable(
        {
            drop : function(){
                console.log('has solado algo dentro del area');
            },
        }
    );
});