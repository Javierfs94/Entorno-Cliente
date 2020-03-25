/**
 * Clase Principal
 *
 * @author Francisco Javier Frías Serrano
 */

$(function() {

    let contadorParrafos = 1;
    let contadorTitulos = 1;
    let colores = ["yellow", "pink", "Gray"];

    function obtenerColor() {
        return colores[Math.floor(Math.random() * 3)];
    }

    // Al cargar la página
    $("body").css("font-weight", "bold")
        .on("dblclick", "p", function() {
            $(this).css("color", "red");
        })
        .on("mouseleave", "p", function() {
            $(this).css("border", "none");
        })
        .on("mouseenter", "section p", function() {
            $(this).css("border", "1px solid black");
        });

    // Autoría
    $(`
    <p>Francisco Javier</p>
    <p>Frías</p>
    <p>Serrano</p>   
    `).insertAfter("#anulaRaton").fantasma();

    // Controles
    // Controles: Creación de párrafos
    $("#creaParrafos").click(function() {
        $(`<p>Parrafo-${contadorParrafos++}</p>`)
            .appendTo("#sectionAnnadidos")
            .css("background-color", obtenerColor());
    });

    // Controles: Creación de títulos
    $("#creaTitulos").click(function() {
        for (let i = 0; i < $("input").val(); i++) {
            $(`<h1>Título-${contadorTitulos++}</h1>`)
                .appendTo("#sectionAnnadidos")
                .on("mousemove", function() {
                    $(this).slideUp("fast")
                        .slideDown("fast")
                        .css("background-color", obtenerColor());
                });
        }
    });

    // Controles: Anulación de efectos de títulos
    $("#anulaRaton").click(function() {
        $("h1").off();
    });

});