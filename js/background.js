'use strict';
// code to randomize the homepage background 
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