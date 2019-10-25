/**
 * Ejercicio 16
 * 
 * Modificar el primer script para que:
 * Todo el código JavaScript se encuentre en un archivo externo llamado codigo.js y el script siga funcionando de la misma manera.
 * Después del primer mensaje, se debe mostrar otro mensaje que diga "Soy el primer script"
 * Añadir algunos comentarios que expliquen el funcionamiento del código
 * Añadir en la página XHTML un mensaje de aviso para los navegadores que no tengan activado el soporte de JavaScript
 * 
 * @author Francisco Javier Frías Serrano
 */

function informacion(elEvento) {
    let evento = elEvento;

    muestraInformacion();
}

function muestraInformacion(mensaje) {
    document.getElementById("info").innerHTML = '<h1>' + mensaje[0] + '</h1>';
    for (let i = 1; i < mensaje.length; i++) {
        document.getElementById("info").innerHTML += '<p>' + mensaje[i] + '</p>';
    }
}

function tamanoVentanaNavegador() {
    return [document.body.clientWidth, document.body.clientHeight];
}

document.onclick = informacion;