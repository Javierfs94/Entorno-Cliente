/**
 * Archivo principal
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    let canvas;
    let colores = ["#EF21FF", "#3870FF", "#FFC312", "#2EFF4E", "#FFFF22", "#FF6E21", "#A77D3B", "#9819FF", "#735CDD", "#FF3532"];

    /**
     * Inicia la ejecución del código JavaScript
     */
    function init() {

        canvas = Array.from(document.getElementsByTagName("canvas"));

        canvas.forEach(function(elemento) {
            elemento.addEventListener(elemento.getAttribute("id"), function(event) {
                pintaCanvas(elemento, obtenerColorAleatorio(), event.offsetX, event.offsetY, event.button, event.buttons);
            });
            pintaCanvas(elemento);
        });

    }

    /**
     * Devuelve un color aleatorio
     */
    function obtenerColorAleatorio() {
        return Math.floor(Math.random() * colores.length + 0);
    }

    /**
     * Pinta el recuadro de canvas con un colon obtenido del array
     * 
     * @param {*} canvas del rectángulo
     * @param {*} color del array
     * @param {*} x eje de coordenada
     * @param {*} y eje de coordenada
     * @param {*} button boton
     * @param {*} buttons grupo de botones
     */
    function pintaCanvas(canvas, color, x, y, button, buttons) {

        if (canvas.getContext) {
            let contexto = canvas.getContext('2d', { alpha: false });
            if (arguments.length === 1) {
                contexto.fillStyle = colores[obtenerColorAleatorio()];
            } else {
                contexto.fillStyle = colores[color];
            }
            contexto.fillRect(0, 0, 400, 400);
            contexto.fillStyle = "#fff";
            contexto.fillText(canvas.getAttribute("id"), 50, 30);
            if (arguments.length > 1) {
                contexto.fillText("x = " + x, 210, 40);
                contexto.fillText("y = " + y, 210, 70);
                contexto.fillText("button = " + button, 190, 100);
                contexto.fillText("buttons = " + buttons, 190, 130);
            }
        }
    }

    window.addEventListener("DOMContentLoaded", init);

}