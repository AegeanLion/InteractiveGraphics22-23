//sources: https://p5js.org/reference/

const objs = [];

let sketch = function(p) {
  p.setup = function() {
    createCanvas(500, 500);

// initializing all pieces of barrel
 barrelBase1 = new barrelBase(0, 0, 0, 60/2, 50/2, 60/2);
 barrelRidge1 = new barrelRidge(0, 0, 0, 62/2, 15/2, 62/2);
 barrelRidge2 = new barrelRidge(0, 0, 0, 60/2, 15/2, 60/2);
 barrelRidge3 = new barrelRidge(0, 85/2, 0, 47/2, 15/2, 47/2);
 barrelRidge4 = new barrelRidge(0, 85/2, 0, 45/2, 15/2, 45/2);
 barrelRidge5 = new barrelRidge(0, -85/2, 0, 45/2, 15/2, 45/2);
 barrelRidge6 = new barrelRidge(0, -85/2, 0, 47/2, 15/2, 47/2);

//the second barrel
 barrelBase1 = new barrelBase(150, 0, 60, 60/2, 50/2, 60/2);
 barrelRidge1 = new barrelRidge(150, 0, 60, 62/2, 15/2, 62/2);
 barrelRidge2 = new barrelRidge(150, 0, 60, 60/2, 15/2, 60/2);
 barrelRidge3 = new barrelRidge(150, 85/2, 60, 47/2, 15/2, 47/2);
 barrelRidge4 = new barrelRidge(150, 85/2, 60, 45/2, 15/2, 45/2);
 barrelRidge5 = new barrelRidge(150, -85/2, 60, 45/2, 15/2, 45/2);
 barrelRidge6 = new barrelRidge(150, -85/2, 60, 47/2, 15/2, 47/2);

//creates ocean where the barrel floats
 ocean = new cuboid(0,50,0, 400, 100, 400);


//   for(i = 0; i<objs.length; i++) {
//     console.log(objs[i]);
//   }

  }
  
  p.draw = function() {
      // moving center points, setting angle mode etc
  angleMode(DEGREES);
  background(220);
  translate(250, 250);

//fills in the ocean with triangle shading
  fill(ocean.fillColor);
  triangle(ocean.nodes[0][0], ocean.nodes[0][1], ocean.nodes[1][0], ocean.nodes[1][1], ocean.nodes[2][0], ocean.nodes[2][1]);
  triangle(ocean.nodes[0][0], ocean.nodes[0][1], ocean.nodes[3][0], ocean.nodes[3][1], ocean.nodes[4][0], ocean.nodes[4][1]);
  triangle(ocean.nodes[0][0], ocean.nodes[0][1], ocean.nodes[1][0], ocean.nodes[1][1], ocean.nodes[4][0], ocean.nodes[4][1]);
  triangle(ocean.nodes[0][0], ocean.nodes[0][1], ocean.nodes[3][0], ocean.nodes[3][1], ocean.nodes[2][0], ocean.nodes[2][1]);
  triangle(ocean.nodes[7][0], ocean.nodes[7][1], ocean.nodes[1][0], ocean.nodes[1][1], ocean.nodes[2][0], ocean.nodes[2][1]);
  triangle(ocean.nodes[7][0], ocean.nodes[7][1], ocean.nodes[1][0], ocean.nodes[1][1], ocean.nodes[6][0], ocean.nodes[6][1]);
  triangle(ocean.nodes[6][0], ocean.nodes[6][1], ocean.nodes[7][0], ocean.nodes[7][1], ocean.nodes[5][0], ocean.nodes[5][1]);
  triangle(ocean.nodes[4][0], ocean.nodes[4][1], ocean.nodes[1][0], ocean.nodes[1][1], ocean.nodes[6][0], ocean.nodes[6][1]);
  triangle(ocean.nodes[5][0], ocean.nodes[5][1], ocean.nodes[3][0], ocean.nodes[3][1], ocean.nodes[6][0], ocean.nodes[6][1]);
  triangle(ocean.nodes[7][0], ocean.nodes[7][1], ocean.nodes[1][0], ocean.nodes[1][1], ocean.nodes[6][0], ocean.nodes[6][1]);
  triangle(ocean.nodes[3][0], ocean.nodes[3][1], ocean.nodes[4][0], ocean.nodes[4][1], ocean.nodes[6][0], ocean.nodes[6][1]);
  noFill();


// drawing all pieces of barrel + any other objects (automatically does it without object methods)
  for(let i = 0; i < objs.length; i++) {
    drawObj(objs[i]);
  }

}


//for rotating the objects
function mouseDragged() {
  for(let i = 0; i< objs.length; i++) {
    rotateX3D(objs[i], pmouseY - mouseY);
    rotateY3D(objs[i], pmouseX - mouseX);
  }
  }
}

new p5(sketch, "box1"); 


