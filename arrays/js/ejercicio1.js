/**
 * Ejercicio 1 Arrays
 * 
 * Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
 * 
 * @author Francisco Javier Frías Serrano
 */


let valores = [1, "Hola", , 12, "Adios"];

function argumentosForEach(elemeno, indice, array) {
    console.log("array[" + indice + "] = " + elemeno);
}

valores.forEach(argumentosForEach);