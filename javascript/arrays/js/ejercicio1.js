/**
 * Ejercicio 1 Arrays
 * 
 * Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
 * 
 * callback
 * Función a ejecutar por cada elemento, que recibe tres argumentos:
 * 
 * currentValue
 * El elemento actual siendo procesado en el array.
 * 
 * index (Optional)
 * El índice del elemento actual siendo procesado en el array.
 * 
 * array (Optional)
 * El vector en el que forEach() esta siendo aplicado.
 * 
 * thisArg (Optional)
 * Valor que se usará como this cuando se ejecute el callback.
 * @author Francisco Javier Frías Serrano
 */


let valores = [1, "Hola", , 12, "Adios"];

function argumentosForEach(elemeno, indice, array) {
    console.log("array[" + indice + "] = " + elemeno);
}

valores.forEach(argumentosForEach);