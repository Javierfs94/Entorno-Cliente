{

    function init() {
        // Ejemplo Destructuring
        const pokemon = {
            nombre: "Pikachu",
            altura: 0.5,
            peso: 16.5,
        }

        function action(pokemon) {
            const { nombre, altura, peso } = pokemon;
            return `<p>Pokemon: ${nombre}</p>
    <p>Altura: ${altura}</p>
    <p>Peso: ${peso}</p>`;
        }

        console.log(action(pokemon));



        // Objetos

        let miBoton = document.getElementById("boton");
        miBoton.style.width = "50px";
        miBoton.style.backgroundColor = "red";


        // Ejemplo de arrays
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
    }

    window.addEventListener("DOMContentLoaded", init);

}