function cargarContextoCanvas(idCanvas) {
    let canvas = document.getElementById(idCanvas);
    if (canvas && canvas.getContext) {
        let contexto = canvas.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return false;
}

let contexto;

window.onload = function() {
    // Incluimos el elemento canvas
    contexto = cargarContextoCanvas('micanvas');
    if (contexto) {
        let img = new Image();
        img.src = 'perros.jpg';
        img.onload = function() {
            contexto.drawImage(img, 400, 225, 160, 234, 15, 15, 120, 180);
            //tamaño natural
            contexto.drawImage(img, 160, 20, 500, 400);
        }
    }
}