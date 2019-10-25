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
let num = prompt("Introduzca un número positivo para calcular el factorial)");
let resultado = 1;

if (num < 0 || Number.isInteger(num)) {
    alert("Número introducido no válido");
} else {
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
}

alert("El factorial de " + num + " es " + resultado);