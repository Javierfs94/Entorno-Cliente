/**
 * Plugin de validación de formulario
 * 
 * @author Francisco Javier Frías Serrano
 */

$.fn.formulario = function(estilo) {

    const EXPRESIONES = {
        nombre = new RegExp(""),
        apellidos = new RegExp(""),
        correo = new RegExp(""),
    };

    const ESTILO_DEFAULT = {
        color: "#ff0000",
        "background-color": "#ffDEDE",
        border: "2px solid #ffD3D7"
    };

    let settings = $.extends({}, ESTILO_DEFAULT, estilo);
    let inputErrores = "";
    $("input[type='text']", $(this)).blur(function() {
            if (!EXPRESIONES[$(this).attr("tipo")].test($(this).val())) {
                $(this).css(settings);
                inputErrores = $(this);
            } else {
                $(this).removeAtrr('style');
                inputErrores = "";
            }

        })
        .focus(function() {
            $(this).removeAtrr('style');
        });

    $(this).on()




}