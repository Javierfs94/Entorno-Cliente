/**
 * Crea una función que devuelva un array con cada uno de los argumentos
 * 
 * @author Francisco Javier Frías Serrano
 */

{

    let mostrarArray = function() {
        let array = [0, 1, 2, 3, "hola", 4, 5, 6, true, "adios", false];
        for (let i = 0; i < array.length; i++) {
            info.innerHTML = "Contenido del array: " + array;
        }
    }


    document.addEventListener("DOMContentLoaded", function init() {
        let info = document.getElementById("info");

        mostrarArray();
    });
}