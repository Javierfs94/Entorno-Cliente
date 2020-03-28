/**
 * @author Francisco Javier Frías Serrano
 */

{
    let puntero;
    let $casillas;
    let $casillasPistas;
    let num_lineas;
    let $divGanar;
    const NUM_CASILLAS = 4;
    let intento = 0;

    /**
     * Pinta una casilla de un color según el id introducido por parámetro.
     */
    let pintarCasilla = function() {

        for (let i = 0; i < $casillas.length; i++) {

            if (estaVacia(i)) {
                $casillas[i].style.backgroundColor = this.id;
                $(this).effect("shake");
                $($casillas[i]).on("click", limpiarFicha);
                if (puntero < 4) {
                    puntero++;
                }
                break;
            }
        }
    }

    /**
     * Comprueba si la casilla está vacia
     *
     * @param  {int}  indice 
     * @return {boolean} true o false
     */
    let estaVacia = function(indice) {
        let casillaActual = $casillas[indice];
        return casillaActual.style.backgroundColor == "transparent" || casillaActual.style.backgroundColor == "";
    }

    /**
     * Reinicia y modifica los valores necesarios para iniciar un nuevo turno
     */
    let nuevoTurno = function() {
        puntero = 0;
        $casillas = $(".casilla" + num_lineas);
        $casillasPistas = $(".casillaPista" + num_lineas);
        num_lineas++;
        window.scrollTo(0, 0);
    }

    /**
     * Genera una nueva fila de casillas a rellenar y de casillas para pistas.
     */

    let crearFila = function() {
        eliminarEventos();

        let html = "<div id='fila'><div id='divCasillas'>";

        // Generamos las casillas
        for (let i = 0; i < NUM_CASILLAS; i++) {
            html += "<div class='casilla casilla" + num_lineas + "'></div>";
        }
        html += "</div><div id='pistas'>"

        // Generamos las casillas de pistas
        for (let i = 0; i < NUM_CASILLAS; i++) {
            html += "<div class='casillaPista casillaPista" + num_lineas + "'></div>";
        }
        html += "</div></div>";
        $('#tablero').append(html);
        nuevoTurno();
        intento++;
        intentos.innerHTML = "Intentos: " + intento;
    }

    /**
     * Extrae los colores que ha introducido el usuario
     *
     * @return     {Array}  Array con los colores marcados por el usuario
     */
    let getColoresUsuario = function() {
        let coloresUsuario = []; // Array de colores introducidos por el usuario para comprobar.  
        $casillas.each(function(indice, casilla) {
            coloresUsuario.push(casilla.style.backgroundColor);
        });
        return coloresUsuario;
    }

    /**
     * Comprueba si la combinación introducida por el usuario es correcta
     */

    let comprobar = function() {
        if (puntero >= NUM_CASILLAS) {
            mastermind = masterMind.comprobarCombinacion(getColoresUsuario());
            mastermind = masterMind.darPista(getColoresUsuario());
            pintarBlancas(pintarNegras());
        }
    }


    /**
     * Comprueba si la combinación de fichas del usuario es idéntica a la
     * del juego.
     */
    let comprobarGanador = function() {
        if (masterMind.comprobarCombinacion(getColoresUsuario())) {
            openDialog();
            botones.style.display = "none";
        } else {
            crearFila();
        }
    }


    /**
     * Pinta una pista del color introducido por parámetro en la posición dada 
     *
     * @param {int}  indice  posición
     * @param {string}  color
     */
    let pintarPistas = function(indice, color) {
        $casillasPistas[indice].style = "background-color:" + color + ";";
    }

    /**
     * Pinta de negro una casilla de pista en caso de que la ficha a comprobar coincida 
     * en color y en sitio con la del juego.
     * @param  {int}  indice  
     */
    let pintarNegras = function() {
        let indice = 0;
        for (let i = 0; i < mastermind.enSuSitio; i++) {
            pintarPistas(indice, "black");
            indice++;
        }
        return indice;
    }

    /**
     * Pinta de blanco una casilla de pista en caso de que la ficha a comprobar coincida 
     * en color pero no en sitio con la del juego.
     * @param      {int}  indice
     */
    let pintarBlancas = function(indice) {
        for (let i = 0; i < mastermind.esta; i++) {
            pintarPistas(indice, "white");
            indice++;
        }
        /* Una vez comprobamos las que están, debemos comprobar el ganador*/
        comprobarGanador(indice);
    }

    /**
     * Abre una ventana
     */
    let openDialog = function() {
        $divGanar.dialog("open");
        $divGanar.dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "Volver a jugar": function() {
                    $(this).dialog("close");
                    reiniciar();
                },
                "Salir": function() {
                    $(this).dialog("close");
                    exit();
                }
            }
        });
    }

    /**
     * Quita el color de un círculo
     */
    let limpiarFicha = function(event) {
        $(this).off('click', limpiarFicha).css("background-color", "transparent").effect("highlight");
        puntero--;
    }

    /**
     * Elimina el detector de evento de las casillas de la linea anterior para que el usuario no pueda clickar
     */
    let eliminarEventos = function() {
        $casillas.off("click");
    }

    /**
     * Permite reiniciar el juego
     */
    let reiniciar = function() {
        location.reload();
    }

    /**
     * Cierra la ventana 
     */
    let exit = function() {
        window.close();
    }

    /**
     * Inicia el juego con todos sus elementos.
     */
    let init = function() {
        masterMind.init();
        masterMind.mostrar();
        $('#main').hide().toggle("blind", 1500);
        num_lineas = 0;
        $casillas = $(".casilla");
        $casillasPistas = $(".casillaPista");
        $divGanar = $("#divGanar");
        $intentos = $("#intentos");

        //Eventos
        $divGanar.dialog({ autoOpen: false });
        $("#botonNuevaPartida").click(reiniciar);
        $("#botonSalir").click(exit);
        $("#botonReiniciar").click(reiniciar);
        $("#botonComprobar").click(comprobar);
        $(".bolas").click(pintarCasilla);
        crearFila();
    };

    $(init);
}