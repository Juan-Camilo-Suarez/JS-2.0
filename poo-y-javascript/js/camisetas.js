var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
;
var camiseta = new Camiseta("rojo", "camiseta larga", "L", 14);
//set color
camiseta.setColor("verde");
camiseta.getColor();
var palyera = new Camiseta("rojo", "camiseta larga", "L", 14);
console.log(camiseta, palyera);
console.log(camiseta.getColor());
var sudadera_nike = new Sudadera("rojo", "sudadera_nike", "XL", 1898);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("violeta");
console.log(sudadera_nike);
