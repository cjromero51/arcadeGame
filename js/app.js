// Enemies our player must avoid
let allEnemies = [];
var Enemy = function() {
  const yArray = [60, 145, 230];
  this.sprite = 'images/enemy-bug.png';
  this.x = -101;
  this.y = yArray[Math.floor(Math.random() * yArray.length)];
  allEnemies.push(this);

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  if (this.x < 505) {
    this.x += 2;
    return this.x*dt;
  } else {
    const yArray = [60, 145, 230];
    this.y = yArray[Math.floor(Math.random() * yArray.length)];
    this.x = -101;
  }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor() {
    this.x = 202;
    this.y = 315;
    this.charImage = 'images/char-boy.png'
    this.update = function() {

    };
    this.render = function() {
      ctx.drawImage(Resources.get(this.charImage), this.x, this.y);
    };
    this.handleInput = function() {
    };
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let enemy = new Enemy();
let enemyOne = setTimeout(function() {new Enemy()}, 1000);
let enemyTwo = setTimeout(function() {new Enemy()}, 5000);
let enemyFour = setTimeout(function() {new Enemy()}, 13000);
let enemyFive = setTimeout(function() {new Enemy()}, 3000);
let enemySix = setTimeout(function() {new Enemy()}, 7000);
let enemyEight = setTimeout(function() {new Enemy()}, 15000);
let player = new Player();

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
