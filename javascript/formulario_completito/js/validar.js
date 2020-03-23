/**
 * Validación del formulario
 * 
 * @author Francisco Javier Frías Serrano
 */

let inputsErroneos = [];

let validar = function() {

    /**
     * Expresiones regulares
     */
    let regex = {
        nombre: [
            /^([A-Z][a-z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/,
            "Comienza por mayúsculas, al menos nombre y apellido"
        ],
        edad: [
            /^[/\d]{1,}$/,
            "La edad debe de ser un número mayor que 0"
        ],
        dni: [
            /^([0-9]{8})([A-Z(^IÑOU)]$)/i, ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'], "Formato válido 12345678Z"
        ],
        email: [
            /^[\w]+@{1}[\w]+\.[a-z]{2,}/i,
            "Formato de email no válido"
        ],
        fecha: [
            /^\d{2}([-/ ])\d{2}\1\d{4}$/,
            "Formatos válidos: dd/mm/YYYY, dd mm YYYY, dd-mm-YYYY"
        ],
        telefono: [
            /^\d{9}$/,
            "Error, formato correcto: Ejemplo 111222333"
        ],
        cuentaCorriente: [
            /^[\d]{20}$|^[\d]{4}([-/ ])[\d]{4}\1[\d]{2}\1[\d]{10}$/,
            "La cuenta corriente contiene 20 números, pueden ser seguidos o del formato: xxxx-xxxx-xx-xxxxxxxxxx / xxxx xxxx xx xxxxxxxxxx"
        ],
        direccionWeb: [
            /http[s]?:\/\/[\w]+([\.]+[\w]+)+/,
            "Error, formato correcto: https://www.google.es o http://www.google.es"
        ]
    };

    let test = {
        expresionRegular(texto, patron) {
            if (!regex[patron][0].test(texto)) {
                return regex[patron][1];
            }
            return "";
        },
        DNI(dni) {
            if (!regex.dni[0].test(dni))
                return regex.dni[2];
            else {
                let [, numeroDNI, letraDNI] = regex.dni[0].exec(dni);
                if (regex.dni[1][numeroDNI % 23] != letraDNI)
                    return "Letra incorrecta";
                return "";
            }
        },
        Sexo(sexos) {
            let seleccionado;
            for (let sexo of sexos) {
                if (sexo.checked)
                    seleccionado = true;
                alert(sexo.value)
            }
            if (!seleccionado)
                return "Debes seleccionar una opción.";
            return "";
        }
    }

    function Input(input, span) {
        if (input.id == "DNI") {
            span.textContent = test.DNI(input.value);
        } else {
            span.textContent = test.expresionRegular(input.value, input.getAttribute("expresion"));
        }
        if (span.textContent !== "") {
            inputsErroneos.push(input);
        }
    }

    function RadioButton() {
        if (!document.querySelector("input[name='sexo']:checked")) {
            collectionSpan.get("errorsexo").textContent = "Debes de seleccionar un sexo";
        } else {
            collectionSpan.get("errorsexo").textContent = "";
        }
    }

    function CheckBox() {
        if (!checkBox.checked) {
            collectionSpan.get("errorterminos").textContent = "Debes de aceptar los términos y condiciones";
        } else {
            collectionSpan.get("errorterminos").textContent = "";
        }
    }

    return {
        regex: regex,
        test: test,
        Input: Input,
        RadioButton: RadioButton,
        CheckBox: CheckBox,
    }
}();