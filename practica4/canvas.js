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

        // Creeper
        contexto.fillStyle = '#A56530';
        contexto.fillRect(20, 20, 350, 225);
        contexto.fillStyle = 'red';
        contexto.fillRect(80, 150, 60, 95);
        contexto.fillStyle = 'blue';
        contexto.fillRect(220, 120, 90, 60);


    }
}