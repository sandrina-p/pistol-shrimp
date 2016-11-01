/*var js = ["scripts/libraries/p5.js", "scripts/libraries/p5.dom.js", "scripts/libraries/p5.sound.js"];
var $body = $("head");
for (var i = 0; i < js.length; i++) {
    $body.append("<script src=\"" + js[i] + "\" type=\"text/javascript\"></scr" + "ipt>");
}*/

var x = 0;
var y = 0;

var v1 = 0;

function setup() {
    createCanvas(200, 200);
    
    mic = new p5.AudioIn();
    mic.start();
    
}

function draw() {
    background(0);
    
    ellipse((height/2), (width/2), 6, 6);
    
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
    
        
    noFill();
    strokeWeight(2);
    stroke(255);
    
    // 1º shape top/bot
    beginShape();
    curveVertex(0,  0);
    curveVertex(0,  0);
    curveVertex(width/4,  a2);
    curveVertex(width/2,  a2-30);
    curveVertex(((width/2)+(width/4)),  a2);
    curveVertex(200, 0);
    curveVertex(200, 0);
    endShape();
    
    beginShape();
    curveVertex(0,  200);
    curveVertex(0,  200);
    curveVertex((width/4),  height-a2);
    curveVertex((width/2),  height-a2+30);
    curveVertex(((width/2)+(width/4)), height-a2);
    curveVertex(200, 200);
    curveVertex(200, 200);
    endShape();
    
    // 2º shape left/right
    beginShape();
    curveVertex(0,  0);
    curveVertex(0,  0);
    curveVertex(b2-50,  (height/6));
    curveVertex(b2-30,  (height/2));    
    curveVertex(b2-25, ((height/2)+(height/4)));
    curveVertex(0, 200);
    curveVertex(0, 200);
    endShape();
    
    beginShape();
    curveVertex(200,  0);
    curveVertex(200,  0);
    curveVertex(width-b2+50,  (height/6));
    curveVertex(width-b2+30,  (height/2));
    curveVertex(width-b2+25, ((height/2)+(height/4)));
    curveVertex(200, 200);
    curveVertex(200, 200);
    endShape();  
    
    // 3º shape left/right
    beginShape();
    curveVertex(0,  height/4);
    curveVertex(0,  0);
    curveVertex(b2-50,  (height/6));
    curveVertex(b2-30,  (height/2));    
    curveVertex(b2-25, ((height/2)+(height/4)));
    curveVertex(0, 200);
    curveVertex(0, 200);
    endShape();
    
    noFill(); 
    stroke(0);
    point(0.1,0.1);
    point(0.1,199.9);
    point(199.9,199.9);
    point(199.9,0.1);
}