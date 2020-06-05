/**
 * Clase Principal
 *
 * @author Francisco Javier Frías Serrano
 */

let mensajeNombre;
let mensajeApellido1;
let mensajeApellido2;
let mensajeFecha;


let limpiar = function() {
    mensajeNombre.textContent = "";
    mensajeNombre.style.color = "black";
    mensajeApellido1.textContent = "";
    mensajeApellido1.style.color = "black";
    mensajeApellido2.textContent = "";
    mensajeApellido2.style.color = "black";
    mensajeFecha.textContent = "";
    mensajeFecha.style.color = "black";
}

let validar = function(nombre, apellido1, apellido2, fechaNacimiento) {
    limpiar();
    let regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    let comprobacion = true;

    if (nombre == "") {
        mensajeNombre.textContent = "El nombre no puede estar vacio";
        mensajeNombre.style.color = "red";
        comprobacion = false;
    }
    if (apellido1 == "") {
        mensajeApellido1.textContent = "El apellido1 no puede estar vacio";
        mensajeApellido1.style.color = "red";
        comprobacion = false;
    }
    if (apellido2 == "") {
        mensajeApellido2.textContent = "El apellido2 no puede estar vacio";
        mensajeApellido2.style.color = "red";
        comprobacion = false;
    }
    try {
        if (fechaNacimiento == "") {
            throw "La fecha no puede estar vacio";
        } else if (!regexDate.exec(fechaNacimiento)) {
            throw "La fecha no es correcta";
        }

        let arrayFecha = fechaNacimiento.split("-");
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
        const [inputNombre, inputApellido1, inputApellido2, inputFechaNacimiento] = document.getElementsByTagName("input");
        mensajeNombre = document.getElementById("msj_nombre");
        mensajeApellido1 = document.getElementById("msj_apellido1");
        mensajeApellido2 = document.getElementById("msj_apellido2");
        mensajeFecha = document.getElementById("msj_fecha");

        document.getElementById("crear").addEventListener("click", function() {
            if (validar(inputNombre.value, inputApellido1.value, inputApellido2.value, inputFechaNacimiento.value)) {
                let alumno = new Alumno(inputNombre.value, inputApellido1.value, inputApellido2.value, inputFechaNacimiento.value);
                alumno.mostrar();
            }
        });

        document.getElementById("limpiar").addEventListener("click", function() {
            limpiar();
        });
    }

    window.addEventListener("DOMContentLoaded", init);

}