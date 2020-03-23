/**
 * Ejercicio 6
 * 
 * El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y 
 * el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
 * 
 * @author Francisco Javier Frías Serrano
 */

{

    /**
     * Muestra los mensajes por consola
     */
    let mostrar = function() {
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        let numeroDNI = prompt("Introduzca su número del DNI (sin la letra)");
        let letraDNI = prompt("Introduzca la letra de su DNI (en mayúsculas)");
        letraDNI.toUpperCase();
        
        if (numeroDNI < 0 || numeroDNI > 10000000) {
            console.log("Número introducido no válido");
        } else {
            let letraCalculada = letras[numeroDNI % 23];
            if (letraCalculada != letra) {
                console.log("La letra no es correcta");
            } else {
                console.log("El DNI es correcto");
            }
        }
    }

    mostrar(); // Funcion para mostrar el mensaje del ejercicio
}


