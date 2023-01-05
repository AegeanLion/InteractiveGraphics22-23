// A bunch of random objects I was playing around with before the project was assigned some may have been used in the project

class cuboid {
  constructor(x, y, z, w, h, d) {
    this.x = x;
    this.y = y;
    w = w/2;
    h = h/2;
    d = d/2;
    this.nodes = [[x + w, y + h, z + d], [x - w, y + h, z + d], [x + w, y - h, z + d], [x + w, y - h, z - d], 
                  [x + w, y + h, z - d], [x - w, y - h, z - d], [x - w, y + h, z - d], [x - w, y - h, z + d]];
    this.edges = [[0, 1], [0, 2], [0, 4], [1, 7], [1, 6], [2, 3], [2, 7], [7, 5], [5, 3], [5, 6], [3, 4], [4, 6]];
    this.shape = {'nodes': this.nodes, 'edges': this.edges};

    this.selected = false;
    this.selectionSize = 8;
    this.selectedColor = color(255, 0, 0);
    this.unselectedColor = color(0, 255, 0);

    this.nodeSize = 0;
    this.nodeColor = color(40, 168, 107);
    this.edgeColor = color(0, 100, 255);
    this.fillColor = color(0, 0, 255);

    objs.push(this);

    // this.clicked = function() {
    //   var d = dist(mouseX, mouseY, x, y);
    //   if(d < this.selectionSize/2){
    //     if(this.selected == false) {
    //       this.selected = true;
    //     } else {
    //       this.selected = false;
    //     }
        
    //   } 
    // }
    
  }
}

class pyramid {   
  constructor(x, y, z, w, h, d) {
    this.x = x;
    this.y = y;
    w = w/2;
    h = h/2;
    d = d/2;
    this.nodes = [[x - w, y + h, z - d], [x - w, y + h, z + d], [x + w, y + h, z - d], [x + w, y + h, z + d], [x, y - h, z]];
    this.edges = [[0, 1], [0, 2], [2, 3], [3, 1], [0, 4], [1, 4], [2, 4], [3, 4]];
    this.shape = {'nodes': this.nodes, 'edges': this.edges};
    this.nodeSize = 6;
    this.nodeColor = color(40, 168, 107);
    this.edgeColor = color(34, 68, 204);

    objs.push(this);
    
  }
}


class prismoid {
  constructor(x, y, z, w, h, d) {
    this.x = x;
    this.y = y;
    w = w/2;
    h = h/2;
    d = d/2;
    this.nodes = [[x - w, y + h, z - d], [x - w, y + h, z + d], [x + w, y + h, z - d], [x + w, y + h, z + d], [x + w, y - h, z], [x - w, y - h, z]];
    this.edges = [[0, 1], [0, 2], [2, 3], [3, 1], [0, 5], [1, 5], [2, 4], [3, 4], [4, 5]];
    this.shape = {'nodes': this.nodes, 'edges': this.edges};
    this.nodeSize = 6; 
    this.nodeColor = color(40, 168, 107);
    this.edgeColor = color(34, 68, 204);

    objs.push(this);
    
  }
}


class triangularPrism {
  constructor(x, y, z, w, h, d) {
    this.x = x;
    this.y = y;
    w = w/2;
    h = h/2;
    d = d/2;
    this.nodes = [[x + w, y + h, z + d], [x - w, y + h, z + d], [x, y + h, z - d], [x, y - h, z]];
    this.edges = [[0, 1], [1, 2], [2, 0], [0, 3], [1, 3], [2, 3]]
    this.shape = {'nodes': this.nodes, 'edges': this.edges};
    this.nodeSize = 6; 
    this.nodeColor = color(40, 168, 107);
    this.edgeColor = color(34, 68, 204);

    objs.push(this);
    
  }
}

class ramp {
  constructor(x, y, z, w, h, d) {
    this.x = x;
    this.y = y;
    w = w/2;
    h = h/2;
    d = d/2;
    this.nodes = [[x + w, y + h, z + d], [x - w, y + h, z + d], [x + w, y + h, z - d], [x - w, y + h, z - d], [x + w, y - h, z - d], [x - w, y - h, z - d]];
    this.edges = [[0, 1], [1, 3], [0, 2], [2, 3], [3, 5], [2, 4], [1, 5], [0, 4], [4, 5]];
    this.shape = {'nodes': this.nodes, 'edges': this.edges};
    this.nodeSize = 0; 
    this.nodeColor = color(40, 168, 107);
    this.edgeColor = color(34, 68, 204);

    objs.push(this);
  }
}


// class sphereoid {
//   constructor(x, y, z, w, h, d) {
//     w = w/2;
//     h = h/2;
//     d = d/2;
//     this.midNodes = [[x + w, y, z], [x - w, y, z], [x, y, z + d], [x, y, z - d]];
//     this.nodes = [[x + w, y, z], [x - w, y, z], [x, y, z + d], [x, y, z - d], [x, y - h, z], [x, y + h, z]];
//     this.edges = [[0, 2], [0, 3], [2, 1], [3, 1]];
//     this.shape = {'nodes': this.nodes, 'edges': this.edges};
//     this.nodeSize = 6; 
//     this.nodeColor = color(40, 168, 107);
//     this.edgeColor = color(34, 68, 204);

//     objs.push(this);
    
//   }


//   sphereNodeHandler(midNodes) {
//     let 1;
//     let 2;
//     let 3;
//     let 4;
    
//     for(i = 0, i < midNode)
//   }
// }



