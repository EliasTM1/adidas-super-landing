// We set an external value that is gonna increment on each iteration causeing switching the image
let counter = 0

function changeImg() {
    // We select the element to then modify the src
    let tenis = document.querySelector('#tenis')
        // If the counter is equal to 0 which is on the first iteration 
    if (counter == 0) {
        // We display this image 
        tenis.src = './Resources/2-2-adidas-shoes-free-png-image.png'
            // And then we add one to the external counter 
        counter++
        return
    }
    // The function starts again but now with the value of 1 
    if (counter == 1) {
        // And displays the image with this src
        tenis.src = './Resources/adidas-shoes-png-26565-removebg-preview.png'
            // adds one to the global variable
        counter++
        return
    }

    if (counter == 2) {
        tenis.src = './Resources/adidas-shoes-png-26563 copy.png'
            //After changing all the images it return the value of 0 to start the image loop all over
        counter = 0
        return
    }

}
// Fade in function create the efect of the image gaining opacity
function fadeIn() {
    // Removes the class that removes the opacity
    tenis.classList.remove("fade-out");
    tenis.classList.add("fade-in");
}
// fade out removes the entrance effect and ads the effect that makes the image lose opacity 
function fadeOut() {
    tenis.classList.remove("fade-in");
    tenis.classList.add("fade-out");


    // Add listener to the "transitionend" event.
    // When the transition ends, (Thats the event listener transitioned does) it triggesr the function called x  
    tenis.addEventListener("transitionend", function x() {
        // Remove the previously added listener, change
        // the image and fade-in the new image.



        tenis.removeEventListener("transitionend", x);
        changeImg();
        fadeIn();
    });
}


// This is where all the loop starts, first the function fade out is called causing this effect on the image, then the image change and fades in the next one. but it removes the event listener in order to add it in the next iteration. 

// Whenever the transitions ends, it changes the image and fades in the next one

setInterval(fadeOut, 5000);