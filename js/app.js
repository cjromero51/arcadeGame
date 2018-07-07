// Enemies our player must avoid
let allEnemies = [];
var Enemy = function() {

    this.movementRate = function() {
      max = 3
      min = 1
      rate = Math.random() * (max - min) + 1;
      return Math.round(rate);
    };
    this.sprite = 'images/enemy-bug.png';
    allEnemies.push(this);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  // set y
  this.y = function yEnemy() {
    max = 4
    min = 2
    result = ((Math.round(Math.random() * (max - min + 1)) + min) * 101);
    return result;
  };
  // set x
  this.x = function movement() {
    var position = 0;
    var id = setInterval(xEnemy, ((Math.round(Math.random() * (max - min + 1)) + min) * 83));
      function xEnemy() {
        if (position == 505) {
          clearInterval(id);
          this.style.display = 'none';
        } else {
          position++;
          this.style.left = position + 'px';
        }
      }
    }
    canvas.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor() {
    this.charImage = 'images/char-boy.png'
    this.update = function() {

    };
    this.render = function() {
      //figure out how to render the player in one square
      // ctx.drawImage(Resources.get('images/char-boy.png', col * 101, row * 83));
    };
    this.handleInput = function() {

    };
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let enemy = new Enemy();
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
window.setInterval(enemy.render(), 5000)
// window.setInterval(enemy, 2000);
// const canvas = document.getElementById('canvas');
