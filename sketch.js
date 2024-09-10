//Váriaveis
let cor;
let x;
let y;

function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  x = [0, 0, 0];
  y = [random(height), random(height), random(height)];
}

function draw() {
  //Círculo
  fill(cor);

  for (let contador in x) {
    circle(x[contador], y[contador], 50);
    x[contador] += random(0, 3);
    y[contador] += random(-3, 3);
    
    if (x[contador] >= width) {
    x[contador] = 0;
  }
  }
  // console.log (contador)

  //Interação
  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255));
  }
}
