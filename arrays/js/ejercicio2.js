/**
 * Ejercicio 2 Arrays
 * 
 * Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
 * 
 * @author Francisco Javier Frías Serrano
 */

let persona = { primerNombre: "Javier", segundoNombre: "Frías", edad: 25 };
let texto = "";

for (let x in persona) {
    console.log(texto += persona[x] + " ");
}