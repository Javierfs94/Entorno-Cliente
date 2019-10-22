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
    let dimensiones = [];

    return dimensiones;
}

document.onclick = informacion;