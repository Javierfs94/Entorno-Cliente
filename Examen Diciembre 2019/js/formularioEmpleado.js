/**
 * Formulario de Empleado
 * 
 * @author Francisco Javier Frías Serrano
 */
{
    let init = function() {
        let inputNombre = document.getElementById("nombre");
        let inputFechaNacimiento = document.getElementById("fechaNacimiento");
        let inputDni = document.getElementById("dni");

        let spanErrorNombre = document.getElementById("errorNombre");
        let spanErrorFechaNacimiento = document.getElementById("errorFechaNacimiento");
        let spanErrorDni = document.getElementById("errorDni");

        let botonCrearEmpleado = document.getElementById("crearEmpleado");

        /**
         * Si desaparece el foco que compruebe si el valor es válido
         */
        inputNombre.addEventListener("blur", function() {
            if (!comprobarNombre(inputNombre.value))
                spanErrorNombre.innerHTML = regex.regexNombre[1];
            else
                spanErrorNombre.innerHTML = "";
        })

        inputFechaNacimiento.addEventListener("blur", function() {
            if (!comprobarFechaNacimiento(inputFechaNacimiento.value))
                spanErrorFechaNacimiento.innerHTML = regex.regexFechaNacimiento[1];
            else
                spanErrorFechaNacimiento.innerHTML = "";
        })

        inputDni.addEventListener("blur", function() {
            if (!comprobarDni(inputDni.value))
                spanErrorDni.innerHTML = regex.regexDni[1];
            else
                spanErrorDni.innerHTML = "";
        })

        /**
         * Si se pulsa crear un nuevo empleado comprueba si los valores son válidos y crea al empleado
         */
        botonCrearEmpleado.addEventListener("click", function() {
            if (!comprobarNombre(inputNombre.value)) {
                spanErrorNombre.innerHTML = regex.regexNombre[1];
            } else {
                spanErrorNombre.innerHTML = "";
            }
            if (!comprobarDni(inputDni.value)) {
                spanErrorDni.innerHTML = regex.regexDni[1];
            } else {
                spanErrorDni.innerHTML = "";
            }
            if (!comprobarFechaNacimiento(inputFechaNacimiento.value)) {
                spanErrorFechaNacimiento.innerHTML = regex.regexFechaNacimiento[1];
            } else {
                spanErrorFechaNacimiento.innerHTML = "";
            }
            if (comprobarNombre(inputNombre.value) && comprobarDni(inputDni.value) && comprobarFechaNacimiento(inputFechaNacimiento.value)) {
                let empleado = new Empleado(inputNombre.value, inputFechaNacimiento.value, inputDni.value);
                empleado.crearNuevaVentana();
                inputNombre.value = "";
                inputDni.value = "";
                inputFechaNacimiento.value = "";
            }
        })
    }

    document.addEventListener("DOMContentLoaded", init);
}