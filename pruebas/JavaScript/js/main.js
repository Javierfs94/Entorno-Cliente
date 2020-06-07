{
    function init() {

        // Destructuring
        let persona = {
            nombre: "Javier",
            edad: 26
        };

        function action(persona) {
            const { nombre, edad } = persona;
            return `Persona: ${nombre}
            Edad: ${edad}`;
        }

        console.log(action(persona));

        let aves = ["pato", "ganzo", "pollo"];
        const [a, b, c] = aves;
        console.log(a);
        console.log(b);
        console.log(c);

        // Clousure
        let add = (function() {
            let counter = 0;
            return function() { counter += 1; return counter }
        })();

        add();
        add();
        add(); // the counter is now 3
        // console.log(counter); // No se puede acceder a la variable de dentro de la función, dando un error de no definido

        // IIFE (Funciones invocadas inmediatamente)
        let saludo = function() {
            let cadena = "Soy una funcion invocada inmediatamente";
            return cadena;
        }();

        console.log(saludo);


        let caja = document.getElementById("caja");
        caja.style.width = "250px";
        caja.style.height = "250px";
        caja.style.backgroundColor = "red";
        caja.style.margin = "1em";


        let colores = ["green", "red", "blue"];
        let cambiaColor = function() {
            caja.style.backgroundColor = colores[Math.floor(Math.random() * 3)];
        }

        // caja.addEventListener("mouseenter", cambiaColor);
        // caja.addEventListener("mouseleave", cambiaColor);

        caja.addEventListener("mouseenter", function() {
            caja.style.backgroundColor = "green";
        });

        caja.addEventListener("mouseleave", function() {
            caja.style.backgroundColor = "red";
        });

    }

    window.addEventListener("DOMContentLoaded", init)
}