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
function parOImpar(numero) {
    if (numero % 2 == 0) {
        console.log("Es par");
    } else {
        console.log("Es impar");
    }
}

parOImpar(4);
parOImpar(7);