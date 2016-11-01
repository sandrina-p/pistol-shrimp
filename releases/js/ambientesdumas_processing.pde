int option = 1;



void setup() {
jProcessingJS(this, {fullscreen:true, mouseoverlay:true});
   frameRate(30);
}

void draw() {
  background(0);
  noFill();

  stroke(255);



  //TELECOMANDO



  if (option == 1) {
    cenadois();
  }

  if (option == 2) {
    cenaum();
  }

  if (option == 3) {
    cenatres();
  }


  if (option >3) {
    option = 1;
  }
  //
  //if (option < 1) {
  //  option = 2;
  //}
}


void keyPressed() {
    if (key == 'd' || key == 'D') {
      option += 1 ;
    }
}


int num=100, movers=2, d=320, d2=d-100, framess=200;
int num2=100, movers2=3, d3=d2, d4=d3-100, framess2=100;

float angle, thetas;


void cenadois() {



   if (keyPressed) {
    if (key == 'w' || key == 'W') {
        thetas += TWO_PI/framess;
    }
  }

    if (keyPressed) {
    if (key == 'a' || key == 'A') {
        thetas -= TWO_PI/framess;
    }
  }




 //01
  for (int i=0; i<num; i++) {
    float outerX = width/2 + cos(angle)*100;
    float outerY = height/2+sin(angle)*d;
    point(outerX, outerY);
    angle = TWO_PI/num*i;
    for (int j=0; j<movers; j++) {
      float offSet = TWO_PI/movers*j;
      float moverX =  width/2 + cos(angle+offSet+thetas)*d2;
      float moverY = height/2+sin(angle+offSet+thetas)*d2;
      line(outerX, outerY, moverX, moverY);
    }
  }
   //02

//fill(0);
//ellipse(width/2,height/2,width/2+20,width/2+20);
}
int frames = 220, nume=75;
float theta;

void cenatres(){
  noFill();
  translate(width/2, height/2);


  for (int i=0; i<nume; i++) {
    pushMatrix();
    float offSet = TWO_PI/nume*i;
    rotate(offSet);
    float sz = map(sin(theta),-1,1,width*.15,width*.5);
    float x = map(sin(theta), -1, 1, sz, width*.5);
    translate(x, 0);
    pushMatrix();
    rotate(theta);
    if (i%2==0) {
      ellipse(0, 0, sz, sz*2);
    } else {
      ellipse(0, 0, sz*.7, sz*2*.7);
    }
    popMatrix();
    popMatrix();
  }

  if (keyPressed) {
    if (key == 'w' || key == 'W') {
        theta += TWO_PI/frames;
    }
  }


  if (keyPressed) {
    if (key == 'a' || key == 'A') {
        theta -= TWO_PI/frames;
    }
  }






}
float lado = 1500;

float x = width;
float y = height;

float i = 0.1*400 ;
float rotaxao = 0.009;


void cenaum() {
  display();
  zoom();
  rodando();
}




void display() {

  translate(width/2, height/2);
  rotate(i);
  rectMode(CENTER);

  for (int j = 0; j < 9999; j = j+100) {
    rect(x-j, y-j, lado, lado);
    rect(x+j, y+j, lado, lado);
}

  rect(x, y, lado, lado);

}


void zoom() {
  //zoom in
  if (keyPressed) {
    if (key == 'w' || key == 'W') {
      lado+= 5 ;
    }
  }

  //zoom out
  if (keyPressed) {
    if (key == 'a' || key == 'A') {
      lado -= 5;
    }
  }
}

void rodando() {

  if (keyPressed) {
    if (key == 'w' || key == 'W') {
      i += rotaxao ;
    }
  }

    if (keyPressed) {
    if (key == 'a' || key == 'A') {
      i -= rotaxao ;
    }
  }


}
