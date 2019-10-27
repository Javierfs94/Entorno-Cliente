/**
 * Ejercicio 5
 * 
 * Completar las condiciones de los if del siguiente script para que los mensajes de los alert() se muestren siempre de forma correcta
 * 
 * @author Francisco Javier Frías Serrano
 */


{

    /**
     * Muestra los mensajes por consola
     */
    let mostrar = function() {
        let num1 = 5;
        let num2 = 8;
        
        if (num1 <= num2) {
            console.log("num1 no es mayor que num2");
        }
        if (num2 >= 0) {
            console.log("num2 es positivo");
        }
        if (num1 < 0 || num1 != 0) {
            console.log("num1 es negativo o distinto de cero");
        }
        if (num1++ <= num2) {
            console.log("Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2");
        }
    }

    mostrar(); // Funcion para mostrar el mensaje del ejercicio
}

