$(document).ready(function() {
    
     reloadlinks();

    $('#add_button').click(function() {
        $('#menu').prepend('<li><a href="' +$('#add_link').val() + '"></a></li>');
        reloadlinks();
    });


    
});

function reloadlinks() {
    $('a').each(function() {
        //obtemos los atributos de cada a
        var that = $(this)
        var enlace = that.attr('href');
        //para abiri en otra pestañana
        that.attr('target', '_blank')
        //meter el enlace en el texto del enlace
        that.text(enlace);
    });


}