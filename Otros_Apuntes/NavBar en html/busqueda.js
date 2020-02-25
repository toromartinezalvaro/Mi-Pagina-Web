/*busqueda.js es para que la barra de busqueda se haga un poco mas grande al darle click*/

var menu = $(".menu");
var barra_busqueda = $(".search_bar");

/*Enlazando con el "id=" del input (barra de busqueda)*/
var bar = $("#bar");

var icono = $(".icon-search");

/*Aqui hago que la barra de busqueda cresca desde el 15% hasta el 20% de la navbar cuando se le da click.*/
barra_busqueda.focusin(function(){
    barra_busqueda.css("width", "20%");
    menu.css("width", "80%");
    icono.css("color", "#000")
    bar.css("color", "#000");
})

/*Haciendo que la navbar vuelva a la normalidad al salir de la barra de busqueda. Ademas lo escrito en la barra de busqueda pasara a ser blanco*/
barra_busqueda.focusout(function(){
    barra_busqueda.css("width", "15%");
    menu.css("width", "85%");
    icono.css("color", "#fff");
    bar.css("color", "#fff");
})