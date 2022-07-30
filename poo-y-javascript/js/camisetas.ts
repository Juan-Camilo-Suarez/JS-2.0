//CLASES 
interface CamisetaBase{
    setColor(color);
    getColor();
}

// Decorador 
function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion =function():void{
            console.log("camiseta estampada con el logo de : " + logo );
        };
    }

}
//asi se hace un export 
@estampar("gucci gang")
class Camiseta implements CamisetaBase{

    //atributos
    public color: string;
    public modelo: string;
    public talla: string;
    public precio: number

    public setColor(color){
        this.color = color;
    }
    //contructor
    constructor(color, modelo, talla, precio){
        this.color = color;
        this.modelo =modelo;
        this.talla = talla;
        this.precio = precio;
    }

    //metodos
    public getColor(){
        return this.color;
    }

}
//clase hija

class Sudadera  extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }

    getCapucha(){
        return this.capucha;
    }
};
var camiseta = new Camiseta("rojo", "camiseta larga", "L", 14);
camiseta.estampacion();


//set color

camiseta.setColor("verde");
camiseta.getColor();

var palyera = new Camiseta("rojo", "camiseta larga", "L", 14);  



console.log(camiseta, palyera);

console.log(camiseta.getColor());

var sudadera_nike = new Sudadera("rojo", "sudadera_nike", "XL", 1898)
sudadera_nike.setCapucha(true)
sudadera_nike.setColor("violeta");

console.log(sudadera_nike);
