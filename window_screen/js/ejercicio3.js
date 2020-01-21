/**
 * Mi URL. Crea una página que te muestre debidamente desglosada la url. (servidor, protocolo, ruta...)
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    /**
     * 
     */
    let init = function() {
        let info = document.getElementById("ejercicio4");
        info.innerHTML = "URL: " + location.href + "<br/>";
        info.innerHTML += "Protocolo: " + location.protocol + "<br/>";
        info.innerHTML += "Host: " + location.host + "<br/>";
        info.innerHTML += "Hostname: " + location.hostname + "<br/>";
        info.innerHTML += "Puerto: " + location.port + "<br/>";
    }

    document.addEventListener("DOMContentLoaded", init);

}