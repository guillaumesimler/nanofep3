// Enemies our player must avoid
var Enemy = function(x, y, xSpeed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

        // Initialize the bug 
        // - End of the screen (reset) 
 
    if (this.x > 505)  {
        this.x = 0;
    }
    this.x = this.x + this.xSpeed * dt ;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Randomize Speed and position of the bugs

function randomSpeed() {
    var speed = Math.floor(Math.random()*16) * 12.5 + 150;

    return speed
}

function randomHeight() {
    var pos = Math.floor(Math.random()*3) * 80 + 60;

    return pos;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var player = function(x, y) {
    this.x = x,
    this.y = y,
    this.sprite = 'images/char-boy.png';
};


player.update = function(dt) {
    this.x = 505/2;
    this.y = 606/2;
};

player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

player.handleInput = function(_input) {
    if (_input === 'left') {
        this.x = Math.max(this.x - 101, 83/2 ); 
    }

    if (_input === 'right') {
        this.x = Math.min(this.x + 101, 606 - 83/2 ); 
    }

    if (_input === 'up') {
        this.x = Math.max(this.x - 83, 101/2 ); 
    }

    if (_input === 'down') {
        this.x = Math.min(this.x + 83, 505 - 101/2 ); 
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies= []

var Enemy1 = new Enemy(0, randomHeight(), randomSpeed());
var Enemy2 = new Enemy(0, randomHeight(), randomSpeed());
var Enemy3 = new Enemy(0, randomHeight(), randomSpeed());

allEnemies.push(Enemy1);
allEnemies.push(Enemy2);
allEnemies.push(Enemy3);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
