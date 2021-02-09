// https://developer.mozilla.org/fr/docs/Web/JavaScript/Introduction_%C3%A0_JavaScript_orient%C3%A9_objet
// a chaque bloc de commentaires, vous devez ajouter du code :p
var Cell = function (y, x, image) {
    this.x = x;
    this.y =  y;
    this.image = image;
    this.html = document.createElement('img');
    this.html.src = this.image;
    this.html.style.position = 'absolute';
    this.html.style.width = scale + 'px';
    document.body.appendChild(this.html);
    this.update = function () {
        this.html.style.left = this.x * scale + 'px';
        this.html.style.top = this.y * scale + 'px';
    };
    this.checkCollision = function (cell) {
        if(!cell){
            return false;    
        }
        if(this.x === cell.x && this.y === cell.y && this != cell) {
            return true;
        }
        return false;
    };
    this.die = function () {
        // dÃ©truit l'objet et le remove de la map
    };
    this.update();
};

var Mario = function (y, x, image) {
    // Mario hÃ©rite de Cell
    var mario = this;
    Cell.call(this, y, x, image);
    this.falling = false;
    this.input = new Input(['ArrowLeft', 'ArrowRight', 'Space']);
    this.jump = {
        power: 0, // hauteur du saut en nombre de cellules
        interval: null // identifiant de l'intervalle de temps entre chaque animations du saut
    };
    this.makeJump = function () {
        this.jump.interval = 1;
        this.jump.power = 3;
        while(this.jump.power >= 1) {
            if(typeof map.checkCollision(mario) == "undefined") {
                mario.y--;
                this.jump.power--;
            }
            else {
                mario.y++;
                this.jump.power = 0;
                return false;
            }
            console.log(this.jump);
        }
        // mario monte d'une case s'il le peut et s'il lui reste du power
        // s'il ne le peut pas, il met fin Ã  l'intervalle de temps entre chaque animation du saut
        // mario met Ã  jour le dom Ã  chaque animation de saut
        // si mario saute dans un koopa, mario meurt
    };
    this.fall = function () {
        mario.y++;
        if(typeof map.checkCollision(mario) !== "undefined" && map.checkCollision(mario).image == "koopa.png") {
            map.checkCollision(mario).die();
        }
        if(typeof map.checkCollision(mario) !== "undefined") {
            mario.y--;
            this.jump.interval = null;
            return false;
        }
    };
    this.die = function () {
        // mario met fin Ã  son intervalle d'animations
        // mario est retirÃ© de la map
    };
    this.move = function () {
        // console.log(map.checkCollision(mario));
        // if(typeof map.checkCollision(mario) !== "undefined") {
        //     // mario.x--;
        //     return false;
        // }
        var hold_x = mario.x;
        if(mario.input.keys.ArrowLeft.isPressed || mario.input.keys.ArrowLeft.pressed) {
            mario.x--;
            mario.input.keys.ArrowLeft.pressed = false;
            if(typeof map.checkCollision(mario) !== "undefined") {
                mario.x++;
                return false;
            }   
        }
        if(mario.input.keys.ArrowRight.isPressed || mario.input.keys.ArrowRight.pressed) {
            mario.x++;
            mario.input.keys.ArrowRight.pressed = false;
            if(typeof map.checkCollision(mario) !== "undefined") {
                mario.x--;
                return false;
            }   
        }
        if(mario.input.keys.Space.isPressed || mario.input.keys.Space.pressed) {
            if(this.jump.power == 0 && this.jump.interval == null) {
                mario.makeJump();
                mario.input.keys.Space.pressed = false;
            }
        }
        // if(map.checkCollision(mario))
    };
    this.interval = setInterval(function () {
        mario.fall();
        mario.move();
        mario.update();
    }, 100);
};

var Koopa = function (y, x, image) {
    Cell.call(this, y, x, image);
    var koopa = this;
    this.direction = 'left';
    this.die = function() {
        clearInterval(this.interval);
        map.delete(this);
    };
    this.move = function () {
        if(this.direction == 'left') {
            koopa.x--;
            if(typeof map.checkCollision(koopa) !== "undefined") {
                koopa.x++;
                this.direction = 'right';
                return false;
            }
        }
        else {
            koopa.x++
            if(typeof map.checkCollision(koopa) !== "undefined") {
                koopa.x--;
                this.direction = 'left';
                return false;
            }
        }
    };
    this.fall = function () {
        koopa.y++;
        if(typeof map.checkCollision(koopa) !== "undefined") {
            koopa.y--;
            return false;
        }
    };
    var koopa = this;
    this.interval = setInterval(function () {
        koopa.fall();
        koopa.move();
        koopa.update();
    }, 200);
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
            input.keys[e.code].isPressed = true;
            input.keys[e.code].pressed = true;
        }
    });
    window.addEventListener("keyup" ,function(e) {
        e = e || window.event;
        if(typeof input.keys[e.code] !== "undefined") {
            input.keys[e.code].isPressed = false;
        }
    });
}

var Map = function (model) {
    this.map = [];
    this.generateMap = function () {
        for(var y = 0; y < model.length; y++) {
            for(var x= 0; x < model[y].length; x++) {
                var letter = model[y][x];
                if(letter === "w") {
                    this.map.push(new Cell(y, x, "block.png"));
                    // console.log(this.checkCollision(letter));
                }
                else if(letter === "k") {
                    var koopa = new Koopa(y, x, "koopa.png");
                    this.map.push(koopa);
                    
                }
                else if(letter === "m") {
                    var mario = new Mario(y, x, "mario.png");
                    this.map.push(mario);
                }
            }
        }
    };
    this.checkCollision = function (cell) {
        // console.log(cell);
        for(var i = 0; i < this.map.length; i++) {
            // console.log(this.map[i].image);
            if(cell.checkCollision(this.map[i])){
                return this.map[i];
            }
        }
    };
    this.delete = function (cell) {
        console.log('coucou');
   
        this.map.splice(this.map.indexOf(cell), 1);
        document.body.removeChild(cell.html);
        delete cell;
        // retire la cell du dom
        // delete la cell
    };
    // console.table(this.map);
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
var scale = 30;
var map = new Map(schema);
map.generateMap();