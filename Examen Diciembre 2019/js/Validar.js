/**
 * Validación
 * 
 * @author Francisco Javier Frías Serrano
 */

/**
 * Expresiones regulares
 */
let regex = {
    regexNombre: new Array(new RegExp("^[a-zA-Zá-úÁ-Ú ]+$"), "Error. ¡No es un nombre válido!"),
    regexFechaNacimiento: new Array(new RegExp("^[0-9]{2}/{1}|-{1}[0-9]{2}/{1}|-{1}[0-9]{4}$"), "Error. ¡No es una fecha de nacimiento válida!"),
    regexDni: new Array(new RegExp("(^[0-9]{8}-{1}| {1}[A-Za-z]{1}$)|(^[0-9]{8}[A-Za-z]{1}$)"), "Error. ¡No es un DNI válido!", "TRWAGMYFPDXBNJZSQVHLCKET")
}

/**
 * Comprueba si el nombre es correcto
 * 
 * @param {*} nombre 
 */
let comprobarNombre = function(nombre) {
    if (regex.regexNombre[0].test(nombre.trim())) {
        return true;
    }
    return false;
}

/**
 * Comprueba si la fecha es correcta
 * 
 * @param {*} fechaNacimiento 
 */
let comprobarFechaNacimiento = function(fechaNacimiento) {
    if (regex.regexFechaNacimiento[0].test(fechaNacimiento) && new Date(fechaNacimiento[3] + fechaNacimiento[4] + "/" + fechaNacimiento[0] + fechaNacimiento[1] + "/" + fechaNacimiento[6] + fechaNacimiento[7] + fechaNacimiento[8] + fechaNacimiento[9]) != "Invalid Date") {

        return true;
    }
    return false;
}

/**
 * Comprueba si el DNI es correcto
 * 
 * @param {*} dni 
 */
let comprobarDni = function(dni) {
    let numeroDni = parseInt(dni[0] + dni[1] + dni[2] + dni[3] + dni[4] + dni[5] + dni[6] + dni[7]);
    if (regex.regexDni[0].test(dni.trim()) && regex.regexDni[2][numeroDni % 23] == dni[dni.length - 1].toUpperCase()) {
        return true;
    }
    return false;
}