//rotations across X axis
function rotateX3D(obj, theta) {
  let sinTheta = sin(theta);
  let cosTheta = cos(theta);
  
  for(let n = 0; n < obj.nodes.length; n++) {
    let node = obj.nodes[n];
    let y = node[1];
    let z = node[2];
    node[1] = y * cosTheta - z * sinTheta;
    node[2] = z * cosTheta + y * sinTheta;
  }
}

//rotations across Y axis
function rotateY3D(obj, theta) {
    let sinTheta = sin(theta);
    let cosTheta = cos(theta);
  
    for(let n = 0; n < obj.nodes.length; n++) {
          let node = obj.nodes[n];
          let x = node[0];
          let z = node[2];
          node[0] = x * cosTheta + z * sinTheta;
          node[2] = z * cosTheta - x * sinTheta;
    }
}

//rotations across Z xis
function rotateZ3D(obj, theta) {
    let sinTheta = sin(theta);
    let cosTheta = cos(theta);
  
    for(let n = 0; n < obj.nodes.length; n++) {
        let node = obj.nodes[n];
        let x = node[0];
        let y = node[1];
        node[0] = x * cosTheta - y * sinTheta;
        node[1] = y * cosTheta + x * sinTheta;
    }
}

//drawing the objects
function drawObj(obj) {
    stroke(obj.edgeColor);
    for(let e = 0; e < obj.edges.length; e++){
      let n0 = obj.edges[e][0];
      let n1 = obj.edges[e][1];
      let node0 = obj.nodes[n0];
      let node1 = obj.nodes[n1];
      line(node0[0], node0[1], node1[0], node1[1]);
    }

    fill(obj.nodeColor);
    noStroke();
    for(let n = 0; n < obj.nodes.length ; n++){
      let node = obj.nodes[n];
      ellipse(node[0], node[1], obj.nodeSize, obj.nodeSize);
    }
  }

