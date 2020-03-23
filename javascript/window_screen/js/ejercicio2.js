/**
 * Scrolleando. El objeto window dispone de las propiedades scrollX, scrollY y scrollbars. Muéstralos reaccionando al evento scroll sobre window. Además, crea botones que demuestren el uso de los métodos de scroll en window. Explica en cada botón el método que usas. Por ejemplo:
 * Un botón "bajar línea" para bajar una línea.
 * Un botón "subir línea" para subir una línea
 * Un botón "bajar" para bajar una página.
 * Un botón "subir" para subir una página.
 * Un botón "inicio" para ir al inicio del documento
 * Un botón "fin" para ir al final del documento.
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    let init = function() {
        document.getElementById("bajarLinea").addEventListener("click", bajarLinea);
        document.getElementById("subirLinea").addEventListener("click", subirLinea);
        document.getElementById("bajarPagina").addEventListener("click", bajarPagina);
        document.getElementById("subirPagina").addEventListener("click", subirPagina);
        document.getElementById("final").addEventListener("click", final);
        document.getElementById("principio").addEventListener("click", principio);
        document.addEventListener("click", asignarContenido);

    }
    let asignarContenido = function() {
        let informacion = document.getElementById("ejercicio2");
        informacion.innerHTML = "window.scrollX= " + window.scrollX + "<br>";
        informacion.innerHTML += "window.scrollY= " + window.scrollY + "<br>";
        informacion.innerHTML += "window.scrollbars= " + window.scrollbars.visible;
    }

    let bajarLinea = function() {
        scroll(scrollX, scrollY + 5);
    }
    let subirLinea = function() {
        scroll(scrollX, scrollY - 5);
    }
    let bajarPagina = function() {
        scroll(scrollX, scrollY + innerHeight);
    }
    let subirPagina = function() {
        scroll(scrollX, scrollY - innerHeight);
    }
    let final = function() {
        scroll(scrollX, scrollY + document.body.scrollHeight);
    }
    let principio = function() {
        scroll(scrollX, scrollY - document.body.scrollHeight);
    }


    document.addEventListener("DOMContentLoaded", init);
}