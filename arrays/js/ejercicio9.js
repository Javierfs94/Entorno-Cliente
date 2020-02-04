/**
 * Ejercicio 9 Arrays
 * 
 * Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
 * 
 * @author Francisco Javier Frías Serrano
 */

{

    let annadirPush = function() {
        let array = [];

        for (let i = 0; i < 100; i++)
            array.push(i);

        return array;

    }

    let annadirUnshinft = function() {
        let array = [];
        for (let i = 0; i < 100; i++)
            array.unshift(i);

        return array;

    }

    let annadirElementos = function() {
        return new Array(100);
    }

    let removePop = function() {
        let array = [];

        for (let i = 0; i < 100; i++)
            array.push(i);
    }

    let init = function() {
        let array1 = annadirPush();
        let array2 = annadirUnshinft();
        let array3 = annadirElementos();

        console.log(array1);
        console.log(array2);
        console.log(array3);

        console.log(array1.push(100));
        console.log(array2.shift(100));
    };

    document.addEventListener("DOMContentLoaded", init);
}