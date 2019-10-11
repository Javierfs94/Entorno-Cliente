function palindromo(cadena) {
    let resultado = "La cadena \"" + cadena + "\" \n";
    let cadenaOriginal = cadena.toLowerCase();
    let letrasEspacios = cadenaOriginal.split("");
    let cadenaSinEspacios = letrasEspacios.replace(" ", "");
    cadenaSinEspacios.split("");
    let letrasAlReves = cadenaSinEspacios.split("").reverse();

    let iguales = true;
    for (const i in letras) {
        if (letras[i] == letrasAlReves[i]) {
            //OK            
        } else {
            iguales = false;
        }
    }

    if (iguales) {
        resultado += " es un palíndromo";
    } else {
        resultado += " no es un palíndromo";
    }
    return resultado;
}

console.log(palindromo("Amor a Roma"));
console.log(palindromo("Mal ejemplo"));