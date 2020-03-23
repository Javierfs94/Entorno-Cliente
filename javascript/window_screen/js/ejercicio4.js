/**
 * El tiempo es oro. Crea una página que cada segundo te muestre actualizado un reloj digital del tipo "22:14:09 h"
 *  (usa timing events del objeto window)
 * 
 * @author Francisco Javier Frías Serrano
 */


{
    let reloj;

    /**
     * 
     */
    let mostrarReloj = function() {
        let date = new Date();
        let h = new String(date.getHours());
        let m = new String(date.getMinutes());
        let s = new String(date.getSeconds());

        //CAMBIAR A FUNCION
        let formateaReloj = function() {

        }

        if (h.length == 1)
            h = "0" + h;
        if (m.length == 1)
            m = "0" + m;
        if (s.length == 1)
            s = "0" + s;

        reloj.innerHTML = h + ":" + m + ":" + s + " h";
    }

    /**
     * 
     */
    let init = function() {
        reloj = document.getElementById("ejercicio4");
        setInterval(mostrarReloj, 1000);
    }

    document.addEventListener("DOMContentLoaded", init);
}