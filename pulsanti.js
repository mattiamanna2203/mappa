//Funzione per chiudere l'immagine
function closeImage() {
    //Rimuovere la tag dell'immagine superficiale (si elimina l'immagine)
    var images = document.getElementById("image-display");
    images.remove();

    // 
    const numero_foto = sessionStorage.getItem("last_foto");
    const custombotton= document.getElementById(`custom-button${numero_foto}`);
    custombotton.style.opacity = 0;

    //Inizializzare di nuovo la tag immagine eliminata prima
    var image = document.createElement("img");
    image.id = "image-display";
    image.className = "immagine";
    image.src = ""; // Set the source of the image

    // Togliere il pulsante di chiusura immagine
    const closebutton = document.getElementById("closeModal");
    closebutton.style.opacity = 0;

    // Get a reference to the "pop-up-image" div
    var popUpImageDiv = document.querySelector(".pop-up-image");
    // Append the <img> element to the "pop-up-image" div
    popUpImageDiv.appendChild(image);
};
//Pulsante di chiusura dell'immagine.
var modal = document.getElementById("closeModal");
modal.addEventListener("click", function(){closeImage()});

//Chiudere la foto quando si clicca ovunque tranne che un pulsante.
document.querySelector("main").addEventListener("click",function(){closeImage()});

//Chiudere la foto quando si clicca su un pulsante
document.onkeydown = function () {closeImage()};


/*---------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
/*------------PULSANTI-------------*/

// Aggiungere il pulsante 30
document.getElementById("custom-button30").addEventListener("click", function() {
    // Add your desired functionality here
    //alert("Button clicked!");
    const closebutton = document.getElementById("closeModal");
    closebutton.style.opacity = 1;


    var image = document.getElementById("image-display");
    image.src = "./foto/30.png"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button30");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",30)
});




