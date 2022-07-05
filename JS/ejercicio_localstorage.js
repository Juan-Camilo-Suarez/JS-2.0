'use strict'

// pedir una pel por formulario y guardarlo en el local storage


window.addEventListener('load', function(){

var formmulario = document.querySelector("#peli");
formmulario.addEventListener('submit', function(){ 
    console.log("entro");
    var titulo = document.querySelector('#addpelicula').value;

    //para no guardar vacios
    if (titulo.length >= 1){ 
        localStorage.setItem(titulo, titulo);
    }
    

 });

 var form = document.querySelector("#peliculas_list");
 for(var i in localStorage){
     if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(this.localStorage[i]);
        form.appendChild(li);
     }
    
    
 }
 var formmulario2 = document.querySelector("#borrar");
formmulario2.addEventListener('submit', function(){ 
    console.log("borrador");
    var titulo = document.querySelector('#removepelicula').value;

    //para no guardar vacios
    if (titulo.length >= 1){ 
        localStorage.removeItem(titulo);
    }
    

 });

});