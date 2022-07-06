'use strict'

//fetch y peticiones a servicios de rest
//fetch hace peticiones ajax

window.addEventListener('load', function(){

var usuarios =[];

var divuser = document.querySelector("#usuarios");

    fetch('https://reqres.in/api/users?page=2')
        .then(data => data.json())
        .then(data =>{
            usuarios = data.data;
            console.log(usuarios);

            usuarios.map((data, i)=>{

                let nombre = document.createElement('h2');

                nombre.innerHTML = i+ "." + data.first_name
                
                divuser.appendChild(nombre);
                document.querySelector("#loading").style.display = "none";

            });
        });
    
});