'use strict'

window.addEventListener('load', function(){

//TIMERS
//set timeout solo  una vez
var time = this.setInterval(function(){

    console.log('setInterval');
    document.querySelector("h1").style.fontSize = "50px";

    var encabezado = document.querySelector("h1");
    if(encabezado.style.fontSize=="50px"){
        encabezado.style.fontSize = "30px";
    }else{
        encabezado.style.fontSize = "50px";
    }

    

}, 1500);

var stop = document.querySelector("#stop");
stop.addEventListener("click", function(){
    clearInterval(time);
    alert("has pardo el intervalor");
});


});