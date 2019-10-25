/**
 * Ejercicio 13
 * 
 * A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
 * 
 * Determinar cual de los dos elementos de texto es mayor
 * Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
 * Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
 * 
 * @author Francisco Javier Frías Serrano
 */
function anade() {
    let elemento = document.createElement("li");
    let texto = document.createTextNode("Elemento de prueba");
    elemento.appendChild(texto);

    let lista = document.getElementById("lista");
    lista.appendChild(elemento);

    let nuevoElemento = "<li>Texto de prueba</li>";
    lista.innerHTML += nuevoElemento;
}

/**
 * Evento para cuando se carge el árbol DOM
 */
document.addEventListener("DOMContentLoaded",function(){
    document.getElementsByTagName("input")[0].addEventListener("click", anade);
});