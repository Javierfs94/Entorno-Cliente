/**
 * 
 * Capitaliza. Transforma entrada a otra similiar con la primera letra de cada palabra en mayúscula. 
 * Invierte.  Transforma entrada a otra similiar con las mayúsculas/minúsculas invertidas.
 * CamelCase.  Transforma entrada a otra similiar con formato en Camel Case (hola amigos cómo estáis -> holaAmigosCómoEstáis)
 * Sin CamelCase.  Transforma entrada a otra similiar quitando el formato Camel Case (holaAmigosCómoEstáis -> hola amigos cómo estáis)
 * Finaliza... Averigua si una cadena acaba con otra.
 * Empieza... Averigua si una cadena comienza con otra.
 * 
 * @author Francisco Javier Frías Serrano
 */

{




    /** 
     * 
     */
    let init = function() {
        let inputCapitaliza = document.getElementById("capitaliza");


        document.getElementById("capitaliza").addEventListener("click", capitaliza);


    }

    document.addEventListener("DOMContentLoaded", init);
}