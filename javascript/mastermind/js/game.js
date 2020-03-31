/**
 * @author Francisco Javier Frías Serrano
 */

{
    let puntero;
    let casillas;
    let pistas;
    let colores;
    let filaCasillas;
    let casillasPistas;
    let botonComprobar;
    let num_lineas;
    let tableroIzquierda;
    let divGanar;
    let botonSalir;
    let botonReiniciar;
    let botonNuevaPartida;
    let contadorFilas;
    let intento = 0;

    /**
     * Pinta una casilla de un color según el id introducido por parámetro.
     * @param  id
     */
    let pintarCasilla = function(id) {

        for (let i = 0; i < casillas.length; i++) {

            if (casillas[i].style.backgroundColor == "transparent" || casillas[i].style.backgroundColor == "") {

                switch (id) {

                    case "blanca":
                        casillas[i].style = "background-color: white;";
                        break;

                    case "negra":
                        casillas[i].style = "background-color: black;";
                        break;

                    case "roja":
                        casillas[i].style = "background-color: red;";
                        break;

                    case "marron":
                        casillas[i].style = "background-color: brown;";
                        break;

                    case "amarilla":
                        casillas[i].style = "background-color: yellow;";
                        break;

                    case "verde":
                        casillas[i].style = "background-color: green;";
                        break;

                    case "naranja":
                        casillas[i].style = "background-color: orange;";
                        break;

                    case "azul":
                        casillas[i].style = "background-color: blue;";
                        break;
                }

                casillas[i].addEventListener("click", limpiarFicha);
                break;
            }

        }
        if (puntero < 4)
            puntero++;
    }

    /**
     * Reinicia y modifica los valores necesarios para iniciar un nuevo turno
     */
    let nuevoTurno = function() {
        puntero = 0;
        casillas = document.getElementsByClassName("casilla" + num_lineas);
        casillasPistas = document.getElementsByClassName("casillaPista" + num_lineas);
        num_lineas++;
        window.scrollTo(0, 0);
    }

    /**
     * Genera una nueva fila de casillas a rellenar y de casillas para pistas.
     */

    let crearFila = function() {
        eliminarEventos();
        // Declaración de variables
        let nuevaCasilla;
        let nuevaCasillaPista;
        fila = document.createElement("div");
        filaCasillas = document.createElement("div");
        pistas = document.createElement("div");


        // Añadimos los correspondientes ids
        fila.id = "fila";
        filaCasillas.id = casillas;
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
        tableroIzquierda.appendChild(fila);

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

        for (let i = 0; i < casillas.length; i++) {
            if (casillas[i].style.backgroundColor == "red") {
                coloresUsuario.push("roja");
            } else if (casillas[i].style.backgroundColor == "white") {
                coloresUsuario.push("blanca");
            } else if (casillas[i].style.backgroundColor == "black") {
                coloresUsuario.push("negra");
            } else if (casillas[i].style.backgroundColor == "green") {
                coloresUsuario.push("verde");
            } else if (casillas[i].style.backgroundColor == "blue") {
                coloresUsuario.push("azul");
            } else if (casillas[i].style.backgroundColor == "yellow") {
                coloresUsuario.push("amarilla");
            } else if (casillas[i].style.backgroundColor == "brown") {
                coloresUsuario.push("marron");
            } else if (casillas[i].style.backgroundColor == "orange") {
                coloresUsuario.push("naranja");
            }

        }

        if (puntero >= 4) {
            mastermind = masterMind.comprobarCombinacion(coloresUsuario);

            if (mastermind.pistasNegras > 0) {
                while (indice < mastermind.pistasNegras) {
                    casillasPistas[indice].style = "background-color: black;";
                    indice++;
                }
            }

            if (indice == 4) {
                divGanar.style = "display: block;";
                divBotones.style.display = "none";
            }

            if (mastermind.pistasBlancas > 0) {
                for (let i = 0; i < mastermind.pistasBlancas; i++) {
                    casillasPistas[indice].style = "background-color: white;";
                    indice++;
                }
                indice = 0;
            }

            if (indice != 4) {
                crearFila();
                contadorFilas++;
            }
        }
    }

    /**
     * Quita el color de un círculo
     */
    let limpiarFicha = function(event) {
        event.target.style = "background-color: transparent;";
        event.target.removeEventListener("click", limpiarFicha);
        puntero--;
    }

    /**
     * Elimina el detector de evento de las casillas de la linea anterior para que el usuario no pueda clickar
     */
    let eliminarEventos = function() {
        for (let i = 0; i < casillas.length; i++) {
            casillas[i].removeEventListener("click", limpiarFicha);
        }
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

        casillas = document.getElementsByClassName("casilla");
        casillasPistas = document.getElementsByClassName("casillaPista");
        colores = document.getElementsByClassName("bolas");
        tableroIzquierda = document.getElementById("tablero");
        botonComprobar = document.getElementById("botonComprobar");
        botonReiniciar = document.getElementById("botonReiniciar");
        botonSalir = document.getElementById("botonSalir");
        botonNuevaPartida = document.getElementById("botonNuevaPartida");
        divGanar = document.getElementById("divGanar");
        divBotones = document.getElementById("botones");
        intentos = document.getElementById("intentos");

        //Eventos
        botonNuevaPartida.addEventListener("click", reiniciar);
        botonComprobar.addEventListener("click", comprobar);
        botonReiniciar.addEventListener("click", reiniciar);
        botonSalir.addEventListener("click", exit);

        for (let i = 0; i < colores.length; i++) {
            colores[i].addEventListener("click", pintarCasilla.bind(null, colores[i].id));
        }

        crearFila();
    }

    window.onload = init;
}