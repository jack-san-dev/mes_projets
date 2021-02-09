var Cell = function(y, x, image, line) {
	this.x = x;
	this.y = y;
	this.image = image;
	var block = document.createElement("IMG");
	block.setAttribute("src", image);
	block.setAttribute("class", "cell");
	line.appendChild(block);
	this.update = function () {
        // met Ã  jour la position de la cellule dans le DOM
    };
    this.checkCollision = function (cell) {
        // retourne true si la cellule est aux mÃªme coordonnÃ©es que cell
    };
    this.die = function () {
        // dÃ©truit l'objet et le remove de la map
    };
};

var Mario = function(y, x, image, line) {
	var mario = this;
	Cell.call(this, y, x, image, line);
	this.falling = false;
	this.input = new Input(['ArrowLeft', 'ArrowRight', 'Space']);
	this.jump = {
        power: 0, // hauteur du saut en nombre de cellules
        interval: null // identifiant de l'intervalle de temps entre chaque animations du saut
    };
    this.makeJump = function () {
        // mario monte d'une case s'il le peut et s'il lui reste du power
        // s'il ne le peut pas, il met fin Ã  l'intervalle de temps entre chaque animation du saut
        // mario met Ã  jour le dom Ã  chaque animation de saut
        // si mario saute dans un koopa, mario meurt
    };
    this.fall = function () {
        // mario se dÃ©place d'une cellule vers le bas s'il le peut et met falling Ã  true
        // si mario tombe sur un koopa, le koopa meurt
    };
    this.die = function () {
        // mario met fin Ã  son intervalle d'animations
        // mario est retirÃ© de la map
    };
    this.move = function () {
    	var hold_x = mario.x;
    	if(mario.input.keys.ArrowLeft.isPressed || mario.input.keys.ArrowLeft.pressed) {
    		mario.x--;
    		mario.input.keys.ArrowLeft.pressed = false;
    	}
    	if(mario.input.keys.ArrowRight.isPressed || mario.input.keys.ArrowRight.pressed) {
    		mario.x++;
    		mario.input.keys.ArrowRight.pressed = false;
    	}

    };
    var mario = this;
    this.interval = setInterval(function () {
    	mario.fall();
    	mario.move();
    	mario.update();
    }, 100);
};

var Koopa = function(y, x, image, line) {
	Cell.call(this, y, x, image, line);
}

var Input = function (keys) {
	this.keys = {};
	for(i = 0; i < keys.length; i++) {
		this.keys[keys[i]] = {};
		this.keys[keys[i]].isPressed = false;
		this.keys[keys[i]].pressed = false;
	}
	var input = this;
	window.addEventListener("keydown" ,function(e) {
		e = e || window.event;
		if(typeof input.keys[e.code] !== "undefined") {
			this.keys[e.code].isPressed = true;
			this.keys[e.code].pressed = true;
		}
	});
	window.addEventListener("keyup" ,function(e) {
		e = e || window.event;
		if(typeof input.keys[e.code] !== "undefined") {
			this.keys[e.code].isPressed = false;
		}
	});
}

var Map = function (model) {
	this.map = [];
	this.generateMap = function () {
		console.log(model[0].length);
		for(var x = 0; x < model.length; x++) {
			var line = document.createElement("div");
			line.setAttribute("class", "line");
			document.body.appendChild(line);
			for(var y = 0; y < model[x].length; y++) {
				if(model[x][y] == "w") {
					var blo = new Cell(y, x, "block.png", line);
				}
				else if(model[x][y] == "k") {
					var koopa = new Koopa(y, x, "koopa.png", line);
				}
				else if(model[x][y] == " ") {
					var blanc = document.createElement("IMG");
					blanc.setAttribute("src", "blanc.png");
					blanc.setAttribute("class", "blanc");
					line.appendChild(blanc);
				}
				else if(model[x][y] == "m") {
					var mario = new Mario(y, x, "mario.png", line);
				}
			}
		}  	
	};
	this.checkCollision = function (cell) {
        // parcourt la map et renvoie la cellule aux mÃªmes coordonnÃ©es que cell
    };
    this.delete = function (cell) {
        // retire la cell de map
        // retire la cell du dom
        // delete la cell
    };
};

var schema = [
'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
'w                                      w',
'w                                 k    w',
'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww    w',
'w                                      w',
'w                                      w',
'w                                      w',
'w                                      w',
'w                                      w',
'w          k    w                      w',
'wwwwwwwwwwwwwwwww                      w',
'w                   w           k      w',
'w            wwwww  wwwwwwwwwwwwwwwwwwww',
'w            w                         w',
'w           ww                         w',
'w          www                         w',
'w         wwww                         w',
'wm       wwwww k     w      k          w',
'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
];
var map = new Map(schema);
map.generateMap();