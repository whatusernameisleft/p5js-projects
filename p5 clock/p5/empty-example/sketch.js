function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  rotate(-90);

  let h = hour();
  let m = minute();
  let s = second();
  let sc = map(s, 0, 60, 0, 360);
  let mn = map(m, 0, 60, 0, 360);
  let hr = map(h, 0, 24, 0, 360);
  let scCol = map(s, 0, 60, 100, 255);
  let mnCol = map(s, 0, 60, 100, 255);
  let hrCol = map(s, 0, 24, 100, 255);

  //rectMode(RADIUS);
  //fill(90, 255, 90);
  //noStroke();
  //rect(-85, 0, 50, 125);

  strokeWeight(10);
  stroke(scCol, 52, 52);
  noFill();
  arc(0, 0, 400, 400, sc, 0);

  push();
  rotate(sc);
  line (0, 0, 150, 0);
  stroke (scCol, 52, 52);
  strokeWeight(8);
  pop();

  strokeWeight(10);
  stroke(52, mnCol, 52);
  noFill();
  arc(0, 0, 370, 370, mn, 0);

  push();
  rotate(mn);
  line (0, 0, 130, 0);
  stroke (52, mnCol, 52);
  strokeWeight(8);
  pop();

  strokeWeight(10);
  stroke(52, 52, hrCol);
  noFill();
  arc(0, 0, 340, 340, hr, 0);

  push();
  rotate(hr);
  line (0, 0, 70, 0);
  stroke (52, 52, hrCol);
  strokeWeight(8);
  pop();

  strokeWeight(20);
  stroke(0);
  line(0, 0, 0, 0);

  //fill(0);
  //noStroke();
  //rotate(90);
  //textSize(32);
  //text(h + ':' + m + ':' + s, -60, 0, 50, 125);

}
