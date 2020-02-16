/**
 * Archivo principal
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    let inputs = [];
    let spans;
    let collectionSpan = new Map();

    function init() {
        spans = document.getElementsByTagName("span");
        for (elemento of spans) {
            collectionSpan.set(elemento.id, elemento);
        }
        inputs = document.querySelectorAll("input[type='text']");
        checkBox = document.getElementById("terminos");
        for (elemento of inputs) {
            elemento.addEventListener("blur", validar.Input.bind(null, elemento, collectionSpan.get("error" + elemento.id)));
        }
        document.getElementById("enviar").addEventListener("click", (event) => {
            event.preventDefault();
            inputsErroneos = []
            for (elemento of inputs) {
                validar.Input(elemento, collectionSpan.get("error" + elemento.id));
            }
            validar.RadioButton();
            validar.checkBox();
            chequear();
        });
    }


    function chequear() {
        if (inputsErroneos.length != 0) {
            inputsErroneos[0].focus();
        } else {
            limpiarTodo();
        }
    }

    function limpiarTodo() {
        for (elemento of inputs) {
            elemento.value = "";
            collectionSpan.get("error" + elemento.id).textContent = "";
        }
    }

    window.addEventListener("DOMContentLoaded", init);
}