/**
 * Ejercicio 1 Arrays
 * 
 * Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
 * 
 * @author Francisco Javier Frías Serrano
 */


let numeros = [2, 4, 6, 8, 10];
numeros.forEach(function(valor, indice, array) {
    console.log("array[" + indice + "] = " + valor);
});