//integrador o bucle: si queremos repetir 50 veces "hello world", podriamos usar un bucle que se repita 50 veces de la siguiente manera

//CICLO WHILE:
let count = 50;

while (count > 0) {
  console.log("hello world");

  count = count - 1;
}
/*EXPLICACION: 
-LINEA 3: se declara la variable(let) "count" y se le da un valor inicial de 50 (luego se cierra la orden con punto y coma) 

-LINEA NUMERO 5: mientras(while) "count" sea mayor a 0 se ejecutara lo que esta dentro de las llaves "{}" en este ejemplo seria el "console.log("")" que nos permite escribir algo en la consola (SIEMPRE CERRAR LAS ORDENES CON ";")

-LINEA NUMERO 6: se mostrara en la consola la cadena de texto "hello world"

-linea NUMERO 8  vemos "count = count - 1;" esto significa que cada vez que se repita el while, se restara uno al valor equivalente a "count" haciendo que cada vez sea menor hasta ser equivalente a cero 
*/

//otro ejemplo puede ser el siguiente que serviria parahacer lo mismo, es el siguiente:

let number = 0;

while(number < 50){
  console.log(number);

  number ++;
}

//en este ejemplo se da valor inicial a count el 0 y el "while" tiene como condicion  que se repetira mientras que la variable "count" sea menor a 50, repetira cada vez el mensaje "hello world" y cada vez que pase por el ciclo while le sumara 1 a la variable(count ++;)



//usos 

let names = ["ryan", "joe", "john", "mario"];

console.log(names);
console.log(names0);
console.log(names.length);

/*En la linea 39 saldran todos los nombres
En la linea 40 saldra el nombre de "ryan"
En la linea 41 sandra el numero de nombres(variables) que hay(4), ".length" mide la longitud de la variable en este caso "names" */


//CICLO FOR:

let names = ["ryan", "joe", "john", "mario"];

for(let i = 0; i < names.length - 1; i++){
  console.log(names[i]);
}

//otro ejemplo para lo mismo es el siguiente
let names = ["ryan", "joe", "jhon", "mario"];

for(let i = names.length; i > 0; i--){
  console.log(names[i]);
}
//linea 59: entre parentesis esta la variable "i" que es equivalente a la longitud de "names" menos uno(esto para poder devolver el valor un  numero ya que el conteo empieza desde cero), en este casola es equivalente a 3(por que se cuenta asi: cero(ryan), uno(joe), dos(jhon), tres(mario) ). Luego del ";" dice que el ciclo se repetira mientras la variable "i" sea mayor a cero. Por ultimo, despues del punto y coma se dice que cada vez que se ejecute el ciclo for, se le va a restar 1 a la variable "i"

//la estructura del ciclo for es la siguiente

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
