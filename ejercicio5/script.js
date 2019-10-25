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


let num1 = 5;
let num2 = 8;

if (num1 <= num2) {
    alert("num1 no es mayor que num2");
}
if (num2 >= 0) {
    alert("num2 es positivo");
}
if (num1 < 0 || num1 != 0) {
    alert("num1 es negativo o distinto de cero");
}
if (num1++ <= num2) {
    alert("Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2");
}