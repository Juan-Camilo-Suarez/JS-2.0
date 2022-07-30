//CLASES 


interface CamisetaBase{
    setColor(color);
    getColor();
}
//asi se hace un export 
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

var camiseta = new Camiseta("rojo", "camiseta larga", "L", 14);  


//set color

camiseta.setColor("verde");
camiseta.getColor();

var palyera = new Camiseta("rojo", "camiseta larga", "L", 14);  



console.log(camiseta, palyera);

console.log(camiseta.getColor());