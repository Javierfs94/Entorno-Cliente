/**
 * Clase Gato
 * 
 * @author Francisco Javier Frías Serrano
 */
{
    function Gato(nombre, fechaNacimiento, raza, peso) {
        this.setNombre(nombre);
        this.setFechaNacimiento(fechaNacimiento);
        this.setRaza(raza);
        this.setPeso(peso);
    }

    Gato.prototype.setNombre = function(nombre) {
        if (nombre == "") {
            throw new Error("El nombre no puede estar vacío");
        }
        this.nombre = nombre;
    }
    Gato.prototype.setFechaNacimiento = function(fechaNacimiento) {
        if (fechaNacimiento == "" || new Date(fechaNacimiento) > new Date()) {
            throw new Error("La fecha de nacimiento es incorrecta");
        }
        this.fechaNacimiento = new Date(fechaNacimiento);
    }
    Gato.prototype.setRaza = function(raza) {
        if (raza == "") {
            throw new Error("La raza no puede estar vacía");
        } else if (!isNaN(raza)) {
            throw new Error("La raza no puede ser un número");
        } else {
            this.raza = raza;
        }
    }
    Gato.prototype.setPeso = function(peso) {
        if (peso < 1 || peso > 15) {
            throw new Error("El peso debe estar entre 1 y 15");
        }
        this.peso = peso;
    }

    Gato.prototype.estado = function() {
        if (this.peso < 1 || this.peso > 15) {
            throw new Error("RIP");
        }
    }

    Gato.prototype.jugar = function() {
        this.estado();
        this.peso--;
        this.estado();
    }

    Gato.prototype.comer = function() {
        this.estado();
        this.peso++;
        this.estado();
    }

    Gato.prototype.dormir = function() {
        this.estado();
    }
}