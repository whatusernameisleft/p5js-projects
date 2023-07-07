function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    var b = 0;
    var whiteTri = true;
    let start = map(mouseX, 0, 400, 0, 360);
    let stop = map(mouseY, 0, 400, 0, 360);
    let r = map(mouseX, 0, 400, 0, 255);
    let g = map(mouseY, 0, 400, 0, 255);
    let red = map(mouseX, 0, 400, 255, 0);
    let green = map(mouseY, 0, 400, 255, 0);

      if (keyIsPressed === true) {
        b = 255;
      }

    background(r, g, b);

    noStroke();
    fill(red, green, b);
    ellipse(width / 2, height / 2, 70)

      if (mouseIsPressed) {
        if (mouseButton === LEFT) {
          strokeWeight(7);
          stroke(255);
          noFill();
          arc(width / 2, height / 2, 170, 170, start, stop);
          arc(width / 2, height / 2, 220, 220, stop, start);
        }
        if (mouseButton === RIGHT) {
          whiteTri = false;

          strokeWeight(7);
          stroke(0);
          noFill();
          triangle(width / 2, 350, 50, 50, 350, 50);

          strokeWeight(7);
          stroke(0);
          noFill();
          arc(width / 2, height / 2, 170, 170, stop, start);
          arc(width / 2, height / 2, 220, 220, start, stop);

        }
      }

      if (whiteTri === true) {
        strokeWeight(7);
        stroke(255);
        noFill();
        triangle(width / 2, 50, 50, 350, 350, 350);
      }

      if (mouseX > 0) {
      cursor(CROSS);
      }
}
