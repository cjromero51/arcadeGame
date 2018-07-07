// Enemies our player must avoid
let allEnemies = [];
var Enemy = function() {
  // set y

    this.sprite = 'images/enemy-bug.png';
    allEnemies.push(this);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // set x
  xPosUpdate = function movement() {
    var position = 0;
    var id = setInterval(xEnemy, ((Math.round(Math.random() * (max - min + 1)) + min) * 40));
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
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    var yArray = [60, 145, 230];
    // yStart = function() {
    //   yArray[Math.floor(Math.random() * yArray.length)];
    // }
    this.sprite = 'images/enemy-bug.png';
    this.y = 60;
    this.x = -100;
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
      this.x = 202;
      this.y = 315;
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
