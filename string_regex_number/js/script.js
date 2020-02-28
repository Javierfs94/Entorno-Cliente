/**
 * Conjunto de ejercicios de Number, String y Regex
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    let input1Number;
    let infoDecimal;
    let input2numero1;
    let input2numero2;
    let infoOperacion;
    let input3Number;
    let infoArea;
    let ejercicio1;
    let input1;
    let ejercicio2;
    let input2;
    let ejercicio3;
    let input3;
    let ejercicio4;
    let input4;
    let ejercicio5;
    let inputPrimero5;
    let inputSegundo5;
    let ejercicio6;
    let inputPrimero6;
    let inputSegundo6;
    let ejercicio7;
    let input7;
    let ejercicio8;
    let input8;
    let ejercicio9;
    let input9;
    let ejercicio10;
    let input10;
    let ejercicio11;
    let input11;

    let conversor = function() {
        if (input1Number.value == "" || input1Number.value == null) {
            infoDecimal.innerHTML = "Debes de introducir un número para poder hacer el cálculo";
        } else {
            if (document.getElementById("decimal").checked) {
                let numero = parseInt(input1Number.value);
                infoDecimal.innerHTML = "Decimal: " + numero + "<br>";
                infoDecimal.innerHTML += "Binario: " + numero.toString(2) + "<br>";
                infoDecimal.innerHTML += "Octal: " + numero.toString(8) + "<br>";
                infoDecimal.innerHTML += "Hexadecimal: " + numero.toString(16);
            }
            if (document.getElementById("binario").checked) {
                let numero = input1Number.value;
                let numeroDecimal = parseInt(numero, 2)
                infoDecimal.innerHTML = "Decimal: " + numeroDecimal + "<br>";
                infoDecimal.innerHTML += "Binario: " + numero + "<br>";
                infoDecimal.innerHTML += "Octal: " + numeroDecimal.toString(8) + "<br>";
                infoDecimal.innerHTML += "Hexadecimal: " + numeroDecimal.toString(16);
            }

            if (document.getElementById("octal").checked) {
                let numero = input1Number.value;
                let numeroDecimal = parseInt(numero, 8)
                infoDecimal.innerHTML = "Decimal: " + numeroDecimal + "<br>";
                infoDecimal.innerHTML += "Binario: " + numeroDecimal.toString(2) + "<br>";
                infoDecimal.innerHTML += "Octal: " + numero + "<br>";
                infoDecimal.innerHTML += "Hexadecimal: " + numeroDecimal.toString(16);
            }

            if (document.getElementById("hexadecimal").checked) {
                let numero = input1Number.value;
                let numeroDecimal = parseInt(numero, 16)
                infoDecimal.innerHTML = "Decimal: " + numeroDecimal + "<br>";
                infoDecimal.innerHTML += "Binario: " + numeroDecimal.toString(2) + "<br>";
                infoDecimal.innerHTML += "Octal: " + numeroDecimal.toString(8) + "<br>";
                infoDecimal.innerHTML += "Hexadecimal: " + numero;
            }
        }

    }

    let sumar = function() {
        if (input2numero1.value == "" || input2numero1.value == null || input2numero2.value == "" || input2numero2.value == null) {
            infoOperacion.innerHTML = "Debes de introducir un número para poder hacer el cálculo";
        } else {
            let numero1 = parseInt(input2numero1.value);
            let numero2 = parseInt(input2numero2.value);
            if (document.getElementById("decimal").checked) {
                numero1 = parseInt(input2numero1.value);
            }
            if (document.getElementById("binario").checked) {
                numero1 = parseInt(numero1, 2);
            }

            if (document.getElementById("octal").checked) {
                numero1 = parseInt(numero1, 8);
            }

            if (document.getElementById("hexadecimal").checked) {
                numero1 = parseInt(numero1, 16);
            }

            if (document.getElementById("decimal2").checked) {
                numero2 = parseInt(input2numero2.value);
            }
            if (document.getElementById("binario2").checked) {
                numero2 = parseInt(numero2, 2);
            }

            if (document.getElementById("octal2").checked) {
                numero2 = parseInt(numero2, 8);
            }

            if (document.getElementById("hexadecimal2").checked) {
                numero2 = parseInt(numero2, 16);
            }
            infoOperacion.innerHTML = "El resultado de la suma de los números es igual a: " + (numero1 + numero2);
        }

    }

    let multiplicar = function() {
        if (input2numero1.value == "" || input2numero1.value == null || input2numero2.value == "" || input2numero2.value == null) {
            infoOperacion.innerHTML = "Debes de introducir un número para poder hacer el cálculo";
        } else {
            let numero1 = parseInt(input2numero1.value);
            let numero2 = parseInt(input2numero2.value);
            if (document.getElementById("decimal").checked) {
                numero1 = parseInt(input2numero1.value);
            }
            if (document.getElementById("binario").checked) {
                numero1 = parseInt(numero1, 2);
            }

            if (document.getElementById("octal").checked) {
                numero1 = parseInt(numero1, 8);
            }

            if (document.getElementById("hexadecimal").checked) {
                numero1 = parseInt(numero1, 16);
            }

            if (document.getElementById("decimal2").checked) {
                numero2 = parseInt(input2numero2.value);
            }
            if (document.getElementById("binario2").checked) {
                numero2 = parseInt(numero2, 2);
            }

            if (document.getElementById("octal2").checked) {
                numero2 = parseInt(numero2, 8);
            }

            if (document.getElementById("hexadecimal2").checked) {
                numero2 = parseInt(numero2, 16);
            }
            infoOperacion.innerHTML = "El resultado de la multiplicación de los números es igual a: " + (numero1 * numero2);
        }
    }

    let calcularArea = function() {
        if (input3Number.value == "" || input3Number.value == null) {
            infoArea.innerHTML = "Debes de introducir un número para poder hacer el cálculo";
        } else {
            let radio = input3Number.value;
            let area = Math.PI * Math.pow(radio, 2);
            infoArea.innerHTML = "El área de la circunferencia de radio " + radio + " es: " + area.toFixed(4) + " cm<sup>2</sup>";
        }

    }

    let capitaliza = function() {
        let cadena = input1.value.trim();
        let cadenaMayus = cadena.toLowerCase().split(' ');
        for (let i = 0; i < cadenaMayus.length; i++) {
            cadenaMayus[i] = cadenaMayus[i].charAt(0).toUpperCase() + cadenaMayus[i].substring(1);
        }
        ejercicio1.innerHTML = "Resultado: " + cadenaMayus.join(' ');
    }

    let invierte = function() {
        let cadena = input2.value.trim();
        let cadenaNueva = "";
        for (let i = 0; i < cadena.length; ++i) {
            c = cadena[i];
            if (c == c.toUpperCase()) {
                cadenaNueva += c.toLowerCase();
            } else if (c == c.toLowerCase()) {
                cadenaNueva += c.toUpperCase();
            } else {
                cadenaNueva += c;
            }
        }
        ejercicio2.innerHTML = "Resultado: " + cadenaNueva;
    }

    let camelCaser = function() {
        let cadena = input3.value.trim();
        let cadenaNueva = cadena.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr) {
            return chr.toUpperCase();
        });

        ejercicio3.innerHTML = "Resultado: " + cadenaNueva;
    }

    let desCamelCaser = function() {
        let cadena = input4.value.trim();
        let cadenaNueva = cadena.split(/(?=[A-Z])/).join(' ');
        ejercicio4.innerHTML = "Resultado: " + cadenaNueva;
    }

    let finalizaEn = function() {
        let cadena1 = inputPrimero5.value.trim();
        let cadena2 = inputSegundo5.value.trim();
        if (cadena1.endsWith(cadena2)) {
            ejercicio5.innerHTML = "La cadena 1 finaliza con la cadena 2";
        } else {
            ejercicio5.innerHTML = "La cadena 1 no finaliza con la cadena 2";
        }

    }

    let empiezaEn = function() {
        let cadena1 = inputPrimero6.value.trim();
        let cadena2 = inputSegundo6.value.trim();
        if (cadena1.startsWith(cadena2)) {
            ejercicio6.innerHTML = "La cadena 1 empieza con la cadena 2";
        } else {
            ejercicio6.innerHTML = "La cadena 1 no empieza con la cadena 2";
        }

    }

    let compruebaDNI = function() {
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        let expresionRegDNI = /(\d{8})\s?-?([TRWAGMYFPDXBNJZSQVHLCKE])$/i;
        let cadena = input7.value.trim();
        let cadenaNueva = cadena.toUpperCase();
        if (!expresionRegDNI.test(cadenaNueva)) {
            ejercicio7.innerHTML = "El DNI introducido no tiene un formato correcto";
        } else {
            [, numero, letra] = expresionRegDNI.exec(cadenaNueva);
            if (letras[numero % 23] != letra) {
                ejercicio7.innerHTML = "La letra introducida es incorrecta";
            } else {
                ejercicio7.innerHTML = "¡DNI CORRECTO!";
            }
        }
    }

    let compruebaMatricula = function() {
        let cadena = (input8.value).trim();
        let expresionMatricula = /^[0-9]{4}[a-zA-Z]{3}$/;
        let cadenaNueva = cadena.toUpperCase();
        if (expresionMatricula.test(cadenaNueva)) {
            ejercicio8.innerHTML = "La matrícula '" + cadenaNueva + "' tiene un formato correcto."
        } else {
            ejercicio8.innerHTML = "La matrícula '" + cadenaNueva + "' no tiene un formato correcto."
        }
    }

    let compruebaCodigoPostal = function() {
        let cadena = (input9.value).trim();
        let expresionCodigoPostal = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
        let cadenaNueva = cadena.toUpperCase();
        if (expresionCodigoPostal.test(cadenaNueva)) {
            ejercicio9.innerHTML = "El código postal '" + cadenaNueva + "' tiene un formato correcto."
        } else {
            ejercicio9.innerHTML = "El código postal '" + cadenaNueva + "' no tiene un formato correcto."
        }
    }

    let compruebaMAC = function() {
        let cadena = (input10.value).trim();
        let expresionMAC = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
        let cadenaNueva = cadena.toUpperCase();
        if (expresionMAC.test(cadenaNueva)) {
            ejercicio10.innerHTML = "La dirección MAC '" + cadenaNueva + "' tiene un formato correcto."
        } else {
            ejercicio10.innerHTML = "La dirección MAC '" + cadenaNueva + "' no tiene un formato correcto."
        }
    }

    let compruebaIP = function() {
        let cadena = (input11.value).trim();
        let expresionIP = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
        let cadenaNueva = cadena.toUpperCase();
        if (expresionIP.test(cadenaNueva)) {
            ejercicio11.innerHTML = "La dirección IP '" + cadenaNueva + "' tiene un formato correcto."
        } else {
            ejercicio11.innerHTML = "La dirección IP '" + cadenaNueva + "' no tiene un formato correcto."
        }
    }

    document.addEventListener("DOMContentLoaded", function init() {
        // Info ejercicio 1 Number
        input1Number = document.getElementById("numeroEjercicio1");
        infoDecimal = document.getElementById("info1Number");
        document.getElementById("convertir").addEventListener("click", conversor);

        // Info ejercicio 2 Number
        input2numero1 = document.getElementById("numero1Ejercicio2");
        input2numero2 = document.getElementById("numero2Ejercicio2");
        infoOperacion = document.getElementById("info2Number");
        document.getElementById("sumar").addEventListener("click", sumar);
        document.getElementById("multiplicar").addEventListener("click", multiplicar);

        // Info ejercicio 3 Number
        input3Number = document.getElementById("numeroEjercicio3");
        infoArea = document.getElementById("info3Number");
        document.getElementById("area").addEventListener("click", calcularArea);

        // Info ejercicio 1 String y Regex
        input1 = document.getElementById("cadenaEjercicio1");
        ejercicio1 = document.getElementById("info1");
        document.getElementById("boton1").addEventListener("click", capitaliza);

        // Info ejercicio 2 String y Regex
        input2 = document.getElementById("cadenaEjercicio2");
        ejercicio2 = document.getElementById("info2");
        document.getElementById("boton2").addEventListener("click", invierte);

        // Info ejercicio 3 String y Regex
        input3 = document.getElementById("cadenaEjercicio3");
        ejercicio3 = document.getElementById("info3");
        document.getElementById("boton3").addEventListener("click", camelCaser);

        // Info ejercicio 4 String y Regex
        input4 = document.getElementById("cadenaEjercicio4");
        ejercicio4 = document.getElementById("info4");
        document.getElementById("boton4").addEventListener("click", desCamelCaser);

        // Info ejercicio 5 String y Regex
        inputPrimero5 = document.getElementById("cadena1Ejercicio5");
        inputSegundo5 = document.getElementById("cadena2Ejercicio5");
        ejercicio5 = document.getElementById("info5");
        document.getElementById("boton5").addEventListener("click", finalizaEn);

        // Info ejercicio 6 String y Regex
        inputPrimero6 = document.getElementById("cadena1Ejercicio6");
        inputSegundo6 = document.getElementById("cadena2Ejercicio6");
        ejercicio6 = document.getElementById("info6");
        document.getElementById("boton6").addEventListener("click", empiezaEn);

        // Info ejercicio 7 String y Regex
        input7 = document.getElementById("cadenaEjercicio7");
        ejercicio7 = document.getElementById("info7");
        document.getElementById("boton7").addEventListener("click", compruebaDNI);

        // Info ejercicio 8 String y Regex
        input8 = document.getElementById("cadenaEjercicio8");
        ejercicio8 = document.getElementById("info8");
        document.getElementById("boton8").addEventListener("click", compruebaMatricula);

        // Info ejercicio 9 String y Regex
        input9 = document.getElementById("cadenaEjercicio9");
        ejercicio9 = document.getElementById("info9");
        document.getElementById("boton9").addEventListener("click", compruebaCodigoPostal);

        // Info ejercicio 10 String y Regex
        input10 = document.getElementById("cadenaEjercicio10");
        ejercicio10 = document.getElementById("info10");
        document.getElementById("boton10").addEventListener("click", compruebaMAC);

        // Info ejercicio 11 String y Regex
        input11 = document.getElementById("cadenaEjercicio11");
        ejercicio11 = document.getElementById("info11");
        document.getElementById("boton11").addEventListener("click", compruebaIP);

    });


}