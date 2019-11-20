/**
 * Ejercicio 6 Arrays
 * 
 * Crea  una función que devuelva un array con cada uno de los argumentos. 
 * En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
 * 
 * @author Francisco Javier Frías Serrano
 */

numeros = new Array(4);

numeros.forEach(function(valor, indice, array) {
    console.log("array[" + indice + "] = " + valor);
});