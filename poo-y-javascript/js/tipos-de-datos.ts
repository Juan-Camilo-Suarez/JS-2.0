//string

let cadena: string = "camilo";
console.log(cadena);


//int
let numero: number = 25;

//boolean
let verdadero_falso: boolean = true;

//datos any

let cualqueira: any = "hola"


//arrays
var leguages : Array<string> = ['java', 'ts'] ;

var years: number[] = [2009,485,43];

//multiples valores

let cadena2 : string|number = "cadena2";

// dipos personalizados
type alfanumerico = string | number;

let cadena3 : alfanumerico = "cadena3";

console.log(cadena, numero, verdadero_falso, cualqueira, leguages, years);