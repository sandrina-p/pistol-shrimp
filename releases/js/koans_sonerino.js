
function preload() {
    sound1 = loadSound('data/koans/quatro.ogg');
}

function setup() {
      sound1.setVolume(0);
      sound1.play();
      sound1.loop();
}

function draw(){
      if (keyIsPressed === true) {
         if (key === 'a' || key === 'A' || key === 'w' || key === 'W') {
            sound1.setVolume(0.7);
          } else {
             sound1.setVolume(0);
          }
 } else {
    sound1.setVolume(0);
 }
}

$(document).ready(function(){
   $('body').click (function(){



   });
});
