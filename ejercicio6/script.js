let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

let numeroDNI = prompt("Introduzca su número del DNI (sin la letra)");
let letraDNI = prompt("Introduzca la letra de su DNI (en mayúsculas)");
letraDNI.toUpperCase();

if (numeroDNI < 0 || numeroDNI > 10000000) {
    alert("Número introducido no válido");
} else {
    let letraCalculada = letras[numeroDNI % 23];
    if (letraCalculada != letra) {
        alert("La letra no es correcta");
    } else {
        alert("El DNI es correcto");
    }
}