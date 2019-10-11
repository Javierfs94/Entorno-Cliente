let num = prompt("Introduzca un número positivo para calcular el factorial)");
let resultado = 1;

if (num < 0 || Number.isInteger(num)) {
    alert("Número introducido no válido");
} else {
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
}

alert("El factorial de " + num + " es " + resultado);