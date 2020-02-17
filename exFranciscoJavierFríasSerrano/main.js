{
    let init = function () {

        let patrones = function {
            cursoNivel:/^(12)*[A-Z]{3,4}& ,"Introduce curso y nivel: 1º ASIR, 2º BACH, 2º DAW";
            nCanvas:/d,"Introduce un entero";
            nParrafos:/d,"Introduce un entero";
        }
        
        function generar() {
            let canvas = document.getElementsByTagName("section")[0];
            parrafos.appendChild("div");
            let parrafos = document.getElementsByTagName("section")[1];
            parrafos.append("p");
        }

        function generaColor() {
            let color ="";
            if (color == "#000000" || color == "#ffffff" ) {
                generaColor();
            }else{
                
            }
        }
        
        function dibujaCanvas(canvas, evento) {
            canvas.width = 150;
            canvas.height = 150;
            let lienzo = canvas.getContext('2d');
            lienzo.fillStyle = generaColor();
            lienzo.fillRect(0, 0, 150, 150);
            lienzo.font = "bold sans-serif 44px";
            lienzo.fillStyle = 'black';
            //    lienzo.fillText("hola", 0, 11);
        }


        return{
            patrones: patrones,
            generar: generar,
            generaColor: generaColor
    }

    document.addEventListener("DOMContentLoader", init);
    
}

