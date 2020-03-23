/**
 * Ejercicio 11
 * 
 * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:
 * 
 * Número de enlaces de la página
 * Dirección a la que enlaza el penúltimo enlace
 * Numero de enlaces que enlazan a http://prueba
 * Número de enlaces del tercer párrafo
 * 
 * @author Francisco Javier Frías Serrano
 */

window.onload = function() {
    // Numero de enlaces de la pagina
    let enlaces = document.getElementsByTagName("a");
    console.log("El número de enlaces de la página es: " + enlaces);
    // Direccion del penultimo enlace
    console.log("La dirección del penultimo enlace es: " + enlaces[enlaces.length - 2]);
    // Numero de enlaces que apuntan a http://prueba
    let enlacesPrueba = document.getElementById("enlaces");
    let contador = 0;
    for (var i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
            contador++;
        }
    }
    console.log("El número de enlaces de la página es: " + contador);
    // Numero de enlaces del tercer parrafo
    let parrafos = document.getElementsByTagName("p");
    let enlacesParrafoTres = parrafos[2].getElementsByTagName("a");
    console.log("El número de enlaces del tercer párrafo es: " +
        enlacesParrafoTres.length);
}