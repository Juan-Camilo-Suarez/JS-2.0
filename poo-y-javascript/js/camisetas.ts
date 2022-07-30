//CLASES 

class Camiseta{
    public color: string;
    public modelo: string;
    public talla: string;
    public precio: number

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

}

var camiseta = new Camiseta();  

camiseta.color = "rojo";
camiseta.modelo = "manga larga";
camiseta.talla = "L"
camiseta.precio = 100;

//set color

camiseta.setColor("verde");
camiseta.getColor();

var palyera = new Camiseta();  

palyera.color = "azul";
palyera.modelo = "manga larga";
palyera.talla = "s"
palyera.precio = 50;

console.log(camiseta, palyera);

console.log(camiseta.getColor());