/**
 * Clase Alumno
 *
 * @author Francisco Javier Frías Serrano
*/

{
    function Alumno(nombre ="Javier", apellido1="Frias", apellido2="Serrano", fechaNacimiento="13/03/1994") {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.fechaNacimiento = fechaNacimiento;
    }

    function mostrar() {
        console.log(Alumno);
    }


}