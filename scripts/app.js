/* App.js
 * Define class/object functions and methods as well as player
 * character controller inputs in this file.
*/

// Enemy class
const Enemy = function() {
    // enemy start position
    this.x = 250;
    this.y = 300;

    this.startX = this.x;
    this.startY = this.y;

    // set enemy img
    this.sprite = 'images/enemy-bug.png';
};

// Enemy methods:
Enemy.prototype.update = function() {
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

    // set player img
    this.sprite = 'images/char-cat-girl.png';

    // set game victory variable
    this.victory = false;

};

// Player methods:
Player.prototype.update = function() {
    // Check for player collison
    for(let enemy of allEnemies){
        if(this.x < enemy.x + 50 && this.x + 50 > enemy.x && this.y < enemy.y + 40 && this.y + 40 > enemy.y) {

            // where's the collision location
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

// handle user keyboard input
Player.prototype.handleInput = function(key) {
    if(key === 'up' && player.y >= -14) {
        this.y -= 50;
    } else if(key === 'right' && player.x <= 399) {
        this.x +=50;

    } else if(key === 'down' && player.y <= 434) {
        this.y += 50;

    } else if(key === 'left' && player.x >= 1){
        this.x -= 50;
    }
};

/*** init Player/Enemy objects ***/
const player = new Player();
const allEnemies = [new Enemy()];
// TODO: for each enemy created, push new Enemy object into above array

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




