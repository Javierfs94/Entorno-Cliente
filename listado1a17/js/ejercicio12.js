/**
 * Ejercicio 12
 * 
 * Completar el código JavaScript proporcionado para que cuando se pinche sobre el enlace se muestre completo el contenido de texto. Además, el enlace debe dejar de mostrarse 
 * después de pulsarlo por primera vez. La acción de pinchar sobre un enlace forma parte de los "Eventos" de JavaScript que se ven en el siguiente capítulo.
 * En este ejercicio, sólo se debe saber que al pinchar sobre el enlace, se ejecuta la función llamada muestra().
 * 
 * @author Francisco Javier Frías Serrano
 */
function muestra() {
    let elemento = document.getElementById("adicional");
    elemento.className = "visible";

    let enlace = document.getElementById("enlace");
    enlace.className = "oculto";
}