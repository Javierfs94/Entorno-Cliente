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
        email: [
            /^[\w]+@{1}[\w]+\.[a-z]{2,}/i,
            "Formato de email no válido"
        ]
    };

    let test = {
        expresionRegular(texto, patron) {
            if (!regex[patron][0].test(texto)) {
                return regex[patron][1];
            }
            return "";
        }
    }

    function Input(input, span) {
        if (span.textContent !== "") {
            inputsErroneos.push(input);
        } else {
            span.textContent = test.expresionRegular(input.value, input.getAttribute("expresion"));
        }
    }

    return {
        regex: regex,
        test: test,
        Input: Input,
    }
}();