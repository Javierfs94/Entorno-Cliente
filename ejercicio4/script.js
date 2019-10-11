let valores = [true, 5, false, "hola", "adios", 2];

let resultado = valores[0] || valores[2];

alert(valores[3] > valores[4]); // Comparación para obtener cual es mayor
alert(resultado); // Resultado verdadero
resultado = valores[0] && valores[2];
alert(resultado); // Resultado falso
let num1 = valores[1];
let num2 = valores[5];
resultado = num1 + num2;
alert(resultado);
resultado = num1 - num2;
alert(resultado);
resultado = num1 * num2;
alert(resultado);
resultado = num1 / num2;
alert(resultado);
resultado = num1 % num2;
alert(resultado);