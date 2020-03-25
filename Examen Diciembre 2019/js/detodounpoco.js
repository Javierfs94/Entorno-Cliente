/**
 * De todo un poco
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    const DIA_SEMANA = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", );


    /**
     * Devuelve la fecha actual
     */
    let getFechaActual = function() {
        return new Date();
    }



    /**
     * Devuelve el dia de la semana
     */
    let getDiaActual = function(i) {
        return DIA_SEMANA[i];
    }

    /**
     * Metodo para formatear un número. 
     * 
     * @param {*} numero 
     */
    let formateaADos = function(numero) {
        return numero < 10 ? "0" + numero : numero;
    }

    /**
     * Devuelve la hora actual con su mensaje
     */
    let getHoraActual = function() {
        let fecha = getFechaActual();
        let hora = fecha.getHours();
        let minutos = fecha.getMinutes();

        hora = formateaADos(hora);
        minutos = formateaADos(minutos);

        if (hora < 8) {
            return "Son las " + hora + ":" + minutos + ".Ya es hora de que comiences a trabajar. Hay que levantar el país.";
        }
        if (hora > 18) {
            return "Son las " + hora + ":" + minutos + ".Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar";
        }
        return "Son las " + hora + ":" + minutos + ".Pronto llegan las vacaciones. Aguanta";

    }

    let init = function() {
        let info = document.getElementById("info");
        let informa = document.getElementById("informa");
        let salir = document.getElementById("salir");

        informa.addEventListener("click", function() {
            info.innerHTML = "<p>" + getDiaActual(getFechaActual().getDay()) + "</p><p>" + getHoraActual() + "</p>";
        });

        salir.addEventListener("click", function() {
            window.close();
        });
    }

    window.addEventListener("DOMContentLoaded", init);
}