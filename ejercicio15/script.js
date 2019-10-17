function muestraInformacion(mensaje) {
    document.getElementById("info").innerHTML = '<h1>' + mensaje[0] + '</h1>';
    for (var i = 1; i < mensaje.length; i++) {
        document.getElementById("info").innerHTML += '<p>' + mensaje[i] + '</p>';
    }
}