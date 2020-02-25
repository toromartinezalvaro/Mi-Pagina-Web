//FUNCIONES: ("function", "write", ...) sirve para declarar una funcion que posteriormente se va a usar, la funcion se puede usar por ejemplo con todas las demas funciones qe hemos visto hasta ahora como por ejemplo "for", "while",luego de haber creado la funcion, se puede reusar su funcion cuantas veces se necesite
//EJM
function greeting(name) {
    //aqui va lo que ejecuta la funcion
}
greeting();


//Primero se declara la funcion en este caso es "greeting"(saludar)  luego de eso entre parentesis podemos poner los parametros de la funcion. cada ves que se ejecute va a mostrar en este caso el "console.log()" que contiene la palabra "hello", este mensaje se mostrara solo en la consola. vemos que mas abajo se usa la funcion escribiendo "greeting();" lo cual ejecutara la funcion  y mostrara en consola el mensaje "hello" (en este caso usamos la funcion 3 veces). aqui esta el ejemplo
function greeting(name) {
  
    console.log("hello " + name)
  }
  greeting("markus");
  greeting("sara");
  greeting("connor");

  //otro ejemplo con la funcion de add(sumar) seria el siguiente
function addSumar(nvariable1, variable2) {
  console.log(variable1 * variable2);
}
addSumar(3, 2);
addSumar(121312, 1231312);
addSumar(100, 300);

//otra funcion seria "write" para escribir algo en la pagina web, podriamos hacerlo asi
document.write("hello world")

