/**
* Clase Principal
*
* @author Francisco Javier Frías Serrano
*/

$(function () {

let contadorParrafos = 1;
let contadorTitulos = 1;
let colores = ["yellow", "pink" , "grease"];

$("#creaParrafos").click(function () { 
    $("#sectionAnnadidos").append("<p>Parrafo-"+contadorParrafos+"</p>");
    $("p").css("background-color", obtenerColor());
    contadorParrafos++;
});

$("#creaTitulos").click(function () { 
    let valor = $("input").val();
    $("#sectionAnnadidos").append("<h1>Título-"+contadorTitulos+"</h1>");
    $("h1").css("background-color", obtenerColor());
    contadorTitulos++;
});

$("h1").mousemove(function () { 
    $(this).css("background-color", obtenerColor());
});

$("p").hover(function () {
        // over
        $(this).css("border", "1px solid black");
    }, function () {
        // out
        $(this).css("border", "none");
    }
).click(function () { 
    $(this).css("color", "red");
});

$("#anulaRaton").click(function () { 
    $("h1").css("background-color", "");
});

function obtenerColor() {
    return colores[Math.floor(Math.random()*3)];
}

});