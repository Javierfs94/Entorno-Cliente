/**
 * Ejercicio 14
 * 
 * A partir de la página web proporcionada, completar el código JavaScript para que:
 * 
 * Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 * Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
 * Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
 * Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)
 * 
 * @author Francisco Javier Frías Serrano
 */
function muestraOculta() {
    let elemento = document.getElementById('contenidos_' + id);
    let enlace = document.getElementById('enlace_' + id);

    if (elemento.style.display == "" || elemento.style.display == "block") {
        elemento.style.display = "none";
        enlace.innerHTML = 'Mostrar contenidos';
    } else {
        elemento.style.display = "block";
        enlace.innerHTML = 'Ocultar contenidos';
    }
}