'use strict';
document.body.background = 'images/' + randomBG();
// code to randomize the homepage background 
// randomized background code finds a random number between 1 and 3 and then depending on that number gives it that background. 
function randomBG(){
    var BG = 0;
     BG = Math.floor(Math.random() * 3 ) + 1;
    //  console.log(BG);
     if (BG === 1){
         return 'background1.jpg'
     } else if (BG === 2){
         return 'background2.jpg'
     } else{
         return 'background3.webp'
     }
    
}