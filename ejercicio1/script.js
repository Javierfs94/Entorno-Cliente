/**
 * Ejercicio 1
 * 
 * Modificar el primer script para que:
 * Todo el código JavaScript se encuentre en un archivo externo llamado codigo.js y el script siga funcionando de la misma manera.
 * Después del primer mensaje, se debe mostrar otro mensaje que diga "Soy el primer script"
 * Añadir algunos comentarios que expliquen el funcionamiento del código
 * Añadir en la página XHTML un mensaje de aviso para los navegadores que no tengan activado el soporte de JavaScript
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    /**
     * Muestra los mensajes por consola
     */
    let mostrar = function() {
        console.log("Soy un mensaje de alerta"); // Al cargar la página muestra el mensaje
        console.log("Soy el primer script"); // Al cargar la página muestra el mensaje, despues del anterior
    }

    mostrar(); // Funcion para mostrar el mensaje del ejercicio
}
 