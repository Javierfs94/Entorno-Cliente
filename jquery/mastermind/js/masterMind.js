/**
 * @author Francisco Javier Frías Serrano
 */

/**
 * Mastermind
 * @return  Objeto que contiene los métodos accesibles para jugar al mastermind.
 */
masterMind = (function() {

    let colores = ["white", "black", "red", "brown", "yellow", "green", "orange", "blue"];
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
     * Devuelve la pista
     * 
     * @param {*} array 
     */
    let darPista = function(array) {
        let copiaLineaMaquina = lineaMaquina.slice();
        esta = 0;
        enSuSitio = 0;

        for (let i = 0; i < 4; i++) {
            if (copiaLineaMaquina[i] != array[i]) {
                comprobacion = false;
                break;
            }
        }

        array.forEach(function(element, index) {
            let indexOrigen = copiaLineaMaquina.indexOf(element);
            if (element == copiaLineaMaquina[index]) {
                copiaLineaMaquina[index] = undefined;
                array[index] = 1;
                enSuSitio++;
            }
            if (copiaLineaMaquina.indexOf(array[index]) != -1) {
                copiaLineaMaquina[indexOrigen] = 0;
                esta++;
            }
        });

        return {
            esta: esta,
            enSuSitio: enSuSitio
        }
    }


    /**
     * Comprueba si la combinación coincide
     *
     * @param {Array}  array 
     */
    let comprobarCombinacion = function(array) {
        let copiaLineaMaquina = lineaMaquina.slice();
        let comprobacion = true;

        for (let i = 0; i < 4; i++) {
            if (copiaLineaMaquina[i] != array[i]) {
                comprobacion = false;
                break;
            }
        }

        return comprobacion;
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
        comprobarCombinacion: comprobarCombinacion,
        darPista: darPista
    };
})();