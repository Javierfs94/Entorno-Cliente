/**
 * Ejercicio 3 Arrays
 * 
 * Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
 * 
 * @author Francisco Javier Frías Serrano
 */

let valores = [2, "Hola", , "Adios", 10];

let resultado = Array.isArray(valores) ? "Es un array" : "No es un array";
console.log(resultado)