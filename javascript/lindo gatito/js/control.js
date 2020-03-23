/**
 * Controla los datos y acciones del Gato
 * 
 * @author Francisco Javier Frías Serrano
 */

{
    let peso;
    let info;
    let imagen;
    let botonComer;
    let botonJugar;
    let botonDormir;

    let muestraInfo = function() {
        info = document.getElementById("info");
        imagen = document.getElementById("imagen");
        document.getElementById("nombre").textContent += gato.nombre;
        document.getElementById("fechaDeNacimiento").textContent += gato.fechaNacimiento.toLocaleDateString();
        document.getElementById("edad").textContent += Math.floor(((new Date()) - Date.parse(gato.fechaNacimiento)) / 86400000) + " días";
        document.getElementById("raza").textContent += gato.raza;
        peso = document.getElementById("peso");
        cambiaPeso();
        botonComer = document.getElementById("comer").addEventListener("click", comer);
        botonJugar = document.getElementById("jugar").addEventListener("click", jugar);
        botonDormir = document.getElementById("dormir").addEventListener("click", dormir);
    }

    let cambiaPeso = function() {
        peso.textContent = "Peso: " + gato.peso + " kg";
    }

    let comer = function() {
        try {
            gato.comer();
            info.textContent = "¡Que rico!";
            imagen.src = "img/comiendo.gif";
            cambiaPeso();
        } catch (e) {
            info.textContent = e.message;
            imagen.src = "img/muerto.gif";
            botonComer.disabled = "true";
        }
    }

    let jugar = function() {
        try {
            gato.jugar();
            info.textContent = "¡Que divertido!";
            imagen.src = "img/jugando.gif";
            cambiaPeso();
        } catch (e) {
            info.textContent = e.message;
            imagen.src = "img/muerto.gif";
            botonJugar.disabled = "true";

        }
    }

    let dormir = function() {
        try {
            gato.dormir();
            info.textContent = "zZZzzzZZZzzZZz";
            imagen.src = "img/durmiendo.gif";
        } catch (e) {
            info.textContent = e.message;
            imagen.src = "img/muerto.gif";
            botonDormir.disabled = "true";
        }
    }

    document.addEventListener("DOMContentLoaded", function init() {
        muestraInfo();
    });
}