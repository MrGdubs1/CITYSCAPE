// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// DRAW WINDOWS
ctx.fillStyle = "white";
for (let x1 = 160; x1 < 281; x1 += 30) {
  ctx.fillRect(x1, 120, 12, 500);
}

for (let y1 = 370; y1 < 700; y1 += 50) {
  ctx.fillRect(15, y1, 120, 20);
}

for (let x2 = 30; x2 < 120; x2 += 20) {
  for (let y2 = 200; y2 < 350; y2 += 20) {
    ctx.fillRect(x2, y2, 10, 10);
  }
}
