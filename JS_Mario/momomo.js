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
    };
    this.update();
};

var Mario = function (y, x, image) {
    var mario = this;
    Cell.call(this, y, x, image);
    this.falling = false;
    this.input = new Input(['ArrowLeft', 'ArrowRight', 'Space']);
    this.jump = {
        power: 0,
        interval: null
    };
    this.makeJump = function () {
        var hold_y = mario.y;
        mario.y--;
        mario.jump.power--;
        if(map.checkCollision(mario) 
            && map.checkCollision(mario).image != "invisible1.png" 
            && map.checkCollision(mario).image != "invisible2.png") {
            bump.play();
        if(map.checkCollision(mario).image == "invisible.png") {
            var change = map.checkCollision(mario)
            map.checkCollision(mario).html.src = "blocke.png";
            map.checkCollision(mario).image = "blocke.png";
            map.map.splice(map.map.indexOf(change), map.checkCollision(mario));
        }
        mario.y = hold_y;
        clearInterval(this.jump.interval);
        this.jump.interval = null;
        mario.jump.power = 0;
        mario.falling = true;
    }
    if(this.jump.power === 0){
        clearInterval(this.jump.interval);
        this.jump.interval = null;
        mario.falling = true;
    }
};
this.fall = function () {
    var hold_x = mario.x;
    var hold_y = mario.y;
    if(mario.jump.power === 0) {
        mario.y++;
        mario.falling = true;
    }
    if(typeof map.checkCollision(mario) !== "undefined") { 
        if(map.checkCollision(mario).image == "lave.png") {
            mario.die();
            return;
        }
        if(map.checkCollision(mario).image == "koopa.png" || map.checkCollision(mario).image == "bowser.png") {
            map.checkCollision(mario).die();
            kick.currentTime = 0;
            kick.play();
            if(map.checkKoopa() == 0) {
                map.boss(mario);
            }
        }
    }
    if(map.checkCollision(mario) 
        && map.checkCollision(mario).image !== "invisible.png" 
        && map.checkCollision(mario).image != "peach.png" 
        && map.checkCollision(mario).image != "invisible1.png" 
        && map.checkCollision(mario).image != "invisible2.png") {
        if(map.checkCollision(mario).image != "koopa.png") {
            if(map.checkCollision(mario).image == "vert1.jpg") {
                bossuh.currentTime = 0;
                pipe.play();
                zik = 1;
                clearInterval(this.interval);
                for(var i = 0; i < map.map.length; i++) {
                    clearInterval(map.map[i].interval);
                    document.body.removeChild(map.map[i].html);
                    delete map.map[i];
                }
                map = [];
                delete map;
                map = new Map(schema1);
                map.generateMap();
                audio.pause();
                bossuh.play();
            }
            if(map.checkCollision(mario).image == "levier.png" && typeof map.checkCollision(mario) != "undefined") {
                for (var i = 0; i < map.map.length; i++) {
                    if(map.map[i].image == "grille.png") {
                        map.delete(map.map[i]);
                    }
                }
            }
            mario.falling = false;
        }
        mario.y = hold_y;
        return false;
    }
};
this.die = function () {
    die.currentTime = 0;
    audio.pause();
    bossuh.pause();
    die.play();
    clearInterval(this.interval);
    map.delete(this);
    var replay = confirm("Vous êtes mort. Replay ?");
    if(replay == true) {
        audio.currentTime = 0;
        die.pause();
        audio.play();
        clearInterval(this.interval);
        for(var i = 0; i < map.map.length; i++) {
            clearInterval(map.map[i].interval);
            document.body.removeChild(map.map[i].html);
            delete map.map[i];
        }
        map = [];
        delete map;
        map = new Map(schema);
        map.generateMap();
    }
    else {
        return false;
    }
};
this.move = function () {
    var hold_x = mario.x;
    var hold_y = mario.y;
    if(mario.input.keys.ArrowLeft.isPressed || mario.input.keys.ArrowLeft.pressed) {
        mario.x--;
        mario.input.keys.ArrowLeft.pressed = false;
    }
    if(mario.input.keys.ArrowRight.isPressed || mario.input.keys.ArrowRight.pressed) {
        mario.x++;
        mario.input.keys.ArrowRight.pressed = false;
    }
    if(mario.input.keys.Space.isPressed || mario.input.keys.Space.pressed) {
        if(mario.falling == false && mario.jump.interval == null){
            jumpAudio.currentTime = 0.20;
            jumpAudio.play();
            this.jump.power = 4;
            this.jump.interval = setInterval(function() {
                mario.makeJump()
            }, 100);
        }
        mario.input.keys.Space.pressed = false;
    }
    check = map.checkCollision(mario);
    if(check && check.image != "invisible.png" 
        && check.image != "invisible1.png" 
        && check.image != "invisible2.png"
        && check.image != "invisible3.png") {
        if(check.image == "koopa.png" || check.image == "bowser.png") {
            mario.die();
        }
        if(check.image == "levier.png") {
            for (var i = 0; i < map.map.length; i++) {
                if(map.map[i].image == "grille.png") {
                    map.delete(map.map[i]);
                }
            }
        }
        if(check.image == "peach.png") {
            clear.currentTime = 0;
            clear.play();
            audio.pause();
            var replay = confirm("La princesse est sauvée !! Replay ?");
            if(replay == true) {
                clearInterval(mario.interval);
                map.delete(mario);
                audio.currentTime = 0;
                clear.pause();
                audio.play();
                for(var i = 0; i < map.map.length; i++) {
                    if(map.map[i].image == "koopa.png") {
                        map.map[i].die();
                    }
                    if(map.map[i].image == "blocke.png" 
                        || map.map[i].image == "vert.jpg" 
                        || map.map[i].image == "vert1.jpg") {
                        map.delete(map.map[i]);
                }
            }
            map.generateMap();
        }
        else {
            return false;
        }
    }
    bump.play();
    mario.x = hold_x;
    mario.y = hold_y;
}
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
            if(typeof map.checkCollision(koopa) !== "undefined" 
                && map.checkCollision(koopa).image != "invisible.png"
                && map.checkCollision(koopa).image != "invisible1.png") {
                if(map.checkCollision(koopa).image == "mario.png") {
                    map.checkCollision(koopa).die();
                    return;
                }
                koopa.x++;
                this.direction = 'right';
                return false;
            }
        }
        else {
            koopa.x++
            if(typeof map.checkCollision(koopa) !== "undefined" 
                && map.checkCollision(koopa).image != "invisible.png" 
                && map.checkCollision(koopa).image != "invisible1.png") {
                if(map.checkCollision(koopa).image == "mario.png") {
                    map.checkCollision(koopa).die();
                    return;
                }
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

var Bowser = function (y, x, image) {
    Cell.call(this, y, x, image);
    var hold_y = this.y;
    var hold_x = this.x;
    var bowser = this;
    this.life = 3;
    this.direction = 'left';
    this.die = function() {
        this.life--;
        if(map.checkCollision(this).image == "lave.png") {
            this.life = 0;
        }
        if(this.life == 0) {
            clearInterval(this.interval);
            bossuh.pause();
            battu.play();
            fini.play();
            map.delete(this);
            var replay = confirm("Vous avez battu Bowser !! Replay ?");
            if(replay == true) {
                fini.pause();
                fini.currentTime = 0;
                audio.currentTime = 0;
                die.pause();
                audio.play();
                clearInterval(this.interval);
                for(var i = 0; i < map.map.length; i++) {
                    clearInterval(map.map[i].interval);
                    document.body.removeChild(map.map[i].html);
                    delete map.map[i];
                }
                map = [];
                delete map;
                map = new Map(schema);
                map.generateMap();
            }
        }
        else {
            bowser.y = hold_y;
            bowser.x = hold_x;
        }
    };
    this.move = function () {

        for(var i = 0; i < map.map.length; i++) {
            if(map.map[i].image == "mario.png") {
                pos_x = map.map[i].x;
                pos_y = map.map[i].y;
            }
        }
        if(pos_x < this.x) {
            this.direction = 'left';
        }
        if(pos_x > this.x) {
            this.direction = 'right';
        }
        if(pos_x >= 7 && pos_y >= 7) {
            for (var i = 0; i < map.map.length; i++) {
                if(map.map[i].image == "invisible3.png") {
                    var change = map.map[i];
                    map.map[i].html.src = "blocke.png";
                    map.map[i].image = "blocke.png";
                    map.map.splice(map.map.indexOf(change), map.map[i]);
                }
            }
            if(this.direction == 'left') {
                bowser.x--;
                if(typeof map.checkCollision(bowser) !== "undefined" 
                    && map.checkCollision(bowser).image != "invisible.png"
                    && map.checkCollision(bowser).image != "invisible1.png") {
                    if(map.checkCollision(bowser).image == "mario.png") {
                        map.checkCollision(bowser).die();
                        return;
                    }
                    bowser.x++;
                    this.direction = 'right';
                    return false;
                }
            }
            else {
                bowser.x++
                if(typeof map.checkCollision(bowser) !== "undefined" 
                    && map.checkCollision(bowser).image != "invisible.png" 
                    && map.checkCollision(bowser).image != "invisible1.png") {
                    if(map.checkCollision(bowser).image == "mario.png") {
                        map.checkCollision(bowser).die();
                        return;
                    }
                    bowser.x--;
                    this.direction = 'left';
                    return false;
                }
            }
        }
    };
    this.fall = function () {
        var od_y = bowser.y;
        bowser.y++;
        if(map.checkCollision(bowser)) {
            if(map.checkCollision(this).image == "lave.png") {
                this.die();
                return;
            }
            bowser.y = od_y;
            return false;
        }
    };
    var bowser = this;
    this.interval = setInterval(function () {
        bowser.fall();
        bowser.move();
        bowser.update();
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
                }
                else if(letter === "k") {
                    var koopa = new Koopa(y, x, "koopa.png");
                    this.map.push(koopa);   
                }
                else if(letter === "m") {
                    var mario = new Mario(y, x, "mario.png");
                    this.map.push(mario);
                }
                else if(letter === "o") {
                    this.map.push(new Cell(y, x, "invisible.png"));
                }
                else if(letter === "t") {
                    this.map.push(new Cell(y, x, "invisible1.png"));
                }
                else if(letter === "c") {
                    this.map.push(new Cell(y, x, "invisible2.png"));
                }
                else if(letter === "y") {
                    this.map.push(new Cell(y, x, "invisible3.png"));
                }
                else if(letter === "p") {
                    this.map.push(new Cell(y, x, "peach.png"));
                }
                else if(letter === "b") {
                    this.map.push(new Bowser(y, x, "bowser.png"));
                }
                else if(letter === "d") {
                    this.map.push(new Cell(y, x, "lave.png"));
                }
                else if(letter === "g") {
                    this.map.push(new Cell(y, x, "grille.png"));
                }
                else if(letter === "l") {
                    this.map.push(new Cell(y, x, "levier.png"));
                }
            }
        }
    };
    this.checkCollision = function (cell) {
        for(var i = 0; i < this.map.length; i++) {
            if(cell.checkCollision(this.map[i])){
                return this.map[i];
            }
        }
    };
    this.song = function() {
        if(audio.currentTime > 100) {
            audio.currentTime = 0;
        }
    };
    this.checkKoopa = function() {
        var check = 0;
        for(var i = 0; i < this.map.length; i++) {
            if(this.map[i].image == "koopa.png") {
                check++;
            }
        }
        if(check == 0) {
            return check;
        }
    };
    this.boss = function(cell) {
        for(var i = 0; i < this.map.length; i++) {
            if(this.map[i].image == "invisible1.png") {
                var change = this.map[i];
                this.map[i].html.src = "vert.jpg";
                this.map[i].image = "vert.jpg";
                map.map.splice(map.map.indexOf(change), this.map[i]);
            }
            if(this.map[i].image == "invisible2.png") {
                var change = this.map[i];
                this.map[i].html.src = "vert1.jpg";
                this.map[i].image = "vert1.jpg";
                map.map.splice(map.map.indexOf(change), this.map[i]);
            }
        }
        if(model == schema) {
            appear.play();
        }
    };
    this.delete = function (cell) {
        this.map.splice(this.map.indexOf(cell), 1);
        document.body.removeChild(cell.html);
        delete cell;
    };
    this.interval = setInterval(function() {
        map.song();
    }, 100);    
};


var schema = [
'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
'w                                      w',
'w  p w                            k    w',
'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww    w',
'w                                      w',
'w                                     ow',
'w                                      w',
'w                                      w',
'w                                 o    w',
'w          k    w                     ow',
'wwwwwwwwwwwwwwwww                      w',
'w                   w           k      w',
'w            wwwww  wwwwwwwwwwwwwwwwwwww',
'w            w                         w',
'w           ww   o                     w',
'w          www                         w',
'w         wwww                     tcctw',
'wm       wwwww k     w      k       tt w',
'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
];

var schema1 = [
'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
'w                                      w',
'w                                      w',
'w     wwwwww   wwwww   wwwww   www     w',
'w     wddddddddddddddddddddddddddw     w',
'w     wddddddddddddddddddddddddddwk   lw',
'wo    wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
'w     w                                w',
'w    ow                                w',
'wo    w                                w',
'w     w                                w',
'w    ow                                w',
'wo    w                                w',
'w     w                                w',
'wm    y                             b  w',
'wwwwwwwwwwwwgggggggggggggggggggggggggggw',
'wddddddddddddddddddddddddddddddddddddddw',
'wddddddddddddddddddddddddddddddddddddddw',
'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
];

var scale = 40;
var map = new Map(schema);
map.generateMap();
var audio = new Audio("song.ogg");
var jumpAudio = new Audio("jump.ogg");
var kick = new Audio("kick.ogg");
var bump = new Audio("bump.ogg");
var die = new Audio("die.ogg");
var clear = new Audio("clear.ogg");
var appear = new Audio("tube.ogg");
var pipe = new Audio("pipe.ogg");
var bossuh = new Audio("bowser.ogg");
var battu = new Audio("battu.ogg");
var fini = new Audio("fini.ogg");
var zik = 0;
audio.play();