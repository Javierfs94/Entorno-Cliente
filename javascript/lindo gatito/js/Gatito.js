/**
 * @author Francisco José Sánchez Romero
 */
{
    function Gatito(nombre, fechaNacimiento, raza, peso) {
        this.setNombre(nombre);
        this.setFechaNacimiento(fechaNacimiento);
        this.setRaza(raza);
        this.setPeso(peso);
    }

    Gatito.prototype.setNombre = function (nombre) {
        if (nombre == "")
            throw new Error("El nombre no puede estar vacío");
        this.nombre = nombre;
    }
    Gatito.prototype.setFechaNacimiento = function (fechaNacimiento) {
        if (fechaNacimiento=="" || new Date(fechaNacimiento)>new Date())
            throw new Error("La fecha de nacimiento es incorrecta");
        this.fechaNacimiento = new Date(fechaNacimiento);
    }
    Gatito.prototype.setRaza = function (raza) {
        if (raza == "")
            throw new Error("La raza no puede estar vacía");
        this.raza = raza;
    }
    Gatito.prototype.setPeso = function (peso) {
        if (peso<1 || peso>15)
            throw new Error("El peso debe estar entre 1 y 15");
        this.peso = peso;
    }

    Gatito.prototype.jugar = function () {
        this.estaMuerto();
        this.peso--;
        this.estaMuerto();
    }

    Gatito.prototype.comer = function () {
        this.estaMuerto();
        this.peso++;
        this.estaMuerto();
    }

    Gatito.prototype.estaMuerto = function(){
        if(this.peso<1 || this.peso>15){
            throw new Error("Parece que tu gatito no se mueve... RIP");
        }
    }
}