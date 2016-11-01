function preload() {
  sound1 = loadSound('data/alex_winter.mp3');
  sound2 = loadSound('data/dylan_lewis.mp3');         sound3 = loadSound('data/moby.mp3');
  sound4 = loadSound('data/patrick_dixon.mp3');       sound5 = loadSound('data/peter_sunde.mp3');
  sound6 = loadSound('data/wyclef_jean.mp3');         sound7 = loadSound('data/south_park.mp3');
}


function setup() {
      sound1.setVolume(0.1);
      sound2.setVolume(0.1);
      sound3.setVolume(0.1);
      sound4.setVolume(0.1);
      sound5.setVolume(0.1);
      sound6.setVolume(0.1);
      sound7.setVolume(0.1);
}

function keyPressed() {
  if (keyCode == 81) {  //q
    sound1.play();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();


  } else if (keyCode == 87) {  //w
    sound1.stop();
    sound2.play();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();


  } else if (keyCode == 69) {  //e
    sound1.stop();
    sound2.stop();
    sound3.play();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();


  } else if (keyCode == 82) {  //r
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound4.play();
    sound5.stop();
    sound6.stop();
    sound7.stop();


  } else if (keyCode == 84) {  //t
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.play();
    sound6.stop();
    sound7.stop();


  } else if (keyCode == 89) {  //y
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.play();
    sound7.stop();


  } else if (keyCode == 80) {  //space
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.play();


}

    else {
    return false;
    }
    return false; // prevent default
}
