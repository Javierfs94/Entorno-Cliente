/**
 * Ejercicio lindo gatito con objetos
 * main
 * 
 * @author Francisco Javier Frías Serrano 
 * */

{
    addEventListener("DOMContentLoaded", () => {
        document.title = "Gatito";

        let fragment = document.createDocumentFragment();

        // Cabecera
        let element = document.createElement("h1");
        element.innerHTML = "Gatito";
        fragment.appendChild(element);
        fragment.appendChild(document.createElement("hr"));
        fragment.appendChild(document.createElement("br"));

        // Label para el nombre
        element = document.createElement("label");
        element.setAttribute("for", "nombre");
        element.style.marginRight = "5px";
        element.innerHTML = "Nombre:";
        fragment.appendChild(element);

        // Input para el nombre
        element = document.createElement("input");
        element.setAttribute("type", "text");
        element.setAttribute("placeholder", "Introduce el nombre");
        element.setAttribute("id", "nombre");
        fragment.appendChild(element);

        fragment.appendChild(document.createElement("br"));
        fragment.appendChild(document.createElement("br"));

        // Label para la raza
        element = document.createElement("label");
        element.setAttribute("for", "raza");
        element.style.marginRight = "5px";
        element.innerHTML = "Raza:";
        fragment.appendChild(element);

        // Select para la raza
        element = document.createElement("select");
        element.setAttribute("id", "raza");
        ["Siamés", "Persa", "Sphynx"].forEach(raza => {
            let option = document.createElement("option");
            option.setAttribute("value", raza);
            option.innerHTML = raza;
            element.appendChild(option);
        });
        fragment.appendChild(element);

        fragment.appendChild(document.createElement("br"));
        fragment.appendChild(document.createElement("br"));

        // Label para el peso
        element = document.createElement("label");
        element.setAttribute("for", "peso");
        element.style.marginRight = "5px";
        element.innerHTML = "Peso:";
        fragment.appendChild(element);

        // Input para el peso
        element = document.createElement("input");
        element.setAttribute("type", "number");
        element.setAttribute("min", "1");
        element.setAttribute("max", "9");
        element.setAttribute("placeholder", "Introduce el peso");
        element.setAttribute("id", "peso");
        fragment.appendChild(element);

        fragment.appendChild(document.createElement("br"));
        fragment.appendChild(document.createElement("br"));

        // Label para la fecha de nacimiento
        element = document.createElement("label");
        element.setAttribute("for", "fecha");
        element.style.marginRight = "5px";
        element.innerHTML = "Fecha de nacimiento:";
        fragment.appendChild(element);

        // Input para la fecha de nacimiento
        element = document.createElement("input");
        element.setAttribute("type", "date");
        element.setAttribute("id", "fecha");
        fragment.appendChild(element);

        fragment.appendChild(document.createElement("br"));
        fragment.appendChild(document.createElement("br"));

        // Botón para crear el gatito
        element = document.createElement("button");
        element.setAttribute("id", "crear");
        element.innerHTML = "Crear gato";
        element.addEventListener("click", () => {
            sessionStorage.setItem("nombre", document.getElementById("nombre").value);
            sessionStorage.setItem("fecha", document.getElementById("fecha").value);
            sessionStorage.setItem("raza", document.getElementById("raza").value);
            sessionStorage.setItem("peso", document.getElementById("peso").value);
            let ventana = window.open("", "", "height=500, width=700");
            ventana.document.write("<!DOCTYPE html><html lang=\"es\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><script src=\"js/class/gato.js\"></script><script defer src=\"js/ventana.js\"></script></head><body></body></html>");
            ventana.document.close();
        });
        fragment.appendChild(element);

        document.body.appendChild(fragment);
    });

}