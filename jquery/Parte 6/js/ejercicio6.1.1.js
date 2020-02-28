	$(() => {
	    let numClics = 0;
	    let numDobleClics = 0;
	    $("#micapa").dblclick(function() {
	            $("#mensaje").html("Doble Clic " + (++numDobleClics));
	        })
	        .click(function() {
	            $("#mensaje").html("Clic " + (++numClics));
	        });
	})