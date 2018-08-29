/*** ENEMY CLASS ***/
const Enemy = function() {
    // Variables applied to each of our instances go here,
    this.x = 250 //
    this.y = 300 //
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

/*** PLAYER CLASS ***/
const Player = function() {
    this.x = 125;
    this.y = 150;
    this.sprite = 'images/char-cat-girl.png';
};

// Player methods:
Player.prototype.update = function(dt){
    // TODO: update position, update()
    // check collison here
        // did player x and y collide with enemy?
        // did player reach the water?
            // check for victory function

};

Player.prototype.render = function() {
    // TODO: rendering the player image
    // TODO: draw sprite on current x and y coord position
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function() {
    // Event Handlers:
    // handleInput()
        // event listener for keyboard updates player position
};

/*** INIT PLAYER/ENEMY OBJECTS***/
const player = new Player();
const allEnemies = [new Enemy()];

// TODO:
    // for each enemy created, push new Enemy object into above array
// TODO: Reset game
    // if game is won/lost
    // display modal

/*** YOU DON'T NEED TO MODIFY THIS ***/
// This listens for keyboard presses for player character
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
