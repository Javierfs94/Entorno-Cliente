/**
 * Ventana creada con el nuevo Gato
 * 
 * @author Francisco Javier Frías Serrano
 */
{
    let error;

    let datosGato = function() {
        let nombre = document.getElementById("nombre").value;
        let fechaNacimiento = document.getElementById("fechaDeNacimiento").value;
        let raza = document.getElementById("raza").value;
        let peso = document.getElementById("peso").value;

        try {
            ventanaGato(new Gato(nombre, fechaNacimiento, raza, peso))
        } catch (e) {
            error.textContent = e.message;
        }
    }

    let ventanaGato = function(gato) {
        let ventana = window.open("", "", "width=500,height=600");
        let contenido = `
        <!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Gato</title>
            <link rel="stylesheet" href="css/style.css">
            <script src="js/control.js"></script>
        </head>
        
        <body>
            <h1>Información del Gato</h1>
            <main>
                <div id="informacion">
                    <p id="nombre">Nombre del gato: </p>
                    <p id="fechaDeNacimiento">Fecha de nacimiento: </p>
                    <p id="edad">Edad: </p>
                    <p id="raza">Raza: </p>
                    <p id="peso">Peso: </p>
                </div>
                <div id="control-panel">
                    <img id="imagen" src="img/gato.gif" alt="Imagen del Gato"><br>
                    <button id="jugar">Jugar</button>
                    <button id="comer">Comer</button>
                    <button id="dormir">Dormir</button>
                </div>
            </main>
            <p id="info"><p>
        </body>
        
        </html>`;
        ventana.document.open();
        ventana.document.write(contenido);
        ventana.document.close();
        ventana.gato = gato;
    }

    document.addEventListener("DOMContentLoaded", function init() {
        document.getElementById("nuevoGato").addEventListener("click", datosGato);
        error = document.getElementById("error");
        error.style.color = "red";
    });
}