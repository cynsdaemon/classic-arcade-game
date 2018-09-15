/* App.js
 * Define class/object functions and methods as well as player
 * character controller inputs in this file.
 */

// Enemy class
const Enemy = function(x, y, speed) {
    // enemy position
    this.x = x;
    this.y = y;

    // enemy behavior
    this.speed = speed;

    // set enemy img
    this.sprite = 'images/enemy-bug.png';
};

// Enemy methods:
Enemy.prototype.update = function(dt) {
   /* Multiply enemy movement by the dt parameter
    * to ensure the game runs at the same speed for
    * all computers.
    */
    for(let enemy of allEnemies){
        if(this.x <= ctx.canvas.width && player.victory === false) {
            // move forward
            this.x += this.speed * dt;
        } else {
            // reset enemy
            this.resetEnemies();
        }
    }
};

Enemy.prototype.resetEnemies = function(){
    for(let enemy of allEnemies){
        this.x = 0;
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
const Player = function() {
    // player start position
    this.x = 0;
    this.y = 435;

    this.startX = this.x;
    this.startY = this.y;

    // player behavior
    this.upBoundaryY = -14;
    this.rightBoundaryX = 399;
    this.downBoundaryY = 434;
    this.leftBoundaryX = 1;

    // set player img
    this.sprite = 'images/char-cat-girl.png';

    // set player victory variable
    this.victory = false;

};

// Player methods:
Player.prototype.update = function() {
    /* 2D Collision Detection via MDN https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
     * Check for player collison - compares the x,y coords + width/height of objects
     */
    for(let enemy of allEnemies){
        if(this.x < enemy.x + 50 && this.x + 50 > enemy.x && this.y < enemy.y + 40 && this.y + 40 > enemy.y) {

            // where's the collision?
            console.log(`Player: x: ${player.x}, y: ${player.y}`);
            console.log(`Enemy: x: ${enemy.x}, y: ${enemy.y}`);

            // collision detected!
            console.log("Collision detected!");

            // reset player position
            player.resetHero();
        }
    }

    // check for win
    if(player.y === -15) {
        player.resetHero();
        player.victory = true;
    }

};

Player.prototype.resetHero = function(){
    this.x = this.startX;
    this.y = this.startY;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// player keyboard input
Player.prototype.handleInput = function(key) {
    if(key === 'up' && this.y >= this.upBoundaryY) {
        this.y -= 50;
    } else if(key === 'right' && this.x <= this.rightBoundaryX) {
        this.x += 50;

    } else if(key === 'down' && this.y <=  this.downBoundaryY) {
        this.y += 50;

    } else if(key === 'left' && this.x >= this.leftBoundaryX){
        this.x -= 50;
    }
};

/*** init Player/Enemy objects ***/
const player = new Player();
const allEnemies = [];

let slowBug = new Enemy(-10, 55, 25);
let fastBug = new Enemy(-10, 150, 50);
let randomBug = new Enemy(-10, 230, 15);
allEnemies.push(slowBug, fastBug, randomBug);

// This listens for user keyboard presses for player character
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




