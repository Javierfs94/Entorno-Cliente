$(() => {
    $('input.fecha').attr("value", function(indiceArray) {
        let f = new Date();
        return f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    });
});