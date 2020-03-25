/**
 * Ejercicio 7 Arrays
 * 
 * Crea una función que elimine todos los undefined de un array
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    let array = ['a', 'b', 'c', undefined, 'f', undefined, 'g'];
    let elementoLista;

    let recorrerArray = function(value, index, array) {
        let elemento = document.createElement("li");
        elemento.appendChild(document.createTextNode("Array[" + index + "]=" + value));
        elementoLista.appendChild(elemento);
    };

    let removeUndefined = function() {
        array = array.filter(e => e);
    };

    let init = function() {
        elementoLista = document.getElementById("lista");
        array.forEach(recorrerArray);
        removeUndefined();
        array.forEach(recorrerArray);
    };

    document.addEventListener("DOMContentLoaded", init);
}