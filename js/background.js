'use strict';
// code to randomize the homepage background 
function randomBG(){
    var BG = 0;
     BG = Math.floor(Math.random() * 3 ) + 1; // generates a random background from the 3 background images. 
    //  console.log(BG);
     if (BG === 1){
         return 'background.jpg' // if the random number of 1 is chosen the background.jpg will be chosen
     } else if (BG === 2){ // if the background.jpg isnt the chosen one it will go to the next option being background2.jpg
         return 'background2.jpg' // if the random number of 2 is chosen the background2.jpg will be chosen
     } else{ // if the background2.jpg isn't the chosen one it will go to the next option being background3.jpg
         return 'background3.webp' // if the random number of 3 is chosen the background3.jpg will be chosen
     }
    
}
document.body.background = 'images/' + randomBG(); // this makes it effect the background of the whole page. it says it's selecting the document being the webpage then it effects the body tag of the document and finally changing the background. the 'images/' makes the selector go into that specific folder to grab the images. randomBG is a function so that is when the function is being called. randomBG();
