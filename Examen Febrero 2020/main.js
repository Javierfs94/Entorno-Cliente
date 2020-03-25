/**
 * Clase Principal
 * 
 * @author Francisco Javier Frías Serrano
 */

let inputsText;
let spans;
let sections;
let colores = ["00", "88", "FF"];

let validador = (function() {

    let expCurso = /^(1º|2º) (BACH|DAW|ASIR)$/; //  [, curso, nivel] = /^([12])º (BACH|DAW|ASIR)$/.exec(this.value);

    let comprobarEntero = function(numero) {
        return Number.isInteger(numero);
    }

    let validarCurso = function() {
        if (!expCurso.test(inputsText[0].value)) {
            spans[0].style.color = "red";
            spans[0].textContent = "Tiene que ser en formato 1º ASIR, 1º DAW, 1º ASIR, etc";
        } else {
            let [, curso, grupo] = expCurso.exec(inputsText[0].value); //  [, curso, nivel] = /^([12])º (BACH|DAW|ASIR)$/.exec(this.value);
            if (curso == "1º") {
                spans[0].style.color = "black";
                spans[0].textContent = "Primero de " + grupo;
            } else {
                spans[0].style.color = "black";
                spans[0].textContent = "Segundo de " + grupo;
            }
        }
    };

    let validarCanvas = function() {

        if (!comprobarEntero(Number(inputsText[1].value))) {
            spans[1].style.color = "red";
            spans[1].textContent = "Tiene que ser un número";
        } else {
            spans[1].textContent = "";
            dibujaCanvas(inputsText[1].value);
        }
    };

    let validarParrafos = function() {
        if (!comprobarEntero(Number(inputsText[2].value))) {
            spans[2].style.color = "red";
            spans[2].textContent = "Tiene que ser un número";
        } else {
            spans[2].textContent = "";
            dibujaParrafos(inputsText[2].value);
        }
    };

    return {
        validarCurso: validarCurso,
        validarCanvas: validarCanvas,
        validarParrafos: validarParrafos
    };

})();

/**
 * Devuelve un número entre 0, 1 y 2
 */
let random = function() {
    return Math.floor(Math.random() * 3);
}

/**
 * Devuelve un color aleatorio
 */
let generaColor = function() {
    let color;
    do {
        color = "#" + colores[random()] + colores[random()] + colores[random()];
    } while (color == "#000000" | color == "#FFFFFF");

    return color;
}

/**
 * Genera la cantidad de párrafos introducidos como parámetro
 * 
 * @param {Number} parrafo 
 */
let dibujaParrafos = function(parrafo) {
    for (let i = 0; i < parrafo; i++) {
        let parrafo = document.createElement("div");
        sections[1].appendChild(parrafo);
        parrafo.textContent = "Francisco Javier Frías Serrano";
        parrafo.style.backgroundColor = generaColor();
    }

    let parrafos = document.getElementsByTagName("div");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].addEventListener("mousemove", function(event) {
            switch (event.buttons) {
                case 1:
                    parrafos[i].textContent = "Botón izquierdo";
                    parrafos[i].style.backgroundColor = generaColor();
                    break;
                case 2:
                    parrafos[i].textContent = "Botón derecho";
                    parrafos[i].style.backgroundColor = generaColor();
                    break;
                case 3:
                    parrafos[i].textContent = "Botón derecho e izquierdo (a la vez)";
                    parrafos[i].style.backgroundColor = generaColor();
                    break;
                case 4:
                    parrafos[i].textContent = "Botón central";
                    parrafos[i].style.backgroundColor = generaColor();
                    break;
                case 5:
                    parrafos[i].textContent = "Botón izquierdo y central (a la vez)";
                    parrafos[i].style.backgroundColor = generaColor();
                    break;
                case 6:
                    parrafos[i].textContent = "Botón derecho y central (a la vez)";
                    parrafos[i].style.backgroundColor = generaColor();
                    break;

                default:
                    parrafos[i].textContent = "No se ha pulsado ningún botón";
                    parrafos[i].style.backgroundColor = generaColor();
                    break;
            }
        })
    }
}

/**
 * Pinta la cantidad de canvas pasado como parámetro
 * 
 * @param {Number} canvas 
 */
function dibujaCanvas(canvas) {
    for (let i = 0; i < canvas; i++) {
        let canvas = document.createElement("canvas");
        sections[0].appendChild(canvas);
        canvas.width = 150;
        canvas.height = 150;
        let lienzo = canvas.getContext('2d');
        lienzo.fillStyle = generaColor();
        lienzo.fillRect(0, 0, 150, 150);
        lienzo.font = "bold sans-serif 44px";
        lienzo.fillStyle = 'black';
        //    lienzo.fillText("hola", 0, 11);

        canvas.addEventListener("auxclick", function(event) {
            lienzo.fillStyle = generaColor();
            lienzo.fillRect(0, 0, 150, 150);
            lienzo.font = "bold sans-serif 44px";
            lienzo.fillStyle = 'black';
            lienzo.fillText("X= " + event.offsetX + "Y= " + event.offsetY, 0, 11);
        });
    }
}

let init = function() {
    inputsText = document.querySelectorAll('input[type="text"]');
    spans = document.getElementsByTagName("span");
    sections = document.getElementsByTagName("section");

    inputsText[0].addEventListener("blur", validador.validarCurso);
    inputsText[1].addEventListener("blur", validador.validarCanvas);
    inputsText[2].addEventListener("blur", validador.validarParrafos);

    dibujaCanvas(2);
    dibujaParrafos(2);
}

window.addEventListener("DOMContentLoaded", init);