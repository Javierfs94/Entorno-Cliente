/**
 * Ejercicio 4
 * 
 * A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
 * 
 * Determinar cual de los dos elementos de texto es mayor
 * Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
 * Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
 * 
 * @author Francisco Javier Frías Serrano
 */
{
    /**
     * Muestra los mensajes por consola
     */
    let mostrar = function() {
        let valores = [true, 5, false, "hola", "adios", 2];

        let resultado = valores[0] || valores[2];
        
        console.log(valores[3] > valores[4]); // Comparación para obtener cual es mayor
        console.log(resultado); // Resultado verdadero
        resultado = valores[0] && valores[2];
        console.log(resultado); // Resultado falso
        let num1 = valores[1];
        let num2 = valores[5];
        resultado = num1 + num2;
        console.log(resultado);
        resultado = num1 - num2;
        console.log(resultado);
        resultado = num1 * num2;
        console.log(resultado);
        resultado = num1 / num2;
        console.log(resultado);
        resultado = num1 % num2;
        console.log(resultado);
    }

    mostrar(); // Funcion para mostrar el mensaje del ejercicio
}
