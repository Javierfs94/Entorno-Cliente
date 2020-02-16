$(() => {
    let $capa = $(capa);
    $("input").click(function() {
        $capa.html("Has hecho clic en el botón <b>" + this.value + "</b>");
    });

});