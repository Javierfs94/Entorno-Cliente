/**
 * Ejercicio 6 Arrays
 * 
 * Crea  una función que devuelva un array con cada uno de los argumentos. 
 * En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    let array = ['a', 'b', 'c', 'd', 'f', 'g'];
    let elementoLista;

    let recorrerArray = function(value, index, array) {
        let elemento = document.createElement("li");
        elemento.appendChild(document.createTextNode("Array[" + index + "]=" + value));
        elementoLista.appendChild(elemento);
    };

    let init = function() {
        elementoLista = document.getElementById("lista");
        array.forEach(recorrerArray);
    };

    document.addEventListener("DOMContentLoaded", init);
}