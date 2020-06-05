/**
 * Conjunto de ejercicios de String y Regex
 * 
 * @author Francisco Javier Frías Serrano
 */


{

    /**
     * Convierte la primera letra en mayúscula
     * 
     * @param {String} cadena 
     */
    let capitaliza = function(cadena) {
        return cadena.replace(/\b\w/g, (str) => str.toUpperCase());
    }

    /**
     * Invierte todos los caracteres de miníscula a mayúscula y viceversa
     * 
     * @param {String} cadena 
     */
    let invierte = function(cadena) {
        let cadenaFinal = "";
        for (let i = 0; i < cadena.length; i++) {
            if (/[A-Z]/g.test(cadena[i])) {
                cadenaFinal = cadenaFinal.concat("", cadena[i].toLowerCase());
            }
            if (/[a-z]/g.test(cadena[i])) {
                cadenaFinal = cadenaFinal.concat("", cadena[i].toUpperCase());
            }
        }
        return cadenaFinal;
    }

    /**
     * Convierte una cadena a Camel Case
     * 
     * @param {String} cadena 
     */
    let camelCase = function(cadena) {
        return cadena.replace(/(\s)(\w)/g, (str) => str[1].toUpperCase());
    }

    /**
     * Quita el Camel Case de una cadena
     * 
     * @param {String} cadena 
     */
    let sinCamelCase = function(cadena) {
        return cadena.replace(/[A-Z]/g, (str) => " " + str[0].toLowerCase());
    }

    /**
     * Verifica que el DNI introducido como cadena
     * 
     * @param {String} cadena 
     */
    let compruebaDNI = function(cadena) {
        let mensaje = "";
        const arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        try {
            let [, numero, letra] = /^(\d{8})[ -]?([A-Z(^IÑOU)]$)/i.exec(cadena);
            (arrayLetras[numero % 23] == letra.toUpperCase()) ? mensaje = "DNI Correcto": mensaje = "La letra introducida no es la correcta";
        } catch (error) {
            mensaje = "Error. El formato del DNI no es correcto"
        }
        return mensaje;
    }

    /**
     * Verifica el CP introducido como cadena
     * 
     * @param {String} cadena 
     */
    let comprobarCodigoPostal = function(cadena) {
        const expresion = /([0-4]\d|5[0-2])(\d{2}[1-9]|\d[1-9]\d|[1-9]\d{2})/g;
        let correctos = [];
        let arrayCp = [...cadena.matchAll(expresion)];

        arrayCp.forEach(ip => {
            correctos.push(ip[0]);
        });
        return (correctos);
    }


    /**
     * Verifica la matrícula introducida como cadena
     * 
     * @param {*} cadena 
     */
    let comprobarMatricula = function(cadena) {
        const expresion = /([\d]{4})[ -]?([B-DF-HJ-NPR-TV-Z]{3})/gi;
        let correctas = [];
        let arrayMatriculas = [...cadena.matchAll(expresion)];

        arrayMatriculas.forEach(matricula => {
            correctas.push(matricula[0]);
        });
        return (correctas);
    }

    /**
     * Verifica la MAC introducida como cadena
     * 
     * @param {String} cadena 
     */
    let compruebaMAC = function(cadena) {
        let mensaje = "";
        (/^([\dA-Fa-f]{2}[: -]){5}([\dA-Fa-f]{2})$/.test(cadena)) ? mensaje = "Dirección MAC Correcta": mensaje = "Dirección MAC Incorrecta";
        return mensaje;
    }

    /**
     * Verifica la IP introducida como cadena
     * 
     * @param {String} cadena 
     */
    let compruebaIP = function(cadena) {
        let mensaje = "";
        (/^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/.test(cadena)) ? mensaje = "La dirección IP es correcta": mensaje = "Dirección Ip Incorrecta";
        return mensaje;
    }

    document.addEventListener("DOMContentLoaded", function init() {

        let inputs = document.getElementsByTagName("input"); // Arrays de inputs
        let textAreas = document.getElementsByTagName("textarea"); // Arrays de textAreas  


        for (let i = 0; i < inputs.length; i++) {
            elemento = inputs[i];
            elemento.addEventListener("blur", function() {
                let cadena = this.value.trim();
                let cadenaFin1 = "";
                let cadenaFin2 = "";
                let cadenaInicio1 = "";
                let cadenaInicio2 = "";
                switch (i) {
                    case 0: // Capitalizar
                        this.nextElementSibling.textContent = capitaliza(cadena);
                        break;
                    case 1: // Invertir
                        this.nextElementSibling.textContent = invierte(cadena);
                        break;
                    case 2: // Camel Case
                        this.nextElementSibling.textContent = camelCase(cadena);
                        break;
                    case 3: // Sin Camel Case
                        this.nextElementSibling.textContent = sinCamelCase(cadena);
                        break;
                    case 4: // Cadena finaliza 1
                        cadenaFin1 = this.value.trim();
                        if (cadenaFin1 != "" && cadenaFin2 != "") {
                            (cadenaFin2.endsWith(cadenaFin1)) ? this.parentElement.parentElement.nextElementSibling.textContent = "La cadena final termina con la cadena dada": this.parentElement.parentElement.nextElementSibling.textContent = "La cadena final no termina con la cadena dada";
                        }
                        break;
                    case 5: // Cadena finaliza 2
                        cadenaFin2 = this.value.trim();
                        if (cadenaFin1 != "" && cadenaFin2 != "") {
                            (cadenaFin2.endsWith(cadenaFin1)) ? this.parentElement.parentElement.nextElementSibling.textContent = "La cadena final termina con la cadena dada": this.parentElement.parentElement.nextElementSibling.textContent = "La cadena final no termina con la cadena dada";
                        }
                        break;
                    case 6: // Cadena comienza 1
                        cadenaInicio1 = this.value.trim();
                        if (cadenaInicio1 != "" && cadenaInicio2 != "") {
                            (cadenaInicio2.startsWith(cadenaInicio1)) ? this.parentElement.parentElement.nextElementSibling.textContent = "La cadena final comienza con la cadena dada": this.parentElement.parentElement.nextElementSibling.textContent = "La cadena final no comienza con la cadena dada";
                        }
                        break;
                    case 7: // Cadena comienza 2
                        cadenaInicio2 = this.value.trim();
                        if (cadenaInicio1 != "" && cadenaInicio2 != "") {
                            (cadenaInicio2.startsWith(cadenaInicio1)) ? this.parentElement.parentElement.nextElementSibling.textContent = "La cadena final comienza con la cadena dada": this.parentElement.parentElement.nextElementSibling.textContent = "La cadena final no comienza con la cadena dada";
                        }
                        break;
                    case 8: // Comprueba DNI
                        this.nextElementSibling.textContent = compruebaDNI(cadena);
                        break;
                    case 9: // Comprueba MAC
                        this.nextElementSibling.textContent = compruebaMAC(cadena);
                        break;
                    case 10: // Comprueba IP
                        this.nextElementSibling.textContent = compruebaIP(cadena);
                        break;

                    default:
                        break;
                };
            });
        }

        for (let i = 0; i < textAreas.length; i++) {
            elemento = textAreas[i];
            elemento.addEventListener("blur", function() {
                let cadena = this.value.trim();
                switch (i) {
                    case 0:
                        let correctas = comprobarMatricula(cadena);
                        this.nextElementSibling.textContent = "Matriculas correctas: "
                        correctas.forEach(correcta => {
                            this.nextElementSibling.textContent += correcta + ", ";
                        });
                        break;
                    case 1:
                        let correctos = comprobarCodigoPostal(cadena);
                        this.nextElementSibling.textContent = "Códigos postales correctos: "
                        correctos.forEach(correcto => {
                            this.nextElementSibling.textContent += correcto + ", ";
                        });
                        break;
                };
            });
        };


    });
}