$(() => {
    $("#enlaceajax").click(function(evento) {
        evento.preventDefault();
        $("#destino").load("contenido-ajax.html");
    });
})