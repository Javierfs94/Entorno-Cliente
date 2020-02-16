{

    function init() {

        // Recorrido de un array con for y forEach
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        console.log("Meses con for");

        for (let i = 0; i < meses.length; i++) {
            console.log(meses[i]);
        }

        console.log("Meses con for Each");
        meses.forEach(mes => {
            console.log(mes);
        });


        // Calculadora simple

        function calculadora(num1, num2) {
            let suma = num1 + num2;
            let resta = num1 - num2;
            let multiplicacion = num1 * num2;
            let division = num1 / num2;
            return {
                suma: suma,
                resta: resta,
                multiplicacion: multiplicacion,
                division: division
            }
        }

        console.log(calculadora(5, 2));


        // Ejemplo Clousure
        function crearFuncion() {
            let mensaje = "Soy una cadena en el padre, mostrada desde el hijo";

            function closure() {
                console.log(mensaje);
            }
            return closure;
        }
        let pruebaClousure = crearFuncion();
        pruebaClousure();


        // Prueba de DOM
        // Creacion del elemento
        let elemento = document.createElement("h2");
        // Creacion de un nodo de texto
        let contenido = document.createTextNode("Este es el título");
        // Añadir el nodo de texto
        elemento.appendChild(contenido);
        // Agregarle atributos
        elemento.setAttribute("textAlign", "center");
        // Agregar el elemento al documento
        document.getElementById("cajaTitulo").appendChild(elemento);


        // Prueba con formularios
        let formulario = document.getElementsByName("formulario")[0];
        let elementosForulario = formulario.elements;
        let boton = document.getElementById("boton");

        let validarNombre = function(e) {
            if (formulario.nombre.value == 0) {
                alert("Completa el nombre");
                e.preventDefault();
            }
        };


        let validarRadio = function(e) {
            if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) {} else {
                alert("Selecciona un sexo");
                e.preventDefault();
            }
        };

        let validarCheckbox = function(e) {
            if (formulario.terminos.checked == false) {
                alert("Acepta los términos");
                e.preventDefault();
            }
        };

        let validar = function(e) {
            validarNombre(e);
            validarRadio(e);
            validarCheckbox(e);
        };

        formulario.addEventListener("submit", validar);

        // Prueba eventos
        let botonEvento = document.getElementById("botonEvento");
        botonEvento.addEventListener("click", () => {
            console.log("¡El evento click ha funcionado!");
        });

        let inputTexto = document.getElementById("inputTexto");
        inputTexto.addEventListener("focus", () => {
            console.log("Se ha hecho focus en el input");
        });

        inputTexto = document.getElementById("inputTexto");
        inputTexto.addEventListener("blur", () => {
            console.log("Se ha hecho blur en el input");
        });


        // Prueba de funciones
        function miFuncion() {
            console.log("Mi funcion sin parametros");
        }

        function miFuncionParametro(mensaje) {
            console.log(mensaje);
        }


        miFuncion();
        miFuncionParametro("Mi función con parámetros");


        // Ejemplo Destructuring
        const pokemon = {
            nombre: "Pikachu",
            altura: 0.5,
            peso: 16.5,
        }

        function action(pokemon) {
            const { nombre, altura, peso } = pokemon;
            return `Pokemon: ${nombre} 
            Altura: ${altura} 
            Peso: ${peso}`;
        }

        console.log(action(pokemon));


        // Modificación de estilos de elementos del árbol DOM

        let miBoton = document.getElementById("miBoton");
        miBoton.style.width = "50px";
        miBoton.style.backgroundColor = "red";


        // Ejemplos de arrays
        var articulos = ["Elemento1", "elemento2", "elemento3"];

        console.log(articulos.length);
        console.log(articulos);
        console.log(articulos[1]);

        articulos.push("nuevoAtras")
        console.log(articulos);

        articulos.unshift("nuevoDelante")
        console.log(articulos);

        articulos.shift();
        console.log(articulos);

        articulos.pop();
        console.log(articulos);

        articulos.splice(1, 3);
        console.log(articulos);

        // Pruebas Fechas
        let fecha = new Date();
        document.write(fecha);

        console.log(fecha.getHours());
        console.log(fecha.getMinutes());
        console.log(fecha.getSeconds());
        let semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

        console.log(fecha.getDay());
        console.log(fecha.getDate());
        console.log(fecha.getMonth());
        console.log(fecha.getFullYear());


    }

    window.addEventListener("DOMContentLoaded", init);

}