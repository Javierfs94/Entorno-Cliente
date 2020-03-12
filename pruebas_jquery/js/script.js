/**
 * Script de pruebas
 * 
 * @author Francisco Javier Frías Serrano
 */

$(function() {
    reloadLinks();

    $("#rojo").css({
        "background-color": "red",
        "color": "white",
    });
    $("#verde").css({
        "background-color": "green",
        "color": "yellow",
    });
    $("#amarillo").css({
        "background-color": "yellow",
        "color": "green",
    });
    $(".miclase").css({
        "border": "1px solid black",
        "text-align": "center",
    });


    $("p, a").css("cursor", "pointer");

    $("li").css("list-style", "none");

    $("[title='Facebook']").css("background-color", "blue");

    $("#caja1").mouseover(function() {
        $(this).css("background-color", "red")
    }).mouseout(function() {
        $(this).css("background-color", "yellow")
    });


    $("#caja1").click(function() {
        $(this).css("background-color", "blue");
        $(this).text("Click en: \nX: " + event.clientX + "\nY: " + event.clientY);
    }).dblclick(function() {
        $(this).css("background-color", "purple");
        $(this).text("Doble click en: \nX: " + event.clientX + "\nY: " + event.clientY);
    });


    $("#caja2").hover(function() {
        // over
        $(this).css("background-color", "red")
    }, function() {
        // out
        $(this).css("background-color", "yellow")
    });

    $("input").focus(function() {
        $(this).css("background-color", "green");
    }).blur(function() {
        $(this).css("background-color", "red");
    });



    $("#add_button").click(function(e) {
        $("#menu").append('<li><a href="' + $("#add_link").val() + '"></a></li>');
        reloadLinks();
    });


});


function reloadLinks() {
    $("a").each(function() {
        $(this).text($(this).attr("href"));
    });
}