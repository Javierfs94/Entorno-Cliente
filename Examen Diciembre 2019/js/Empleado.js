/**
 * Empleado
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    /**
     * Constructor Empleado
     * 
     * @param {*} nombre 
     * @param {*} fechaNacimiento 
     * @param {*} dni 
     */
    function Empleado(nombre, fechaNacimiento, dni) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
    }

    /**
     * Crea la nueva ventana con la información del empleado
     */
    Empleado.prototype.crearNuevaVentana = function() {
        this.ventana = window.open("", "", "width=450,height=500");
        this.ventana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="author" content="Rafael Lopez Cruz">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="css/style.css">
            <title>Información de un Empleado</title>
        </head>
        <body>
        <noscript>
            <p>La página necesita para su funcionamiento el uso de JavaScript.</p>
        </noscript>
        <header>
            <h1>Francisco Javier Frías Serrano</h1>
            <h2>Examen Diciembre 2019</h2>
         </header>
            <h2>Datos del empleado</h2>
            Nombre: ` + this.nombre + `
            <br>Fecha de nacimiento: ` + this.fechaNacimiento + `
            <br>DNI: ` + this.dni + `
        <footer>
            <p>IES Gran Capitán</p>
        </footer>
        </body>
        </html>
        `);
        this.ventana.document.close();
    }
}