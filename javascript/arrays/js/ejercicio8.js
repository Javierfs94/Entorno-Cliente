/**
 * Ejercicio 8 Arrays
 * 
 * Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
 * 
 * @author Francisco Javier Frías Serrano
 */


{
    let elementoLista;
    let elementoDivArray;
    let array = [1, 2, 3, 4, 5, 'seis', 'siete', 8, 'nueve'];

    let recorrerArray = function(value, index, array) {
        let elemento = document.createElement("li");
        elemento.appendChild(document.createTextNode("Array[" + index + "]=" + value));
        elementoLista.appendChild(elemento);
    };

    function mayorCinco(valor) {
        return valor > 5;
    }

    function menorDiez(valor) {
        return valor < 10;
    }

    function eliminarCinco(valor) {
        return valor < 5;
    }


    let init = function() {
        let texto;

        elementoLista = document.getElementById("lista");
        elementoDivArray = document.getElementById("arrays");

        array.forEach(recorrerArray);

        texto = ("Array.prototype.every: " + array.every(mayorCinco));
        texto = texto + (" Array.prototype.some: " + array.some(menorDiez));
        texto = texto + (" Array.prototype.filter: " + array.filter(eliminarCinco));

        elementoDivArray.innerHTML = texto;
    };

    document.addEventListener("DOMContentLoaded", init);
}