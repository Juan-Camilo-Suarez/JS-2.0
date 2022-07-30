//CLASES 
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.color = "rojo";
camiseta.modelo = "manga larga";
camiseta.talla = "L";
camiseta.precio = 100;
//set color
camiseta.setColor("verde");
camiseta.getColor();
var palyera = new Camiseta();
palyera.color = "azul";
palyera.modelo = "manga larga";
palyera.talla = "s";
palyera.precio = 50;
console.log(camiseta, palyera);
console.log(camiseta.getColor());
