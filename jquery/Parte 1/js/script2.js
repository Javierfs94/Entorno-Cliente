$(document).ready(function() {
    // Con el ratón encima se añade a la clase
    $("a").mouseover(function(event) {
        $("#capa").addClass("clasecss");
    });
    // Al quitar el ratón se elimina
    $("a").mouseout(function(event) {
        $("#capa").removeClass("clasecss");
    });
});