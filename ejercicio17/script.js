/**
 * Ejercicio 17
 * 
 * Modificar el primer script para que:
 * Todo el código JavaScript se encuentre en un archivo externo llamado codigo.js y el script siga funcionando de la misma manera.
 * Después del primer mensaje, se debe mostrar otro mensaje que diga "Soy el primer script"
 * Añadir algunos comentarios que expliquen el funcionamiento del código
 * Añadir en la página XHTML un mensaje de aviso para los navegadores que no tengan activado el soporte de JavaScript
 * 
 * @author Francisco Javier Frías Serrano
 */

/**
 * Establece los límites de los carácteres introducidos
 * @param {*} elEvento 
 * @param {*} maximoCaracteres 
 */
function limita(elEvento, maximoCaracteres) {
    let elemento = document.getElementById("texto");

    // Obtener la tecla pulsada
    let evento = elEvento;
    let codigoCaracter = evento.charCode;
    // Permitir utilizar las teclas con flecha horizontal
    if (codigoCaracter == 37 || codigoCaracter == 39) {
        return true;
    }

    // Permitir borrar con la tecla Backspace y con la tecla Supr.
    if (codigoCaracter == 8 || codigoCaracter == 46) {
        return true;
    } else if (elemento.value.length >= maximoCaracteres) {
        return false;
    } else {
        return true;
    }
}

/**
 * Actualiza la información del cuadro de texto
 * @param {*} maximoCaracteres 
 */
function actualizaInfo(maximoCaracteres) {
    let elemento = document.getElementById("texto");
    let info = document.getElementById("info");

    if (elemento.value.length < maximoCaracteres) {
        info.innerHTML = "Puedes escribir hasta " + (maximoCaracteres - elemento.value.length) + " caracteres adicionales";
    } else {
        info.innerHTML = "Máximo " + maximoCaracteres + " caracteres";

    }
}