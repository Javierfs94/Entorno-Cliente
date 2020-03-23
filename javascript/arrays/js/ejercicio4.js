/**
 * Ejercicio 4 Arrays
 * 
 * Crea  una función que cree un array de la dimensión indicada, 
 * cuyo contenido sean los números naturales comenzando desde 0
 * 
 * @author Francisco Javier Frías Serrano
 */

{

    let elementoLista;
    let array = [];
    let num = 10;

    let recorrerArray = function(value, index, array) {
        let elemento = document.createElement("li");
        elemento.appendChild(document.createTextNode("Array[" + index + "]=" + value));
        elementoLista.appendChild(elemento);
    };

    let annadirArray = function(numero) {
        for (let i = 0; i < numero; i++) {
            array.push(i);
        }
    };

    let init = function() {
        elementoLista = document.getElementById("lista");
        annadirArray(num);
        elementoLista.innerHTML = array;
        array.forEach(recorrerArray);
    };

    document.addEventListener("DOMContentLoaded", init);
}