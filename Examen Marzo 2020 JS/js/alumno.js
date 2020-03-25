/**
 * Clase Alumno
 * 
 * @author Francisco Javier Frías Serrano
 */

function Alumno(nombre, apellido1, apellido2, fechaNacimiento) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.fechaNacimiento = fechaNacimiento;
}

Alumno.prototype.calculaEdad = function() {
    let arrayEdad = this.fechaNacimiento.split("-");
    let edad = new Date().getFullYear() - arrayEdad[2];

    if ((new Date().getMonth() + 1) > arrayEdad[1]) {
        edad++;
    } else {
        if ((new Date().getMonth() + 1) == arrayEdad[1] && new Date().getDate() > arrayEdad[0]) {
            edad++;
        }
    }
    return --edad;
}

Alumno.prototype.mostrar = function() {
    let ventana = window.open("", "infoAlumno", "width=300, height=200");
    ventana.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Información del Alumno</title>
        </head>
        <body>
            <h1>Alumno</h1>
            <p>Nombre: ${this.nombre}</p>
            <p>Apellido 1: ${this.apellido1}</p>
            <p>Apellido 2: ${this.apellido2}</p>
            <p>Fecha de Nacimiento: ${this.calculaEdad()}</p>
        </body>
        </html>`);

    ventana.document.close();
};