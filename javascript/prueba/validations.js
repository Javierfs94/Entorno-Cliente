let capitalize = function() {
    texto.value = texto.value.replace(/\b\w/g, l => l.toUpperCase());
}

let invert = function() {
	var auxText = "";
	    for(var i = 0; i<texto.value.length; i++){
		if(texto.value[i] === texto.value[i].toLowerCase()){
		    auxText += texto.value[i].toUpperCase();
		}else {
		    auxText += texto.value[i].toLowerCase();
		}
	    }
    texto.value = auxText;
}

{
    let init = function() {

	texto = document.getElementById("texto");

        document.getElementById("capitalize").addEventListener("click", function() {
            capitalize();
        });
	document.getElementById("invert").addEventListener("click", function() {
            invert();
        });
    }

    window.addEventListener("DOMContentLoaded", init);

}
