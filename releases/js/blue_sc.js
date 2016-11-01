// A sound file object
var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;
var sound7;
var sound8;
var sound9;
// transparency of stuffz
var trans1 = 0;
var trans2 = 0;
var trans3 = 0;
var trans4 = 0;
var trans5 = 0;
var trans6 = 0;
var trans7 = 0;
var trans8 = 0;
var trans9 = 0;




function preload() {
  // Load a sound file
  sound1 = loadSound('data/blue/01.ogg');
  sound2 = loadSound('data/blue/02.ogg');
  sound3 = loadSound('data/blue/03.ogg');
  sound4 = loadSound('data/blue/04.ogg');
  sound5 = loadSound('data/blue/05.ogg');
  sound6 = loadSound('data/blue/06.ogg');
  sound7 = loadSound('data/blue/07.ogg');
  sound8 = loadSound('data/blue/08.ogg');
  sound9 = loadSound('data/blue/09.ogg');
}

function setup() {
  createCanvas(screen.width, screen.height);
  smooth();
  // Loop the sound forever
  // (well, at least until stop() is called)


  fft = new p5.FFT();

  sound1.setVolume(1);
  sound2.setVolume(1);
  sound3.setVolume(1);
  sound4.setVolume(1);
  sound5.setVolume(1);
  sound6.setVolume(1);
  sound7.setVolume(1);
  sound8.setVolume(1);
  sound9.setVolume(1);


}

function keyPressed() {
  if (keyCode == 65) {
      sound1.play();
      sound2.stop();
      sound3.stop();
      sound4.stop();
      sound5.stop();
      sound6.stop();
      sound7.stop();
      sound8.stop();
      sound9.stop();

      trans1 = 100;
      trans2 = 0;
      trans3 = 0;
      trans4 = 0;
      trans5 = 0;
      trans6 = 0;
      trans7 = 0;
      trans8 = 0;
      trans9 = 0;
  }

    else if (keyCode == 83) {
      sound1.stop();
      sound2.play();
      sound3.stop();
      sound4.stop();
      sound5.stop();
      sound6.stop();
      sound7.stop();
      sound8.stop();
      sound9.stop();

      trans1 = 0;
      trans2 = 100;
      trans3 = 0;
      trans4 = 0;
      trans5 = 0;
      trans6 = 0;
      trans7 = 0;
      trans8 = 0;
      trans9 = 0;
  }

    else if (keyCode == 68) {
      sound1.stop();
      sound2.stop();
      sound3.play();
      sound4.stop();
      sound5.stop();
      sound6.stop();
      sound7.stop();
      sound8.stop();
      sound9.stop();

      trans1 = 0;
      trans2 = 0;
      trans3 = 100;
      trans4 = 0;
      trans5 = 0;
      trans6 = 0;
      trans7 = 0;
      trans8 = 0;
      trans9 = 0;
  }

    else if (keyCode == 70) {
      sound1.stop();
      sound2.stop();
      sound3.stop();
      sound4.play();
      sound5.stop();
      sound6.stop();
      sound7.stop();
      sound8.stop();
      sound9.stop();

      trans1 = 0;
      trans2 = 0;
      trans3 = 0;
      trans4 = 100;
      trans5 = 0;
      trans6 = 0;
      trans7 = 0;
      trans8 = 0;
      trans9 = 0;


  }

    else if (keyCode == 71) {
      sound1.stop();
      sound2.stop();
      sound3.stop();
      sound4.stop();
      sound5.play();
      sound6.stop();
      sound7.stop();
      sound8.stop();
      sound9.stop();

      trans1 = 0;
      trans2 = 0;
      trans3 = 0;
      trans4 = 0;
      trans5 = 50;
      trans6 = 0;
      trans7 = 0;
      trans8 = 0;
      trans9 = 0;
  }

    else if (keyCode == 72) {
      sound1.stop();
      sound2.stop();
      sound3.stop();
      sound4.stop();
      sound5.stop();
      sound6.play();
      sound7.stop();
      sound8.stop();
      sound9.stop();

      trans1 = 0;
      trans2 = 0;
      trans3 = 0;
      trans4 = 0;
      trans5 = 0;
      trans6 = 100;
      trans7 = 0;
      trans8 = 0;
      trans9 = 0;
  }


    else if (keyCode == 74) {
      sound1.stop();
      sound2.stop();
      sound3.stop();
      sound4.stop();
      sound5.stop();
      sound6.stop();
      sound7.play();
      sound8.stop();
      sound9.stop();
      trans = 220;

      trans1 = 0;
      trans2 = 0;
      trans3 = 0;
      trans4 = 0;
      trans5 = 0;
      trans6 = 0;
      trans7 = 100;
      trans8 = 0;
      trans9 = 0;
  }


    else if (keyCode == 75) {
      sound1.stop();
      sound2.stop();
      sound3.stop();
      sound4.stop();
      sound5.stop();
      sound6.stop();
      sound7.stop();
      sound8.play();
      sound9.stop();


      trans1 = 0;
      trans2 = 0;
      trans3 = 0;
      trans4 = 0;
      trans5 = 0;
      trans6 = 0;
      trans7 = 0;
      trans8 = 100;
      trans9 = 0;
  }


    else if (keyCode == 76) {
      sound1.stop();
      sound2.stop();
      sound3.stop();
      sound4.stop();
      sound5.stop();
      sound6.stop();
      sound7.stop();
      sound8.stop();
      sound9.play();

      trans1 = 0;
      trans2 = 0;
      trans3 = 0;
      trans4 = 0;
      trans5 = 0;
      trans6 = 0;
      trans7 = 0;
      trans8 = 0;
      trans9 = 100;
  }


    else {
return false;
      trans1 = 0;
      trans2 = 0;
      trans3 = 0;
      trans4 = 0;
      trans5 = 0;
      trans6 = 0;
      trans7 = 0;
      trans8 = 0;
      trans9 = 0;
  }
    return false;
}



