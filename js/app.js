/*app.js - the file managing the game 3 objects (Enemy, Player, Gem)

The current version is programmed and adapted by Guillaume Simler
(https://github.com/guillaumesimler).
The original version is part from the Udacity Front End Dev. Nanodegree.
It was forked from https://github.com/udacity/frontend-nanodegree-arcade-game
*/


// Describes the object Enemy, our player will have to  avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0;
    this.y = randomHeight();
    this.xSpeed = randomSpeed();

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    // Initializes the bug  & resets it at the end of the screen (505px)  
    if (this.x > 505) {
        this.x = 0;
        this.xSpeed = randomSpeed();
        this.y = randomHeight();
    }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.xSpeed * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Randomize Speed and position of the bugs to make it more surprising

function randomSpeed() {
    var speed = Math.floor(Math.random() * 16) * 12.5 + 150;

    return speed
}

function randomHeight() {
    var pos = Math.floor(Math.random() * 3) * 80 + 60;

    return pos;
}

// Player class

// This class contains an update(), render() and
// a handleInput() method.

var Player = function() {
    this.x = 200;
    this.y = 405;
    this.score = 0;

    // Use the available colors on a random principle 
    var hero = ['images/char-boy.png', 'images/char-cat-girl.png', 'images/char-horn-girl.png', 'images/char-pink-girl.png', 'images/char-princess-girl.png'];
    this.sprite = hero[Math.floor(Math.random() * 5)];
};


Player.prototype.update = function() {
    this.handleInput();


};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    this.score = this.increaseScore();

};

Player.prototype.handleInput = function(_input) {
    // The max and the min are there to secure the limits of the canvas

    if (_input === 'left') {
        this.x = Math.max(this.x - 100, 0);
    }

    if (_input === 'right') {
        this.x = Math.min(this.x + 100, 400);
    }

    if (_input === 'up') {
        this.y = Math.max(this.y - 85, 0);
    }

    if (_input === 'down') {
        this.y = Math.min(this.y + 85, 405);
    }
};


// Add a score

Player.prototype.increaseScore = function() {
    // no points if player on the grass (y >= 300)
    if (this.y < 300) {
       this.score = this.score + 1 / 100;
    }



    // Change style color for negative scores

    if (this.score >= 0) {
        ctx.fillStyle = "green";
    } else {
        ctx.fillStyle = "red";
    }

    ctx.font = "18pt Impact";

    ctx.fillText('Score: ' + Math.floor(this.score), 10, 90);
    ctx.lineWidth = 2;
    ctx.strokeText('Score: ' + Math.floor(this.score), 10, 90);

    return this.score;
};

//Gem class
// This class contains a render() and update() function function 

var Gem = function() {
    //this variable aims to limit the number of gems 
    this.init = false;
    this.Update = true;
}

Gem.prototype.update = function() {
    if ((this.Update) & (Math.floor(Math.random() * 150) === 0)) {
        this.init = true;
        // Calculate a ramdom X position (every 100th x pixels)
        this.x = Math.floor(Math.random() * 5) * 100;

        // Calculate a random y position (65, 150, 235)
        // Check analogy with Player.prototype.handleInput
        this.y = 235 - Math.floor(Math.random() * 3) * 85;

        // Use the available colors on a random principle
        var colorSelector = ['images/Gem-Green.png', 'images/Gem-Orange.png', 'images/Gem-Blue.png']
        this.sprite = colorSelector[Math.floor(Math.random() * 3)];
    }
}



Gem.prototype.render = function() {

    if (this.init) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        this.Update = false;
    };
};




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = []

var Enemy1 = new Enemy();
var Enemy2 = new Enemy();
var Enemy3 = new Enemy();

allEnemies.push(Enemy1);
allEnemies.push(Enemy2);
allEnemies.push(Enemy3);

var player = new Player();

var gem = new Gem(0, 0);

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




// Add the checkCollisions function
// Current status is simple restart the player position

function checkCollisions() {

    // collision with enemy 

    allEnemies.forEach(function(enemy) {
        if ((Math.abs(player.x - enemy.x) < 60) && (Math.abs(player.y - enemy.y) < 40)) {
            player.x = 200;
            player.y = 405;
            player.score = player.score - 15;

            // Check the amount of lives (to implement later)
        };
    });


    // reaching the water
    if (player.y <= 60) {
        player.x = 200;
        player.y = 405;
        player.score = player.score + 10;

    }

    // reaching a gem

    if ((player.x === gem.x) && (player.y === gem.y)) {
        player.score = player.score + 25;
        gem.Update = true;
        gem.init = false;
        // get the coordinates out of scoring range
        gem.x = 0;
        gem.y = 0;
    }
}


