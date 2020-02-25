//CONDICIONALES: sirven para determinar que va a hacer el programa, para esto nos conviene un diagrama de flujo

//existen varias estructuras condicionales como serian por ejemplo "if/else", "switch/case",

//primero necesitamos declarar las variables
let password = "pepe123"
let input = "sadfsadfgdewrsf"
let result = input == password;


//aqui entraria la condicional "if" que nos dice que si la funcion dentro de los parentesis (si resultado es igual a true) se debe hacer un proceso y si no otro
if(result == true){
    console.log("login correcto")
}
if (result == false){
    console.log("login incorrecto");
}

//tambien se puede hacer con la estructura if/else de la siguiente manera
if(result == true){
    console.log("login correcto")
} else {
    console.log("login incorrecto");
}

console.log(result);

//otro ejemplo completo seria el siguiente:
let score = 70;

if(score > 30){
    console.log("vas muy bien")
} else if(score > 15){
    console.log("estas mejorando")
} else {
    console.log("tu necesitas seguir este tutorial")
}

//ESTRUCCTURA CONDICIONAL SWITCH/CASE: tiene los siguientes conceptos vitales que son: "switch", "case", "break", "default" el switch sirve para iniciar la estrucctura condicional, el case, es un caso que si se cumple, muestra al programa una ruta a seguir, si no es asi, pasara al siguiente case y por ultimo al final de cada case se debe poner un break que va a indicar que hasta ahi va ese caso, nunca olvidar el punto y coma despues de cada orden
let variable = "";
let variableNumerica = 00;
switch(){
    case "aqui el caso";
         console.log("");
         break;
    case2 "aqui el caso";
         console.log("");
         break;
}

//ejemplo:
let typecard = "debid Card";

switch(typecard){
    case "debid Card";
         console.log("this is a debid card");
    break;
    case2 "credit Card";
         console.log("this is a credit card");
         break;
    default
          console.log("no tienes tarjeta");
          break;

}