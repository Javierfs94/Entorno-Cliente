/**
 * Clase Gato
 * 
 * @author Francisco Javier Frías Serrano
 */

function Gato(nombre, fechaNacimiento, raza, peso) {
    this.setNombre(nombre);
    this.setFechaNacimiento(fechaNacimiento);
    this.setRaza(raza);
    this.setPeso(peso);
}

Gato.prototype.setNombre = function(nombre) {
    this.nombre = nombre;
}
Gato.prototype.setFechaNacimiento = function(fechaNacimiento) {
    this.fechaNacimiento = new Date(fechaNacimiento);
}
Gato.prototype.setRaza = function(raza) {
    this.raza = raza;
}
Gato.prototype.setPeso = function(peso) {
    this.peso = peso;
}

Gato.prototype.estado = function() {
    if (this.peso < 1 || this.peso > 15) {
        throw new Error("RIP");
    }
}

Gato.prototype.jugar = function() {
    this.estado();
    this.setPeso(this.peso - 1)
    this.estado();
}

Gato.prototype.comer = function() {
    this.estado();
    this.setPeso(this.peso + 1)
    this.estado();
}

Gato.prototype.dormir = function() {
    this.estado();
}

Gato.prototype.edad = function() {
    this.estado();
}