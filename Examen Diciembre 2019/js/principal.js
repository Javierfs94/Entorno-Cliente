/**
 * Página principal
 * 
 * @author Francisco Javier Frías Serrano
 */
{

    /**
     * Crea una ventana con un tamaño predefinido
     * 
     * @param {*} contenido pasado
     */
    let crearVentana = function(contenido) {
        let ventana = window.open("", "", "width=550, height=500");
        ventana.document.write(contenido);
        ventana.document.close();
    }


    let init = function() {

        let enlace = document.getElementsByTagName("a");
        let boton = document.getElementsByTagName("button");

        /**
         * Evento para crear la ventana De todo un poco
         */
        enlace[0].addEventListener("click", function() {
            crearVentana(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="author" content="Francisco Javier Frías Serrano">
                <meta name="description" content="Examen Diciembre 2019 Cliente">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="css/style.css">
                <script src="js/detodounpoco.js"></script>
                <title>Francisco Javier Frías Serrano</title>
            </head>
            <body>
            <noscript>
                <p>La página necesita para su funcionamiento el uso de JavaScript.</p>
            </noscript>
            <header>
                <h1>Francisco Javier Frías Serrano</h1>
                <h2>Examen Diciembre 2019</h2>
            </header>
                            
                <button id="informa">Informa</button>
                <button id="salir">Salir</button>
                <span id="info"></span>
            <footer>
                <p>IES Gran Capitán</p>
            </footer>
            </body>
            </html>
            `);
        });

        /**
         * Evento para crear la ventana De empleado
         */
        boton[0].addEventListener("click", function() {
            crearVentana(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="author" content="Francisco Javier Frías Serrano">
                <meta name="description" content="Examen Diciembre 2019 Cliente">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="css/style.css">
                <script src="js/Empleado.js"></script>
                <script src="js/Validar.js"></script>
                <script src="js/formularioEmpleado.js"></script>
                <title>De todo un poco</title>
            </head>
            <body>
            <noscript>
                <p>La página necesita para su funcionamiento el uso de JavaScript.</p>
            </noscript>
            <header>
                <h1>Francisco Javier Frías Serrano</h1>
                <h2>Examen Diciembre 2019</h2>
            </header> 
                <span>Nombre: </span><input type="text" id="nombre"><span id="errorNombre" style="color:red;"></span><br>
                <span>Fecha de nacimiento </span><input type="text" id="fechaNacimiento"><span id="errorFechaNacimiento" style="color:red;"></span><br>
                <span>DNI: </span><input type="text" id="dni"><span id="errorDni" style="color:red;"></span><br>
                <button id="crearEmpleado">Nuevo Empleado</button>
            <footer>
                <p>IES Gran Capitán</p>
            </footer>
            </body>
            </html>
            `);
        });

    }

    window.addEventListener("DOMContentLoaded", init);
}