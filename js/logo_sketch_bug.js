var larg;
var md;
var a;

function setup() {

   larg = windowWidth/10;
   a = 1;
   
   createCanvas(windowWidth, windowHeight);
   md = createGraphics(larg, larg);

   stroke(0);

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
}

function draw() {

   micLevela = mic.getLevel();
   micLevelb = mic.getLevel();

   if(micLevela > 0 && micLevela < 0.2){
      micLevela = micLevela-0.05;
   }

   var a1 = micLevela*1420;
   var a2 = micLevela*1400;

   if(micLevelb > 0 && micLevelb < 0.2){
      micLevelb = micLevelb-0.05;
   }

   var b1 = micLevela*1700;
   var b2 = micLevela*1600;

   // graphics

   md.background(255);

   md.fill(0);

   md.ellipse(larg/2, larg/2, larg/50, larg/50);

   md.noFill();
   md.strokeWeight(larg/100);
   md.stroke(0);

   // 1º shape top/bot
   md.beginShape();
   md.curveVertex(0,  0);
   md.curveVertex(0,  0);
   md.curveVertex(larg/4,  a2);
   md.curveVertex(larg/2,  a2-30);
   md.curveVertex(larg/2+larg/4,  a2);
   md.curveVertex(larg, 0);
   md.curveVertex(larg, 0);
   md.endShape();

   md.beginShape();
   md.curveVertex(0,  larg);
   md.curveVertex(0,  larg);
   md.curveVertex(larg/4,  larg-a2);
   md.curveVertex(larg/2,  larg-a2+30);
   md.curveVertex(larg/2+larg/4, larg-a2);
   md.curveVertex(larg, larg);
   md.curveVertex(larg, larg);
   md.endShape();

   // 2º shape left/right
   md.beginShape();
   md.curveVertex(0,  0);
   md.curveVertex(0,  0);
   md.curveVertex(b2-50,  larg/6);
   md.curveVertex(b2-30,  larg/2);
   md.curveVertex(b2-25, (larg/2)+(larg/4));
   md.curveVertex(0, larg);
   md.curveVertex(0, larg);
   md.endShape();

   md.beginShape();
   md.curveVertex(larg,  0);
   md.curveVertex(larg,  0);
   md.curveVertex(larg-b2+50,  larg/6);
   md.curveVertex(larg-b2+30,  larg/2);
   md.curveVertex(larg-b2+25, (larg/2)+(larg/4));
   md.curveVertex(larg, larg);
   md.curveVertex(larg, larg);
   md.endShape();

   // 3º shape left/right
   md.beginShape();
   md.curveVertex(0,  larg/4);
   md.curveVertex(0,  0);
   md.curveVertex(b2-50,  larg/6);
   md.curveVertex(b2-30,  larg/2);
   md.curveVertex(b2-25, (larg/2)+(larg/4));
   md.curveVertex(0, larg);
   md.curveVertex(0, larg);
   md.endShape();

   for (var wi = 0; wi < windowWidth; wi+=larg) {
      for (var hei = 0; hei < windowHeight; hei += larg){
         image(md,wi*a,hei*a,larg,larg);
      }
   }
}
