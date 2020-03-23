/**
 * Clase Principal
 *
 * @author Francisco Javier Frías Serrano
 */

function limpiar() {
    let mensajeNombre = document.getElementById("msj_nombre");
    let mensajeApellido1 = document.getElementById("msj_apellido1");
    let mensajeApellido2 = document.getElementById("msj_apellido2");
    let mensajeFecha = document.getElementById("msj_fecha");
    mensajeNombre.textContent = "";
    mensajeNombre.style.color = "black";
    mensajeApellido1.textContent = "";
    mensajeApellido1.style.color = "black";
    mensajeApellido2.textContent = "";
    mensajeApellido2.style.color = "black";
    mensajeFecha.textContent = "";
    mensajeFecha.style.color = "black";
}

function validar(nombre, apellido1, apellido2, fechaNacimiento) {
    limpiar();
    let mensajeNombre = document.getElementById("msj_nombre");
    let mensajeApellido1 = document.getElementById("msj_apellido1");
    let mensajeApellido2 = document.getElementById("msj_apellido2");
    let mensajeFecha = document.getElementById("msj_fecha");
    let regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    let comprobacion = true;

    if (nombre.value == "") {
        mensajeNombre.textContent = "El nombre no puede estar vacio";
        mensajeNombre.style.color = "red";
        comprobacion = false;
    }
    if (apellido1.value == "") {
        mensajeApellido1.textContent = "El apellido1 no puede estar vacio";
        mensajeApellido1.style.color = "red";
        comprobacion = false;
    }
    if (apellido2.value == "") {
        mensajeApellido2.textContent = "El apellido2 no puede estar vacio";
        mensajeApellido2.style.color = "red";
        comprobacion = false;
    }
    try {
        if (fechaNacimiento.value == "") {
            throw "La fecha no puede estar vacio";
        } else if (!regexDate.exec(fechaNacimiento.value)) {
            throw "La fecha no es correcta";
        }

        let arrayFecha = fechaNacimiento.value.split("-");
        let fechaComprobar = new Date(arrayFecha[2], arrayFecha[1], arrayFecha[0]);
        let fechaActual = new Date();  

        if (fechaActual.getTime() < fechaComprobar.getTime()) {
            throw "La fecha no puede ser futura";
        }
    } catch (error) {
        comprobacion = false;
        mensajeFecha.textContent = error;
        mensajeFecha.style.color = "red";
    }
    return comprobacion;
}

{
    let init = function() {
        let inputNombre = document.getElementsByTagName("input")[0];
        let inputApellido1 = document.getElementsByTagName("input")[1];
        let inputApellido2 = document.getElementsByTagName("input")[2];
        let inputFechaNacimiento = document.getElementsByTagName("input")[3];

        let botonCrear = document.getElementById("crear").addEventListener("click", function() {
            if (validar(inputNombre, inputApellido1, inputApellido2, inputFechaNacimiento)) {
                let alumno = new Alumno();
                alumno.nombre = inputNombre.value;
                alumno.apellido1 = inputApellido1.value;
                alumno.apellido2 = inputApellido2.value;
                alumno.fechaNacimiento = inputFechaNacimiento.value;
                alumno.mostrar();
            }
        });

        let botonLimpiar = document.getElementById("limpiar").addEventListener("click", function() {
            limpiar();
        });
    }

    window.addEventListener("DOMContentLoaded", init);

}