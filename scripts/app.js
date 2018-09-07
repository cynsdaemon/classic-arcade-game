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
Player.prototype.update = function() {
    // check collison
    for(let enemy of allEnemies){
        if(this.x < enemy.x + 50 && this.x + 50 > enemy.x && this.y < enemy.y + 40 && this.y + 40 > enemy.y) {

            console.log(`Player: x: ${player.x}, y: ${player.y}`);

            console.log(`Enemy: x: ${enemy.x}, y: ${enemy.y}`);

            // collision detected!
            console.log("Collision detected!");

            // reset player
            this.startX;
            this.startY;

        }
    }

};

// TODO: player loses a life

Player.prototype.resetHero = function(){
    // check for goal
    if(player.y <= -9) {
        alert("You won!"); // use a modal
        this.startX; // call win game
        this.startY;
        } // TODO: else continue or call main/update function?
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
