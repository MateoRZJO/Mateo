console.log("titulo");
const titulo = document.getElementById("titulo");
let estadoOriginal = true;

titulo.innerText = "Esta e la historia...";

titulo.addEventListener("click", () => {
    if(estadoOriginal === true) {
        titulo.innerText = "de una tortuga";
        titulo.style.color = "green"; 
    }

    else {
        titulo.innerText = "Esta es la hitoria";
        titulo.style.color = "black";
    }

    estadoOriginal = !estadoOriginal;
}); 