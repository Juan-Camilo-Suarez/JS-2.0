'use strict'

//fetch y peticiones a servicios de rest
//fetch hace peticiones ajax

window.addEventListener('load', function(){


var divuser = document.querySelector("#usuarios");
var divuser2 = document.querySelector("#usuario");

    getUsuarios()
        .then(data => data.json())
        .then(user =>{

            listadoUsuarios(user.data);
            //una peticion encadenada
            
            return getUsuario()

        
        })
        .then(data => data.json())
        .then(user =>{

            mostarUsuario(user.data);
            return getInfo();

        })
        .then(data =>{
            console.log(data);
        })
        //catch error
        .catch(error=>console.log(error+ "error em las peticiones"));

function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=2');
};

function getUsuario(){
    return fetch('https://reqres.in/api/users/2');

}

//crear promesas

function getInfo(){
    var profesor = {
        nombre: 'victor',
        apellidos: 'robles',
        url: 'victor.com'
    }


    // reject deenega promesas
    //resolve respuesta correcta de proemsas 
    return new Promise((resolve, reject) =>{

     //json a srrring

     var profesor_string = JSON.stringify(profesor);

     if(typeof(profesor_string) != 'string')return reject("error");

     return resolve(profesor_string);

    })
    

}



function mostarUsuario(user){

    console.log(user)
    

    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');

    nombre.innerHTML =  user.first_name

    avatar.src = user.avatar;
    
    divuser2.appendChild(nombre);
    divuser2.appendChild(avatar);
    document.querySelector("#usuario .loading").style.display = "none";

    


};


function listadoUsuarios(usuarios) {

    usuarios.map((data, i)=>{

        let nombre = document.createElement('h2');

        nombre.innerHTML = i+ "." + data.first_name
        
        divuser.appendChild(nombre);
        document.querySelector("#loading").style.display = "none";

    });

};
});