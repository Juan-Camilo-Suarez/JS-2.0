'use strict'

//LOCAL STORAGE

window.addEventListener('load'  , function(){

    //comprobar que el local estorage esta disponible
    if(typeof(Storage) != 'undefined'){
        console.log('local storage disponible');
    }else{
        console.log('local storage no disponible');
    }

    //guardar datos en el local storage
    localStorage.setItem('titulo', 'curso de js')

    //recuperar elementos del local storage
    console.log(localStorage.getItem('titulo'));

    document.querySelector("#peliculas").innerHTML = localStorage.getItem('titulo') 

    // guardar obj json del local storage
    var usuario = {
        nombre: "camilo",
        email: "juan@gmail.com",
        web: "camilo.com"
    }

    //convertir json a string 
    //forma correcta para guardar datos del local storage y enviar apis
    localStorage.setItem('usuario', JSON.stringify(usuario));
    
    //recuperar objeto
    // pasar un string a json
    var userjs =JSON.parse(localStorage.getItem('usuario'));

    console.log(userjs);

    document.querySelector('#peliculas').append(userjs.email);


    //eleminar el usuario
    localStorage.removeItem('usuario');

    //borrar todo el local storage
    localStorage.clear();
});