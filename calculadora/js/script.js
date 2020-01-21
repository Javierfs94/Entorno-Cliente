/**
 * Calculadora
 * 
 * @author Francisco Javier Frías Serrano
 */


{
    let div;
    let botones;

    let crearPantalla = function() {
        let cajaTexto = document.createElement("input");
        cajaTexto.type = "text";
        cajaTexto.id = "inputText";
        div.appendChild(cajaTexto);
        div.appendChild(document.createElement("br"));
    }

    let crearBotones = function(botones) {
        let inputButton;
        for (let i = 1; i < botones.length + 1; i++) {
            inputButton = document.createElement("input");
            inputButton.type = "button";
            inputButton.id = botones[i - 1];
            inputButton.value = botones[i - 1];
            div.appendChild(inputButton);
            if (i % 4 == 0) {
                div.appendChild(document.createElement("br"));
            }
        }
    }

    let init = function() {
        div = document.getElementById("calculadora");
        botones = ['CE', '+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', 'DEL', ',', '='];
        crearPantalla();
        crearBotones(botones);
    }

    document.addEventListener("DOMContentLoaded", init);

}