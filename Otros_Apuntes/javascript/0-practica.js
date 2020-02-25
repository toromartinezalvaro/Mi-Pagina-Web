

//en drawName pondremos lo que este dentro de la variable "mesage", ademas de darle un color a la letra (en este caso "red")
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var message = 'el mensaje de aqui se vera en "drawName", ademas de mostrarse del color de la variable que se elija, en este caso "red"';

drawName(message, red);
bounceBubbles();

//si ademas agegamos "letterColors = [];" dentro de los corchetes podriamos poner una secuencia de colores que van a cambiar los colores de cada letra haciendo que una palabra sea de varios colores. luego en la variable "drawName" pondriamos la variable "letterColor" para que el mensaje siga esa secuencia de colores EJEMPLO.

letterColor = [red, orange, green, blue, purple];
drawName(message, letterColor);

/*
Cambiar la física!
Parte del poder de la codificación es que los pequeños cambios pueden crear grandes impactos. Ahora que ha experimentado con cambiar el color y el texto, ¡es hora de experimentar con la animación misma!

1.
Tres variables le permiten experimentar con la física de la animación: mouseResponseThreshold, friction y rotationForce.

mouseResponseThreshold afecta a qué tan cerca debe estar el puntero del mouse para afectar los puntos que forman las letras. Cuanto mayor sea el número, más potente será el efecto de la interacción del ratón. ¡Experimente cambiando el mouseResponseThreshold a diferentes números y ejecutando su código!

2.
Intenta experimentar con el valor de fricción! Probablemente querrá mantener la fricción entre 0 y 1.

3.
Finalmente, intente experimentar con el valor rotationForce. Esta variable representa cuánto intentará girar cada punto animado al interactuar con el mouse. Trate de mantener este valor pequeño, tal vez alrededor de 0.01.
*/

// Define color variables:
red = [0, 100, 63];
orange = [40, 100, 60];
green = [75, 100, 40];
blue = [196, 77, 55];
purple = [280, 50, 60];
letterColors = [red, orange, green, blue, purple];

// This variable controls the smallest distance at which a mouse will make the dots react
mouseResponseThreshold = 40;

// This variable controls how strongly the dots will try to return to their starting position
friction = 0.84;

// This variable controls how much the dots will rotate when interacting
rotationForce = 0.01;