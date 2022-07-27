// classes
// se hacen de tpye json
var bicicleta ={
    color: "rojo",
    modelo: "bmx",
    frenos: "disco",
    velocidadMaxima : "60KM",

    //metodos
    cambiaColor: function(nuevo_color) {
        this.color = nuevo_color;
    },

};

bicicleta.cambiaColor("azul");