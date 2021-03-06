$(document).ready(function() {

    //LOAD
    //permite hace una peticion ajax y inscrustar el valor a una etiqueta de html
    //$("#datos").load('https://reqres.in/');

    //GET

    $.get('https://reqres.in/api/users', 
    {page : 2}, function(response){

        response.data.forEach((element, index) => {
            $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>");
            
        });

    });

    //POST

    //simple option
    /*
    var usuario = {
        name: "camilo",
        job: "developer",

    };
    $.post('https://reqres.in/api/users', usuario, function(response) {
        console.log(response);

    });
    */


    //post of formulario html

    $("#formulario").submit(function(e) {
        //para que no me redirija
        e.preventDefault();

        var usuario = {
            name: $('input[name="name"]').val(),
            job: $('input[name="job"]').val(),
    
        };
        console.log(usuario);
        /*
        $.post($(this).attr("action"), usuario, function(response) {
            console.log(response);
    
        }).done(function(){
            alert("usuario corecto");
        });
        */

        

        // $.AJAX = permite manipular cualquier peticion
        $.ajax({
            type : 'POST',
            dataType: 'json',
            url: $(this).attr("action"),
            //es la informacion que voy a enviar
            
            data: usuario,
            
            //hacer una funcion antes de enviar el usuario
            beforesend: function() {
                console.log("enviando usuario");
            },
            success: function(response) {
                console.log(response);
            },
            error: function() {
                console.log("Error");
            },
            timeout: 2000,
            


        });

        return false;
    });

    
});