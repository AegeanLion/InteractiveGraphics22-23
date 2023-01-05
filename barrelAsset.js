//All pieces of barrel

//the actual body of the barrel
class barrelBase {
	constructor(x, y, z, w, h, d) {
		this.x = x;
    	this.y = y;
    	//this number below allows rotation around one point
    	let num = 1 + sqrt(2);
    	w = w/2;
    	h = h/2;
    	d = d/2;
		this.nodes = [[x + w, y, z + d*num], [x - w, y, z + d*num], [x - w, y, z - d*num], [x + w, y, z - d*num], [x + w*num, y, z + d], [x - w*num, y, z + d], [x + w*num, y, z - d], [x - w*num, y, z - d],
						[x + w/1.1, y-h*2, z + d/1.1*num], [x - w/1.1, y-h*2, z + d/1.1*num], [x - w/1.1, y-h*2, z - d/1.1*num], [x + w/1.1, y-h*2, z - d/1.1*num], [x + w/1.1*num, y-h*2, z + d/1.1], [x - w/1.1*num, y-h*2, z + d/1.1], [x + w/1.1*num, y-h*2, z - d/1.1], [x - w/1.1*num, y-h*2, z - d/1.1],
						[x + w/1.1, y+h*2, z + d/1.1*num], [x - w/1.1, y+h*2, z + d/1.1*num], [x - w/1.1, y+h*2, z - d/1.1*num], [x + w/1.1, y+h*2, z - d/1.1*num], [x + w/1.1*num, y+h*2, z + d/1.1], [x - w/1.1*num, y+h*2, z + d/1.1], [x + w/1.1*num, y+h*2, z - d/1.1], [x - w/1.1*num, y+h*2, z - d/1.1],
						[x + w/1.35, y-h*3.5, z + d/1.35*num], [x - w/1.35, y-h*3.5, z + d/1.35*num], [x - w/1.35, y-h*3.5, z - d/1.35*num], [x + w/1.35, y-h*3.5, z - d/1.35*num], [x + w/1.35*num, y-h*3.5, z + d/1.35], [x - w/1.35*num, y-h*3.5, z + d/1.35], [x + w/1.35*num, y-h*3.5, z - d/1.35], [x - w/1.35*num, y-h*3.5, z - d/1.35],
						[x + w/1.35, y+h*3.5, z + d/1.35*num], [x - w/1.35, y+h*3.5, z + d/1.35*num], [x - w/1.35, y+h*3.5, z - d/1.35*num], [x + w/1.35, y+h*3.5, z - d/1.35*num], [x + w/1.35*num, y+h*3.5, z + d/1.35], [x - w/1.35*num, y+h*3.5, z + d/1.35], [x + w/1.35*num, y+h*3.5, z - d/1.35], [x - w/1.35*num, y+h*3.5, z - d/1.35]];
    	this.edges = [[7, 15], [6, 14], [5, 13], [4, 12], [3, 11], [2, 10], [1, 9], [0, 8],
    					[7, 23], [6, 22], [5, 21], [4, 20], [3, 19], [2, 18], [1, 17], [0, 16],
    					[39, 23], [38, 22], [37, 21], [36, 20], [35, 19], [34, 18], [33, 17], [32, 16],
    					[31, 15], [30, 14], [29, 13], [28, 12], [27, 11], [26, 10], [25, 9], [24, 8],
    					[31, 29], [31, 26], [26, 27], [27, 30], [30, 28], [28, 24], [24, 25], [25, 29],
    					[39, 37], [39, 34], [34, 35], [35, 38], [38, 36], [36, 32], [32, 33], [33, 37]];
    	this.shape = {'nodes': this.nodes, 'edges': this.edges};
    	this.nodeSize = 0;
    	this.nodeColor = color(40, 168, 107);
    	this.edgeColor = color(139,69,19);
    	this.fillColor = color(102, 51, 0);

    	objs.push(this);
	}
}


//the metal looking ridges around barrel
class barrelRidge {
	constructor(x, y, z, w, h, d) {
		this.x = x; 
		this.y = y;
		let num = 1 + sqrt(2);
		w = w/2;
		h = h/2;
		d = d/2;
		this.nodes = [[x + w, y+h, z + d*num], [x - w, y+h, z + d*num], [x - w, y+h, z - d*num], [x + w, y+h, z - d*num], [x + w*num, y+h, z + d], [x - w*num, y+h, z + d], [x + w*num, y+h, z - d], [x - w*num, y+h, z - d],
						[x + w, y-h, z + d*num], [x - w, y-h, z + d*num], [x - w, y-h, z - d*num], [x + w, y-h, z - d*num], [x + w*num, y-h, z + d], [x - w*num, y-h, z + d], [x + w*num, y-h, z - d], [x - w*num, y-h, z - d]];
		this.edges = [[0, 1], [0, 4], [1, 5], [4, 6], [5, 7], [7, 2], [2, 3], [3, 6],
						[8, 9], [8, 12], [9, 13], [12, 14], [13, 15], [15, 10], [10, 11], [11, 14],
						[0, 8], [1, 9], [2, 10], [3, 11], [4, 12], [5, 13], [6, 14], [7, 15]];
		this.shape = {'nodes': this.nodes, 'edges': this.edges};
		this.nodeSize = 0;
		this.nodeColor = color(40, 168, 107);
		this.edgeColor = color(125, 125, 125);
		this.fillColor = color(102, 51, 0);

		objs.push(this);
	}
}


// class fishBody {
// 	constructor(x, y, z, w, h, d) {
// 		this.x = x;
// 		this.y = y; 
// 		let num = 1 + sqrt(2);
// 		w = w/2;
// 		h= h/2;
// 		d = d/2;
// 		let h1 = h*0.75;
// 		let x1 = x*0.75;
// 		this.nodes = [[x1 + w, y+h1*num, z + d], [x1 - w, y+h1*num, z + d], [x1 - w, y+h1*num, z - d], [x1 + w, y+h1*num, z - d], [x1 + w*num, y+h1, z + d], [x1 - w*num, y+h1, z + d], [x1 + w*num, y+h1, z - d], [x1 - w*num, y+h1, z - d],
// 						[x1 + w, y-h1*num, z + d], [x1 - w, y-h1*num, z + d], [x1 - w, y-h1*num, z - d], [x1 + w, y-h1*num, z - d], [x1 + w*num, y-h1, z + d], [x1 - w*num, y-h1, z + d], [x1 + w*num, y-h1, z - d], [x1 - w*num, y-h1, z - d]];
// 		this.edges = [[0, 1], [0, 4], [1, 5], [4, 6], [5, 7], [7, 2], [2, 3], [3, 6],
// 						[8, 9], [8, 12], [9, 13], [12, 14], [13, 15], [15, 10], [10, 11], [11, 14],
// 						[1, 2], [0, 3], [10, 9], [8, 11], [4, 12], [13, 5], [6, 14], [15, 7]];
// 		this.shape = {'nodes': this.nodes, 'edges': this.edges};
// 		this.nodeSize = 0;
// 		this.nodeColor = color(48, 168, 107);
// 		this.edgeColor = color(150, 150, 150);
// 		this.fillColor;

// 		objs.push(this);
// 	}
// }

