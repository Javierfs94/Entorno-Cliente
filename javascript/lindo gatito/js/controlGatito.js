/**
 * @author Francisco José Sánchez Romero
 */

{
    let peso;
    let infoGato;
    let imagenGato;
    let muestraInfo = function () {
        infoGato = document.getElementById("infoGato");
        imagenGato = document.getElementById("imagenGato");
        document.getElementById("nombre").textContent += gatito.nombre;
        document.getElementById("fechaDeNacimiento").textContent += gatito.fechaNacimiento.toLocaleDateString();
        document.getElementById("edad").textContent += Math.floor( ((new Date()) - Date.parse(gatito.fechaNacimiento)) / 86400000)+" días";
        document.getElementById("raza").textContent += gatito.raza;
        peso = document.getElementById("peso");
        cambiaPeso();
        document.getElementById("comer").addEventListener("click",comer);
        document.getElementById("jugar").addEventListener("click",jugar);
        document.getElementById("dormir").addEventListener("click",dormir);
    }

    let comer = function () {
        try{
            gatito.comer();
            infoGato.textContent = "Mmmm, ¡Que rica comida!";
            imagenGato.src = "images/comiendo.gif";
            cambiaPeso();
        }catch(e){
            infoGato.textContent = e.message;
            imagenGato.src = "images/muerto.gif";
        }
        
    }

    let jugar = function () {
        try{
            gatito.jugar();
            infoGato.textContent = "MIAAU, ¡Qué bien me lo paso!";
            imagenGato.src = "images/jugando.gif";
            cambiaPeso();
        }catch(e){
            infoGato.textContent = e.message;
            imagenGato.src = "images/muerto.gif";
        }
        
    }

    let cambiaPeso = function(){
        peso.textContent = "Peso: "+gatito.peso +" kg";
    }

    let dormir = function(){
        infoGato.textContent = "zzZzzzZZzZ";
        imagenGato.src = "images/durmiendo.gif";
    }

    document.addEventListener("DOMContentLoaded", function init() {
        muestraInfo();
    });
}