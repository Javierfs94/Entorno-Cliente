/**
 * Ejercicio 17
 * 
 * Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún puede escribir.
 * Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas horizontales cuando se haya llegado al máximo número de caracteres.
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    const LIMITE_CARACTERES = 5;
    let elementoTexto;
    let elementoInfo;

    let limitar = function(evento) {
        switch (evento.key) {
            case "ArrowLeft":
            case "ArrowRight":
            case "ArrowUp":
            case "ArrowDown":
            case "Backspace":
            case "Delete":
                return;
        }
        if (elementoTexto.value.length >= LIMITE_CARACTERES) {
            evento.preventDefault();
        }
    }

    let actualizarInfo = function() {
        let restan = LIMITE_CARACTERES - elementoTexto.value.length;
        elementoInfo.innerHTML = restan ?
            `Caracteres restantes: <b>${restan}</b>` :
            `Has llegado al límite de <b>${LIMITE_CARACTERES}</b> caracteres`;
    }

    let init = function() {
        elementoTexto = document.getElementById("texto");
        elementoInfo = document.getElementById("info");
        elementoTexto.addEventListener("keydown", limitar);
        elementoTexto.addEventListener("keyup", actualizarInfo);
        actualizarInfo();
    }

    document.addEventListener("DOMContentLoaded", init);

}