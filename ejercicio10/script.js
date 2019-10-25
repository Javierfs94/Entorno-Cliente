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
function palindromo(cadena) {
    let resultado = "La cadena \"" + cadena + "\" \n";
    let cadenaOriginal = cadena.toLowerCase();
    let letrasEspacios = cadenaOriginal.split("");
    let cadenaSinEspacios = letrasEspacios.replace(" ", "");
    cadenaSinEspacios.split("");
    let letrasAlReves = cadenaSinEspacios.split("").reverse();

    let iguales = true;
    for (const i in letras) {
        if (letras[i] == letrasAlReves[i]) {
            //OK            
        } else {
            iguales = false;
        }
    }

    if (iguales) {
        resultado += " es un palíndromo";
    } else {
        resultado += " no es un palíndromo";
    }
    return resultado;
}

console.log(palindromo("Amor a Roma"));
console.log(palindromo("Mal ejemplo"));