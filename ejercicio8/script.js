/**
 * Ejercicio 8
 * 
 * Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
 * Mostrar por pantalla el resultado devuelto por la función.
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    /**
     * Muestra los mensajes por consola
     */
    let mostrar = function() {
        function parOImpar(numero) {
            if (numero % 2 == 0) {
                console.log("Es par");
            } else {
                console.log("Es impar");
            }
        }
        
        parOImpar(4);
        parOImpar(7);
    }

    mostrar(); // Funcion para mostrar el mensaje del ejercicio
}

