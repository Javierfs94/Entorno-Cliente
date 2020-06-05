/**
 * @author Francisco Javier Frías Serrano
 */

/**
 * Mastermind
 * @return  Objeto que contiene los métodos accesibles para jugar al mastermind.
 */
masterMind = (function() {

    let colores = ["white", "black", "red", "brown", "yellow", "green", "orange", "blue"];
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
        let combinacionUsuario = coloresUsuario.slice();

        return {
            pistasNegras: contarNegros(combinacionUsuario, copiaLineaMaquina),
            pistasBlancas: contarBlancos(combinacionUsuario, copiaLineaMaquina),
        }
    }

    /**
     * Cuenta las pistas negras a devolver
     * 
     * @param {Array} combinacionUsuario Colores introducidos pro el usuario
     * @param {Array} copiaLineaMaquina Clon de la línea objetivo
     */
    let contarNegros = function(combinacionUsuario, copiaLineaMaquina) {
        let pistasNegras = 0;

        combinacionUsuario.forEach(function(elemento, indice) {
            if (elemento == copiaLineaMaquina[indice]) {
                pistasNegras++;
                copiaLineaMaquina[indice] = null
                combinacionUsuario[indice] = -1;
            }
        });

        return pistasNegras;
    }

    /**
     * Cuenta las pistas blancas a devolver
     * 
     * @param {Array} combinacionUsuario Colores introducidos pro el usuario
     * @param {Array} copiaLineaMaquina Clon de la línea objetivo
     */
    let contarBlancos = function(combinacionUsuario, copiaLineaMaquina) {
        let pistasBlancas = 0;

        combinacionUsuario.forEach(function(elemento) {
            let indice = copiaLineaMaquina.indexOf(elemento);
            if (indice !== -1) {
                pistasBlancas++;
                copiaLineaMaquina[indice] = null
            }
        });

        return pistasBlancas;
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