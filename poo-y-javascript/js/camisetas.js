//CLASES 
//asi se hace un export 
var Camiseta = /** @class */ (function () {
    //contructor
    function Camiseta(color, modelo, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    //metodos
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("rojo", "camiseta larga", "L", 14);
//set color
camiseta.setColor("verde");
camiseta.getColor();
var palyera = new Camiseta("rojo", "camiseta larga", "L", 14);
console.log(camiseta, palyera);
console.log(camiseta.getColor());
