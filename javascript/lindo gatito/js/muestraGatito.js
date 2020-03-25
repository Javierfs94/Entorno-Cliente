/**
 * @author Francisco José Sánchez Romero
 */
{
    let error;

    let datosGato = function(){
        let nombre = document.getElementById("nombre").value;
        let fechaNacimiento = document.getElementById("fechaDeNacimiento").value;
        let raza = document.getElementById("raza").value;
        let peso = document.getElementById("peso").value;

        try{
            ventanaGato(new Gatito(nombre, fechaNacimiento, raza, peso))
        }catch(e){
            error.textContent = e.message;
        }
    }

    let ventanaGato = function(gatito){
        let ventana = window.open("","","width=500,height=600");
        let contenido = `<!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Gatito</title>
            <link rel="stylesheet" href="css/infoGato.css">
            <script src="js/controlGatito.js"></script>
        </head>
        
        <body>
            <h1>Información del gatito</h1>
            <main>
                <div id="informacionGato">
                    <p id="nombre">Nombre del gato: </p>
                    <p id="fechaDeNacimiento">Fecha de nacimiento: </p>
                    <p id="edad">Edad: </p>
                    <p id="raza">Raza: </p>
                    <p id="peso">Peso: </p>
                </div>
                <div id="panelDeControl">
                    <img id="imagenGato" src="images/gato.gif" alt=""><br>
                    <button id="jugar">Jugar</button>
                    <button id="comer">Comer</button>
                    <button id="dormir">Dormir</button>
                </div>
            </main>
            <p id="infoGato"><p>
        </body>
        
        </html>`;
        ventana.document.open();
        ventana.document.write(contenido);
        ventana.document.close();
        ventana.gatito = gatito;
    }

    document.addEventListener("DOMContentLoaded", function init() {
        document.getElementById("nuevoGato").addEventListener("click",datosGato);
        error = document.getElementById("error");
    });
}