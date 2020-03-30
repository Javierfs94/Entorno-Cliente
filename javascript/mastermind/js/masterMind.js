/**
 * @author Francisco Javier Frías Serrano
 */

/**
 * Mastermind
 * @return  Objeto que contiene los métodos accesibles para jugar al mastermind.
 */
masterMind = (function() {

    let colores = ["blanca", "negra", "roja", "marron", "amarilla", "verde", "naranja", "azul"];
    let esta;
    let enSuSitio;
    let lineaMaquina;
    const NUM_COLORES = colores.length;
    const NUM_CASILLAS = 4;

    /**
     * Genera un número aleatorio entre 0 y el número de colores.
     */
    let generarAleatorio = function() {
        return Math.floor((Math.random() * NUM_COLORES));
    };

    /**
     * Crea la línea de colores a adivinar.
     */
    let generarlineaMaquina = function() {
        for (let i = 0; i < NUM_CASILLAS; i++) {
            lineaMaquina.push(colores[generarAleatorio()]);
        }
    }

    /**
     * Muestra los colores a adivinar en consola
     */
    let mostrar = function() {
        console.log(lineaMaquina);
    }

    /**
     * Comprueba si la combinación coincide y envia una pista
     *
     * @param {Array}  array 
     */
    let comprobarCombinacion = function(array) {

        let copiaLineaMaquina = lineaMaquina.slice();
        pistasNegras = 0;
        pistasBlancas = 0;

        array.forEach(function(elemento, index) {
            if (elemento == copiaLineaMaquina[index]) {
                pistasNegras++;
            } else {
                for (i = 0; i < 4; i++) {
                    if (elemento == copiaLineaMaquina[i]) {
                        pistasBlancas++;
                        break;
                    }
                }
            }
        });

        return {
            pistasNegras: pistasNegras,
            pistasBlancas: pistasBlancas,
        }
    }

    /**
     * Inicia la partida inicializando lineaMaquina y generando una nueva combinación de colores.
     */
    let init = function() {
        lineaMaquina = [];
        generarlineaMaquina();
    }

    return {
        init: init,
        mostrar: mostrar,
        comprobarCombinacion: comprobarCombinacion
    };
})();