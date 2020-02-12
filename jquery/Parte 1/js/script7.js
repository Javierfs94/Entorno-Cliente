$(document).ready(function() {
    $("#enlaceajax").click(function(evento) {
        evento.preventDefault();
        $("#destino").load("recibe-parametros.php", { nombre: "Pepe", edad: 45 }, function() {
            alert("Recibidos los datos por ajax");
        });
    });
})