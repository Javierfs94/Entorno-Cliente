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
function informacion(cadena) {
    let resultado = "La cadena \"" + cadena + "\"";

    if (cadena == cadena.toUpperCase()) {
        resultado += " está formada sólo por mayúsculas";
    } else if (cadena == cadena.toLowerCase()) {
        resultado += " está formada sólo por minúsculas";
    } else {
        resultado += " está formada por mayúsculas y minúsculas";
    }
    return resultado;
}

console.log(informacion("CADENA1"));
console.log(informacion("cadena2"));
console.log(informacion("CadeNa3"));