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
     * @param {Array}  coloresUsuario Colores introducidos por el usuario 
     */
    let comprobarCombinacion = function(coloresUsuario) {

        let copiaLineaMaquina = lineaMaquina.slice();
        let auxUsuario = [];
        let auxResultado = [];
        pistasNegras = 0;
        pistasBlancas = 0;

        coloresUsuario.forEach(function(elemento, index) {
            if (elemento == copiaLineaMaquina[index]) {
                pistasNegras++;
            } else {
                auxUsuario[index] = elemento;
                auxResultado[index] = copiaLineaMaquina[index];
            }
        });

        auxUsuario.forEach(function(elementoAuxUsuario, indexAuxUsuario) {
            for (let i = 0; i < auxResultado.length; i++) {
                if (elementoAuxUsuario == auxResultado[i]) {
                    pistasBlancas++;
                    break;
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