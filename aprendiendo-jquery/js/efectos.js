$(document).ready(function() {
    //mostrar y ocultar elementos 

    $('#caja').hide();

    $('#mostrar').click(function() {
        $(this).hide();
        $('#ocultar').show();
                        //animaciones
        $('#caja').show('fast');
                    //fadein()
                    //fadeto('slow', 1)
    });

    $('#ocultar').click(function() {
        $(this).hide();
        $('#mostrar').show();
                        //animaciones
        $('#caja').hide('normal');
                    //fadeout()
                    //fadeto('slow', 0)

    });

    //todo en un solo boton
    $('#todoenuno').click(function() {
        $('#cajita').toggle('fast');

    });

    //ANIMACIONES PERSONALIZADAS
    $("#animame").click(function() {
        $('#cajita').
        animate({marginLeft: '500px',
                fontSize: '30px'}, 'slow')
    });
});