/**
 * 
 * Con altura. Muestra en una lista la siguiente información. 
 * Cada uno de las etiquetas <ol> y <li> han de crearse mediante los métodos de document. 
 * Explica en cada uno la diferencia con respecto a los demás.
 * window.outerHeight
 * window.innerHeight
 * window.screen.availHeight
 * window.screen.height
 * 
 * @author Francisco Javier Frías Serrano
 */

{

    // Variables
    let text1;
    let text2;
    let text3;
    let text4;
    let text5;
    let ol;
    let li1;
    let li2;
    let li3;
    let li4;
    let li5;

    /**
     * 
     */
    let crearElementos = function() {
        ol = document.createElement("ol");
        li1 = document.createElement("li");
        li2 = document.createElement("li");
        li3 = document.createElement("li");
        li4 = document.createElement("li");
        li5 = document.createElement("li");
        ol.appendChild(li1);
        ol.appendChild(li2);
        ol.appendChild(li3);
        ol.appendChild(li4);
        ol.appendChild(li5);
        document.body.appendChild(ol);
    }

    /**
     * 
     */
    let annadir = function() {
        li1.appendChild(text1);
        ol.appendChild(li1);
        li2.appendChild(text2);
        ol.appendChild(li2);
        li3.appendChild(text3);
        ol.appendChild(li3);
        li4.appendChild(text4);
        ol.appendChild(li4);
        li5.appendChild(text5);
        ol.appendChild(li5);

    }

    /** 
     * 
     */
    let init = function() {
        text1 = document.createTextNode("window.outerHeigt: " + window.outerHeight + ". Obtenemos la altura en píxeles de toda la ventana del navegador.");
        text2 = document.createTextNode("window.innerHeight: " + window.innerHeight + ". Obtenemos la altura interna en pixeles de una ventana del navegador.");
        text3 = document.createTextNode("window.screen.availHeight: " + window.screen.availHeight + ". Retorna el total de espacio vertical disponible en la pantalla.");
        text4 = document.createTextNode("window.screen.height: " + window.screen.height + ". Devuelve la altura de la pantalla en píxeles.");
        text5 = document.createTextNode("window.document.clientHeight: " + window.document.clientHeight + ". devuelve la altura del document en píxeles, incluyendo el padding pero no las barras horizontales, el borde o el margen..");
        lista = document.getElementById("ejercicio1");
        crearElementos();
        annadir();
    }

    document.addEventListener("DOMContentLoaded", init);
}