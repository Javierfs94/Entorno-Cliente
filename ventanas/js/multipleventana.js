/** 
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 * Métodos a utilizar:
 * miVentana = window.open('','','width=200,height=200');
 * miVentana.document.open();
 * miVentana.document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * miVentana.document.close();
 * 
 * @author Francisco Javier Frías Serrano
 */


{

    let miVentana;

    let init = function() {
        let botonAbrir = document.getElementById("abrir");
        let botonCerrar = document.getElementById("cerrar");

        botonAbrir.addEventListener("click", muestraVentanaMultiple);
        botonCerrar.addEventListener("click", cerrarVentanas);
    }

    let muestraVentanaMultiple = function() {
        for (let i = 1; i < 6; i++) {
            miVentana = window.open("", "miVentana" + i, "height=200,width=200");
            miVentana.document.write("<!DOCTYPE html><head><title>Ventana de prueba</title></head></body></html>");
            miVentana.document.write("Ventana " + i);
        }
    }

    let cerrarVentanas = function() {
        for (let i = 1; i < 6; i++)
            miVentana.window.close();
    }

    window.document.addEventListener("DOMContentLoaded", init);
}