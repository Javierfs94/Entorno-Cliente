/**
 * @author Francisco Javier Frías Serrano
 */

{
    let puntero;
    let $casillas;
    let $casillasPistas;
    let num_lineas;
    let $divGanar;
    let intento = 0;
    let contadorFilas;
    let $tableroIzquierda;



    /**
     * Pinta una casilla de un color según el id introducido por parámetro.
     */
    let pintarCasilla = function() {

        for (let i = 0; i < $casillas.length; i++) {

            if ($casillas[i].style.backgroundColor == "transparent" || $casillas[i].style.backgroundColor == "") {
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
        // Declaración de variables
        let nuevaCasilla;
        let nuevaCasillaPista;
        fila = document.createElement("div");
        jqap
        filaCasillas = document.createElement("div");
        pistas = document.createElement("div");


        // Añadimos los correspondientes ids
        fila.id = "fila";
        filaCasillas.id = $casillas;
        pistas.id = pistas;


        // Generamos las casillas
        for (let i = 0; i < 4; i++) {
            nuevaCasilla = document.createElement("div");
            nuevaCasilla.classList.add("casilla");
            nuevaCasilla.classList.add("casilla" + num_lineas);
            filaCasillas.appendChild(nuevaCasilla);
        }

        // Generamos las casillas de pistas
        for (let i = 0; i < 4; i++) {
            nuevaCasillaPista = document.createElement("div");
            nuevaCasillaPista.classList.add("casillaPista");
            nuevaCasillaPista.classList.add("casillaPista" + num_lineas);
            pistas.appendChild(nuevaCasillaPista);
        }

        fila.appendChild(filaCasillas);
        fila.appendChild(pistas);
        $tableroIzquierda.append(fila);
        nuevoTurno();
        contadorFilas++;
        intento++;
        intentos.innerHTML = "Intentos: " + intento;
    }


    /**
     * Comprueba si la combinación introducida por el usuario es correcta
     */

    let comprobar = function() {
        let coloresUsuario = [];
        let indice = 0;

        for (let i = 0; i < $casillas.length; i++) {
            if ($casillas[i].style.backgroundColor == "red") {
                coloresUsuario.push("red");
            } else if ($casillas[i].style.backgroundColor == "white") {
                coloresUsuario.push("white");
            } else if ($casillas[i].style.backgroundColor == "black") {
                coloresUsuario.push("black");
            } else if ($casillas[i].style.backgroundColor == "green") {
                coloresUsuario.push("green");
            } else if ($casillas[i].style.backgroundColor == "blue") {
                coloresUsuario.push("blue");
            } else if ($casillas[i].style.backgroundColor == "yellow") {
                coloresUsuario.push("yellow");
            } else if ($casillas[i].style.backgroundColor == "brown") {
                coloresUsuario.push("brown");
            } else if ($casillas[i].style.backgroundColor == "orange") {
                coloresUsuario.push("orange");
            }
        }

        if (puntero >= 4) {
            mastermind = masterMind.comprobarCombinacion(coloresUsuario);

            if (mastermind.pistasNegras > 0) {
                while (indice < mastermind.pistasNegras) {
                    $casillasPistas[indice].style = "background-color: black;";
                    indice++;
                }
            }

            if (indice == 4) {
                openDialog();
                $divGanar.css("display", "block");
                $("#botones").css("display", "none");
                puntero = undefined;
                eliminarEventos();
            } else if (mastermind.pistasBlancas > 0) {
                for (let i = 0; i < mastermind.pistasBlancas; i++) {
                    $casillasPistas[indice].style = "background-color: white;";
                    indice++;
                    if (indice == 4) {
                        eliminarEventos();
                        crearFila();
                        contadorFilas++;
                        indice = 0;
                        return;
                    }
                }
                indice = 0;
            }
            if (indice != 4) {
                eliminarEventos();
                crearFila();
                contadorFilas++;
            }
        }
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
    let limpiarFicha = function() {
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
        num_lineas = 0;

        $('#main').hide().toggle("blind", 1500);
        $casillas = $(".casilla");
        $casillasPistas = $(".casillaPista");
        $divGanar = $("#divGanar");
        $intentos = $("#intentos");
        $tableroIzquierda = $("#tablero");

        //Eventos
        $divGanar.dialog({ autoOpen: false });
        $("#botonComprobar").click(comprobar);
        $("#botonNuevaPartida").click(reiniciar);
        $("#botonReiniciar").click(reiniciar);
        $("#botonSalir").click(exit);

        $(".bolas").click(pintarCasilla);

        crearFila();
    };

    $(init);
}