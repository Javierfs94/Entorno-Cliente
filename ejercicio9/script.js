/**
 * Ejercicio 9
 * 
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina 
 * si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    /**
     * Muestra los mensajes por consola
     */
    let mostrar = function() {
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
    }

    mostrar(); // Funcion para mostrar el mensaje del ejercicio
}
