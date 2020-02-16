$(() => {
    $("#capa")
        .mouseenter(function(evento) {
            $("#mensaje").css("display", "block");
        })
        .mouseleave(function(evento) {
            $("#mensaje").css("display", "none");
        });
});