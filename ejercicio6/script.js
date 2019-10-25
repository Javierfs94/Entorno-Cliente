/**
 * Ejercicio 4
 * 
 * A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
 * 
 * Determinar cual de los dos elementos de texto es mayor
 * Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
 * Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
 * 
 * @author Francisco Javier Frías Serrano
 */

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

let numeroDNI = prompt("Introduzca su número del DNI (sin la letra)");
let letraDNI = prompt("Introduzca la letra de su DNI (en mayúsculas)");
letraDNI.toUpperCase();

if (numeroDNI < 0 || numeroDNI > 10000000) {
    alert("Número introducido no válido");
} else {
    let letraCalculada = letras[numeroDNI % 23];
    if (letraCalculada != letra) {
        alert("La letra no es correcta");
    } else {
        alert("El DNI es correcto");
    }
}