function draw() {

 var spectrum = fft.analyze();



  // Set the volume to a range between 0 and 1.0

  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitch

var speed = map(1, 0.1, mouseX/displayWidth*4, 0, 2); //normal speed

speed = constrain(speed, 0.01, 4);
sound1.rate(speed);
sound2.rate(speed);
sound3.rate(speed);
sound4.rate(speed);
sound5.rate(speed);
sound6.rate(speed);
sound7.rate(speed);
sound8.rate(speed);
sound9.rate(speed);


background(0, 0, 30);


//lines

    for (var i = 0; i< spectrum.length; i+=30){
    var x = map(i, 0, spectrum.length*2, 0, mouseY/i);
    var h = -height + map(spectrum[i], 150, 255, height, 0);

        //a
        noStroke();
        fill(0, h/10, h, trans1);
        ellipse(h+300, x*2, 1, 5000+x);

        //s
        strokeWeight(0.5);
        stroke(0, h/9, h, trans2);
        fill(0, 0, h, trans2);
        for (var s = 0; s< width; s+=50){
          line(s, h, 0, width);
            }

        //d
          strokeWeight(0.5);
          stroke(0, h/9, h, trans3);
          fill(0, 0, h, trans3);
          for (var s = 0; s< width; s+=50){
          line(s, h, 0, width);
           }


        //f
        strokeWeight(10);
        stroke(0, h/7, h, trans4);
        fill(0, 0, h, trans4);
        for (var s = 0; s< width; s+=100){
          point(x+s, h+s);
            }

        //g
        noFill();
        stroke(h/6, h/4, h, trans5);
        ellipse(width/2, height/2, h/2, h/2);

        //h
        noStroke();
        fill(h/6, h/4, h, trans6);
        rect(0, h, width, h/2);

        //j
        noFill();
        strokeWeight(2);
        stroke(0 , h/2, h, trans7);
        for (var s = 0; s< width; s+=15){
          point(x+s, h+s);
          point(h+s, x*10+s)
            }

        //k
        strokeWeight(2);
        stroke(0 , h/2, h, trans8/10);
        fill(0, h/2, h, trans8/10);
        rect(x+width/2, h, 1+i, 1+i);

        //l
        strokeWeight(2);
        stroke(0 , h/2, h, trans9/10);
        fill(0, h/2, h, trans9/10);
        ellipse(x+width/2, h, 1+i, 1+i);


  }

}
