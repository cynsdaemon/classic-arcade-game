/*** Enemy Class ***/
const Enemy = function() {
    // Variables applied to each of our instances go here,
    this.x = 250
    this.y = 300
    this.sprite = 'images/enemy-bug.png';
};

// Enemy methods:
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
// TODO: update position:
    // if enemy is not passed boundary
        // move forward
        // increment x by speed * dt
    // else
        // reset pos to start
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*** Player Class ***/
const Player = function() {
    // properties
    this.x = 125;
    this.y = 425;
    this.sprite = 'images/char-cat-girl.png';
};

// Player methods:
Player.prototype.update = function(dt){
    // TODO: player method - update
    // check hero position
        // check collison here, checkCollisions();
        // did player x and y collide with enemy?
            // if true, reset player
            // else, continue
        // check game win, checkForVictory()
        // did player reach the water?
            // does player coords match final tile coords?
                // if true, call win game condition
                // else, continue game

};

// draw player character
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// handle user keyboard input
Player.prototype.handleInput = function(key) {
    if(key === 'up' && player.y >= -9) {
        this.y -= 5;

    } else if(key === 'right' && player.x <= 419) {
        this.x +=5;

    } else if(key === 'down' && player.y <= 444) {
        this.y += 5;

    } else if(key === 'left' && player.x >= -14){
        this.x -= 5;

    }
};

Player.prototype.resetHero = function(){
    // TODO: player method - reset hero
        // set x and y to starting tile's x and y
};

/*** INIT PLAYER/ENEMY OBJECTS***/
const player = new Player();
const allEnemies = [new Enemy()];
// TODO: for each enemy created, push new Enemy object into above array


// This listens for keyboard presses for player character
document.addEventListener('keydown', function(event) {
    let allowedKeys = {
        38: 'up',
        39: 'right',
        40: 'down',
        37: 'left'
    };

    let key = event.keyCode;
    player.handleInput(allowedKeys[key]);

});
