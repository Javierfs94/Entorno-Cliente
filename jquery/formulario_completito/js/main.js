/**
 * Archivo principal
 * 
 * @author Francisco Javier Frías Serrano
 */


$(function() {


    let rellenarCampos = function() {
        $("#nombre").val("Paco");
        $("#edad").val("30");
        $('[name="sexos"]').prop("checked", true);
        $("#idioma").val("espannol");
        $("#DNI").val("12345678Z");
        $("#email").val("prueba@gmail.com");
        $("#fechaNacimiento").val("15/05/1990");
        $("#telefono").val("111222333");
        $("#cuentaCorriente").val("1111-1111-11-1111111111");
        $("#direccionWeb").val("https://www.google.es");
        $("#terminos").prop("checked", true);
    }

    let limpiar = function() {
        $("input[type=text]").val("");
        $("span").text("");
        $("input, select").removeClass("correcto error");
        $('[name="sexos"]').prop("checked", false);
        $("#terminos").prop("checked", false);
    }

    $("#limpiar").click(function() {
        limpiar();
    });

    $("#rellenar").click(function(e) {
        e.preventDefault();
        rellenarCampos();
    });

    $("input[type='text']").on("blur", function() {
        $(this).next("span").text(validar.comprobarValor($(this).val(), $(this).attr("id")));
        if ($(this).next("span").text() == "") {
            $(this).addClass("correcto");
        } else {
            $(this).addClass("error");
        }
    }).focus(function() {
        $(this).removeClass();
    });

    $("input[type='radio']").on("blur", function() {
        $(this).parents()[1].children[2].innerHTML = (validar.comprobarRadio($('[name="sexos"]')));
        if ($(this).next("span").text() == "") {
            $(this).addClass("correcto");
        } else {
            $(this).addClass("error");
        }
    }).focus(function() {
        $(this).removeClass();
    });


    $("input[type='checkbox']").on("blur", function() {
        $(this).next("span").text(validar.comprobarCheck($(this)[0].checked));
        if ($(this).next("span").text() == "") {
            $(this).addClass("correcto");
        } else {
            $(this).addClass("error");
        }
    }).focus(function() {
        $(this).removeClass();
    });


    $("select").on("blur", function() {
        $(this).next("span").text(validar.comprobarSelect(this));
        if ($(this).next("span").text() == "") {
            $(this).addClass("correcto");
        } else {
            $(this).addClass("error");
        }
    }).focus(function() {
        $(this).removeClass();
    });


    $("form")
        .on("submit", function(e) {
            e.preventDefault();

            $("input, select").trigger("blur");

            let $error = $(".error");

            $error.first().focus();

            if ($error.length == 0) {
                $(this).effect("bounce", "slow");
                setTimeout(function() {
                    limpiar();
                }, 2000);
            }
        })
        .on("reset", function() {
            limpiar();
        });
});