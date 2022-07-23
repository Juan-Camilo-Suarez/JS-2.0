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
    
});