var col = 255;
var backgroundcol = 255;
var r = 255;
var g = 255;
var b = 255;
//var randomCol = random(0, 256);

function setup() {
    createCanvas(640, 480);
}

function mousePressed() {

  var randomCol1 = random(0, 256);
  var randomCol2 = random(0, 256);
  var randomCol3 = random(0, 256);

        if (b === randomCol1) {
          r = randomCol2;
        } else {
          g = randomCol2;
        }
        if (g === randomCol3) {
          g = randomCol1;
        } else {
          b = randomCol1;
        }
        if (r === randomCol2) {
          b = randomCol2;
        } else {
          r = randomCol3;
        }
}

function draw() {
  //
  // if (mouseIsPressed) {
  //   if (mouseButton === LEFT) {
  //     r = randomCol;
  //   }
  //   if (mouseButton === CENTER){
  //     g = randomCol;
  //   }
  //   if (mouseButton === RIGHT) {
  //     b = randomCol;
  //   }
  // }

  background(r, g, b);

  print(mousePressed);
  print(r);
  print(g);
  print(b);
}
