/**
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
 * Métodos a utilizar:
 * window.open()
 * document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 *
 * @author Francisco Javier Frías Serrano
 */

{
    let creaVentana = function() {
        const ALTURA_VENTANA = 200;
        const ANCHO_VENTANA = 300;
        const TOP_VENTANA = 0;
        const LEFT_VENTANA = 0;

        let ventana = window.open("", "ventana", "width=" + ALTURA_VENTANA + ",height=" + ANCHO_VENTANA + ",top=" + TOP_VENTANA + ",left=" + LEFT_VENTANA);
        ventana.document.write("<!DOCTYPE html><head><title>Ventana de Prueba</title></head><body><p>Se han utilizado las propiedades:<ul><li>height=200</li><li>width=300</li></ul></p></body></html>");
        ventana.document.close();
    }
    window.document.addEventListener("DOMContentLoaded", init);

    let init = function() {
        let boton = document.getElementById("abrir");
        boton.addEventListener("click", creaVentana);
    }
}