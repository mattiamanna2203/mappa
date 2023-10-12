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

// Refresh the page after 5 seconds

sessionStorage.setItem("last_foto",1)
// Aggiungere il pulsante 1
document.getElementById("custom-button1").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 1){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/1.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button1");
    custombotton.style.opacity = 1;
    sessionStorage.setItem("last_foto",1)
});

/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 2
document.getElementById("custom-button2").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 2){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/2.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button2");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",2)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 3
document.getElementById("custom-button3").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 3){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/3.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button3");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",3)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 4
document.getElementById("custom-button4").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 4){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/4.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button4");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",4)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 5
document.getElementById("custom-button5").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 5){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/5.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button5");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",5)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 6
document.getElementById("custom-button6").addEventListener("click", function() {

    let last = sessionStorage.getItem("last_foto")    
    if (last !== 6){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/6.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button6");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",6)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 7
document.getElementById("custom-button7").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 7){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/7.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button7");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",7)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 8
document.getElementById("custom-button8").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 8){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/8.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button8");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",8)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 9
document.getElementById("custom-button9").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 9){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/9.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button9");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",9)
});
/*---------------------------------------------------------------------------------------------*/
// Aggiungere il pulsante 10
document.getElementById("custom-button10").addEventListener("click", function() {// Add your desired functionality here//alert("Button clicked!");const closebutton = document.getElementById("closeModal");closebutton.style.opacity = 1;
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 10){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

var image = document.getElementById("image-display");
image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/10.jpg?raw=true"; // Replace with the path to your image


const custombotton= document.getElementById("custom-button10");
custombotton.style.opacity = 1;
custombotton.style.backgroundColor = "yellow";  
sessionStorage.setItem("last_foto",10)
});

/*---------------------------------------------------------------------------------------------*/
// Aggiungere il pulsante 11
document.getElementById("custom-button11").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 11){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

var image = document.getElementById("image-display");
image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/11.jpg?raw=true"; // Replace with the path to your image


const custombotton= document.getElementById("custom-button11");
custombotton.style.opacity = 1;
custombotton.style.backgroundColor = "yellow";  
sessionStorage.setItem("last_foto",11)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 12
document.getElementById("custom-button12").addEventListener("click", function() {
let last = sessionStorage.getItem("last_foto")    
    if (last !== 12){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/12.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button12");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",12)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 13
document.getElementById("custom-button13").addEventListener("click", function() {
let last = sessionStorage.getItem("last_foto")    
    if (last !== 13){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/13.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button13");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",13)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 14
document.getElementById("custom-button14").addEventListener("click", function() {
let last = sessionStorage.getItem("last_foto")    
    if (last !== 14){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/14.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button14");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",14)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 15
document.getElementById("custom-button15").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 15){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/15.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button15");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",15)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 16
document.getElementById("custom-button16").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 16){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/16.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button16");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",16)
});
/*---------------------------------------------------------------------------------------------*/
// Aggiungere il pulsante 17
document.getElementById("custom-button17").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 17){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/17.jpg?raw=true"; // Replace with the path to your image



    const custombotton= document.getElementById("custom-button17");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",17)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 18
document.getElementById("custom-button18").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 18){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/18.jpg?raw=true"; // Replace with the path to your image



    const custombotton= document.getElementById("custom-button18");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",18)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 19
document.getElementById("custom-button19").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 19){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/19.jpg?raw=true"; // Replace with the path to your image



    const custombotton= document.getElementById("custom-button19");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",19)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 20
document.getElementById("custom-button20").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 20){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/20.jpg?raw=true"; // Replace with the path to your image



    const custombotton= document.getElementById("custom-button20");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",20)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 21
document.getElementById("custom-button21").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 21){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/21.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button21");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",21)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 22
document.getElementById("custom-button22").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 22){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/22.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button22");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",22)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 23
document.getElementById("custom-button23").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 23){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/23.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button23");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",23)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 24
document.getElementById("custom-button24").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 24){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/24.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button24");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",24)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 25
document.getElementById("custom-button25").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 25){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/25.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button25");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",25)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 26
document.getElementById("custom-button26").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 26){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/26.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button26");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",26)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 27
document.getElementById("custom-button27").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 27){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 
    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/27.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button27");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",27)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 28
document.getElementById("custom-button28").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 28){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/28.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button28");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",28)
});
/*---------------------------------------------------------------------------------------------*/

// Aggiungere il pulsante 29
document.getElementById("custom-button29").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 29){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/29.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button29");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",29)
});

/*---------------------------------------------------------------------------------------------*/
// Aggiungere il pulsante 30
document.getElementById("custom-button30").addEventListener("click", function() {
    let last = sessionStorage.getItem("last_foto")    
    if (last !== 30){
        const custombottonlast= document.getElementById(`custom-button${last}`);
        custombottonlast.style.opacity = 0;
    } 

    const closebutton = document.getElementById("closeModal");
    closebutton.style.opacity = 1;


    var image = document.getElementById("image-display");
    image.src = "https://raw.githubusercontent.com/mattiamanna2203/mappa/master/foto/30.jpg?raw=true"; // Replace with the path to your image


    const custombotton= document.getElementById("custom-button30");
    custombotton.style.opacity = 1;
    custombotton.style.backgroundColor = "yellow";  
    sessionStorage.setItem("last_foto",30)
});



