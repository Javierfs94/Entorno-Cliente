/**
 * Ejercicio 16
 * 
 * Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, 
 * derecha arriba y derecha abajo. Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.
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