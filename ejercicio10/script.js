/**
 * Ejercicio 10
 * 
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y 
 * desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    /**
     * Muestra los mensajes por consola
     */
    let mostrar = function() {
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
    }

    mostrar(); // Funcion para mostrar el mensaje del ejercicio
}
