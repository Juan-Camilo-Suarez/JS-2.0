'use strict'
//Arrays

var nombres = ["camilo", "juan"];

var lenguajes = ["PHP", "js", "java"];

console.log(nombres);
console.log(lenguajes[1]);
console.log(lenguajes.length);

for (var i = 0; i < nombres.length; i++) {

    document.write("<li>" + lenguajes[i] + "</li>");
}

document.write("<br/>");

lenguajes.forEach((Element) => {
    document.write("<li>" + Element + "</li>");
 
})
// add element to a arrays
nombres = "david";
nombres.push("pedro");

//eliminar el ultima
 nombres.pop();
 