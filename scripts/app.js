/*** Enemy Class ***/
const Enemy = function() {
   // Enemy start position
    this.startX = 250;
    this.startY = 300;
    this.x = this.startX;
    this.y = this.startY;

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
    // Player start position
    this.startX = 100;
    this.startY = 435;

    this.x = this.startX;
    this.y = this.startY;

    this.sprite = 'images/char-cat-girl.png';
};

// Player methods:
Player.prototype.update = function(dt) {
    // check collison
    for(let enemy of allEnemies){
        if(this.x === enemy.x && this.y === enemy.y) {
            alert("Collision detected!");
            // reset player
            // player loses a life

        }
    }
    // check for goal
    if(player.y <= -9) {
        alert("You won!"); // use a modal
        this.x = 125; // call win game
        this.y = 425;
        } // else continue or call main/update function?
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
